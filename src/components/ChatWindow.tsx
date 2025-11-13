// // // // // // import { useState, useEffect, useRef } from 'react';
// // // // // // import { useForm } from 'react-hook-form';
// // // // // // import { Chat } from '@/types';
// // // // // // import { useAuthStore } from '@/stores/authStore';
// // // // // // import { useChatsStore } from '@/stores/chatsStore';
// // // // // // import { format } from 'date-fns';
// // // // // // import { Send } from 'lucide-react';
// // // // // // import { Input } from '@/components/ui/input';
// // // // // // import { Button } from '@/components/ui/button';
// // // // // // import { ScrollArea } from '@/components/ui/scroll-area';
// // // // // // import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// // // // // // import { cn } from '@/lib/utils';

// // // // // // interface ChatWindowProps {
// // // // // //   chat: Chat;
// // // // // // }

// // // // // // export const ChatWindow = ({ chat }: ChatWindowProps) => {
// // // // // //   const { user } = useAuthStore();
// // // // // //   const { sendMessage } = useChatsStore();
// // // // // //   const messagesEndRef = useRef<HTMLDivElement>(null);
// // // // // //   const { register, handleSubmit, reset } = useForm<{ text: string }>();

// // // // // //   const otherParticipant = chat.participants.find(p => p.id !== user?.id);

// // // // // //   useEffect(() => {
// // // // // //     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
// // // // // //   }, [chat.messages]);

// // // // // //   const onSubmit = async (data: { text: string }) => {
// // // // // //     if (!data.text.trim()) return;
// // // // // //     await sendMessage(chat.id, data.text);
// // // // // //     reset();
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="flex flex-col h-full">
// // // // // //       <div className="border-b p-4 flex items-center gap-3">
// // // // // //         <Avatar>
// // // // // //           <AvatarImage src={otherParticipant?.profileImage} />
// // // // // //           <AvatarFallback>{otherParticipant?.name.charAt(0).toUpperCase()}</AvatarFallback>
// // // // // //         </Avatar>
// // // // // //         <div>
// // // // // //           <h3 className="font-semibold">{otherParticipant?.name}</h3>
// // // // // //           <p className="text-sm text-muted-foreground capitalize">{otherParticipant?.role}</p>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       <ScrollArea className="flex-1 p-4">
// // // // // //         <div className="space-y-4">
// // // // // //           {chat.messages.map((message) => {
// // // // // //             const isOwn = message.sender.id === user?.id;
// // // // // //             return (
// // // // // //               <div
// // // // // //                 key={message.id}
// // // // // //                 className={cn('flex gap-3', isOwn && 'flex-row-reverse')}
// // // // // //               >
// // // // // //                 <Avatar className="w-8 h-8">
// // // // // //                   <AvatarFallback className="text-xs">
// // // // // //                     {message.sender.name.charAt(0).toUpperCase()}
// // // // // //                   </AvatarFallback>
// // // // // //                 </Avatar>
// // // // // //                 <div className={cn('flex flex-col gap-1', isOwn && 'items-end')}>
// // // // // //                   <div
// // // // // //                     className={cn(
// // // // // //                       'px-4 py-2 rounded-2xl max-w-md',
// // // // // //                       isOwn
// // // // // //                         ? 'bg-primary text-primary-foreground'
// // // // // //                         : 'bg-muted'
// // // // // //                     )}
// // // // // //                   >
// // // // // //                     <p className="text-sm">{message.text}</p>
// // // // // //                   </div>
// // // // // //                   <span className="text-xs text-muted-foreground px-2">
// // // // // //                     {format(new Date(message.timestamp), 'h:mm a')}
// // // // // //                   </span>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             );
// // // // // //           })}
// // // // // //           <div ref={messagesEndRef} />
// // // // // //         </div>
// // // // // //       </ScrollArea>

