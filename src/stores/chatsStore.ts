// // // // import { create } from "zustand";
// // // // import { getChats, sendMessage, initiateChat } from "@/lib/api"; // Real API
// // // // import { Chat } from "@/types";
// // // // import { toast } from "sonner";

// // // // interface ChatsState {
// // // //   chats: Chat[];
// // // //   loading: boolean;
// // // //   fetchChats: () => Promise<void>;
// // // //   sendMessage: (chatId: string, text: string) => Promise<void>;
// // // //   createChat: (
// // // //     otherUserId: string,
// // // //     initialMessage?: string
// // // //   ) => Promise<string | null>;
// // // // }

// // // // export const useChatsStore = create<ChatsState>((set, get) => ({
// // // //   chats: [],
// // // //   loading: false,

// // // //   fetchChats: async () => {
// // // //     set({ loading: true });
// // // //     try {
// // // //       const response = await getChats();
// // // //       console.log("Chats response:", response.data); // Debug
// // // //       if (response.data) {
// // // //         set({ chats: response.data || [] });
// // // //       }
// // // //     } catch (error: any) {
// // // //       console.error("Fetch chats error:", error);
// // // //       toast.error(error.response?.data?.msg || "Failed to fetch chats");
// // // //     } finally {
// // // //       set({ loading: false });
// // // //     }
// // // //   },

// // // //   sendMessage: async (chatId, text) => {
// // // //     try {
// // // //       const response = await sendMessage(chatId, { text });
// // // //       if (response.data) {
// // // //         // Assume success
// // // //         await get().fetchChats(); // Refetch to update messages
// // // //       } else {
// // // //         toast.error("Failed to send message");
// // // //       }
// // // //     } catch (error: any) {
// // // //       toast.error(error.response?.data?.msg || "Failed to send message");
// // // //     }
// // // //   },

// // // //   createChat: async (otherUserId, initialMessage) => {
// // // //     try {
// // // //       const response = await initiateChat({ otherUserId, initialMessage });
// // // //       if (response.data) {
// // // //         // Assume success
// // // //         await get().fetchChats();
// // // //         return response.data._id; // Return chat ID
// // // //       } else {
// // // //         toast.error("Failed to create chat");
// // // //         return null;
// // // //       }
// // // //     } catch (error: any) {
// // // //       toast.error(error.response?.data?.msg || "Failed to create chat");
// // // //       return null;
// // // //     }
// // // //   },
// // // // }));

// // // // Updated useChatsStore (Fix toast error handling to check both 'message' and 'msg' for backend consistency)
// // // import { create } from "zustand";
// // // import { getChats, sendMessage, initiateChat } from "@/lib/api"; // Real API
// // // import { Chat } from "@/types";
// // // import { toast } from "sonner";

// // // interface ChatsState {
// // //   chats: Chat[];
// // //   loading: boolean;
// // //   fetchChats: () => Promise<void>;
// // //   sendMessage: (chatId: string, text: string) => Promise<void>;
// // //   createChat: (
// // //     otherUserId: string,
// // //     initialMessage?: string
// // //   ) => Promise<string | null>;
// // // }

// // // export const useChatsStore = create<ChatsState>((set, get) => ({
// // //   chats: [],
// // //   loading: false,

// // //   fetchChats: async () => {
// // //     set({ loading: true });
// // //     try {
// // //       const response = await getChats();
// // //       console.log("Chats response:", response.data); // Debug
// // //       if (response.data) {
// // //         set({ chats: response.data || [] });
// // //       }
// // //     } catch (error: any) {
// // //       console.error("Fetch chats error:", error);
// // //       const errorMsg =
// // //         error.response?.data?.message ||
// // //         error.response?.data?.msg ||
// // //         "Failed to fetch chats";
// // //       toast.error(errorMsg);
// // //     } finally {
// // //       set({ loading: false });
// // //     }
// // //   },

// // //   sendMessage: async (chatId, text) => {
// // //     try {
// // //       const response = await sendMessage(chatId, { text });
// // //       if (response.data) {
// // //         // Assume success
// // //         await get().fetchChats(); // Refetch to update messages
// // //       } else {
// // //         toast.error("Failed to send message");
// // //       }
// // //     } catch (error: any) {
// // //       const errorMsg =
// // //         error.response?.data?.message ||
// // //         error.response?.data?.msg ||
// // //         "Failed to send message";
// // //       toast.error(errorMsg);
// // //     }
// // //   },

