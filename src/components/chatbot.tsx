// // // // // components/ui/chatbot.tsx
// // // // import * as React from "react"
// // // // import { Button } from "@/components/ui/button"
// // // // import {
// // // //   Dialog,
// // // //   DialogContent,
// // // //   DialogDescription,
// // // //   DialogFooter,
// // // //   DialogHeader,
// // // //   DialogTitle,
// // // // } from "@/components/ui/dialog"
// // // // import { Input } from "@/components/ui/input"
// // // // import { ScrollArea } from "@/components/ui/scroll-area"
// // // // import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// // // // import { Badge } from "@/components/ui/badge"
// // // // import { useToast } from "@/components/ui/use-toast"
// // // // import { Send, Bot } from "lucide-react" // Assuming lucide-react is installed; add icons for messages

// // // // interface Message {
// // // //   id: string
// // // //   content: string
// // // //   sender: "user" | "bot"
// // // //   timestamp: Date
// // // // }

// // // // export function Chatbot() {
// // // //   const [isOpen, setIsOpen] = React.useState(false)
// // // //   const [messages, setMessages] = React.useState<Message[]>([])
// // // //   const [inputValue, setInputValue] = React.useState("")
// // // //   const [isLoading, setIsLoading] = React.useState(false)
// // // //   const { toast } = useToast()

// // // //   // Simulate AI response (integrate with your aiService.generateProposal or generateGreeting for real AI)
// // // //   const handleSendMessage = async () => {
// // // //     if (!inputValue.trim()) return

// // // //     const userMessage: Message = {
// // // //       id: Date.now().toString(),
// // // //       content: inputValue,
// // // //       sender: "user",
// // // //       timestamp: new Date(),
// // // //     }

// // // //     setMessages((prev) => [...prev, userMessage])
// // // //     setInputValue("")
// // // //     setIsLoading(true)

// // // //     // Simulate delay for AI response
// // // //     setTimeout(() => {
// // // //       const botResponse: Message = {
// // // //         id: (Date.now() + 1).toString(),
// // // //         content: "Hi! I'm Feranmi, your AI assistant at Freelance Match. How can I help? Need a proposal generated or project tips?",
// // // //         sender: "bot",
// // // //         timestamp: new Date(),
// // // //       }
// // // //       setMessages((prev) => [...prev, botResponse])
// // // //       setIsLoading(false)
// // // //       toast({
// // // //         title: "Message sent!",
// // // //         description: "Feranmi is here to assist.",
// // // //       })
// // // //     }, 1000)
// // // //   }

// // // //   return (
// // // //     <>
// // // //       {/* Floating Animated Button */}
// // // //       <Button
// // // //         onClick={() => setIsOpen(true)}
// // // //         className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full p-0 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 group animate-float"
// // // //       >
// // // //         <Bot className="h-6 w-6 group-hover:rotate-12 transition-transform" />
// // // //       </Button>

// // // //       <Dialog open={isOpen} onOpenChange={setIsOpen}>
// // // //         <DialogContent className="max-w-md sm:max-w-lg max-h-[80vh] flex flex-col">
// // // //           <DialogHeader>
// // // //             <DialogTitle className="flex items-center gap-2">
// // // //               <Avatar className="h-8 w-8">
// // // //                 <AvatarImage src="/feranmi-avatar.png" /> {/* Add your AI avatar image */}
// // // //                 <AvatarFallback>AI</AvatarFallback>
// // // //               </Avatar>
// // // //               Chat with Feranmi
// // // //               <Badge variant="secondary" className="ml-auto">AI Assistant</Badge>
// // // //             </DialogTitle>
// // // //             <DialogDescription>
// // // //               Your friendly guide to Freelance Match. Ask about proposals, bids, or gigs!
// // // //             </DialogDescription>
// // // //           </DialogHeader>

// // // //           {/* Messages Scroll Area */}
// // // //           <ScrollArea className="flex-1 pr-4 my-2">
// // // //             <div className="space-y-4 py-2">
// // // //               {messages.length === 0 ? (
// // // //                 <p className="text-center text-muted-foreground">Start a conversation!</p>
// // // //               ) : (
// // // //                 messages.map((message) => (
// // // //                   <div
// // // //                     key={message.id}
// // // //                     className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} gap-2`}
// // // //                   >
// // // //                     <div
// // // //                       className={`max-w-[70%] p-3 rounded-lg ${
// // // //                         message.sender === "user"
// // // //                           ? "bg-primary text-primary-foreground"
// // // //                           : "bg-muted"
// // // //                       }`}
// // // //                     >
// // // //                       <p className="text-sm">{message.content}</p>
// // // //                       <p className="text-xs opacity-70 mt-1">
// // // //                         {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
// // // //                       </p>
// // // //                     </div>
// // // //                     <Avatar className="h-6 w-6">
// // // //                       <AvatarFallback>{message.sender === "user" ? "U" : "AI"}</AvatarFallback>
// // // //                     </Avatar>
// // // //                   </div>
// // // //                 ))
// // // //               )}
// // // //               {isLoading && (
// // // //                 <div className="flex justify-start gap-2">
// // // //                   <div className="bg-muted p-3 rounded-lg">
// // // //                     <p className="text-sm">Feranmi is typing...</p>
// // // //                   </div>
// // // //                   <Avatar className="h-6 w-6">
// // // //                     <AvatarFallback>AI</AvatarFallback>
// // // //                   </Avatar>
// // // //                 </div>
// // // //               )}
// // // //             </div>
// // // //           </ScrollArea>