// // // // // //       <form onSubmit={handleSubmit(onSubmit)} className="border-t p-4 flex gap-2">
// // // // // //         <Input
// // // // // //           {...register('text')}
// // // // // //           placeholder="Type a message..."
// // // // // //           className="flex-1"
// // // // // //         />
// // // // // //         <Button type="submit" size="icon">
// // // // // //           <Send className="w-4 h-4" />
// // // // // //         </Button>
// // // // // //       </form>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // src/components/ChatWindow.tsx
// // // // // import { useState, useEffect, useRef } from 'react';
// // // // // import { useForm } from 'react-hook-form';
// // // // // import { sendMessage } from '@/lib/api';
// // // // // import { Chat } from '@/types';
// // // // // import { useAuthStore } from '@/stores/authStore';
// // // // // import { format } from 'date-fns';
// // // // // import { Send } from 'lucide-react';
// // // // // import { Input } from '@/components/ui/input';
// // // // // import { Button } from '@/components/ui/button';
// // // // // import { ScrollArea } from '@/components/ui/scroll-area';
// // // // // import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// // // // // import { cn } from '@/lib/utils';

// // // // // interface ChatWindowProps {
// // // // //   chat: Chat;
// // // // // }

// // // // // export const ChatWindow = ({ chat }: ChatWindowProps) => {
// // // // //   const { user } = useAuthStore();
// // // // //   const messagesEndRef = useRef<HTMLDivElement>(null);
// // // // //   const { register, handleSubmit, reset } = useForm<{ text: string }>();

// // // // //   const otherParticipant = chat.participants.find(p => p._id !== user?.id);

// // // // //   useEffect(() => {
// // // // //     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
// // // // //   }, [chat.messages]);

// // // // //   const onSubmit = async (data: { text: string }) => {
// // // // //     if (!data.text.trim()) return;
// // // // //     try {
// // // // //       await sendMessage(chat._id, { text: data.text });
// // // // //       reset();
// // // // //     } catch (error) {
// // // // //       console.error('Failed to send message');
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="flex flex-col h-full">
// // // // //       <div className="border-b p-4 flex items-center gap-3">
// // // // //         <Avatar>
// // // // //           <AvatarImage src={otherParticipant?.profileImage} />
// // // // //           <AvatarFallback>{otherParticipant?.name.charAt(0).toUpperCase()}</AvatarFallback>
// // // // //         </Avatar>
// // // // //         <div>
// // // // //           <h3 className="font-semibold">{otherParticipant?.name}</h3>
// // // // //           <p className="text-sm text-muted-foreground capitalize">{otherParticipant?.role}</p>
// // // // //         </div>
// // // // //       </div>

// // // // //       <ScrollArea className="flex-1 p-4">
// // // // //         <div className="space-y-4">
// // // // //           {chat.messages.map((message) => {
// // // // //             const isOwn = message.sender._id === user?.id;
// // // // //             return (
// // // // //               <div
// // // // //                 key={message._id}
// // // // //                 className={cn('flex gap-3', isOwn && 'flex-row-reverse')}
// // // // //               >
// // // // //                 <Avatar className="w-8 h-8">
// // // // //                   <AvatarFallback className="text-xs">
// // // // //                     {message.sender.name.charAt(0).toUpperCase()}
// // // // //                   </AvatarFallback>
// // // // //                 </Avatar>
// // // // //                 <div className={cn('flex flex-col gap-1', isOwn && 'items-end')}>
// // // // //                   <div
// // // // //                     className={cn(
// // // // //                       'px-4 py-2 rounded-2xl max-w-md',
// // // // //                       isOwn
// // // // //                         ? 'bg-primary text-primary-foreground'
// // // // //                         : 'bg-muted'
// // // // //                     )}
// // // // //                   >
// // // // //                     <p className="text-sm">{message.text}</p>
// // // // //                   </div>
// // // // //                   <span className="text-xs text-muted-foreground px-2">
// // // // //                     {format(new Date(message.timestamp), 'h:mm a')}
// // // // //                   </span>
// // // // //                 </div>
// // // // //               </div>
// // // // //             );
// // // // //           })}
// // // // //           <div ref={messagesEndRef} />
// // // // //         </div>
// // // // //       </ScrollArea>

