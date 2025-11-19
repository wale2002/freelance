import axios, { AxiosResponse } from "axios";

// Base configuration
// const API_BASE_URL =
//   import.meta.env.VITE_API_URL || "http://localhost:3000/api";
const API_BASE_URL = "https://freelancebackend-u3u2.onrender.com/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Clear invalid tokens on init
const token = localStorage.getItem("token");
if (token === "undefined" || !token?.trim()) {
  localStorage.removeItem("token");
}

// Request interceptor: Add auth token if available (safe for public endpoints)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token && token !== "undefined" && token.trim()) {
    config.headers.Authorization = `Bearer ${token}`;
    if (!config.url?.includes("/auth/") && !config.url?.includes("/projects")) {
      // Skip log for public
      console.log("Token added to request:", token.substring(0, 20) + "...");
    }
  } else if (
    !config.url?.includes("/auth/") &&
    !config.url?.includes("/projects")
  ) {
    // Log only for protected
    console.log("No valid token for protected request to:", config.url);
  }
  return config;
});

// Response interceptor: Handle errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      console.log("401 - Cleared invalid token");
    }
    return Promise.reject(error);
  }
);

// ==================== AUTH ENDPOINTS ====================
// POST /api/auth/register
export const registerUser = async (userData: {
  name: string;
  email: string;
  password: string;
  role?: "client" | "freelancer" | "admin";
}): Promise<
  AxiosResponse<{
    success: boolean;
    data: {
      token: string;
      user: { id: string; name: string; email: string; role: string };
    };
  }>
> => {
  return api.post("/auth/register", userData);
};

// POST /api/auth/login
export const loginUser = async (credentials: {
  email: string;
  password: string;
}): Promise<
  AxiosResponse<{
    success: boolean;
    data: {
      token: string;
      user: { id: string; name: string; email: string; role: string };
    };
  }>
> => {
  return api.post("/auth/login", credentials);
};

// ==================== USER ENDPOINTS ====================
// GET /api/users/profile (requires auth)
export const getProfile = async (): Promise<
  AxiosResponse<{ success: boolean; data: any }>
> => {
  return api.get("/users/profile");
};
export const getUserProfile = async (
  userId: string
): Promise<AxiosResponse<{ success: boolean; data: any }>> => {
  return api.get(`/users/${userId}/profile`);
};

// PUT /api/users/profile (requires auth)
export const updateProfile = async (updates: {
  skills?: string[];
  experience?: string;
  portfolioWebsite?: string;
  linkedinProfile?: string;
  githubProfile?: string;
  bio?: string;
  location?: string;
  hourlyRate?: number;
  profileImage?: string;
  pastExperiences?: any[];
}): Promise<AxiosResponse<{ success: boolean; data: any }>> => {
  return api.put("/users/profile", updates);
};

// POST /api/users/portfolio (requires auth, multipart/form-data for files)
export const uploadPortfolio = async (
  formData: FormData
): Promise<
  AxiosResponse<{
    success: boolean;
    data: { portfolioId: string; images: string[]; files: string[] };
  }>