// // // //           {/* Input Footer */}
// // // //           <DialogFooter className="flex gap-2 p-0">
// // // //             <Input
// // // //               value={inputValue}
// // // //               onChange={(e) => setInputValue(e.target.value)}
// // // //               onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
// // // //               placeholder="Type your message..."
// // // //               className="flex-1"
// // // //               disabled={isLoading}
// // // //             />
// // // //             <Button onClick={handleSendMessage} disabled={!inputValue.trim() || isLoading} size="sm">
// // // //               <Send className="h-4 w-4" />
// // // //             </Button>
// // // //           </DialogFooter>
// // // //         </DialogContent>
// // // //       </Dialog>
// // // //     </>
// // // //   )
// // // // }

// // // // components/chatbot.tsx (Updated - Integrated real API for interactive chat)
// // // import * as React from "react"
// // // import { Button } from "@/components/ui/button"
// // // import {
// // //   Dialog,
// // //   DialogContent,
// // //   DialogDescription,
// // //   DialogFooter,
// // //   DialogHeader,
// // //   DialogTitle,
// // // } from "@/components/ui/dialog"
// // // import { Input } from "@/components/ui/input"
// // // import { ScrollArea } from "@/components/ui/scroll-area"
// // // import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// // // import { Badge } from "@/components/ui/badge"
// // // import { useToast } from "@/components/ui/use-toast"
// // // import { Send, Bot, X } from "lucide-react" // Added X for close icon if needed
// // // import api from '@/lib/api'; // Assuming your Axios instance

// // // interface Message {
// // //   id: string
// // //   content: string
// // //   sender: "user" | "bot"
// // //   timestamp: Date
// // // }

// // // interface ChatHistory {
// // //   role: 'user' | 'assistant'
// // //   content: string
// // // }

// // // export function Chatbot() {
// // //   const [isOpen, setIsOpen] = React.useState(false)
// // //   const [messages, setMessages] = React.useState<Message[]>([])
// // //   const [inputValue, setInputValue] = React.useState("")
// // //   const [isLoading, setIsLoading] = React.useState(false)
// // //   const { toast } = useToast()

// // //   // Get userName for personalization
// // //   const getUserName = () => {
// // //     return localStorage.getItem('userName') || 'User';
// // //   };

// // //   // Real AI response via backend
// // //   const handleSendMessage = async () => {
// // //     if (!inputValue.trim() || isLoading) return

// // //     const userMessage: Message = {
// // //       id: Date.now().toString(),
// // //       content: inputValue,
// // //       sender: "user",
// // //       timestamp: new Date(),
// // //     }

// // //     // Add user message immediately
// // //     setMessages((prev) => [...prev, userMessage])
// // //     const tempInput = inputValue;
// // //     setInputValue("")
// // //     setIsLoading(true)

// // //     try {
// // //       // Prepare history for context (exclude timestamps, map to {role, content})
// // //       const chatHistory: ChatHistory[] = messages.concat(userMessage).map(msg => ({
// // //         role: msg.sender === 'user' ? 'user' : 'assistant',
// // //         content: msg.content
// // //       })).slice(-10); // Last 10 for context

// // //       // Call backend chat endpoint
// // //       const response = await api.post('/proposals/chat', {
// // //         message: tempInput,
// // //         history: chatHistory,
// // //         userName: getUserName()
// // //       });

// // //       if (response.data.success) {
// // //         const botResponse: Message = {
// // //           id: (Date.now() + 1).toString(),
// // //           content: response.data.data.response,
// // //           sender: "bot",
// // //           timestamp: new Date(),
// // //         }
// // //         setMessages((prev) => [...prev, botResponse])
// // //         toast({
// // //           title: "Feranmi replied!",
// // //           description: "Check out the latest message.",
// // //         })
// // //       } else {
// // //         throw new Error(response.data.message || 'Failed to get response');
// // //       }
// // //     } catch (error: any) {
// // //       console.error('Chat API error:', error);
// // //       const fallbackResponse: Message = {
// // //         id: (Date.now() + 1).toString(),
// // //         content: "Oops, something went wrong! Let's try rephrasing that. What can I help with—proposals, bids, or platform tips? 😊",
// // //         sender: "bot",
// // //         timestamp: new Date(),
// // //       }
// // //       setMessages((prev) => [...prev, fallbackResponse])
// // //       toast({
// // //         title: "Quick hiccup",
// // //         description: "Using a backup response—feel free to continue!",
// // //         variant: "destructive",
// // //       })
// // //     } finally {
// // //       setIsLoading(false)
// // //     }
// // //   }