// // // // //       <form onSubmit={handleSubmit(onSubmit)} className="border-t p-4 flex gap-2">
// // // // //         <Input
// // // // //           {...register('text')}
// // // // //           placeholder="Type a message..."
// // // // //           className="flex-1"
// // // // //         />
// // // // //         <Button type="submit" size="icon">
// // // // //           <Send className="w-4 h-4" />
// // // // //         </Button>
// // // // //       </form>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // src/components/ChatWindow.tsx (Unchanged: Already handles DM display with user details fetched via participants)
// // // // import { useState, useEffect, useRef } from "react";
// // // // import { useForm } from "react-hook-form";
// // // // import { sendMessage } from "@/lib/api";
// // // // import { Chat } from "@/types";
// // // // import { useAuthStore } from "@/stores/authStore";
// // // // import { format } from "date-fns";
// // // // import { Send } from "lucide-react";
// // // // import { Input } from "@/components/ui/input";
// // // // import { Button } from "@/components/ui/button";
// // // // import { ScrollArea } from "@/components/ui/scroll-area";
// // // // import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// // // // import { cn } from "@/lib/utils";

// // // // interface ChatWindowProps {
// // // //   chat: Chat;
// // // // }

// // // // export const ChatWindow = ({ chat }: ChatWindowProps) => {
// // // //   const { user } = useAuthStore();
// // // //   const messagesEndRef = useRef<HTMLDivElement>(null);
// // // //   const { register, handleSubmit, reset } = useForm<{ text: string }>();

// // // //   const otherParticipant = chat.participants.find((p) => p._id !== user?.id);

// // // //   useEffect(() => {
// // // //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// // // //   }, [chat.messages]);

// // // //   const onSubmit = async (data: { text: string }) => {
// // // //     if (!data.text.trim()) return;
// // // //     try {
// // // //       await sendMessage(chat._id, { text: data.text });
// // // //       reset();
// // // //     } catch (error) {
// // // //       console.error("Failed to send message");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="flex flex-col h-full">
// // // //       <div className="border-b p-4 flex items-center gap-3">
// // // //         <Avatar>
// // // //           <AvatarImage src={otherParticipant?.profileImage} />
// // // //           <AvatarFallback>
// // // //             {otherParticipant?.name.charAt(0).toUpperCase()}
// // // //           </AvatarFallback>
// // // //         </Avatar>
// // // //         <div>
// // // //           <h3 className="font-semibold">{otherParticipant?.name}</h3>
// // // //           <p className="text-sm text-muted-foreground capitalize">
// // // //             {otherParticipant?.role}
// // // //           </p>
// // // //         </div>
// // // //       </div>

// // // //       <ScrollArea className="flex-1 p-4">
// // // //         <div className="space-y-4">
// // // //           {chat.messages.map((message) => {
// // // //             const isOwn = message.sender._id === user?.id;
// // // //             return (
// // // //               <div
// // // //                 key={message._id}
// // // //                 className={cn("flex gap-3", isOwn && "flex-row-reverse")}
// // // //               >
// // // //                 <Avatar className="w-8 h-8">
// // // //                   <AvatarFallback className="text-xs">
// // // //                     {message.sender.name.charAt(0).toUpperCase()}
// // // //                   </AvatarFallback>
// // // //                 </Avatar>
// // // //                 <div
// // // //                   className={cn("flex flex-col gap-1", isOwn && "items-end")}
// // // //                 >
// // // //                   <div
// // // //                     className={cn(
// // // //                       "px-4 py-2 rounded-2xl max-w-md",
// // // //                       isOwn ? "bg-primary text-primary-foreground" : "bg-muted"
// // // //                     )}
// // // //                   >
// // // //                     <p className="text-sm">{message.text}</p>
// // // //                   </div>
// // // //                   <span className="text-xs text-muted-foreground px-2">
// // // //                     {format(new Date(message.timestamp), "h:mm a")}
// // // //                   </span>
// // // //                 </div>
// // // //               </div>
// // // //             );
// // // //           })}
// // // //           <div ref={messagesEndRef} />
// // // //         </div>
// // // //       </ScrollArea>

// // // //       <form
// // // //         onSubmit={handleSubmit(onSubmit)}
// // // //         className="border-t p-4 flex gap-2"
// // // //       >
// // // //         <Input
// // // //           {...register("text")}
// // // //           placeholder="Type a message..."
// // // //           className="flex-1"
// // // //         />
// // // //         <Button type="submit" size="icon">
// // // //           <Send className="w-4 h-4" />
// // // //         </Button>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // };

