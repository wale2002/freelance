// // // // import { useEffect, useState } from "react";
// // // // import { useParams, useNavigate } from "react-router-dom";
// // // // import { useChatsStore } from "@/stores/chatsStore";
// // // // import { useAuthStore } from "@/stores/authStore";
// // // // import { Header } from "@/components/Header";
// // // // import { Sidebar } from "@/components/Sidebar";
// // // // import { ChatWindow } from "@/components/ChatWindow";
// // // // import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// // // // import { ScrollArea } from "@/components/ui/scroll-area";
// // // // import { MessageSquare } from "lucide-react";
// // // // import { cn } from "@/lib/utils";
// // // // import { format } from "date-fns";

// // // // export default function ChatsPage() {
// // // //   const { chatId } = useParams();
// // // //   const navigate = useNavigate();
// // // //   const { user } = useAuthStore();
// // // //   const { chats, fetchChats, loading, connectSocket, socket } = useChatsStore();
// // // //   const [selectedChatId, setSelectedChatId] = useState(chatId || "");

// // // //   useEffect(() => {
// // // //     fetchChats();
// // // //     connectSocket();

// // // //     return () => {
// // // //       useChatsStore.getState().disconnectSocket();
// // // //     };
// // // //   }, [fetchChats, connectSocket]);

// // // //   useEffect(() => {
// // // //     if (chatId && chatId !== selectedChatId) {
// // // //       setSelectedChatId(chatId);
// // // //       if (socket) {
// // // //         socket.emit("joinChat", chatId);
// // // //       }
// // // //     }
// // // //   }, [chatId, socket, selectedChatId]);

// // // //   const handleSelectChat = (chatId: string) => {
// // // //     setSelectedChatId(chatId);
// // // //     if (socket && selectedChatId) {
// // // //       socket.emit("leaveChat", selectedChatId);
// // // //     }
// // // //     if (socket) {
// // // //       socket.emit("joinChat", chatId);
// // // //     }
// // // //     navigate(`/chats/${chatId}`);
// // // //   };

// // // //   const selectedChat = selectedChatId
// // // //     ? chats.find((c) => c._id === selectedChatId) // Use _id
// // // //     : null;

// // // //   if (loading && chats.length === 0) {
// // // //     return (
// // // //       <div className="min-h-screen flex flex-col">
// // // //         <Header />
// // // //         <div className="flex flex-1 items-center justify-center">
// // // //           <p>Loading chats...</p>
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div className="min-h-screen flex flex-col">
// // // //       <Header />
// // // //       <div className="flex flex-1">
// // // //         <Sidebar />
// // // //         <main className="flex-1 flex overflow-hidden">
// // // //           <div className="w-80 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
// // // //             <div className="p-4 border-b">
// // // //               <h2 className="font-semibold text-lg">Messages</h2>
// // // //             </div>
// // // //             <ScrollArea className="h-[calc(100vh-8rem)]">
// // // //               {chats.length > 0 ? (
// // // //                 <div className="p-2 space-y-2">
// // // //                   {chats.map((chat) => {
// // // //                     const otherParticipant = chat.participants.find(
// // // //                       (p) => p._id !== user?._id // Use _id for both
// // // //                     );
// // // //                     return (
// // // //                       <div
// // // //                         key={chat._id} // Use _id
// // // //                         onClick={() => handleSelectChat(chat._id)}
// // // //                         className={cn(
// // // //                           "flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors cursor-pointer",
// // // //                           selectedChatId === chat._id && "bg-muted"
// // // //                         )}
// // // //                       >
// // // //                         <Avatar className="w-10 h-10">
// // // //                           <AvatarImage src={otherParticipant?.profileImage} />
// // // //                           <AvatarFallback className="bg-primary text-primary-foreground">
// // // //                             {otherParticipant?.name.charAt(0).toUpperCase()}
// // // //                           </AvatarFallback>
// // // //                         </Avatar>
// // // //                         <div className="flex-1 min-w-0">
// // // //                           <p className="font-medium truncate">
// // // //                             {otherParticipant?.name || "Unknown User"}
// // // //                           </p>
// // // //                           {chat.messages && chat.messages.length > 0 && (
// // // //                             <p className="text-sm text-muted-foreground truncate line-clamp-1">
// // // //                               {chat.messages[chat.messages.length - 1].text}
// // // //                             </p>
// // // //                           )}
// // // //                         </div>
// // // //                         {chat.messages && chat.messages.length > 0 && (
// // // //                           <span className="text-xs text-muted-foreground whitespace-nowrap">
// // // //                             {format(
// // // //                               new Date(
// // // //                                 chat.messages[
// // // //                                   chat.messages.length - 1
// // // //                                 ].timestamp
// // // //                               ),
// // // //                               "MMM d"
// // // //                             )}
// // // //                           </span>
// // // //                         )}
// // // //                       </div>
// // // //                     );
// // // //                   })}
// // // //                 </div>
// // // //               ) : (
// // // //                 <div className="p-8 text-center text-muted-foreground">
// // // //                   <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
// // // //                   <p className="text-sm">No conversations yet</p>
// // // //                   <p className="text-xs mt-1">
// // // //                     Start by messaging a client or freelancer
// // // //                   </p>
// // // //                 </div>
// // // //               )}
// // // //             </ScrollArea>
// // // //           </div>