// // //   createChat: async (otherUserId, initialMessage) => {
// // //     try {
// // //       const response = await initiateChat({ otherUserId, initialMessage });
// // //       if (response.data) {
// // //         // Assume success
// // //         await get().fetchChats();
// // //         return response.data._id; // Return chat ID
// // //       } else {
// // //         toast.error("Failed to create chat");
// // //         return null;
// // //       }
// // //     } catch (error: any) {
// // //       const errorMsg =
// // //         error.response?.data?.message ||
// // //         error.response?.data?.msg ||
// // //         "Failed to create chat";
// // //       toast.error(errorMsg);
// // //       return null;
// // //     }
// // //   },
// // // }));

// // // src/stores/chatsStore.ts (Fixed: Removed invalid hook call inside store creator; connectSocket now uses localStorage token directly)
// // import { create } from "zustand";
// // import { subscribeWithSelector } from "zustand/middleware";
// // import io, { Socket } from "socket.io-client";
// // import {
// //   initiateChat,
// //   getChats,
// //   sendMessage as apiSendMessage,
// // } from "@/lib/api";
// // import { Chat } from "@/types";

// // interface ChatsState {
// //   chats: Chat[];
// //   loading: boolean;
// //   socket: Socket | null;
// //   fetchChats: () => Promise<void>;
// //   sendMessage: (chatId: string, text: string) => Promise<void>;
// //   createChat: (
// //     otherUserId: string,
// //     initialMessage?: string
// //   ) => Promise<string | null>;
// //   connectSocket: () => void;
// //   disconnectSocket: () => void;
// // }

// // export const useChatsStore = create<ChatsState>()(
// //   subscribeWithSelector((set, get) => ({
// //     chats: [],
// //     loading: false,
// //     socket: null,

// //     fetchChats: async () => {
// //       set({ loading: true });
// //       try {
// //         const response = await getChats();
// //         set({ chats: response.data || [] });
// //       } catch (error) {
// //         console.error("Failed to fetch chats:", error);
// //       } finally {
// //         set({ loading: false });
// //       }
// //     },

// //     sendMessage: async (chatId: string, text: string) => {
// //       const { socket } = get();
// //       if (!socket?.connected) {
// //         // Fallback to HTTP if socket down
// //         return apiSendMessage(chatId, { text });
// //       }

// //       // Emit via socket for real-time
// //       socket.emit("sendMessage", { chatId, text });
// //     },

// //     createChat: async (otherUserId: string, initialMessage?: string) => {
// //       try {
// //         const response = await initiateChat({ otherUserId, initialMessage });
// //         const newChat = response.data;
// //         set((state) => ({ chats: [...state.chats, newChat] }));
// //         return newChat._id;
// //       } catch (error) {
// //         console.error("Failed to create chat:", error);
// //         return null;
// //       }
// //     },

// //     connectSocket: () => {
// //       const token = localStorage.getItem("token"); // FIXED: Get token directly from localStorage (no hook)
// //       if (!token) {
// //         console.warn("No token—cannot connect socket");
// //         return;
// //       }

// //       const socket = io(
// //         import.meta.env.VITE_API_URL || "http://localhost:5000",
// //         {
// //           auth: { token }, // Send token for auth
// //         }
// //       );

// //       socket.on("connect", () => {
// //         console.log("Socket connected:", socket.id);
// //       });

// //       socket.on("joined", (data) => {
// //         console.log("Joined chat:", data.chatId);
// //       });

// //       socket.on("newMessage", (messageData) => {
// //         set((state) => ({
// //           chats: state.chats.map((chat) =>
// //             chat._id === messageData.chatId
// //               ? {
// //                   ...chat,
// //                   messages: [...chat.messages, messageData],
// //                   updatedAt: new Date(),
// //                 }
// //               : chat
// //           ),
// //         }));
// //       });

// //       socket.on("messageSent", (messageData) => {
// //         set((state) => ({
// //           chats: state.chats.map((chat) =>
// //             chat._id === messageData.chatId
// //               ? {
// //                   ...chat,
// //                   messages: [...chat.messages, messageData],
// //                   updatedAt: new Date(),
// //                 }
// //               : chat
// //           ),
// //         }));
// //       });

// //       socket.on("error", (err) => {
// //         console.error("Socket error:", err.msg);
// //       });

// //       socket.on("disconnect", () => {
// //         console.log("Socket disconnected");
// //       });