// // //   // Initial greeting on open (optional: fetch once)
// // //   React.useEffect(() => {
// // //     if (isOpen && messages.length === 0) {
// // //       // Could fetch greeting here if desired, but keep simple for now
// // //     }
// // //   }, [isOpen]);

// // //   return (
// // //     <>
// // //       {/* Floating Animated Button */}
// // //       <Button
// // //         onClick={() => setIsOpen(true)}
// // //         className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full p-0 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 group animate-float"
// // //       >
// // //         <Bot className="h-6 w-6 group-hover:rotate-12 transition-transform" />
// // //       </Button>

// // //       <Dialog open={isOpen} onOpenChange={setIsOpen}>
// // //         <DialogContent className="max-w-md sm:max-w-lg max-h-[80vh] flex flex-col">
// // //           <DialogHeader>
// // //             <DialogTitle className="flex items-center gap-2">
// // //               <Avatar className="h-8 w-8">
// // //                 <AvatarImage src="/feranmi-avatar.png" /> {/* Add your AI avatar image */}
// // //                 <AvatarFallback>AI</AvatarFallback>
// // //               </Avatar>
// // //               Chat with Feranmi
// // //               <Badge variant="secondary" className="ml-auto">AI Assistant</Badge>
// // //             </DialogTitle>
// // //             <DialogDescription>
// // //               Your friendly guide to Freelance Match. Ask about proposals, bids, or gigs!
// // //             </DialogDescription>
// // //           </DialogHeader>

// // //           {/* Messages Scroll Area */}
// // //           <ScrollArea className="flex-1 pr-4 my-2">
// // //             <div className="space-y-4 py-2">
// // //               {messages.length === 0 ? (
// // //                 <p className="text-center text-muted-foreground">Start a conversation!</p>
// // //               ) : (
// // //                 messages.map((message) => (
// // //                   <div
// // //                     key={message.id}
// // //                     className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} gap-2`}
// // //                   >
// // //                     <div
// // //                       className={`max-w-[70%] p-3 rounded-lg ${
// // //                         message.sender === "user"
// // //                           ? "bg-primary text-primary-foreground"
// // //                           : "bg-muted"
// // //                       }`}
// // //                     >
// // //                       <p className="text-sm">{message.content}</p>
// // //                       <p className="text-xs opacity-70 mt-1">
// // //                         {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
// // //                       </p>
// // //                     </div>
// // //                     <Avatar className="h-6 w-6 self-end">
// // //                       <AvatarFallback>{message.sender === "user" ? "U" : "AI"}</AvatarFallback>
// // //                     </Avatar>
// // //                   </div>
// // //                 ))
// // //               )}
// // //               {isLoading && (
// // //                 <div className="flex justify-start gap-2">
// // //                   <div className="bg-muted p-3 rounded-lg">
// // //                     <p className="text-sm">Feranmi is typing...</p>
// // //                   </div>
// // //                   <Avatar className="h-6 w-6 self-end">
// // //                     <AvatarFallback>AI</AvatarFallback>
// // //                   </Avatar>
// // //                 </div>
// // //               )}
// // //             </div>
// // //           </ScrollArea>

// // //           {/* Input Footer */}
// // //           <DialogFooter className="flex gap-2 p-0 border-t">
// // //             <Input
// // //               value={inputValue}
// // //               onChange={(e) => setInputValue(e.target.value)}
// // //               onKeyPress={(e) => e.key === "Enter" && !e.shiftKey && handleSendMessage()}
// // //               placeholder="Type your message..."
// // //               className="flex-1"
// // //               disabled={isLoading}
// // //             />
// // //             <Button onClick={handleSendMessage} disabled={!inputValue.trim() || isLoading} size="sm" variant="ghost">
// // //               <Send className="h-4 w-4" />
// // //             </Button>
// // //             <Button onClick={() => setIsOpen(false)} size="sm" variant="ghost">
// // //               <X className="h-4 w-4" />
// // //             </Button>
// // //           </DialogFooter>
// // //         </DialogContent>
// // //       </Dialog>
// // //     </>
// // //   )
// // // }

// // // components/chatbot.tsx (Updated - Added slow slide-in animation for the floating button on page load)
// // import * as React from "react"
// // import { forwardRef, useImperativeHandle, useEffect } from "react"; // Added useEffect for button animation
// // import { Button } from "@/components/ui/button"
// // import {
// //   Dialog,
// //   DialogContent,
// //   DialogDescription,
// //   DialogFooter,
// //   DialogHeader,
// //   DialogTitle,
// // } from "@/components/ui/dialog"
// // import { Input } from "@/components/ui/input"
// // import { ScrollArea } from "@/components/ui/scroll-area"
// // import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// // import { Badge } from "@/components/ui/badge"
// // import { useToast } from "@/components/ui/use-toast"
// // import { Send, Bot, X } from "lucide-react"
// // import ReactMarkdown from 'react-markdown';
// // import remarkGfm from 'remark-gfm';
// // import api from '@/lib/api';