// // // //           <div className="flex-1">
// // // //             {selectedChat ? (
// // // //               <ChatWindow chat={selectedChat} />
// // // //             ) : (
// // // //               <div className="h-full flex items-center justify-center text-muted-foreground">
// // // //                 <div className="text-center">
// // // //                   <MessageSquare className="w-16 h-16 mx-auto mb-4 opacity-50" />
// // // //                   <p className="text-lg font-medium">Select a conversation</p>
// // // //                   <p className="text-sm mt-1">
// // // //                     Choose a chat from the left to start messaging
// // // //                   </p>
// // // //                 </div>
// // // //               </div>
// // // //             )}
// // // //           </div>
// // // //         </main>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // import { useEffect, useState } from "react";
// // // import { useParams, useNavigate } from "react-router-dom";
// // // import { useChatsStore } from "@/stores/chatsStore";
// // // import { useAuthStore } from "@/stores/authStore";
// // // import { Header } from "@/components/Header";
// // // import { Sidebar } from "@/components/Sidebar";
// // // import { ChatWindow } from "@/components/ChatWindow";
// // // import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// // // import { ScrollArea } from "@/components/ui/scroll-area";
// // // import { MessageSquare } from "lucide-react";
// // // import { cn } from "@/lib/utils";
// // // import { format } from "date-fns";

// // // export default function ChatsPage() {
// // //   const { chatId } = useParams();
// // //   const navigate = useNavigate();
// // //   const { user } = useAuthStore();
// // //   const { chats, fetchChats, loading, connectSocket, socket } = useChatsStore();
// // //   const selectedChatId = chatId || "";

// // //   useEffect(() => {
// // //     fetchChats();
// // //     connectSocket();

// // //     return () => {
// // //       useChatsStore.getState().disconnectSocket();
// // //     };
// // //   }, [fetchChats, connectSocket]);

// // //   useEffect(() => {
// // //     return () => {
// // //       if (socket && selectedChatId) {
// // //         socket.emit("leaveChat", selectedChatId);
// // //       }
// // //     };
// // //   }, [selectedChatId, socket]);

// // //   useEffect(() => {
// // //     if (selectedChatId && socket) {
// // //       socket.emit("joinChat", selectedChatId);
// // //     }
// // //   }, [selectedChatId, socket]);

// // //   const handleSelectChat = (id: string) => {
// // //     navigate(`/chats/${id}`);
// // //   };

// // //   const selectedChat = selectedChatId
// // //     ? chats.find((c) => c._id === selectedChatId)
// // //     : null;