> => {
  return api.post("/users/portfolio", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

// DELETE /api/users/portfolio/:id (requires auth)
export const deletePortfolio = async (
  itemId: string
): Promise<AxiosResponse<{ success: boolean; message: string }>> => {
  return api.delete(`/users/portfolio/${itemId}`);
};

// ==================== PROJECT ENDPOINTS ====================
// POST /api/projects (requires auth, client role)
export const createProject = async (projectData: {
  title: string;
  description: string;
  skills: string[];
  budget: number;
  // Add other fields as needed
}): Promise<AxiosResponse<any>> => {
  return api.post("/projects", projectData);
};

// GET /api/projects (public, with pagination)
export const getProjects = async (params?: {
  page?: number;
  limit?: number;
}): Promise<
  AxiosResponse<{ projects: any[]; total: number; page: number; limit: number }>
> => {
  return api.get("/projects", { params });
};

// POST /api/projects/:projectId/bid (requires auth, freelancer role)
export const bidOnProject = async (
  projectId: string,
  bidData: {
    amount: number;
    proposal: string;
  }
): Promise<AxiosResponse<any>> => {
  return api.post(`/projects/${projectId}/bid`, bidData);
};

// ==================== MATCH ENDPOINTS ====================
// GET /api/matches/:projectId (requires auth, client role)
export const getMatches = async (
  projectId: string
): Promise<
  AxiosResponse<{
    success: boolean;
    data: { projectId: string; matches: any[]; totalMatches: number };
  }>
> => {
  return api.get(`/matches/${projectId}`);
};

// ==================== CHAT ENDPOINTS ====================
// POST /api/chats (requires auth) - Initiate chat
export const initiateChat = async (chatData: {
  otherUserId: string;
  initialMessage?: string;
}): Promise<AxiosResponse<any>> => {
  return api.post("/chats", chatData);
};

// GET /api/chats (requires auth)
export const getChats = async (): Promise<AxiosResponse<any[]>> => {
  return api.get("/chats");
};

// POST /api/chats/:chatId/messages (requires auth)
export const sendMessage = async (
  chatId: string,
  messageData: {
    text: string;
  }
): Promise<AxiosResponse<{ message: any }>> => {
  return api.post(`/chats/${chatId}/messages`, messageData);
};

// ==================== PROPOSAL/AI ENDPOINTS ====================
// GET /api/proposals/greeting (public, optional auth)
export const generateGreeting = async (
  userName?: string
): Promise<
  AxiosResponse<{
    success: boolean;
    data: { greeting: string; suggestedNextStep: string };
  }>
> => {
  const params = userName ? { userName } : {};
  return api.get("/proposals/greeting", { params });
};

// GET /api/proposals/:projectId (requires auth, freelancer role)
export const generateAIProposal = async (
  projectId: string
): Promise<
  AxiosResponse<{
    success: boolean;
    data: {
      projectTitle: string;
      projectStatus: string;
      proposal: string;
      suggestedNextStep: string;
    };
  }>
> => {
  return api.get(`/proposals/${projectId}`);
};

// POST /api/proposals/chat (public, optional auth)
export const generateAIChatResponse = async (chatData: {
  message: string;
  history?: { role: "user" | "assistant"; content: string }[];
  userName?: string;
}): Promise<
  AxiosResponse<{
    success: boolean;
    data: { response: string; suggestedNextStep: string };
  }>
> => {
  return api.post("/proposals/chat", chatData);
};
export const getProject = async (
  id: string
): Promise<AxiosResponse<{ success: boolean; data: any }>> => {
  return api.get(`/projects/${id}`);
};
// NEW: External Jobs API
export const fetchExternalJobs = async (
  page: number = 1,
  limit: number = 10,
  searchTag: string = "dev"
) => {
  const params = { page, limit, query: searchTag };
  const response = await api.post("/projects/import-external", params);
  return response.data;
};

// FIXED: Use POST for all external jobs fetch
export const fetchAllExternalJobs = async (searchTag: string = "dev") => {
  const params = { limit: 50, query: searchTag };
  const response = await api.post("/projects/import-external", params);
  return response.data.projects || [];
};
// ==================== UTILITY FUNCTIONS ====================
// Helper to set token after login/register
export const setAuthToken = (token: string): void => {
  if (token && token !== "undefined" && token.trim()) {
    localStorage.setItem("token", token);
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    console.log("Token set successfully");
  } else {
    console.warn("Invalid token provided - not setting");
  }
};

// Helper to clear token on logout
export const clearAuthToken = (): void => {
  localStorage.removeItem("token");
  delete api.defaults.headers.common["Authorization"];
};

// Default export for direct usage (e.g., api.get('/some/other'))
export default api;