// // // // src/components/ChatWindow.tsx (Updated: Integrated real-time with Socket.io; optimistic updates for sender, uses store's sendMessage for live broadcasting)
// // // import { useState, useEffect, useRef } from "react";
// // // import { useForm } from "react-hook-form";
// // // import { useChatsStore } from "@/stores/chatsStore";
// // // import { Chat } from "@/types";
// // // import { useAuthStore } from "@/stores/authStore";
// // // import { format } from "date-fns";
// // // import { Send } from "lucide-react";
// // // import { Input } from "@/components/ui/input";
// // // import { Button } from "@/components/ui/button";
// // // import { ScrollArea } from "@/components/ui/scroll-area";
// // // import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// // // import { cn } from "@/lib/utils";
// // // import { toast } from "sonner"; // Assuming you use sonner for toasts; adjust if needed

// // // interface ChatWindowProps {
// // //   chat: Chat;
// // // }

// // // export const ChatWindow = ({ chat }: ChatWindowProps) => {
// // //   const { user } = useAuthStore();
// // //   const { sendMessage } = useChatsStore();
// // //   const messagesEndRef = useRef<HTMLDivElement>(null);
// // //   const [localMessages, setLocalMessages] = useState(chat.messages || []); // Local state for optimism
// // //   const { register, handleSubmit, reset } = useForm<{ text: string }>();

// // //   const otherParticipant = chat.participants.find((p) => p._id !== user?.id);

// // //   // Sync local messages with store changes (e.g., new incoming messages)
// // //   useEffect(() => {
// // //     setLocalMessages(chat.messages || []);
// // //   }, [chat.messages]);

// // //   useEffect(() => {
// // //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// // //   }, [localMessages]);

// // //   const onSubmit = async (data: { text: string }) => {
// // //     if (!data.text.trim()) return;

// // //     const trimmedText = data.text.trim();
// // //     const optimisticId = Date.now().toString(); // Temp ID for optimism
// // //     const optimisticMessage = {
// // //       _id: optimisticId,
// // //       text: trimmedText,
// // //       sender: { _id: user?.id, name: user?.name || "You" },
// // //       timestamp: new Date(),
// // //     };

// // //     // Optimistic: Add to local immediately
// // //     setLocalMessages((prev) => [...prev, optimisticMessage]);

// // //     try {
// // //       // Send via store (Socket.io or fallback HTTP)
// // //       await sendMessage(chat._id, trimmedText);
// // //       // On success: Real message arrives via socket → store updates → this effect syncs local
// // //       reset();
// // //     } catch (error) {
// // //       console.error("Failed to send message:", error);
// // //       toast.error("Failed to send message. Please try again.");
// // //       // Revert optimistic on error
// // //       setLocalMessages((prev) => prev.filter((m) => m._id !== optimisticId));
// // //     }
// // //   };

// // //   return (
// // //     <div className="flex flex-col h-full">
// // //       <div className="border-b p-4 flex items-center gap-3">
// // //         <Avatar>
// // //           <AvatarImage src={otherParticipant?.profileImage} />
// // //           <AvatarFallback>
// // //             {otherParticipant?.name.charAt(0).toUpperCase()}
// // //           </AvatarFallback>
// // //         </Avatar>
// // //         <div>
// // //           <h3 className="font-semibold">{otherParticipant?.name}</h3>
// // //           <p className="text-sm text-muted-foreground capitalize">
// // //             {otherParticipant?.role}
// // //           </p>
// // //         </div>
// // //       </div>

// // //       <ScrollArea className="flex-1 p-4">
// // //         <div className="space-y-4">
// // //           {localMessages.map((message) => {
// // //             const isOwn = message.sender._id === user?.id;
// // //             return (
// // //               <div
// // //                 key={message._id || message.timestamp} // Fallback for optimistic
// // //                 className={cn("flex gap-3", isOwn && "flex-row-reverse")}
// // //               >
// // //                 <Avatar className="w-8 h-8">
// // //                   <AvatarFallback className="text-xs">
// // //                     {message.sender?.name?.charAt(0).toUpperCase() || "?"}
// // //                   </AvatarFallback>
// // //                 </Avatar>
// // //                 <div
// // //                   className={cn("flex flex-col gap-1", isOwn && "items-end")}
// // //                 >
// // //                   <div
// // //                     className={cn(
// // //                       "px-4 py-2 rounded-2xl max-w-md",
// // //                       isOwn ? "bg-primary text-primary-foreground" : "bg-muted"
// // //                     )}
// // //                   >
// // //                     <p className="text-sm">{message.text}</p>
// // //                   </div>
// // //                   <span className="text-xs text-muted-foreground px-2">
// // //                     {format(new Date(message.timestamp), "h:mm a")}
// // //                   </span>
// // //                 </div>
// // //               </div>
// // //             );
// // //           })}
// // //           <div ref={messagesEndRef} />
// // //         </div>
// // //       </ScrollArea>