// // //   if (loading && chats.length === 0) {
// // //     return (
// // //       <div className="min-h-screen flex flex-col">
// // //         <Header />
// // //         <div className="flex flex-1 items-center justify-center">
// // //           <p>Loading chats...</p>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="min-h-screen flex flex-col">
// // //       <Header />
// // //       <div className="flex flex-1">
// // //         <Sidebar />
// // //         <main className="flex-1 flex overflow-hidden">
// // //           <div className="w-80 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
// // //             <div className="p-4 border-b">
// // //               <h2 className="font-semibold text-lg">Messages</h2>
// // //             </div>
// // //             <ScrollArea className="h-[calc(100vh-8rem)]">
// // //               {chats.length > 0 ? (
// // //                 <div className="p-2 space-y-2">
// // //                   {chats.map((chat) => {
// // //                     const otherParticipant = chat.participants.find(
// // //                       (p) => p._id !== user?._id
// // //                     );
// // //                     return (
// // //                       <div
// // //                         key={chat._id}
// // //                         onClick={() => handleSelectChat(chat._id)}
// // //                         className={cn(
// // //                           "flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors cursor-pointer",
// // //                           selectedChatId === chat._id && "bg-muted"
// // //                         )}
// // //                       >
// // //                         <Avatar className="w-10 h-10">
// // //                           <AvatarImage src={otherParticipant?.profileImage} />
// // //                           <AvatarFallback className="bg-primary text-primary-foreground">
// // //                             {otherParticipant?.name.charAt(0).toUpperCase()}
// // //                           </AvatarFallback>
// // //                         </Avatar>
// // //                         <div className="flex-1 min-w-0">
// // //                           <p className="font-medium truncate">
// // //                             {otherParticipant?.name || "Unknown User"}
// // //                           </p>
// // //                           {chat.messages && chat.messages.length > 0 && (
// // //                             <p className="text-sm text-muted-foreground truncate line-clamp-1">
// // //                               {chat.messages[chat.messages.length - 1].text}
// // //                             </p>
// // //                           )}
// // //                         </div>
// // //                         {chat.messages && chat.messages.length > 0 && (
// // //                           <span className="text-xs text-muted-foreground whitespace-nowrap">
// // //                             {format(
// // //                               new Date(
// // //                                 chat.messages[
// // //                                   chat.messages.length - 1
// // //                                 ].timestamp
// // //                               ),
// // //                               "MMM d"
// // //                             )}
// // //                           </span>
// // //                         )}
// // //                       </div>
// // //                     );
// // //                   })}
// // //                 </div>
// // //               ) : (
// // //                 <div className="p-8 text-center text-muted-foreground">
// // //                   <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
// // //                   <p className="text-sm">No conversations yet</p>
// // //                   <p className="text-xs mt-1">
// // //                     Start by messaging a client or freelancer
// // //                   </p>
// // //                 </div>
// // //               )}
// // //             </ScrollArea>
// // //           </div>

// // //           <div className="flex-1">
// // //             {selectedChat ? (
// // //               <ChatWindow key={selectedChat._id} chat={selectedChat} />
// // //             ) : (
// // //               <div className="h-full flex items-center justify-center text-muted-foreground">
// // //                 <div className="text-center">
// // //                   <MessageSquare className="w-16 h-16 mx-auto mb-4 opacity-50" />
// // //                   <p className="text-lg font-medium">Select a conversation</p>
// // //                   <p className="text-sm mt-1">
// // //                     Choose a chat from the left to start messaging
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //             )}
// // //           </div>
// // //         </main>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // import { useEffect, useState } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import { useChatsStore } from "@/stores/chatsStore";
// // import { useAuthStore } from "@/stores/authStore";
// // import { Header } from "@/components/Header";
// // import { Sidebar } from "@/components/Sidebar";
// // import { ChatWindow } from "@/components/ChatWindow";
// // import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// // import { ScrollArea } from "@/components/ui/scroll-area";
// // import { MessageSquare } from "lucide-react";
// // import { cn } from "@/lib/utils";
// // import { format } from "date-fns";

// // export default function ChatsPage() {
// //   const { chatId } = useParams();
// //   const navigate = useNavigate();
// //   const { user } = useAuthStore();
// //   const { chats, fetchChats, loading, connectSocket, socket } = useChatsStore();
// //   const [selectedChatId, setSelectedChatId] = useState(chatId || "");

// //   useEffect(() => {
// //     fetchChats();
// //     connectSocket();

// //     return () => {
// //       useChatsStore.getState().disconnectSocket();
// //     };
// //   }, [fetchChats, connectSocket]);

// //   useEffect(() => {
// //     return () => {
// //       if (socket && selectedChatId) {
// //         socket.emit("leaveChat", selectedChatId);
// //       }
// //     };
// //   }, [socket]);