// // interface Message {
// //   id: string
// //   content: string
// //   sender: "user" | "bot"
// //   timestamp: Date
// // }

// // interface ChatHistory {
// //   role: 'user' | 'assistant'
// // }

// // // Expose open method via ref
// // export interface ChatbotRef {
// //   open: () => void;
// // }

// // const Chatbot = forwardRef<ChatbotRef>((_props, ref) => {
// //   const [isOpen, setIsOpen] = React.useState(false)
// //   const [messages, setMessages] = React.useState<Message[]>([])
// //   const [inputValue, setInputValue] = React.useState("")
// //   const [isLoading, setIsLoading] = React.useState(false)
// //   const [buttonVisible, setButtonVisible] = React.useState(false); // For animating button appearance
// //   const { toast } = useToast()

// //   // Animate button in slowly after a short delay (e.g., 1s after mount)
// //   useEffect(() => {
// //     const timer = setTimeout(() => {
// //       setButtonVisible(true);
// //     }, 1000); // Delay for slow appearance

// //     return () => clearTimeout(timer);
// //   }, []);

// //   // Expose open method to parent
// //   useImperativeHandle(ref, () => ({
// //     open: () => setIsOpen(true)
// //   }));

// //   // Get userName for personalization
// //   const getUserName = () => {
// //     return localStorage.getItem('userName') || 'User';
// //   };

// //   // Real AI response via backend
// //   const handleSendMessage = async () => {
// //     if (!inputValue.trim() || isLoading) return

// //     const userMessage: Message = {
// //       id: Date.now().toString(),
// //       content: inputValue,
// //       sender: "user",
// //       timestamp: new Date(),
// //     }

// //     // Add user message immediately
// //     setMessages((prev) => [...prev, userMessage])
// //     const tempInput = inputValue;
// //     setInputValue("")
// //     setIsLoading(true)

// //     try {
// //       // Prepare history for context (exclude timestamps, map to {role, content})
// //       const chatHistory: ChatHistory[] = messages.concat(userMessage).map(msg => ({
// //         role: msg.sender === 'user' ? 'user' : 'assistant',
// //         content: msg.content
// //       })).slice(-10); // Last 10 for context

// //       // Call backend chat endpoint
// //       const response = await api.post('/proposals/chat', {
// //         message: tempInput,
// //         history: chatHistory,
// //         userName: getUserName()
// //       });

// //       if (response.data.success) {
// //         const botResponse: Message = {
// //           id: (Date.now() + 1).toString(),
// //           content: response.data.data.response,
// //           sender: "bot",
// //           timestamp: new Date(),
// //         }
// //         setMessages((prev) => [...prev, botResponse])
// //         toast({
// //           title: "Feranmi replied!",
// //           description: "Check out the latest message.",
// //         })
// //       } else {
// //         throw new Error(response.data.message || 'Failed to get response');
// //       }
// //     } catch (error: any) {
// //       console.error('Chat API error:', error);
// //       const fallbackResponse: Message = {
// //         id: (Date.now() + 1).toString(),
// //         content: "Oops, something went wrong! Let's try rephrasing that. What can I help with—proposals, bids, or platform tips? 😊",
// //         sender: "bot",
// //         timestamp: new Date(),
// //       }
// //       setMessages((prev) => [...prev, fallbackResponse])
// //       toast({
// //         title: "Quick hiccup",
// //         description: "Using a backup response—feel free to continue!",
// //         variant: "destructive",
// //       })
// //     } finally {
// //       setIsLoading(false)
// //     }
// //   }

// //   // Initial greeting on open (optional: fetch once)
// //   React.useEffect(() => {
// //     if (isOpen && messages.length === 0) {
// //       // Could fetch greeting here if desired, but keep simple for now
// //     }
// //   }, [isOpen]);

// //   return (
// //     <>
// //       {/* Floating Animated Button - Now with slow slide-in on load */}
// //       {buttonVisible && (
// //         <Button
// //           onClick={() => setIsOpen(true)}
// //           className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full p-0 shadow-lg hover:shadow-xl transition-all duration-1000 ease-in-out hover:-translate-y-1 group animate-in slide-in-from-right" // Slow duration-1000 for slide-in
// //         >
// //           <Bot className="h-6 w-6 group-hover:rotate-12 transition-transform" />
// //         </Button>
// //       )}