// //       set({ socket });
// //     },

// //     disconnectSocket: () => {
// //       const { socket } = get();
// //       if (socket) {
// //         socket.disconnect();
// //         set({ socket: null });
// //       }
// //     },
// //   }))
// // );

// // src/stores/chatsStore.ts (Updated: Added optimistic updates in sendMessage; integrated join/leave actions; improved error handling and logging for real-time debugging)
// import { create } from "zustand";
// import { subscribeWithSelector } from "zustand/middleware";
// import io, { Socket } from "socket.io-client";
// import {
//   initiateChat,
//   getChats,
//   sendMessage as apiSendMessage,
// } from "@/lib/api";
// import { Chat, Message } from "@/types";

// interface ChatsState {
//   chats: Chat[];
//   loading: boolean;
//   socket: Socket | null;
//   fetchChats: () => Promise<void>;
//   sendMessage: (chatId: string, text: string) => Promise<void>;
//   createChat: (
//     otherUserId: string,
//     initialMessage?: string
//   ) => Promise<string | null>;
//   joinChat: (chatId: string) => void;
//   leaveChat: (chatId: string) => void;
//   connectSocket: () => void;
//   disconnectSocket: () => void;
// }

// export const useChatsStore = create<ChatsState>()(
//   subscribeWithSelector((set, get) => ({
//     chats: [],
//     loading: false,
//     socket: null,

//     fetchChats: async () => {
//       set({ loading: true });
//       try {
//         const response = await getChats();
//         set({ chats: response.data || [] });
//       } catch (error) {
//         console.error("Failed to fetch chats:", error);
//       } finally {
//         set({ loading: false });
//       }
//     },

//     sendMessage: async (chatId: string, text: string) => {
//       const { socket } = get();
//       const trimmedText = text.trim();
//       if (!trimmedText) return;

//       // Optimistic update: Add temp message immediately
//       const optimisticId = `temp-${Date.now()}`;
//       const optimisticMessage: Message = {
//         _id: optimisticId,
//         text: trimmedText,
//         sender: { _id: localStorage.getItem("userId") || "", name: "" }, // Use stored user ID/name
//         timestamp: new Date(),
//       };
//       set((state) => ({
//         chats: state.chats.map((chat) =>
//           chat._id === chatId
//             ? {
//                 ...chat,
//                 messages: [...chat.messages, optimisticMessage],
//                 updatedAt: new Date(),
//               }
//             : chat
//         ),
//       }));

//       if (socket?.connected) {
//         // Primary: Emit via socket for real-time
//         console.log("Emitting sendMessage via socket for chat:", chatId); // Debug
//         socket.emit("sendMessage", { chatId, text: trimmedText });
//       } else {
//         // Fallback to HTTP if socket down
//         console.warn(
//           "Socket not connected; falling back to HTTP for chat:",
//           chatId
//         ); // Debug
//         try {
//           await apiSendMessage(chatId, { text: trimmedText });
//           // Refresh chats after HTTP to sync (not ideal, but fallback)
//           await get().fetchChats();
//         } catch (error) {
//           console.error("HTTP fallback failed:", error);
//           // Revert optimistic on error
//           set((state) => ({
//             chats: state.chats.map((chat) =>
//               chat._id === chatId
//                 ? {
//                     ...chat,
//                     messages: chat.messages.filter(
//                       (m) => m._id !== optimisticId
//                     ),
//                   }
//                 : chat
//             ),
//           }));
//           throw error; // Re-throw for UI handling
//         }
//       }
//     },

//     createChat: async (otherUserId: string, initialMessage?: string) => {
//       try {
//         const response = await initiateChat({ otherUserId, initialMessage });
//         const newChat = response.data;
//         set((state) => ({ chats: [...state.chats, newChat] }));
//         return newChat._id;
//       } catch (error) {
//         console.error("Failed to create chat:", error);
//         return null;
//       }
//     },

//     joinChat: (chatId: string) => {
//       const { socket } = get();
//       if (socket?.connected) {
//         socket.emit("joinChat", chatId);
//         console.log("Emitted joinChat:", chatId); // Debug
//       }
//     },

//     leaveChat: (chatId: string) => {
//       const { socket } = get();
//       if (socket?.connected) {
//         socket.emit("leaveChat", chatId);
//         console.log("Emitted leaveChat:", chatId); // Debug
//       }
//     },