// //   useEffect(() => {
// //     if (chatId && chatId !== selectedChatId) {
// //       const oldId = selectedChatId;
// //       setSelectedChatId(chatId);
// //       if (socket && oldId && oldId !== chatId) {
// //         socket.emit("leaveChat", oldId);
// //       }
// //       if (socket) {
// //         socket.emit("joinChat", chatId);
// //       }
// //     }
// //   }, [chatId, selectedChatId, socket]);

// //   const handleSelectChat = (id: string) => {
// //     if (id === selectedChatId) return;
// //     const oldId = selectedChatId;
// //     setSelectedChatId(id);
// //     if (socket && oldId && oldId !== id) {
// //       socket.emit("leaveChat", oldId);
// //     }
// //     if (socket) {
// //       socket.emit("joinChat", id);
// //     }
// //     navigate(`/chats/${id}`);
// //   };

// //   const selectedChat = selectedChatId
// //     ? chats.find((c) => c._id === selectedChatId)
// //     : null;

// //   if (loading && chats.length === 0) {
// //     return (
// //       <div className="min-h-screen flex flex-col">
// //         <Header />
// //         <div className="flex flex-1 items-center justify-center">
// //           <p>Loading chats...</p>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen flex flex-col">
// //       <Header />
// //       <div className="flex flex-1">
// //         <Sidebar />
// //         <main className="flex-1 flex overflow-hidden">
// //           <div className="w-80 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
// //             <div className="p-4 border-b">
// //               <h2 className="font-semibold text-lg">Messages</h2>
// //             </div>
// //             <ScrollArea className="h-[calc(100vh-8rem)]">
// //               {chats.length > 0 ? (
// //                 <div className="p-2 space-y-2">
// //                   {chats.map((chat) => {
// //                     const otherParticipant = chat.participants.find(
// //                       (p) => p._id !== user?._id
// //                     );
// //                     return (
// //                       <div
// //                         key={chat._id}
// //                         onClick={() => handleSelectChat(chat._id)}
// //                         className={cn(
// //                           "flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors cursor-pointer",
// //                           selectedChatId === chat._id && "bg-muted"
// //                         )}
// //                       >
// //                         <Avatar className="w-10 h-10">
// //                           <AvatarImage src={otherParticipant?.profileImage} />
// //                           <AvatarFallback className="bg-primary text-primary-foreground">
// //                             {otherParticipant?.name.charAt(0).toUpperCase()}
// //                           </AvatarFallback>
// //                         </Avatar>
// //                         <div className="flex-1 min-w-0">
// //                           <p className="font-medium truncate">
// //                             {otherParticipant?.name || "Unknown User"}
// //                           </p>
// //                           {chat.messages && chat.messages.length > 0 && (
// //                             <p className="text-sm text-muted-foreground truncate line-clamp-1">
// //                               {chat.messages[chat.messages.length - 1].text}
// //                             </p>
// //                           )}
// //                         </div>
// //                         {chat.messages && chat.messages.length > 0 && (
// //                           <span className="text-xs text-muted-foreground whitespace-nowrap">
// //                             {format(
// //                               new Date(
// //                                 chat.messages[
// //                                   chat.messages.length - 1
// //                                 ].timestamp
// //                               ),
// //                               "MMM d"
// //                             )}
// //                           </span>
// //                         )}
// //                       </div>
// //                     );
// //                   })}
// //                 </div>
// //               ) : (
// //                 <div className="p-8 text-center text-muted-foreground">
// //                   <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
// //                   <p className="text-sm">No conversations yet</p>
// //                   <p className="text-xs mt-1">
// //                     Start by messaging a client or freelancer
// //                   </p>
// //                 </div>
// //               )}
// //             </ScrollArea>
// //           </div>

// //           <div className="flex-1">
// //             {selectedChat ? (
// //               <ChatWindow key={selectedChat._id} chat={selectedChat} />
// //             ) : (
// //               <div className="h-full flex items-center justify-center text-muted-foreground">
// //                 <div className="text-center">
// //                   <MessageSquare className="w-16 h-16 mx-auto mb-4 opacity-50" />
// //                   <p className="text-lg font-medium">Select a conversation</p>
// //                   <p className="text-sm mt-1">
// //                     Choose a chat from the left to start messaging
// //                   </p>
// //                 </div>
// //               </div>
// //             )}
// //           </div>
// //         </main>
// //       </div>
// //     </div>
// //   );
// // }