// //       <Dialog open={isOpen} onOpenChange={setIsOpen}>
// //         <DialogContent className="max-w-md sm:max-w-lg max-h-[80vh] flex flex-col animate-in slide-in-from-right duration-1000 ease-out"> {/* Slow slide-in from right */}
// //           <DialogHeader>
// //             <DialogTitle className="flex items-center gap-2">
// //               <Avatar className="h-8 w-8">
// //                 <AvatarImage src="/feranmi-avatar.png" />
// //                 <AvatarFallback>AI</AvatarFallback>
// //               </Avatar>
// //               Chat with Feranmi
// //               <Badge variant="secondary" className="ml-auto">AI Assistant</Badge>
// //             </DialogTitle>
// //             <DialogDescription>
// //               Your friendly guide to Freelance Match. Ask about proposals, bids, or gigs!
// //             </DialogDescription>
// //           </DialogHeader>

// //           {/* Messages Scroll Area */}
// //           <ScrollArea className="flex-1 pr-4 my-2">
// //             <div className="space-y-4 py-2">
// //               {messages.length === 0 ? (
// //                 <p className="text-center text-muted-foreground">Start a conversation!</p>
// //               ) : (
// //                 messages.map((message) => (
// //                   <div
// //                     key={message.id}
// //                     className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} gap-2`}
// //                   >
// //                     <div
// //                       className={`max-w-[70%] p-3 rounded-lg ${
// //                         message.sender === "user"
// //                           ? "bg-primary text-primary-foreground"
// //                           : "bg-muted"
// //                       }`}
// //                     >
// //                       {message.sender === "user" ? (
// //                         <p className="text-sm">{message.content}</p>
// //                       ) : (
// //                         <div className="text-sm prose prose-sm max-w-none prose-headings:text-base prose-p:my-1 prose-ul:my-1 prose-ol:my-1 prose-li:my-0.5">
// //                           <ReactMarkdown
// //                             remarkPlugins={[remarkGfm]}
// //                             components={{
// //                               code: ({node, inline, className, children, ...props}) => {
// //                                 const match = /language-(\w+)/.exec(className || '')
// //                                 return !inline ? (
// //                                   <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto my-1">
// //                                     <code className={className} {...props}>
// //                                       {children}
// //                                     </code>
// //                                   </pre>
// //                                 ) : (
// //                                   <code className={className} {...props}>
// //                                     {children}
// //                                   </code>
// //                                 )
// //                               }
// //                             }}
// //                           >
// //                             {message.content}
// //                           </ReactMarkdown>
// //                         </div>
// //                       )}
// //                       <p className="text-xs opacity-70 mt-1">
// //                         {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
// //                       </p>
// //                     </div>
// //                     <Avatar className="h-6 w-6 self-end">
// //                       <AvatarFallback>{message.sender === "user" ? "U" : "AI"}</AvatarFallback>
// //                     </Avatar>
// //                   </div>
// //                 ))
// //               )}
// //               {isLoading && (
// //                 <div className="flex justify-start gap-2">
// //                   <div className="bg-muted p-3 rounded-lg">
// //                     <p className="text-sm">Feranmi is typing...</p>
// //                   </div>
// //                   <Avatar className="h-6 w-6 self-end">
// //                     <AvatarFallback>AI</AvatarFallback>
// //                   </Avatar>
// //                 </div>
// //               )}
// //             </div>
// //           </ScrollArea>

// //           {/* Input Footer */}
// //           <DialogFooter className="flex gap-2 p-0 border-t">
// //             <Input
// //               value={inputValue}
// //               onChange={(e) => setInputValue(e.target.value)}
// //               onKeyPress={(e) => e.key === "Enter" && !e.shiftKey && handleSendMessage()}
// //               placeholder="Type your message..."
// //               className="flex-1"
// //               disabled={isLoading}
// //             />
// //             <Button onClick={handleSendMessage} disabled={!inputValue.trim() || isLoading} size="sm" variant="ghost">
// //               <Send className="h-4 w-4" />
// //             </Button>
// //             <Button onClick={() => setIsOpen(false)} size="sm" variant="ghost">
// //               <X className="h-4 w-4" />
// //             </Button>
// //           </DialogFooter>
// //         </DialogContent>
// //       </Dialog>
// //     </>
// //   )
// // });

// // Chatbot.displayName = 'Chatbot';

// // export { Chatbot };

// // components/chatbot.tsx (Fixed: Removed <style jsx> to eliminate 'jsx' prop warning; uses global CSS)
// import * as React from "react";
// import { forwardRef, useImperativeHandle, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Badge } from "@/components/ui/badge";
// import { useToast } from "@/components/ui/use-toast";
// import { Send, Bot, X } from "lucide-react";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";
// import api from "@/lib/api";

// interface Message {
//   id: string;
//   content: string;
//   sender: "user" | "bot";
//   timestamp: Date;
// }

// interface ChatHistory {
//   role: "user" | "assistant";
// }

// // Expose open method via ref
// export interface ChatbotRef {
//   open: () => void;
// }