//     connectSocket: () => {
//       const token = localStorage.getItem("token");
//       const userId = localStorage.getItem("userId"); // Assume you store user ID
//       if (!token || !userId) {
//         console.warn("No token/userId—cannot connect socket");
//         return;
//       }

//       // Disconnect existing if any
//       get().disconnectSocket();

//       const socket = io(
//         import.meta.env.VITE_API_URL || "http://localhost:5000",
//         {
//           auth: { token }, // Send token for auth
//           transports: ["websocket", "polling"], // Fallback to polling if WS fails
//         }
//       );

//       // Connection listeners
//       socket.on("connect", () => {
//         console.log("Socket connected:", socket.id);
//       });

//       socket.on("connect_error", (err) => {
//         console.error("Socket connect error:", err.message);
//       });

//       // Chat listeners
//       socket.on("joined", (data) => {
//         console.log("Joined chat:", data.chatId);
//       });

//       socket.on("newMessage", (messageData: Message & { chatId: string }) => {
//         console.log("Received newMessage:", messageData); // Debug
//         // Remove optimistic if exists, add real
//         set((state) => ({
//           chats: state.chats.map((chat) => {
//             if (chat._id === messageData.chatId) {
//               const updatedMessages = chat.messages.filter(
//                 (m) => !m._id?.startsWith("temp-")
//               );
//               updatedMessages.push(messageData);
//               return {
//                 ...chat,
//                 messages: updatedMessages,
//                 updatedAt: new Date(),
//               };
//             }
//             return chat;
//           }),
//         }));
//       });

//       socket.on("messageSent", (messageData: Message & { chatId: string }) => {
//         // For sender confirmation (if backend emits separately)
//         console.log("Received messageSent:", messageData); // Debug
//         set((state) => ({
//           chats: state.chats.map((chat) =>
//             chat._id === messageData.chatId
//               ? {
//                   ...chat,
//                   messages: chat.messages.map((m) =>
//                     m._id === `temp-${messageData.timestamp?.getTime()}`
//                       ? messageData
//                       : m
//                   ),
//                   updatedAt: new Date(),
//                 }
//               : chat
//           ),
//         }));
//       });

//       socket.on("error", (err: { msg: string }) => {
//         console.error("Socket error:", err.msg);
//         toast.error(err.msg);
//       });

//       socket.on("disconnect", () => {
//         console.log("Socket disconnected");
//       });

//       set({ socket });
//     },

//     disconnectSocket: () => {
//       const { socket } = get();
//       if (socket) {
//         socket.disconnect();
//         set({ socket: null });
//       }
//     },
//   }))
// );

import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import io, { Socket } from "socket.io-client";
import { v4 as uuidv4 } from "uuid";
import {
  initiateChat,
  getChats,
  sendMessage as apiSendMessage,
} from "@/lib/api";
import { useAuthStore } from "./authStore";
import { Chat, Message } from "@/types";

interface ChatsState {
  chats: Chat[];
  loading: boolean;
  socket: Socket | null;
  fetchChats: () => Promise<void>;
  sendMessage: (chatId: string, text: string) => Promise<void>;
  createChat: (
    otherUserId: string,
    initialMessage?: string
  ) => Promise<string | null>;
  joinChat: (chatId: string) => void;
  leaveChat: (chatId: string) => void;
  connectSocket: () => void;
  disconnectSocket: () => void;
}