// // //       <form
// // //         onSubmit={handleSubmit(onSubmit)}
// // //         className="border-t p-4 flex gap-2"
// // //       >
// // //         <Input
// // //           {...register("text")}
// // //           placeholder="Type a message..."
// // //           className="flex-1"
// // //         />
// // //         <Button type="submit" size="icon">
// // //           <Send className="w-4 h-4" />
// // //         </Button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // src/components/ChatWindow.tsx (Updated: Added 3-dot dropdown toggle in header for viewing freelancer profile)
// // import { useState, useEffect, useRef } from "react";
// // import { useForm } from "react-hook-form";
// // import { useNavigate } from "react-router-dom";
// // import { useChatsStore } from "@/stores/chatsStore";
// // import { Chat } from "@/types";
// // import { useAuthStore } from "@/stores/authStore";
// // import { format } from "date-fns";
// // import { Send, MoreVertical, User } from "lucide-react";
// // import { Input } from "@/components/ui/input";
// // import { Button } from "@/components/ui/button";
// // import { ScrollArea } from "@/components/ui/scroll-area";
// // import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// // import { cn } from "@/lib/utils";
// // import { toast } from "sonner";
// // import {
// //   DropdownMenu,
// //   DropdownMenuContent,
// //   DropdownMenuItem,
// //   DropdownMenuTrigger,
// // } from "@/components/ui/dropdown-menu";

// // interface ChatWindowProps {
// //   chat: Chat;
// // }

// // export const ChatWindow = ({ chat }: ChatWindowProps) => {
// //   const { user } = useAuthStore();
// //   const navigate = useNavigate();
// //   const { sendMessage } = useChatsStore();
// //   const messagesEndRef = useRef<HTMLDivElement>(null);
// //   const [localMessages, setLocalMessages] = useState(chat.messages || []);
// //   const { register, handleSubmit, reset } = useForm<{ text: string }>();

// //   const otherParticipant = chat.participants.find((p) => p._id !== user?.id);

// //   // Sync local messages with store changes (e.g., new incoming messages)
// //   useEffect(() => {
// //     setLocalMessages(chat.messages || []);
// //   }, [chat.messages]);

// //   useEffect(() => {
// //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// //   }, [localMessages]);

// //   const onSubmit = async (data: { text: string }) => {
// //     if (!data.text.trim()) return;

// //     const trimmedText = data.text.trim();
// //     const optimisticId = Date.now().toString(); // Temp ID for optimism
// //     const optimisticMessage = {
// //       _id: optimisticId,
// //       text: trimmedText,
// //       sender: { _id: user?.id, name: user?.name || "You" },
// //       timestamp: new Date(),
// //     };

// //     // Optimistic: Add to local immediately
// //     setLocalMessages((prev) => [...prev, optimisticMessage]);

// //     try {
// //       // Send via store (Socket.io or fallback HTTP)
// //       await sendMessage(chat._id, trimmedText);
// //       // On success: Real message arrives via socket → store updates → this effect syncs local
// //       reset();
// //     } catch (error) {
// //       console.error("Failed to send message:", error);
// //       toast.error("Failed to send message. Please try again.");
// //       // Revert optimistic on error
// //       setLocalMessages((prev) => prev.filter((m) => m._id !== optimisticId));
// //     }
// //   };

// //   const handleViewProfile = () => {
// //     if (otherParticipant?.role === "freelancer" && otherParticipant._id) {
// //       navigate(`/profile/${otherParticipant._id}`);
// //     }
// //   };