// const Chatbot = forwardRef<ChatbotRef>((_props, ref) => {
//   const [isOpen, setIsOpen] = React.useState(false);
//   const [messages, setMessages] = React.useState<Message[]>([]);
//   const [inputValue, setInputValue] = React.useState("");
//   const [isLoading, setIsLoading] = React.useState(false);
//   const [buttonVisible, setButtonVisible] = React.useState(false); // For animating button appearance
//   const { toast } = useToast();

//   // Animate button in slowly after a short delay (e.g., 1s after mount)
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setButtonVisible(true);
//     }, 1000); // Delay for slow appearance

//     return () => clearTimeout(timer);
//   }, []);

//   // Expose open method to parent
//   useImperativeHandle(ref, () => ({
//     open: () => setIsOpen(true),
//   }));

//   // Get userName for personalization
//   const getUserName = () => {
//     return localStorage.getItem("userName") || "User";
//   };

//   // Real AI response via backend
//   const handleSendMessage = async () => {
//     if (!inputValue.trim() || isLoading) return;

//     const userMessage: Message = {
//       id: Date.now().toString(),
//       content: inputValue,
//       sender: "user",
//       timestamp: new Date(),
//     };

//     // Add user message immediately
//     setMessages((prev) => [...prev, userMessage]);
//     const tempInput = inputValue;
//     setInputValue("");
//     setIsLoading(true);

//     try {
//       // Prepare history for context (exclude timestamps, map to {role, content})
//       const chatHistory: ChatHistory[] = messages
//         .concat(userMessage)
//         .map((msg) => ({
//           role: msg.sender === "user" ? "user" : "assistant",
//           content: msg.content,
//         }))
//         .slice(-10); // Last 10 for context

//       // Call backend chat endpoint
//       const response = await api.post("/proposals/chat", {
//         message: tempInput,
//         history: chatHistory,
//         userName: getUserName(),
//       });

//       if (response.data.success) {
//         const botResponse: Message = {
//           id: (Date.now() + 1).toString(),
//           content: response.data.data.response,
//           sender: "bot",
//           timestamp: new Date(),
//         };
//         setMessages((prev) => [...prev, botResponse]);
//         toast({
//           title: "Feranmi replied!",
//           description: "Check out the latest message.",
//         });
//       } else {
//         throw new Error(response.data.message || "Failed to get response");
//       }
//     } catch (error: any) {
//       console.error("Chat API error:", error);
//       const fallbackResponse: Message = {
//         id: (Date.now() + 1).toString(),
//         content:
//           "Oops, something went wrong! Let's try rephrasing that. What can I help with—proposals, bids, or platform tips? 😊",
//         sender: "bot",
//         timestamp: new Date(),
//       };
//       setMessages((prev) => [...prev, fallbackResponse]);
//       toast({
//         title: "Quick hiccup",
//         description: "Using a backup response—feel free to continue!",
//         variant: "destructive",
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Initial greeting on open (optional: fetch once)
//   React.useEffect(() => {
//     if (isOpen && messages.length === 0) {
//       // Could fetch greeting here if desired, but keep simple for now
//     }
//   }, [isOpen]);

//   return (
//     <>
//       {/* Floating Animated Button - Continuous "dancing" via global CSS class */}
//       {buttonVisible && (
//         <Button
//           onClick={() => setIsOpen(true)}
//           className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full p-0 shadow-lg hover:shadow-xl transition-all duration-1000 ease-in-out hover:-translate-y-1 group animate-in slide-in-from-right animate-dance"
//         >
//           <Bot className="h-6 w-6 group-hover:rotate-12 transition-transform" />
//         </Button>
//       )}

//       <Dialog open={isOpen} onOpenChange={setIsOpen}>
//         <DialogContent className="max-w-md sm:max-w-lg max-h-[80vh] flex flex-col animate-in slide-in-from-right duration-1000 ease-out">
//           <DialogHeader>
//             <DialogTitle className="flex items-center gap-2">
//               <Avatar className="h-8 w-8">
//                 <AvatarImage src="/feranmi-avatar.png" />
//                 <AvatarFallback>AI</AvatarFallback>
//               </Avatar>
//               Chat with Feranmi
//               <Badge variant="secondary" className="ml-auto">
//                 AI Assistant
//               </Badge>
//             </DialogTitle>
//             <DialogDescription>
//               Your friendly guide to Freelance Match. Ask about proposals, bids,
//               or gigs!
//             </DialogDescription>
//           </DialogHeader>