export const useChatsStore = create<ChatsState>()(
  subscribeWithSelector((set, get) => ({
    chats: [],
    loading: false,
    socket: null,

    fetchChats: async () => {
      set({ loading: true });
      try {
        const response = await getChats();
        console.log("Fetched chats response:", response.data);
        const fetchedChats = response.data.chats || []; // Extract array!
        console.log("Setting chats array:", fetchedChats); // Debug: Confirm array
        set({ chats: fetchedChats });
      } catch (error: any) {
        console.error(
          "Failed to fetch chats:",
          error.response ? error.response.data : error.message
        );
      } finally {
        set({ loading: false });
      }
    },

    sendMessage: async (chatId: string, text: string) => {
      const { socket } = get();
      const trimmedText = text.trim();
      if (!trimmedText) return;

      const user = useAuthStore.getState().user;
      if (!user?._id) {
        // Use _id
        console.error("Cannot send message: No user in authStore");
        return;
      }

      // Optimistic update with UUID
      const clientId = uuidv4();
      const optimisticMessage: Message = {
        _id: `temp-${clientId}`, // Use _id for consistency
        text: trimmedText,
        sender: { _id: user._id, name: user.name || "" }, // Use _id
        timestamp: new Date(),
      };
      set((state) => ({
        chats: state.chats.map((chat) =>
          chat._id === chatId // Assume chat._id
            ? {
                ...chat,
                messages: [...chat.messages, optimisticMessage],
                updatedAt: new Date(),
              }
            : chat
        ),
      }));

      if (socket?.connected) {
        console.log("Emitting sendMessage via socket for chat:", chatId);
        socket.emit("sendMessage", { chatId, text: trimmedText, clientId });
      } else {
        console.warn(
          "Socket not connected; falling back to HTTP for chat:",
          chatId
        );
        try {
          await apiSendMessage(chatId, { text: trimmedText });
          await get().fetchChats(); // Sync after HTTP
        } catch (error) {
          console.error("HTTP fallback failed:", error);
          // Revert optimistic on error
          set((state) => ({
            chats: state.chats.map((chat) =>
              chat._id === chatId
                ? {
                    ...chat,
                    messages: chat.messages.filter(
                      (m) => m._id !== `temp-${clientId}`
                    ),
                  }
                : chat
            ),
          }));
          throw error;
        }
      }
    },

    createChat: async (otherUserId: string, initialMessage?: string) => {
      try {
        const response = await initiateChat({ otherUserId, initialMessage });
        const newChat = response.data;
        set((state) => ({ chats: [...state.chats, newChat] }));
        return newChat._id; // Use _id
      } catch (error) {
        console.error("Failed to create chat:", error);
        return null;
      }
    },

    joinChat: (chatId: string) => {
      const { socket } = get();
      if (socket?.connected) {
        socket.emit("joinChat", chatId);
        console.log("Emitted joinChat:", chatId);
      }
    },

    leaveChat: (chatId: string) => {
      const { socket } = get();
      if (socket?.connected) {
        socket.emit("leaveChat", chatId);
        console.log("Emitted leaveChat:", chatId);
      }
    },

    connectSocket: () => {
      const token = localStorage.getItem("token");
      const user = useAuthStore.getState().user;
      console.log("Auth user in connectSocket:", user);

      if (!token || !user?._id) {
        // Use _id
        console.warn("No token or user—cannot connect socket");
        return;
      }

      // Disconnect existing if any
      get().disconnectSocket();

      const socket = io(
        import.meta.env.VITE_API_URL || "http://localhost:5000",
        {
          auth: { token },
          transports: ["websocket", "polling"],
        }
      );

      socket.on("connect", () => {
        console.log("Socket connected:", socket.id);
      });

      socket.on("connect_error", (err) => {
        console.error("Socket connect error:", err.message);
      });

      socket.on("joined", (data) => {
        console.log("Joined chat:", data.chatId);
      });

      socket.on(
        "newMessage",
        (messageData: Message & { chatId: string; clientId?: string }) => {
          console.log("Received newMessage:", messageData);
          set((state) => ({
            chats: state.chats.map((chat) => {
              if (chat._id === messageData.chatId) {
                // Use _id
                const updatedMessages = chat.messages.filter(
                  (m) => !m._id?.startsWith("temp-")
                );
                updatedMessages.push(messageData);
                return {
                  ...chat,
                  messages: updatedMessages,
                  updatedAt: new Date(),
                };
              }
              return chat;
            }),
          }));
        }
      );

      socket.on(
        "messageSent",
        (messageData: Message & { chatId: string; clientId?: string }) => {
          console.log("Received messageSent:", messageData);
          if (messageData.clientId) {
            set((state) => ({
              chats: state.chats.map((chat) =>
                chat._id === messageData.chatId
                  ? {
                      ...chat,
                      messages: chat.messages.map((m) =>
                        m._id === `temp-${messageData.clientId}`
                          ? messageData
                          : m
                      ),
                      updatedAt: new Date(),
                    }
                  : chat
              ),
            }));
          }
        }
      );

      socket.on("error", (err: { msg: string }) => {
        console.error("Socket error:", err.msg);
      });

      socket.on("disconnect", () => {
        console.log("Socket disconnected");
      });

      set({ socket });
    },

    disconnectSocket: () => {
      const { socket } = get();
      if (socket) {
        socket.disconnect();
        set({ socket: null });
      }
    },
  }))
);