// import { useEffect, useRef } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useChatsStore } from "@/stores/chatsStore";
// import { useAuthStore } from "@/stores/authStore";
// import { Header } from "@/components/Header";
// import { Sidebar } from "@/components/Sidebar";
// import { ChatWindow } from "@/components/ChatWindow";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { MessageSquare } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { format } from "date-fns";

// export default function ChatsPage() {
//   const { chatId } = useParams();
//   const navigate = useNavigate();
//   const { user } = useAuthStore();
//   const { chats, fetchChats, loading, connectSocket, socket } = useChatsStore();
//   const prevChatIdRef = useRef<string | null>(null);

//   useEffect(() => {
//     fetchChats();
//     connectSocket();

//     return () => {
//       useChatsStore.getState().disconnectSocket();
//     };
//   }, [fetchChats, connectSocket]);

//   useEffect(() => {
//     return () => {
//       if (socket && chatId) {
//         socket.emit("leaveChat", chatId);
//       }
//     };
//   }, [socket, chatId]);

//   useEffect(() => {
//     if (prevChatIdRef.current && prevChatIdRef.current !== chatId && socket) {
//       socket.emit("leaveChat", prevChatIdRef.current);
//     }
//     if (chatId && socket) {
//       socket.emit("joinChat", chatId);
//     }
//     prevChatIdRef.current = chatId || null;
//   }, [chatId, socket]);

//   const handleSelectChat = (id: string) => {
//     if (id === chatId) return;
//     navigate(`/chats/${id}`);
//   };

//   const selectedChatId = chatId || "";
//   const selectedChat = selectedChatId
//     ? chats.find((c) => c._id === selectedChatId)
//     : null;

//   if (loading && chats.length === 0) {
//     return (
//       <div className="min-h-screen flex flex-col">
//         <Header />
//         <div className="flex flex-1 items-center justify-center">
//           <p>Loading chats...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Header />
//       <div className="flex flex-1">
//         <Sidebar />
//         <main className="flex-1 flex overflow-hidden">
//           <div className="w-80 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//             <div className="p-4 border-b">
//               <h2 className="font-semibold text-lg">Messages</h2>
//             </div>
//             <ScrollArea className="h-[calc(100vh-8rem)]">
//               {chats.length > 0 ? (
//                 <div className="p-2 space-y-2">
//                   {chats.map((chat) => {
//                     const otherParticipant = chat.participants.find(
//                       (p) => p._id !== user?._id
//                     );
//                     return (
//                       <div
//                         key={chat._id}
//                         onClick={() => handleSelectChat(chat._id)}
//                         className={cn(
//                           "flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors cursor-pointer",
//                           selectedChatId === chat._id && "bg-muted"
//                         )}
//                       >
//                         <Avatar className="w-10 h-10">
//                           <AvatarImage src={otherParticipant?.profileImage} />
//                           <AvatarFallback className="bg-primary text-primary-foreground">
//                             {otherParticipant?.name.charAt(0).toUpperCase()}
//                           </AvatarFallback>
//                         </Avatar>
//                         <div className="flex-1 min-w-0">
//                           <p className="font-medium truncate">
//                             {otherParticipant?.name || "Unknown User"}
//                           </p>
//                           {chat.messages && chat.messages.length > 0 && (
//                             <p className="text-sm text-muted-foreground truncate line-clamp-1">
//                               {chat.messages[chat.messages.length - 1].text}
//                             </p>
//                           )}
//                         </div>
//                         {chat.messages && chat.messages.length > 0 && (
//                           <span className="text-xs text-muted-foreground whitespace-nowrap">
//                             {format(
//                               new Date(
//                                 chat.messages[
//                                   chat.messages.length - 1
//                                 ].timestamp
//                               ),
//                               "MMM d"
//                             )}
//                           </span>
//                         )}
//                       </div>
//                     );
//                   })}
//                 </div>
//               ) : (
//                 <div className="p-8 text-center text-muted-foreground">
//                   <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
//                   <p className="text-sm">No conversations yet</p>
//                   <p className="text-xs mt-1">
//                     Start by messaging a client or freelancer
//                   </p>
//                 </div>
//               )}
//             </ScrollArea>
//           </div>

