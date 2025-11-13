// import { create } from "zustand";
// import { User } from "@/types";

// interface AuthState {
//   user: User | null;
//   token: string | null;
//   isAuthenticated: boolean;
//   login: (userData: { user: User; token: string }) => void;
//   logout: () => void;
//   updateUser: (userData: Partial<User>) => void;
// }

// export const useAuthStore = create<AuthState>((set) => {
//   // Safely parse user from localStorage with error handling
//   const userStr = localStorage.getItem("user");
//   let user: User | null = null;
//   if (userStr && userStr !== "null" && userStr !== "undefined") {
//     try {
//       user = JSON.parse(userStr);
//     } catch (error) {
//       // If parsing fails (e.g., invalid JSON like "undefined"), clear the invalid entry
//       console.warn("Invalid user data in localStorage, clearing it:", error);
//       localStorage.removeItem("user");
//       user = null;
//     }
//   }

//   const token = localStorage.getItem("token");
//   const isAuthenticated = !!token;

//   return {
//     user,
//     token,
//     isAuthenticated,

//     login: (userData) => {
//       localStorage.setItem("token", userData.token);
//       localStorage.setItem("user", JSON.stringify(userData.user));
//       set({
//         user: userData.user,
//         token: userData.token,
//         isAuthenticated: true,
//       });
//     },

//     logout: () => {
//       localStorage.removeItem("token");
//       localStorage.removeItem("user");
//       set({ user: null, token: null, isAuthenticated: false });
//     },

//     updateUser: (userData) => {
//       set((state) => {
//         if (!state.user) return state;
//         const updatedUser = { ...state.user, ...userData };
//         localStorage.setItem("user", JSON.stringify(updatedUser));
//         return { user: updatedUser };
//       });
//     },
//   };
// });

// src/stores/authStore.ts (Fixed: Clear invalid tokens on init; added post-login log)
import { create } from "zustand";
import { User } from "@/types";

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (userData: { user: User; token: string }) => void;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
}

export const useAuthStore = create<AuthState>((set, get) => {
  // Enhanced init: Clear invalid token/user
  const clearInvalidStorage = () => {
    const tokenStr = localStorage.getItem("token");
    if (tokenStr === "undefined" || tokenStr === "null" || !tokenStr?.trim()) {
      localStorage.removeItem("token");
      console.log("Cleared invalid token from localStorage");
    }
    const userStr = localStorage.getItem("user");
    if (userStr === "undefined" || userStr === "null" || !userStr?.trim()) {
      localStorage.removeItem("user");
      console.log("Cleared invalid user from localStorage");
    }
  };

  clearInvalidStorage();

  let user: User | null = null;
  const userStr = localStorage.getItem("user");
  if (userStr) {
    try {
      user = JSON.parse(userStr);
    } catch (error) {
      console.warn("Invalid user JSON in localStorage, clearing:", error);
      localStorage.removeItem("user");
    }
  }

  let token: string | null = localStorage.getItem("token") || null;

  const isAuthenticated = !!token;

  console.log(
    "Store init - token loaded:",
    !!token,
    "user:",
    user?.name || null
  ); // Debug init

  return {
    user,
    token,
    isAuthenticated,

    login: (userData) => {
      const { user, token } = userData;
      if (!token || !user) {
        console.warn("Invalid login data - skipping");
        return;
      }
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      set({
        user,
        token,
        isAuthenticated: true,
      });
      // Debug: Confirm after set
      console.log(
        "Store login complete - storage token:",
        !!localStorage.getItem("token")
      );
    },

    logout: () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      set({ user: null, token: null, isAuthenticated: false });
    },

    updateUser: (userData) => {
      set((state) => {
        if (!state.user) return state;
        const updatedUser = { ...state.user, ...userData };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        return { user: updatedUser };
      });
    },
  };
});