//           {/* Messages Scroll Area */}
//           <ScrollArea className="flex-1 pr-4 my-2">
//             <div className="space-y-4 py-2">
//               {messages.length === 0 ? (
//                 <p className="text-center text-muted-foreground">
//                   Start a conversation!
//                 </p>
//               ) : (
//                 messages.map((message) => (
//                   <div
//                     key={message.id}
//                     className={`flex ${
//                       message.sender === "user"
//                         ? "justify-end"
//                         : "justify-start"
//                     } gap-2`}
//                   >
//                     <div
//                       className={`max-w-[70%] p-3 rounded-lg ${
//                         message.sender === "user"
//                           ? "bg-primary text-primary-foreground"
//                           : "bg-muted"
//                       }`}
//                     >
//                       {message.sender === "user" ? (
//                         <p className="text-sm">{message.content}</p>
//                       ) : (
//                         <div className="text-sm prose prose-sm max-w-none prose-headings:text-base prose-p:my-1 prose-ul:my-1 prose-ol:my-1 prose-li:my-0.5">
//                           <ReactMarkdown
//                             remarkPlugins={[remarkGfm]}
//                             components={{
//                               code: ({
//                                 node,
//                                 inline,
//                                 className,
//                                 children,
//                                 ...props
//                               }) => {
//                                 const match = /language-(\w+)/.exec(
//                                   className || ""
//                                 );
//                                 return !inline ? (
//                                   <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto my-1">
//                                     <code className={className} {...props}>
//                                       {children}
//                                     </code>
//                                   </pre>
//                                 ) : (
//                                   <code className={className} {...props}>
//                                     {children}
//                                   </code>
//                                 );
//                               },
//                             }}
//                           >
//                             {message.content}
//                           </ReactMarkdown>
//                         </div>
//                       )}
//                       <p className="text-xs opacity-70 mt-1">
//                         {message.timestamp.toLocaleTimeString([], {
//                           hour: "2-digit",
//                           minute: "2-digit",
//                         })}
//                       </p>
//                     </div>
//                     <Avatar className="h-6 w-6 self-end">
//                       <AvatarFallback>
//                         {message.sender === "user" ? "U" : "AI"}
//                       </AvatarFallback>
//                     </Avatar>
//                   </div>
//                 ))
//               )}
//               {isLoading && (
//                 <div className="flex justify-start gap-2">
//                   <div className="bg-muted p-3 rounded-lg">
//                     <p className="text-sm">Feranmi is typing...</p>
//                   </div>
//                   <Avatar className="h-6 w-6 self-end">
//                     <AvatarFallback>AI</AvatarFallback>
//                   </Avatar>
//                 </div>
//               )}
//             </div>
//           </ScrollArea>

//           {/* Input Footer */}
//           <DialogFooter className="flex gap-2 p-0 border-t">
//             <Input
//               value={inputValue}
//               onChange={(e) => setInputValue(e.target.value)}
//               onKeyPress={(e) =>
//                 e.key === "Enter" && !e.shiftKey && handleSendMessage()
//               }
//               placeholder="Type your message..."
//               className="flex-1"
//               disabled={isLoading}
//             />
//             <Button
//               onClick={handleSendMessage}
//               disabled={!inputValue.trim() || isLoading}
//               size="sm"
//               variant="ghost"
//             >
//               <Send className="h-4 w-4" />
//             </Button>
//             <Button onClick={() => setIsOpen(false)} size="sm" variant="ghost">
//               <X className="h-4 w-4" />
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// });

// Chatbot.displayName = "Chatbot";

// export { Chatbot };