// //   return (
// //     <div className="flex flex-col h-full">
// //       <div className="border-b p-4 flex items-center gap-3">
// //         <Avatar>
// //           <AvatarImage src={otherParticipant?.profileImage} />
// //           <AvatarFallback>
// //             {otherParticipant?.name?.charAt(0).toUpperCase()}
// //           </AvatarFallback>
// //         </Avatar>
// //         <div className="flex-1">
// //           <h3 className="font-semibold">{otherParticipant?.name}</h3>
// //           <p className="text-sm text-muted-foreground capitalize">
// //             {otherParticipant?.role}
// //           </p>
// //         </div>
// //         <DropdownMenu>
// //           <DropdownMenuTrigger asChild>
// //             <Button variant="ghost" className="h-8 w-8 p-0">
// //               <MoreVertical className="h-4 w-4" />
// //               <span className="sr-only">More options</span>
// //             </Button>
// //           </DropdownMenuTrigger>
// //           <DropdownMenuContent align="end" className="w-48">
// //             {otherParticipant?.role === "freelancer" ? (
// //               <DropdownMenuItem onClick={handleViewProfile}>
// //                 <User className="mr-2 h-4 w-4" />
// //                 <span>View Profile</span>
// //               </DropdownMenuItem>
// //             ) : (
// //               <DropdownMenuItem disabled>
// //                 <span>No profile available</span>
// //               </DropdownMenuItem>
// //             )}
// //             {/* Optional: Add more items like "Mute" or "Block" */}
// //           </DropdownMenuContent>
// //         </DropdownMenu>
// //       </div>

// //       <ScrollArea className="flex-1 p-4">
// //         <div className="space-y-4">
// //           {localMessages.map((message) => {
// //             const isOwn = message.sender._id === user?.id;
// //             return (
// //               <div
// //                 key={message._id || message.timestamp} // Fallback for optimistic
// //                 className={cn("flex gap-3", isOwn && "flex-row-reverse")}
// //               >
// //                 <Avatar className="w-8 h-8">
// //                   <AvatarFallback className="text-xs">
// //                     {message.sender?.name?.charAt(0).toUpperCase() || "?"}
// //                   </AvatarFallback>
// //                 </Avatar>
// //                 <div
// //                   className={cn("flex flex-col gap-1", isOwn && "items-end")}
// //                 >
// //                   <div
// //                     className={cn(
// //                       "px-4 py-2 rounded-2xl max-w-md",
// //                       isOwn ? "bg-primary text-primary-foreground" : "bg-muted"
// //                     )}
// //                   >
// //                     <p className="text-sm">{message.text}</p>
// //                   </div>
// //                   <span className="text-xs text-muted-foreground px-2">
// //                     {format(new Date(message.timestamp), "h:mm a")}
// //                   </span>
// //                 </div>
// //               </div>
// //             );
// //           })}
// //           <div ref={messagesEndRef} />
// //         </div>
// //       </ScrollArea>

// //       <form
// //         onSubmit={handleSubmit(onSubmit)}
// //         className="border-t p-4 flex gap-2"
// //       >
// //         <Input
// //           {...register("text")}
// //           placeholder="Type a message..."
// //           className="flex-1"
// //         />
// //         <Button type="submit" size="icon">
// //           <Send className="w-4 h-4" />
// //         </Button>
// //       </form>
// //     </div>
// //   );
// // };

// // src/components/ChatWindow.tsx (Updated: Removed role condition for dropdown; always show "View Profile" for other participants.
// // The profile page/backend will handle non-freelancer cases with error message. This ensures the option appears,
// // and navigation only succeeds for valid freelancers.)
// import { useState, useEffect, useRef } from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { useChatsStore } from "@/stores/chatsStore";
// import { Chat } from "@/types";
// import { useAuthStore } from "@/stores/authStore";
// import { format } from "date-fns";
// import { Send, MoreVertical, User } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { cn } from "@/lib/utils";
// import { toast } from "sonner";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// interface ChatWindowProps {
//   chat: Chat;
// }

// export const ChatWindow = ({ chat }: ChatWindowProps) => {
//   const { user } = useAuthStore();
//   const navigate = useNavigate();
//   const { sendMessage } = useChatsStore();
//   const messagesEndRef = useRef<HTMLDivElement>(null);
//   const [localMessages, setLocalMessages] = useState(chat.messages || []);
//   const { register, handleSubmit, reset } = useForm<{ text: string }>();