//           <div className="flex-1">
//             {selectedChat ? (
//               <ChatWindow key={selectedChatId} chat={selectedChat} />
//             ) : (
//               <div className="h-full flex items-center justify-center text-muted-foreground">
//                 <div className="text-center">
//                   <MessageSquare className="w-16 h-16 mx-auto mb-4 opacity-50" />
//                   <p className="text-lg font-medium">Select a conversation</p>
//                   <p className="text-sm mt-1">
//                     Choose a chat from the left to start messaging
//                   </p>
//                 </div>
//               </div>
//             )}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

import { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useChatsStore } from "@/stores/chatsStore";
import { useAuthStore } from "@/stores/authStore";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { ChatWindow } from "@/components/ChatWindow";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

export default function ChatsPage() {
  const { chatId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const { chats, fetchChats, loading, connectSocket, socket } = useChatsStore();
  const prevChatIdRef = useRef<string | null>(null);

  useEffect(() => {
    fetchChats();
    connectSocket();

    return () => {
      useChatsStore.getState().disconnectSocket();
    };
  }, [fetchChats, connectSocket]);

  useEffect(() => {
    return () => {
      if (socket && chatId) {
        socket.emit("leaveChat", chatId);
      }
    };
  }, [socket, chatId]);

  useEffect(() => {
    if (prevChatIdRef.current && prevChatIdRef.current !== chatId && socket) {
      socket.emit("leaveChat", prevChatIdRef.current);
    }
    if (chatId && socket) {
      socket.emit("joinChat", chatId);
    }
    prevChatIdRef.current = chatId || null;
  }, [chatId, socket]);

  const handleSelectChat = (id: string) => {
    if (id === chatId) return;
    navigate(`/chats/${id}`);
  };

  const selectedChatId = chatId || "";
  const selectedChat = selectedChatId
    ? chats.find((c) => c._id === selectedChatId)
    : null;

  if (loading && chats.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex flex-1 items-center justify-center">
          <p>Loading chats...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 flex overflow-hidden">
          <div className="w-80 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="p-4 border-b">
              <h2 className="font-semibold text-lg">Messages</h2>
            </div>
            <ScrollArea className="h-[calc(100vh-8rem)]">
              {chats.length > 0 ? (
                <div className="p-2 space-y-2">
                  {chats.map((chat) => {
                    const otherParticipant = chat.participants?.find(
                      (p) => p._id !== user?._id
                    );
                    return (
                      <div
                        key={chat._id}
                        onClick={() => handleSelectChat(chat._id)}
                        className={cn(
                          "flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors cursor-pointer",
                          selectedChatId === chat._id && "bg-muted"
                        )}
                      >
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={otherParticipant?.profileImage} />
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            {otherParticipant?.name?.charAt(0).toUpperCase() ||
                              "U"}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">
                            {otherParticipant?.name || "Unknown User"}
                          </p>
                          {chat.messages && chat.messages.length > 0 && (
                            <p className="text-sm text-muted-foreground truncate line-clamp-1">
                              {chat.messages[chat.messages.length - 1].text}
                            </p>
                          )}
                        </div>
                        {chat.messages && chat.messages.length > 0 && (
                          <span className="text-xs text-muted-foreground whitespace-nowrap">
                            {format(
                              new Date(
                                chat.messages[
                                  chat.messages.length - 1
                                ].timestamp
                              ),
                              "MMM d"
                            )}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="p-8 text-center text-muted-foreground">
                  <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p className="text-sm">No conversations yet</p>
                  <p className="text-xs mt-1">
                    Start by messaging a client or freelancer
                  </p>
                </div>
              )}
            </ScrollArea>
          </div>

          <div className="flex-1">
            {selectedChat ? (
              <ChatWindow key={selectedChatId} chat={selectedChat} />
            ) : (
              <div className="h-full flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <MessageSquare className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium">Select a conversation</p>
                  <p className="text-sm mt-1">
                    Choose a chat from the left to start messaging
                  </p>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