// components/chatbot.tsx (Updated: Auth integration, greeting fetch, suggestedNextStep handling, keyDown fix)
import * as React from "react";
import { forwardRef, useImperativeHandle, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { Send, Bot, X } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { generateAIChatResponse, generateGreeting } from "@/lib/api"; // Use typed helpers
import { useAuthStore } from "@/stores/authStore";

interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface ChatHistory {
  role: "user" | "assistant";
  content: string;
}

export interface ChatbotRef {
  open: () => void;
}

const Chatbot = forwardRef<ChatbotRef>((_props, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [inputValue, setInputValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [buttonVisible, setButtonVisible] = React.useState(false);
  const { toast } = useToast();
  const { user } = useAuthStore(); // Integrate auth for personalization

  useEffect(() => {
    const timer = setTimeout(() => setButtonVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useImperativeHandle(ref, () => ({ open: () => setIsOpen(true) }));

  // Fetch initial greeting on open if no messages
  useEffect(() => {
    if (isOpen && messages.length === 0 && !isLoading) {
      const fetchGreeting = async () => {
        setIsLoading(true);
        try {
          const response = await generateGreeting(user?.name);
          if (response.data.success) {
            const greetingMsg: Message = {
              id: Date.now().toString(),
              content: response.data.data.greeting,
              sender: "bot",
              timestamp: new Date(),
            };
            setMessages([greetingMsg]);
            // Optional: Prefill input with suggestedNextStep
            if (response.data.data.suggestedNextStep) {
              setInputValue(response.data.data.suggestedNextStep);
            }
          }
        } catch (error) {
          console.warn("Greeting fetch failed:", error);
          // Fallback greeting
          setMessages([
            {
              id: Date.now().toString(),
              content: "Hi! I'm Feranmi, your Freelance Match guide. Ask about proposals or gigs! 😊",
              sender: "bot",
              timestamp: new Date(),
            },
          ]);
        } finally {
          setIsLoading(false);
        }
      };
      fetchGreeting();
    }
  }, [isOpen, messages.length, isLoading, user?.name]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const tempInput = inputValue;
    setInputValue("");
    setIsLoading(true);

    try {
      const chatHistory: ChatHistory[] = messages
        .concat(userMessage)
        .map((msg) => ({
          role: msg.sender === "user" ? "user" : "assistant",
          content: msg.content,
        }))
        .slice(-10);

      const response = await generateAIChatResponse({
        message: tempInput,
        history: chatHistory,
        userName: user?.name || "User",
      });

      if (response.data.success && response.data.data) {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          content: response.data.data.response,
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botResponse]);
        toast({
          title: "Feranmi replied!",
          description: "Check out the latest message.",
        });
        // Prefill next input if suggested
        if (response.data.data.suggestedNextStep) {
          setInputValue(response.data.data.suggestedNextStep);
        }
      } else {
        throw new Error(response.data.message || "Failed to get response");
      }
    } catch (error: any) {
      console.error("Chat API error:", error);
      const fallbackResponse: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "Oops, something went wrong! Let's try rephrasing that. What can I help with—proposals, bids, or platform tips? 😊",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, fallbackResponse]);
      toast({
        title: "Quick hiccup",
        description: "Using a backup response—feel free to continue!",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
    setInputValue("");
  };

  return (
    <>
      {buttonVisible && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full p-0 shadow-lg hover:shadow-xl transition-all duration-1000 ease-in-out hover:-translate-y-1 group animate-in slide-in-from-right animate-dance"
          aria-label="Open chat with Feranmi"
        >
          <Bot className="h-6 w-6 group-hover:rotate-12 transition-transform" />
        </Button>
      )}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-md sm:max-w-lg max-h-[80vh] flex flex-col animate-in slide-in-from-right duration-1000 ease-out">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={user?.profileImage || "/feranmi-avatar.png"} />
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
              Chat with Feranmi
              <Badge variant="secondary" className="ml-auto">
                AI Assistant
              </Badge>
            </DialogTitle>
            <DialogDescription>
              Your friendly guide to Freelance Match. Ask about proposals, bids, or gigs!
            </DialogDescription>
          </DialogHeader>

          <ScrollArea className="flex-1 pr-4 my-2">
            <div className="space-y-4 py-2">
              {messages.length === 0 && !isLoading ? (
                <p className="text-center text-muted-foreground">Start a conversation!</p>
              ) : (
                messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === "user" ? "justify-end" : "justify-start"
                    } gap-2`}
                  >
                    <div
                      className={`max-w-[70%] p-3 rounded-lg ${
                        message.sender === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      {message.sender === "user" ? (
                        <p className="text-sm">{message.content}</p>
                      ) : (
                        <div className="text-sm prose prose-sm max-w-none prose-headings:text-base prose-p:my-1 prose-ul:my-1 prose-ol:my-1 prose-li:my-0.5">
                          <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                              code: ({ node, inline, className, children, ...props }) => {
                                const match = /language-(\w+)/.exec(className || "");
                                return !inline ? (
                                  <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto my-1">
                                    <code className={className} {...props}>
                                      {children}
                                    </code>
                                  </pre>
                                ) : (
                                  <code className={className} {...props}>
                                    {children}
                                  </code>
                                );
                              },
                            }}
                          >
                            {message.content}
                          </ReactMarkdown>
                        </div>
                      )}
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                    <Avatar className="h-6 w-6 self-end">
                      <AvatarFallback>{message.sender === "user" ? "U" : "AI"}</AvatarFallback>
                    </Avatar>
                  </div>
                ))
              )}
              {isLoading && (
                <div className="flex justify-start gap-2">
                  <div className="bg-muted p-3 rounded-lg">
                    <p className="text-sm">Feranmi is typing...</p>
                  </div>
                  <Avatar className="h-6 w-6 self-end">
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                </div>
              )}
            </div>
          </ScrollArea>

          <DialogFooter className="flex gap-2 p-0 border-t">
            <Button
              onClick={clearChat}
              variant="ghost"
              size="sm"
              className="flex-shrink-0"
              aria-label="Clear chat history"
            >
              New Chat
            </Button>
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSendMessage()} // Fixed: onKeyDown
              placeholder="Type your message..."
              className="flex-1"
              disabled={isLoading}
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isLoading}
              size="sm"
              variant="ghost"
              aria-label="Send message"
            >
              <Send className="h-4 w-4" />
            </Button>
            <Button onClick={() => setIsOpen(false)} size="sm" variant="ghost">
              <X className="h-4 w-4" />
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
});

Chatbot.displayName = "Chatbot";

export { Chatbot };