//   const otherParticipant = chat.participants.find((p) => p._id !== user?.id);

//   // Sync local messages with store changes (e.g., new incoming messages)
//   useEffect(() => {
//     setLocalMessages(chat.messages || []);
//   }, [chat.messages]);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [localMessages]);

//   // Debug log to check participant data (remove after fixing)
//   useEffect(() => {
//     console.log("Other participant in ChatWindow:", otherParticipant);
//   }, [otherParticipant]);

//   const onSubmit = async (data: { text: string }) => {
//     if (!data.text.trim()) return;

//     const trimmedText = data.text.trim();
//     const optimisticId = Date.now().toString(); // Temp ID for optimism
//     const optimisticMessage = {
//       _id: optimisticId,
//       text: trimmedText,
//       sender: { _id: user?.id, name: user?.name || "You" },
//       timestamp: new Date(),
//     };

//     // Optimistic: Add to local immediately
//     setLocalMessages((prev) => [...prev, optimisticMessage]);

//     try {
//       // Send via store (Socket.io or fallback HTTP)
//       await sendMessage(chat._id, trimmedText);
//       // On success: Real message arrives via socket → store updates → this effect syncs local
//       reset();
//     } catch (error) {
//       console.error("Failed to send message:", error);
//       toast.error("Failed to send message. Please try again.");
//       // Revert optimistic on error
//       setLocalMessages((prev) => prev.filter((m) => m._id !== optimisticId));
//     }
//   };

//   const handleViewProfile = () => {
//     if (otherParticipant?._id) {
//       console.log("Navigating to profile for user:", otherParticipant._id); // Debug log
//       navigate(`/profile/${otherParticipant._id}`);
//     } else {
//       toast.error("Unable to view profile");
//     }
//   };

//   return (
//     <div className="flex flex-col h-full">
//       <div className="border-b p-4 flex items-center gap-3 justify-between">
//         <div className="flex items-center gap-3">
//           <Avatar>
//             <AvatarImage src={otherParticipant?.profileImage} />
//             <AvatarFallback>
//               {otherParticipant?.name?.charAt(0).toUpperCase()}
//             </AvatarFallback>
//           </Avatar>
//           <div>
//             <h3 className="font-semibold">{otherParticipant?.name}</h3>
//             <p className="text-sm text-muted-foreground capitalize">
//               {otherParticipant?.role || "User"}
//             </p>
//           </div>
//         </div>
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="ghost" className="h-8 w-8 p-0">
//               <MoreVertical className="h-4 w-4" />
//               <span className="sr-only">More options</span>
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end" className="w-48">
//             <DropdownMenuItem onClick={handleViewProfile}>
//               <User className="mr-2 h-4 w-4" />
//               <span>View Profile</span>
//             </DropdownMenuItem>
//             {/* Optional: Add more items like "Mute" or "Block" */}
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </div>

//       <ScrollArea className="flex-1 p-4">
//         <div className="space-y-4">
//           {localMessages.map((message) => {
//             const isOwn = message.sender._id === user?.id;
//             return (
//               <div
//                 key={message._id || message.timestamp} // Fallback for optimistic
//                 className={cn("flex gap-3", isOwn && "flex-row-reverse")}
//               >
//                 <Avatar className="w-8 h-8">
//                   <AvatarFallback className="text-xs">
//                     {message.sender?.name?.charAt(0).toUpperCase() || "?"}
//                   </AvatarFallback>
//                 </Avatar>
//                 <div
//                   className={cn("flex flex-col gap-1", isOwn && "items-end")}
//                 >
//                   <div
//                     className={cn(
//                       "px-4 py-2 rounded-2xl max-w-md",
//                       isOwn ? "bg-primary text-primary-foreground" : "bg-muted"
//                     )}
//                   >
//                     <p className="text-sm">{message.text}</p>
//                   </div>
//                   <span className="text-xs text-muted-foreground px-2">
//                     {format(new Date(message.timestamp), "h:mm a")}
//                   </span>
//                 </div>
//               </div>
//             );
//           })}
//           <div ref={messagesEndRef} />
//         </div>
//       </ScrollArea>

//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="border-t p-4 flex gap-2"
//       >
//         <Input
//           {...register("text")}
//           placeholder="Type a message..."
//           className="flex-1"
//         />
//         <Button type="submit" size="icon">
//           <Send className="w-4 h-4" />
//         </Button>
//       </form>
//     </div>
//   );
// };

// src/components/ChatWindow.tsx (Updated: Re-added role condition to show "View Profile" only for freelancers)
import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useChatsStore } from "@/stores/chatsStore";
import { Chat } from "@/types";
import { useAuthStore } from "@/stores/authStore";
import { format } from "date-fns";
import { Send, MoreVertical, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ChatWindowProps {
  chat: Chat;
}

export const ChatWindow = ({ chat }: ChatWindowProps) => {
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const { sendMessage } = useChatsStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [localMessages, setLocalMessages] = useState(chat.messages || []);
  const { register, handleSubmit, reset } = useForm<{ text: string }>();

  const otherParticipant = chat.participants.find((p) => p._id !== user?.id);

  // Sync local messages with store changes (e.g., new incoming messages)
  useEffect(() => {
    setLocalMessages(chat.messages || []);
  }, [chat.messages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [localMessages]);

  // Debug log to check participant data (remove after fixing)
  useEffect(() => {
    console.log("Other participant in ChatWindow:", otherParticipant);
  }, [otherParticipant]);

  const onSubmit = async (data: { text: string }) => {
    if (!data.text.trim()) return;

    const trimmedText = data.text.trim();
    const optimisticId = Date.now().toString(); // Temp ID for optimism
    const optimisticMessage = {
      _id: optimisticId,
      text: trimmedText,
      sender: { _id: user?.id, name: user?.name || "You" },
      timestamp: new Date(),
    };

    // Optimistic: Add to local immediately
    setLocalMessages((prev) => [...prev, optimisticMessage]);

    try {
      // Send via store (Socket.io or fallback HTTP)
      await sendMessage(chat._id, trimmedText);
      // On success: Real message arrives via socket → store updates → this effect syncs local
      reset();
    } catch (error) {
      console.error("Failed to send message:", error);
      toast.error("Failed to send message. Please try again.");
      // Revert optimistic on error
      setLocalMessages((prev) => prev.filter((m) => m._id !== optimisticId));
    }
  };

  const handleViewProfile = () => {
    if (otherParticipant?._id) {
      console.log("Navigating to profile for user:", otherParticipant._id); // Debug log
      navigate(`/profile/${otherParticipant._id}`);
    } else {
      toast.error("Unable to view profile");
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="border-b p-4 flex items-center gap-3 justify-between">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={otherParticipant?.profileImage} />
            <AvatarFallback>
              {otherParticipant?.name?.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">{otherParticipant?.name}</h3>
            <p className="text-sm text-muted-foreground capitalize">
              {otherParticipant?.role || "User"}
            </p>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreVertical className="h-4 w-4" />
              <span className="sr-only">More options</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            {otherParticipant?.role === "freelancer" && (
              <DropdownMenuItem onClick={handleViewProfile}>
                <User className="mr-2 h-4 w-4" />
                <span>View Profile</span>
              </DropdownMenuItem>
            )}
            {/* Optional: Add more items like "Mute" or "Block" for all users */}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {localMessages.map((message) => {
            const isOwn = message.sender._id === user?.id;
            return (
              <div
                key={message._id || message.timestamp} // Fallback for optimistic
                className={cn("flex gap-3", isOwn && "flex-row-reverse")}
              >
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="text-xs">
                    {message.sender?.name?.charAt(0).toUpperCase() || "?"}
                  </AvatarFallback>
                </Avatar>
                <div
                  className={cn("flex flex-col gap-1", isOwn && "items-end")}
                >
                  <div
                    className={cn(
                      "px-4 py-2 rounded-2xl max-w-md",
                      isOwn ? "bg-primary text-primary-foreground" : "bg-muted"
                    )}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                  <span className="text-xs text-muted-foreground px-2">
                    {format(new Date(message.timestamp), "h:mm a")}
                  </span>
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border-t p-4 flex gap-2"
      >
        <Input
          {...register("text")}
          placeholder="Type a message..."
          className="flex-1"
        />
        <Button type="submit" size="icon">
          <Send className="w-4 h-4" />
        </Button>
      </form>
    </div>
  );
};
