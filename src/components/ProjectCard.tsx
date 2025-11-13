// // // // // // // // // import { Link } from 'react-router-dom';
// // // // // // // // // import { Project } from '@/types';
// // // // // // // // // import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// // // // // // // // // import { Badge } from '@/components/ui/badge';
// // // // // // // // // import { Button } from '@/components/ui/button';
// // // // // // // // // import { DollarSign, User, Calendar } from 'lucide-react';
// // // // // // // // // import { format } from 'date-fns';

// // // // // // // // // interface ProjectCardProps {
// // // // // // // // //   project: Project;
// // // // // // // // // }

// // // // // // // // // export const ProjectCard = ({ project }: ProjectCardProps) => {
// // // // // // // // //   return (
// // // // // // // // //     <Card className="hover:shadow-lg transition-shadow">
// // // // // // // // //       <CardHeader>
// // // // // // // // //         <div className="flex items-start justify-between gap-4">
// // // // // // // // //           <CardTitle className="line-clamp-1">{project.title}</CardTitle>
// // // // // // // // //           <Badge variant={project.status === 'open' ? 'default' : 'secondary'}>
// // // // // // // // //             {project.status}
// // // // // // // // //           </Badge>
// // // // // // // // //         </div>
// // // // // // // // //       </CardHeader>
// // // // // // // // //       <CardContent className="space-y-4">
// // // // // // // // //         <p className="text-muted-foreground line-clamp-2">{project.description}</p>

// // // // // // // // //         <div className="flex flex-wrap gap-2">
// // // // // // // // //           {project.skills.map((skill) => (
// // // // // // // // //             <Badge key={skill} variant="outline">
// // // // // // // // //               {skill}
// // // // // // // // //             </Badge>
// // // // // // // // //           ))}
// // // // // // // // //         </div>

// // // // // // // // //         <div className="flex items-center gap-4 text-sm text-muted-foreground">
// // // // // // // // //           <div className="flex items-center gap-1">
// // // // // // // // //             <DollarSign className="w-4 h-4" />
// // // // // // // // //             <span className="font-medium">${project.budget.toLocaleString()}</span>
// // // // // // // // //           </div>
// // // // // // // // //           <div className="flex items-center gap-1">
// // // // // // // // //             <User className="w-4 h-4" />
// // // // // // // // //             <span>{project.client.name}</span>
// // // // // // // // //           </div>
// // // // // // // // //         </div>

// // // // // // // // //         <div className="flex items-center gap-1 text-xs text-muted-foreground">
// // // // // // // // //           <Calendar className="w-3 h-3" />
// // // // // // // // //           <span>Posted {format(new Date(project.createdAt), 'MMM d, yyyy')}</span>
// // // // // // // // //         </div>

// // // // // // // // //         {project.bids && project.bids.length > 0 && (
// // // // // // // // //           <div className="text-sm text-muted-foreground">
// // // // // // // // //             {project.bids.length} bid{project.bids.length !== 1 ? 's' : ''}
// // // // // // // // //           </div>
// // // // // // // // //         )}
// // // // // // // // //       </CardContent>
// // // // // // // // //       <CardFooter>
// // // // // // // // //         <Button asChild className="w-full">
// // // // // // // // //           <Link to={`/projects/${project.id}`}>View Details</Link>
// // // // // // // // //         </Button>
// // // // // // // // //       </CardFooter>
// // // // // // // // //     </Card>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // src/components/ProjectCard.tsx
// // // // // // // // import { Link } from 'react-router-dom';
// // // // // // // // import { Project } from '@/types';
// // // // // // // // import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// // // // // // // // import { Badge } from '@/components/ui/badge';
// // // // // // // // import { Button } from '@/components/ui/button';
// // // // // // // // import { DollarSign, User, Calendar } from 'lucide-react';
// // // // // // // // import { format } from 'date-fns';

// // // // // // // // interface ProjectCardProps {
// // // // // // // //   project: Project;
// // // // // // // // }

// // // // // // // // export const ProjectCard = ({ project }: ProjectCardProps) => {
// // // // // // // //   return (
// // // // // // // //     <Card className="hover:shadow-lg transition-shadow">
// // // // // // // //       <CardHeader>
// // // // // // // //         <div className="flex items-start justify-between gap-4">
// // // // // // // //           <CardTitle className="line-clamp-1">{project.title}</CardTitle>
// // // // // // // //           <Badge variant={project.status === 'open' ? 'default' : 'secondary'}>
// // // // // // // //             {project.status}
// // // // // // // //           </Badge>
// // // // // // // //         </div>
// // // // // // // //       </CardHeader>
// // // // // // // //       <CardContent className="space-y-4">
// // // // // // // //         <p className="text-muted-foreground line-clamp-2">{project.description}</p>

// // // // // // // //         <div className="flex flex-wrap gap-2">
// // // // // // // //           {project.skills.map((skill) => (
// // // // // // // //             <Badge key={skill} variant="outline">
// // // // // // // //               {skill}
// // // // // // // //             </Badge>
// // // // // // // //           ))}
// // // // // // // //         </div>

// // // // // // // //         <div className="flex items-center gap-4 text-sm text-muted-foreground">
// // // // // // // //           <div className="flex items-center gap-1">
// // // // // // // //             <DollarSign className="w-4 h-4" />
// // // // // // // //             <span className="font-medium">${project.budget.toLocaleString()}</span>
// // // // // // // //           </div>
// // // // // // // //           <div className="flex items-center gap-1">
// // // // // // // //             <User className="w-4 h-4" />
// // // // // // // //             <span>{project.client.name}</span>
// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //         <div className="flex items-center gap-1 text-xs text-muted-foreground">
// // // // // // // //           <Calendar className="w-3 h-3" />
// // // // // // // //           <span>Posted {format(new Date(project.createdAt), 'MMM d, yyyy')}</span>
// // // // // // // //         </div>

// // // // // // // //         {project.bids && project.bids.length > 0 && (
// // // // // // // //           <div className="text-sm text-muted-foreground">
// // // // // // // //             {project.bids.length} bid{project.bids.length !== 1 ? 's' : ''}
// // // // // // // //           </div>
// // // // // // // //         )}
// // // // // // // //       </CardContent>
// // // // // // // //       <CardFooter>
// // // // // // // //         <Button asChild className="w-full">
// // // // // // // //           <Link to={`/projects/${project._id}`}>View Details</Link>
// // // // // // // //         </Button>
// // // // // // // //       </CardFooter>
// // // // // // // //     </Card>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // import { Link } from "react-router-dom";
// // // // // // // import { Project } from "@/types";
// // // // // // // import {
// // // // // // //   Card,
// // // // // // //   CardContent,
// // // // // // //   CardFooter,
// // // // // // //   CardHeader,
// // // // // // //   CardTitle,
// // // // // // // } from "@/components/ui/card";
// // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // import { DollarSign, User, Calendar } from "lucide-react";
// // // // // // // import { format } from "date-fns";

// // // // // // // interface ProjectCardProps {
// // // // // // //   project: Project;
// // // // // // // }

// // // // // // // export const ProjectCard = ({ project }: ProjectCardProps) => {
// // // // // // //   // Guard date: If invalid, fallback
// // // // // // //   const createdAtDate = project.createdAt ? new Date(project.createdAt) : null;
// // // // // // //   const formattedDate =
// // // // // // //     createdAtDate && !isNaN(createdAtDate.getTime())
// // // // // // //       ? format(createdAtDate, "MMM d, yyyy")
// // // // // // //       : "N/A";

// // // // // // //   return (
// // // // // // //     <Card className="hover:shadow-lg transition-shadow">
// // // // // // //       <CardHeader>
// // // // // // //         <div className="flex items-start justify-between gap-4">
// // // // // // //           <CardTitle className="line-clamp-1">{project.title}</CardTitle>
// // // // // // //           <Badge variant={project.status === "open" ? "default" : "secondary"}>
// // // // // // //             {project.status}
// // // // // // //           </Badge>
// // // // // // //         </div>
// // // // // // //       </CardHeader>
// // // // // // //       <CardContent className="space-y-4">
// // // // // // //         <p className="text-muted-foreground line-clamp-2">
// // // // // // //           {project.description}
// // // // // // //         </p>

// // // // // // //         <div className="flex flex-wrap gap-2">
// // // // // // //           {project.skills.map((skill) => (
// // // // // // //             <Badge key={skill} variant="outline">
// // // // // // //               {skill}
// // // // // // //             </Badge>
// // // // // // //           ))}
// // // // // // //         </div>

// // // // // // //         <div className="flex items-center gap-4 text-sm text-muted-foreground">
// // // // // // //           <div className="flex items-center gap-1">
// // // // // // //             <DollarSign className="w-4 h-4" />
// // // // // // //             <span className="font-medium">
// // // // // // //               ${project.budget.toLocaleString()}
// // // // // // //             </span>
// // // // // // //           </div>
// // // // // // //           <div className="flex items-center gap-1">
// // // // // // //             <User className="w-4 h-4" />
// // // // // // //             <span>{project.client?.name || "Unknown"}</span>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         <div className="flex items-center gap-1 text-xs text-muted-foreground">
// // // // // // //           <Calendar className="w-3 h-3" />
// // // // // // //           <span>Posted {formattedDate}</span>
// // // // // // //         </div>

// // // // // // //         {project.bids && project.bids.length > 0 && (
// // // // // // //           <div className="text-sm text-muted-foreground">
// // // // // // //             {project.bids.length} bid{project.bids.length !== 1 ? "s" : ""}
// // // // // // //           </div>
// // // // // // //         )}
// // // // // // //       </CardContent>
// // // // // // //       <CardFooter>
// // // // // // //         <Button asChild className="w-full">
// // // // // // //           <Link to={`/projects/${project._id}`}>View Details</Link>
// // // // // // //         </Button>
// // // // // // //       </CardFooter>
// // // // // // //     </Card>
// // // // // // //   );
// // // // // // // };

// // // // // // // src/components/ProjectCard.tsx (Updated: Added chat integration using clientChat for freelancers)
// // // // // // import { useNavigate } from "react-router-dom";
// // // // // // import { initiateChat } from "@/lib/api";
// // // // // // import { useAuthStore } from "@/stores/authStore";
// // // // // // import { Project } from "@/types";
// // // // // // import {
// // // // // //   Card,
// // // // // //   CardContent,
// // // // // //   CardFooter,
// // // // // //   CardHeader,
// // // // // //   CardTitle,
// // // // // // } from "@/components/ui/card";
// // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // import { Button } from "@/components/ui/button";
// // // // // // import { DollarSign, User, Calendar, MessageCircle } from "lucide-react";
// // // // // // import { format } from "date-fns";
// // // // // // import { toast } from "sonner";
// // // // // // import { Link } from "react-router-dom";

// // // // // // interface ProjectCardProps {
// // // // // //   project: Project;
// // // // // // }

// // // // // // export const ProjectCard = ({ project }: ProjectCardProps) => {
// // // // // //   const navigate = useNavigate();
// // // // // //   const { user } = useAuthStore();

// // // // // //   // Guard date: If invalid, fallback
// // // // // //   const createdAtDate = project.createdAt ? new Date(project.createdAt) : null;
// // // // // //   const formattedDate =
// // // // // //     createdAtDate && !isNaN(createdAtDate.getTime())
// // // // // //       ? format(createdAtDate, "MMM d, yyyy")
// // // // // //       : "N/A";

// // // // // //   const handleChatClick = async () => {
// // // // // //     if (
// // // // // //       !project.clientChat ||
// // // // // //       !user ||
// // // // // //       project.client._id.toString() === user._id
// // // // // //     )
// // // // // //       return;

// // // // // //     const { chatId, name } = project.clientChat;

// // // // // //     if (chatId) {
// // // // // //       // Navigate to existing chat
// // // // // //       navigate(`/chat/${chatId}`);
// // // // // //     } else {
// // // // // //       // Initiate new chat
// // // // // //       try {
// // // // // //         const response = await initiateChat({
// // // // // //           otherUserId: project.client._id,
// // // // // //           initialMessage: `Hi ${name}, I'm interested in your project "${project.title}". Let's discuss!`,
// // // // // //         });
// // // // // //         if (response.data) {
// // // // // //           toast.success("Chat initiated!");
// // // // // //           navigate(`/chat/${response.data._id}`);
// // // // // //         }
// // // // // //       } catch (error: any) {
// // // // // //         toast.error(error.response?.data?.message || "Failed to start chat");
// // // // // //       }
// // // // // //     }
// // // // // //   };

// // // // // //   const isFreelancer = user?.role === "freelancer";
// // // // // //   const canChat =
// // // // // //     isFreelancer &&
// // // // // //     project.clientChat &&
// // // // // //     project.client._id.toString() !== user?._id;

// // // // // //   return (
// // // // // //     <Card className="hover:shadow-lg transition-shadow">
// // // // // //       <CardHeader>
// // // // // //         <div className="flex items-start justify-between gap-4">
// // // // // //           <CardTitle className="line-clamp-1">{project.title}</CardTitle>
// // // // // //           <Badge variant={project.status === "open" ? "default" : "secondary"}>
// // // // // //             {project.status}
// // // // // //           </Badge>
// // // // // //         </div>
// // // // // //       </CardHeader>
// // // // // //       <CardContent className="space-y-4">
// // // // // //         <p className="text-muted-foreground line-clamp-2">
// // // // // //           {project.description}
// // // // // //         </p>

// // // // // //         <div className="flex flex-wrap gap-2">
// // // // // //           {project.skills.map((skill) => (
// // // // // //             <Badge key={skill} variant="outline">
// // // // // //               {skill}
// // // // // //             </Badge>
// // // // // //           ))}
// // // // // //         </div>

// // // // // //         <div className="flex items-center gap-4 text-sm text-muted-foreground">
// // // // // //           <div className="flex items-center gap-1">
// // // // // //             <DollarSign className="w-4 h-4" />
// // // // // //             <span className="font-medium">
// // // // // //               ${project.budget.toLocaleString()}
// // // // // //             </span>
// // // // // //           </div>
// // // // // //           <div className="flex items-center gap-1">
// // // // // //             <User className="w-4 h-4" />
// // // // // //             <span
// // // // // //               onClick={canChat ? handleChatClick : undefined}
// // // // // //               className={canChat ? "cursor-pointer hover:underline" : ""}
// // // // // //             >
// // // // // //               {project.client?.name || "Unknown"}
// // // // // //             </span>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         <div className="flex items-center gap-1 text-xs text-muted-foreground">
// // // // // //           <Calendar className="w-3 h-3" />
// // // // // //           <span>Posted {formattedDate}</span>
// // // // // //         </div>

// // // // // //         {project.bids && project.bids.length > 0 && (
// // // // // //           <div className="text-sm text-muted-foreground">
// // // // // //             {project.bids.length} bid{project.bids.length !== 1 ? "s" : ""}
// // // // // //           </div>
// // // // // //         )}
// // // // // //       </CardContent>
// // // // // //       <CardFooter className="pt-0">
// // // // // //         <div className="flex flex-col sm:flex-row gap-2 w-full">
// // // // // //           <Button asChild className="flex-1">
// // // // // //             <Link to={`/projects/${project._id}`}>View Details</Link>
// // // // // //           </Button>
// // // // // //           {canChat && (
// // // // // //             <Button
// // // // // //               variant="secondary"
// // // // // //               size="sm"
// // // // // //               onClick={handleChatClick}
// // // // // //               className="flex-1 flex items-center gap-1"
// // // // // //             >
// // // // // //               <MessageCircle className="w-4 h-4" />
// // // // // //               Message
// // // // // //             </Button>
// // // // // //           )}
// // // // // //         </div>
// // // // // //       </CardFooter>
// // // // // //     </Card>
// // // // // //   );
// // // // // // };

// // // // // // src/components/ProjectCard.tsx (Updated: Added debugging logs; fallback date to now if invalid; use store's createChat for consistency)
// // // // // import { useNavigate } from "react-router-dom";
// // // // // import { useChatsStore } from "@/stores/chatsStore";
// // // // // import { useAuthStore } from "@/stores/authStore";
// // // // // import { Project } from "@/types";
// // // // // import {
// // // // //   Card,
// // // // //   CardContent,
// // // // //   CardFooter,
// // // // //   CardHeader,
// // // // //   CardTitle,
// // // // // } from "@/components/ui/card";
// // // // // import { Badge } from "@/components/ui/badge";
// // // // // import { Button } from "@/components/ui/button";
// // // // // import { DollarSign, User, Calendar, MessageCircle } from "lucide-react";
// // // // // import { format } from "date-fns";
// // // // // import { toast } from "sonner";
// // // // // import { Link } from "react-router-dom";

// // // // // interface ProjectCardProps {
// // // // //   project: Project;
// // // // // }

// // // // // export const ProjectCard = ({ project }: ProjectCardProps) => {
// // // // //   const navigate = useNavigate();
// // // // //   const { user } = useAuthStore();
// // // // //   const { createChat } = useChatsStore();

// // // // //   // Guard date: If invalid, fallback to now
// // // // //   const createdAtDate = project.createdAt
// // // // //     ? new Date(project.createdAt)
// // // // //     : new Date();
// // // // //   const formattedDate = !isNaN(createdAtDate.getTime())
// // // // //     ? format(createdAtDate, "MMM d, yyyy")
// // // // //     : "N/A";

// // // // //   // Debug logs (remove in production)
// // // // //   console.log("ProjectCard Debug:", {
// // // // //     userRole: user?.role,
// // // // //     userId: user?._id,
// // // // //     projectClientId: project.client?._id,
// // // // //     clientChat: project.clientChat,
// // // // //     isOwnProject: project.client?._id?.toString() === user?._id,
// // // // //   });
// // // // //   console.log("canChat:", {
// // // // //     isFreelancer: user?.role === "freelancer",
// // // // //     hasClientChat: !!project.clientChat,
// // // // //     notOwn: project.client?._id?.toString() !== user?._id,
// // // // //   });

// // // // //   const handleChatClick = async () => {
// // // // //     if (
// // // // //       !project.clientChat ||
// // // // //       !user ||
// // // // //       project.client._id.toString() === user._id
// // // // //     ) {
// // // // //       toast.error("Cannot initiate chat: Invalid conditions");
// // // // //       return;
// // // // //     }

// // // // //     const { chatId, name } = project.clientChat;

// // // // //     if (chatId) {
// // // // //       // Navigate to existing chat
// // // // //       navigate(`/chat/${chatId}`);
// // // // //     } else {
// // // // //       // Initiate new chat using store
// // // // //       const initialMessage = `Hi ${name}, I'm interested in your project "${project.title}". Let's discuss!`;
// // // // //       const newChatId = await createChat(
// // // // //         project.client._id.toString(),
// // // // //         initialMessage
// // // // //       );
// // // // //       if (newChatId) {
// // // // //         navigate(`/chat/${newChatId}`);
// // // // //       }
// // // // //     }
// // // // //   };

// // // // //   const isFreelancer = user?.role === "freelancer";
// // // // //   const canChat =
// // // // //     isFreelancer &&
// // // // //     project.clientChat &&
// // // // //     project.client._id.toString() !== user?._id;

// // // // //   return (
// // // // //     <Card className="hover:shadow-lg transition-shadow">
// // // // //       <CardHeader>
// // // // //         <div className="flex items-start justify-between gap-4">
// // // // //           <CardTitle className="line-clamp-1">{project.title}</CardTitle>
// // // // //           <Badge variant={project.status === "open" ? "default" : "secondary"}>
// // // // //             {project.status}
// // // // //           </Badge>
// // // // //         </div>
// // // // //       </CardHeader>
// // // // //       <CardContent className="space-y-4">
// // // // //         <p className="text-muted-foreground line-clamp-2">
// // // // //           {project.description}
// // // // //         </p>

// // // // //         <div className="flex flex-wrap gap-2">
// // // // //           {project.skills.map((skill) => (
// // // // //             <Badge key={skill} variant="outline">
// // // // //               {skill}
// // // // //             </Badge>
// // // // //           ))}
// // // // //         </div>

// // // // //         <div className="flex items-center gap-4 text-sm text-muted-foreground">
// // // // //           <div className="flex items-center gap-1">
// // // // //             <DollarSign className="w-4 h-4" />
// // // // //             <span className="font-medium">
// // // // //               ${project.budget.toLocaleString()}
// // // // //             </span>
// // // // //           </div>
// // // // //           <div className="flex items-center gap-1">
// // // // //             <User className="w-4 h-4" />
// // // // //             <span
// // // // //               onClick={canChat ? handleChatClick : undefined}
// // // // //               className={canChat ? "cursor-pointer hover:underline" : ""}
// // // // //               title={
// // // // //                 canChat
// // // // //                   ? "Click to message client"
// // // // //                   : "Login as freelancer to chat"
// // // // //               }
// // // // //             >
// // // // //               {project.client?.name || "Unknown"}
// // // // //             </span>
// // // // //           </div>
// // // // //         </div>

// // // // //         <div className="flex items-center gap-1 text-xs text-muted-foreground">
// // // // //           <Calendar className="w-3 h-3" />
// // // // //           <span>Posted {formattedDate}</span>
// // // // //         </div>

// // // // //         {project.bids && project.bids.length > 0 && (
// // // // //           <div className="text-sm text-muted-foreground">
// // // // //             {project.bids.length} bid{project.bids.length !== 1 ? "s" : ""}
// // // // //           </div>
// // // // //         )}
// // // // //       </CardContent>
// // // // //       <CardFooter className="pt-0">
// // // // //         <div className="flex flex-col sm:flex-row gap-2 w-full">
// // // // //           <Button asChild className="flex-1">
// // // // //             <Link to={`/projects/${project._id}`}>View Details</Link>
// // // // //           </Button>
// // // // //           {canChat && (
// // // // //             <Button
// // // // //               variant="secondary"
// // // // //               size="sm"
// // // // //               onClick={handleChatClick}
// // // // //               className="flex-1 flex items-center gap-1"
// // // // //             >
// // // // //               <MessageCircle className="w-4 h-4" />
// // // // //               Message
// // // // //             </Button>
// // // // //           )}
// // // // //         </div>
// // // // //       </CardFooter>
// // // // //     </Card>
// // // // //   );
// // // // // };

// // // // // src/components/ProjectCard.tsx (Updated: Changed "Message" to "Contact Recruiter"; improved chat initiation logic; added fallback for undefined userId; ensured navigation to chats page after initiation)
// // // // import { useNavigate } from "react-router-dom";
// // // // import { useChatsStore } from "@/stores/chatsStore";
// // // // import { useAuthStore } from "@/stores/authStore";
// // // // import { Project } from "@/types";
// // // // import {
// // // //   Card,
// // // //   CardContent,
// // // //   CardFooter,
// // // //   CardHeader,
// // // //   CardTitle,
// // // // } from "@/components/ui/card";
// // // // import { Badge } from "@/components/ui/badge";
// // // // import { Button } from "@/components/ui/button";
// // // // import { DollarSign, User, Calendar, MessageCircle } from "lucide-react";
// // // // import { format } from "date-fns";
// // // // import { toast } from "sonner";
// // // // import { Link } from "react-router-dom";

// // // // interface ProjectCardProps {
// // // //   project: Project;
// // // // }

// // // // export const ProjectCard = ({ project }: ProjectCardProps) => {
// // // //   const navigate = useNavigate();
// // // //   const { user } = useAuthStore();
// // // //   const { createChat } = useChatsStore();

// // // //   // Guard against undefined user
// // // //   if (!user) {
// // // //     console.warn("User not authenticated in ProjectCard");
// // // //   }

// // // //   // Guard date: If invalid, fallback to now
// // // //   const createdAtDate = project.createdAt
// // // //     ? new Date(project.createdAt)
// // // //     : new Date();
// // // //   const formattedDate = !isNaN(createdAtDate.getTime())
// // // //     ? format(createdAtDate, "MMM d, yyyy")
// // // //     : "N/A";

// // // //   // Debug logs (remove in production)
// // // //   console.log("ProjectCard Debug:", {
// // // //     userRole: user?.role,
// // // //     userId: user?._id,
// // // //     projectClientId: project.client?._id,
// // // //     clientChat: project.clientChat,
// // // //     isOwnProject: project.client?._id?.toString() === user?._id,
// // // //   });
// // // //   console.log("canChat:", {
// // // //     isFreelancer: user?.role === "freelancer",
// // // //     hasClientChat: !!project.clientChat,
// // // //     notOwn: project.client?._id?.toString() !== user?._id,
// // // //   });

// // // //   const handleContactRecruiter = async () => {
// // // //     if (!user) {
// // // //       toast.error("Please log in as a freelancer to contact the recruiter.");
// // // //       navigate("/login"); // Redirect to login if not authenticated
// // // //       return;
// // // //     }

// // // //     if (
// // // //       user.role !== "freelancer" ||
// // // //       !project.clientChat ||
// // // //       project.client._id.toString() === user._id
// // // //     ) {
// // // //       toast.error("Cannot initiate chat: Invalid conditions");
// // // //       return;
// // // //     }

// // // //     const { chatId, name } = project.clientChat;

// // // //     if (chatId) {
// // // //       // Navigate to existing chat in chats page
// // // //       navigate(`/chats/${chatId}`);
// // // //     } else {
// // // //       // Initiate new chat using store, fetch client details implicitly via API
// // // //       const initialMessage = `Hi ${name}, I'm interested in your project "${project.title}". Let's discuss!`;
// // // //       const newChatId = await createChat(
// // // //         project.client._id.toString(),
// // // //         initialMessage
// // // //       );
// // // //       if (newChatId) {
// // // //         navigate(`/chats/${newChatId}`);
// // // //       } else {
// // // //         toast.error("Failed to initiate chat. Please try again.");
// // // //       }
// // // //     }
// // // //   };

// // // //   const isFreelancer = user?.role === "freelancer";
// // // //   const canChat =
// // // //     isFreelancer &&
// // // //     project.clientChat &&
// // // //     project.client._id.toString() !== user?._id;

// // // //   return (
// // // //     <Card className="hover:shadow-lg transition-shadow">
// // // //       <CardHeader>
// // // //         <div className="flex items-start justify-between gap-4">
// // // //           <CardTitle className="line-clamp-1">{project.title}</CardTitle>
// // // //           <Badge variant={project.status === "open" ? "default" : "secondary"}>
// // // //             {project.status}
// // // //           </Badge>
// // // //         </div>
// // // //       </CardHeader>
// // // //       <CardContent className="space-y-4">
// // // //         <p className="text-muted-foreground line-clamp-2">
// // // //           {project.description}
// // // //         </p>

// // // //         <div className="flex flex-wrap gap-2">
// // // //           {project.skills.map((skill) => (
// // // //             <Badge key={skill} variant="outline">
// // // //               {skill}
// // // //             </Badge>
// // // //           ))}
// // // //         </div>

// // // //         <div className="flex items-center gap-4 text-sm text-muted-foreground">
// // // //           <div className="flex items-center gap-1">
// // // //             <DollarSign className="w-4 h-4" />
// // // //             <span className="font-medium">
// // // //               ${project.budget.toLocaleString()}
// // // //             </span>
// // // //           </div>
// // // //           <div className="flex items-center gap-1">
// // // //             <User className="w-4 h-4" />
// // // //             <span
// // // //               onClick={canChat ? handleContactRecruiter : undefined}
// // // //               className={canChat ? "cursor-pointer hover:underline" : ""}
// // // //               title={
// // // //                 canChat
// // // //                   ? "Click to contact recruiter"
// // // //                   : "Login as freelancer to chat"
// // // //               }
// // // //             >
// // // //               {project.client?.name || "Unknown"}
// // // //             </span>
// // // //           </div>
// // // //         </div>

// // // //         <div className="flex items-center gap-1 text-xs text-muted-foreground">
// // // //           <Calendar className="w-3 h-3" />
// // // //           <span>Posted {formattedDate}</span>
// // // //         </div>

// // // //         {project.bids && project.bids.length > 0 && (
// // // //           <div className="text-sm text-muted-foreground">
// // // //             {project.bids.length} bid{project.bids.length !== 1 ? "s" : ""}
// // // //           </div>
// // // //         )}
// // // //       </CardContent>
// // // //       <CardFooter className="pt-0">
// // // //         <div className="flex flex-col sm:flex-row gap-2 w-full">
// // // //           <Button asChild className="flex-1">
// // // //             <Link to={`/projects/${project._id}`}>View Details</Link>
// // // //           </Button>
// // // //           {canChat && (
// // // //             <Button
// // // //               variant="secondary"
// // // //               size="sm"
// // // //               onClick={handleContactRecruiter}
// // // //               className="flex-1 flex items-center gap-1"
// // // //             >
// // // //               <MessageCircle className="w-4 h-4" />
// // // //               Contact Recruiter
// // // //             </Button>
// // // //           )}
// // // //         </div>
// // // //       </CardFooter>
// // // //     </Card>
// // // //   );
// // // // };

// // // // src/components/ProjectCard.tsx (Fixed: Added smarter tooltip based on failure reasons; ensured clientChat fallback if undefined; improved guards for userId; removed redundant debug logs for production; consistent with chats navigation)
// // // import { useNavigate } from "react-router-dom";
// // // import { useChatsStore } from "@/stores/chatsStore";
// // // import { useAuthStore } from "@/stores/authStore";
// // // import { Project } from "@/types";
// // // import {
// // //   Card,
// // //   CardContent,
// // //   CardFooter,
// // //   CardHeader,
// // //   CardTitle,
// // // } from "@/components/ui/card";
// // // import { Badge } from "@/components/ui/badge";
// // // import { Button } from "@/components/ui/button";
// // // import { DollarSign, User, Calendar, MessageCircle } from "lucide-react";
// // // import { format } from "date-fns";
// // // import { toast } from "sonner";
// // // import { Link } from "react-router-dom";

// // // interface ProjectCardProps {
// // //   project: Project;
// // // }

// // // export const ProjectCard = ({ project }: ProjectCardProps) => {
// // //   const navigate = useNavigate();
// // //   const { user } = useAuthStore();
// // //   const { createChat } = useChatsStore();

// // //   // Guard against undefined user
// // //   if (!user) {
// // //     console.warn("User not authenticated in ProjectCard");
// // //   }

// // //   // Guard date: If invalid, fallback to now
// // //   const createdAtDate = project.createdAt
// // //     ? new Date(project.createdAt)
// // //     : new Date();
// // //   const formattedDate = !isNaN(createdAtDate.getTime())
// // //     ? format(createdAtDate, "MMM d, yyyy")
// // //     : "N/A";

// // //   const handleContactRecruiter = async () => {
// // //     if (!user) {
// // //       toast.error("Please log in as a freelancer to contact the recruiter.");
// // //       navigate("/login"); // Redirect to login if not authenticated
// // //       return;
// // //     }

// // //     if (
// // //       user.role !== "freelancer" ||
// // //       !project.clientChat ||
// // //       project.client._id.toString() === user._id
// // //     ) {
// // //       toast.error("Cannot initiate chat: Invalid conditions");
// // //       return;
// // //     }

// // //     const { chatId, name } = project.clientChat;

// // //     if (chatId) {
// // //       // Navigate to existing chat in chats page
// // //       navigate(`/chats/${chatId}`);
// // //     } else {
// // //       // Initiate new chat using store, fetch client details implicitly via API
// // //       const initialMessage = `Hi ${name}, I'm interested in your project "${project.title}". Let's discuss!`;
// // //       const newChatId = await createChat(
// // //         project.client._id.toString(),
// // //         initialMessage
// // //       );
// // //       if (newChatId) {
// // //         navigate(`/chats/${newChatId}`);
// // //       } else {
// // //         toast.error("Failed to initiate chat. Please try again.");
// // //       }
// // //     }
// // //   };

// // //   const isFreelancer = user?.role === "freelancer";
// // //   const hasClientChat = !!project.clientChat;
// // //   const notOwnProject = project.client?._id?.toString() !== user?._id;
// // //   const canChat = isFreelancer && hasClientChat && notOwnProject;

// // //   // FIXED: Smarter tooltip based on specific failure reasons
// // //   const tooltipTitle = !user
// // //     ? "Please log in"
// // //     : !isFreelancer
// // //     ? "Log in as freelancer to contact clients"
// // //     : !hasClientChat
// // //     ? "Chat not available for this project yet"
// // //     : !notOwnProject
// // //     ? "Own project—cannot message self"
// // //     : "Click to contact recruiter";

// // //   return (
// // //     <Card className="hover:shadow-lg transition-shadow">
// // //       <CardHeader>
// // //         <div className="flex items-start justify-between gap-4">
// // //           <CardTitle className="line-clamp-1">{project.title}</CardTitle>
// // //           <Badge variant={project.status === "open" ? "default" : "secondary"}>
// // //             {project.status}
// // //           </Badge>
// // //         </div>
// // //       </CardHeader>
// // //       <CardContent className="space-y-4">
// // //         <p className="text-muted-foreground line-clamp-2">
// // //           {project.description}
// // //         </p>

// // //         <div className="flex flex-wrap gap-2">
// // //           {project.skills.map((skill) => (
// // //             <Badge key={skill} variant="outline">
// // //               {skill}
// // //             </Badge>
// // //           ))}
// // //         </div>

// // //         <div className="flex items-center gap-4 text-sm text-muted-foreground">
// // //           <div className="flex items-center gap-1">
// // //             <DollarSign className="w-4 h-4" />
// // //             <span className="font-medium">
// // //               ${project.budget.toLocaleString()}
// // //             </span>
// // //           </div>
// // //           <div className="flex items-center gap-1">
// // //             <User className="w-4 h-4" />
// // //             <span
// // //               onClick={canChat ? handleContactRecruiter : undefined}
// // //               className={canChat ? "cursor-pointer hover:underline" : ""}
// // //               title={tooltipTitle}
// // //             >
// // //               {project.client?.name || "Unknown"}
// // //             </span>
// // //           </div>
// // //         </div>

// // //         <div className="flex items-center gap-1 text-xs text-muted-foreground">
// // //           <Calendar className="w-3 h-3" />
// // //           <span>Posted {formattedDate}</span>
// // //         </div>

// // //         {project.bids && project.bids.length > 0 && (
// // //           <div className="text-sm text-muted-foreground">
// // //             {project.bids.length} bid{project.bids.length !== 1 ? "s" : ""}
// // //           </div>
// // //         )}
// // //       </CardContent>
// // //       <CardFooter className="pt-0">
// // //         <div className="flex flex-col sm:flex-row gap-2 w-full">
// // //           <Button asChild className="flex-1">
// // //             <Link to={`/projects/${project._id}`}>View Details</Link>
// // //           </Button>
// // //           {canChat && (
// // //             <Button
// // //               variant="secondary"
// // //               size="sm"
// // //               onClick={handleContactRecruiter}
// // //               className="flex-1 flex items-center gap-1"
// // //             >
// // //               <MessageCircle className="w-4 h-4" />
// // //               Contact Recruiter
// // //             </Button>
// // //           )}
// // //         </div>
// // //       </CardFooter>
// // //     </Card>
// // //   );
// // // };

// // // src/components/ProjectCard.tsx (Updated: Integrated external job support; conditional rendering for contact vs apply; computed detail link based on source; preserved local chat logic with guards/tooltips; added originalId handling for external)
// // import { useNavigate } from "react-router-dom";
// // import { useChatsStore } from "@/stores/chatsStore";
// // import { useAuthStore } from "@/stores/authStore";
// // import { Project } from "@/types";
// // import {
// //   Card,
// //   CardContent,
// //   CardFooter,
// //   CardHeader,
// //   CardTitle,
// // } from "@/components/ui/card";
// // import { Badge } from "@/components/ui/badge";
// // import { Button } from "@/components/ui/button";
// // import {
// //   DollarSign,
// //   User,
// //   Calendar,
// //   MessageCircle,
// //   ExternalLink,
// // } from "lucide-react";
// // import { format } from "date-fns";
// // import { toast } from "sonner";
// // import { Link } from "react-router-dom";

// // interface ProjectCardProps {
// //   project: Project & { source?: string; originalId?: number; jobUrl?: string }; // Extended for external
// // }

// // export const ProjectCard = ({ project }: ProjectCardProps) => {
// //   const navigate = useNavigate();
// //   const { user } = useAuthStore();
// //   const { createChat } = useChatsStore();
// //   const isExternal = project.source === "jobicy";
// //   const detailPath = isExternal
// //     ? `/external-jobs/${project.originalId}`
// //     : `/projects/${project._id}`;

// //   // Guard against undefined user
// //   if (!user && !isExternal) {
// //     console.warn("User not authenticated in ProjectCard (local project)");
// //   }

// //   // Guard date: If invalid, fallback to now
// //   const createdAtDate = project.createdAt
// //     ? new Date(project.createdAt)
// //     : new Date();
// //   const formattedDate = !isNaN(createdAtDate.getTime())
// //     ? format(createdAtDate, "MMM d, yyyy")
// //     : "N/A";

// //   const handleContactRecruiter = async () => {
// //     if (!user) {
// //       toast.error("Please log in as a freelancer to contact the recruiter.");
// //       navigate("/register"); // Redirect to login if not authenticated
// //       return;
// //     }

// //     if (
// //       user.role !== "freelancer" ||
// //       !project.clientChat ||
// //       project.client._id.toString() === user._id
// //     ) {
// //       toast.error("Cannot initiate chat: Invalid conditions");
// //       return;
// //     }

// //     const { chatId, name } = project.clientChat;

// //     if (chatId) {
// //       // Navigate to existing chat in chats page
// //       navigate(`/chats/${chatId}`);
// //     } else {
// //       // Initiate new chat using store, fetch client details implicitly via API
// //       const initialMessage = `Hi ${name}, I'm interested in your project "${project.title}". Let's discuss!`;
// //       const newChatId = await createChat(
// //         project.client._id.toString(),
// //         initialMessage
// //       );
// //       if (newChatId) {
// //         navigate(`/chats/${newChatId}`);
// //       } else {
// //         toast.error("Failed to initiate chat. Please try again.");
// //       }
// //     }
// //   };

// //   const handleApply = () => {
// //     if (project.jobUrl) {
// //       window.open(project.jobUrl, "_blank");
// //     } else {
// //       toast.error("Apply link not available");
// //     }
// //   };

// //   const isFreelancer = user?.role === "freelancer";
// //   const hasClientChat = !!project.clientChat;
// //   const notOwnProject = project.client?._id?.toString() !== user?._id;
// //   const canChat = !isExternal && isFreelancer && hasClientChat && notOwnProject;

// //   // FIXED: Smarter tooltip based on specific failure reasons (local only)
// //   const tooltipTitle = !user
// //     ? "Please log in"
// //     : !isFreelancer
// //     ? "Log in as freelancer to contact clients"
// //     : !hasClientChat
// //     ? "Chat not available for this project yet"
// //     : !notOwnProject
// //     ? "Own project—cannot message self"
// //     : "Click to contact recruiter";

// //   return (
// //     <Card className="hover:shadow-lg transition-shadow">
// //       <CardHeader>
// //         <div className="flex items-start justify-between gap-4">
// //           <CardTitle className="line-clamp-1">{project.title}</CardTitle>
// //           <Badge variant={project.status === "open" ? "default" : "secondary"}>
// //             {project.status}
// //           </Badge>
// //         </div>
// //       </CardHeader>
// //       <CardContent className="space-y-4">
// //         <p className="text-muted-foreground line-clamp-2">
// //           {project.description}
// //         </p>

// //         <div className="flex flex-wrap gap-2">
// //           {project.skills.map((skill) => (
// //             <Badge key={skill} variant="outline">
// //               {skill}
// //             </Badge>
// //           ))}
// //         </div>

// //         <div className="flex items-center gap-4 text-sm text-muted-foreground">
// //           <div className="flex items-center gap-1">
// //             <DollarSign className="w-4 h-4" />
// //             <span className="font-medium">
// //               ${project.budget.toLocaleString()}
// //             </span>
// //           </div>
// //           <div className="flex items-center gap-1">
// //             <User className="w-4 h-4" />
// //             <span
// //               onClick={canChat ? handleContactRecruiter : undefined}
// //               className={canChat ? "cursor-pointer hover:underline" : ""}
// //               title={
// //                 isExternal
// //                   ? "External job—contact via application"
// //                   : tooltipTitle
// //               }
// //             >
// //               {project.client?.name || "Unknown"}
// //             </span>
// //           </div>
// //         </div>

// //         <div className="flex items-center gap-1 text-xs text-muted-foreground">
// //           <Calendar className="w-3 h-3" />
// //           <span>Posted {formattedDate}</span>
// //         </div>

// //         {project.bids && project.bids.length > 0 && !isExternal && (
// //           <div className="text-sm text-muted-foreground">
// //             {project.bids.length} bid{project.bids.length !== 1 ? "s" : ""}
// //           </div>
// //         )}
// //       </CardContent>
// //       <CardFooter className="pt-0">
// //         <div className="flex flex-col sm:flex-row gap-2 w-full">
// //           <Button asChild className="flex-1">
// //             <Link to={detailPath}>View Details</Link>
// //           </Button>
// //           {isExternal ? (
// //             <Button
// //               variant="secondary"
// //               size="sm"
// //               onClick={handleApply}
// //               className="flex-1 flex items-center gap-1"
// //             >
// //               <ExternalLink className="w-4 h-4" />
// //               Apply Now
// //             </Button>
// //           ) : canChat ? (
// //             <Button
// //               variant="secondary"
// //               size="sm"
// //               onClick={handleContactRecruiter}
// //               className="flex-1 flex items-center gap-1"
// //             >
// //               <MessageCircle className="w-4 h-4" />
// //               Contact Recruiter
// //             </Button>
// //           ) : null}
// //         </div>
// //       </CardFooter>
// //     </Card>
// //   );
// // };

// // src/pages/ProjectsPage.tsx (Updated: Set ITEMS_PER_PAGE to 3 for displaying 3 cards per page)
// import { useEffect, useState } from "react";
// import { useAuthStore } from "@/stores/authStore";
// import { useProjectsStore } from "@/stores/projectsStore"; // Import the store (assumes store provides totalProjects and fetchProjects accepts search param)
// import { Header } from "@/components/Header";
// import { Sidebar } from "@/components/Sidebar";
// import { ProjectCard } from "@/components/ProjectCard";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   PlusCircle,
//   Search,
//   Filter,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Textarea } from "@/components/ui/textarea";
// import { toast } from "sonner";

// const projectSchema = z.object({
//   title: z.string().min(5, "Title must be at least 5 characters"),
//   description: z.string().min(20, "Description must be at least 20 characters"),
//   skills: z.string().min(1, "At least one skill is required"),
//   budget: z.coerce.number().min(1, "Budget must be greater than 0"),
// });

// const ITEMS_PER_PAGE = 3;

// export default function ProjectsPage() {
//   const { user } = useAuthStore();
//   const { projects, totalProjects, loading, fetchProjects, createProject } =
//     useProjectsStore();
//   const [searchQuery, setSearchQuery] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [dialogOpen, setDialogOpen] = useState(false);

//   const form = useForm<z.infer<typeof projectSchema>>({
//     resolver: zodResolver(projectSchema),
//     defaultValues: {
//       title: "",
//       description: "",
//       skills: "",
//       budget: 0,
//     },
//   });

//   // Fetch projects on mount, page change, or search change
//   useEffect(() => {
//     fetchProjects(currentPage, ITEMS_PER_PAGE, searchQuery);
//   }, [currentPage, searchQuery, fetchProjects]);

//   // Reset to page 1 when search changes
//   useEffect(() => {
//     setCurrentPage(1);
//   }, [searchQuery]);

//   const onSubmit = async (data: z.infer<typeof projectSchema>) => {
//     try {
//       const skillsArray = data.skills
//         .split(",")
//         .map((s) => s.trim())
//         .filter(Boolean);
//       await createProject({
//         title: data.title,
//         description: data.description,
//         budget: data.budget,
//         skills: skillsArray,
//       });
//       form.reset();
//       setDialogOpen(false);
//       // Refetch with current search and page 1 to include new project
//       setCurrentPage(1);
//       toast.success("Project created successfully!");
//     } catch (error) {
//       toast.error("Failed to create project.");
//     }
//   };

//   const totalPages = Math.ceil(totalProjects / ITEMS_PER_PAGE);

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Header />
//       <div className="flex flex-1">
//         <Sidebar />
//         <main className="flex-1 p-6 overflow-auto">
//           <div className="max-w-7xl mx-auto space-y-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <h1 className="text-3xl font-bold">Projects</h1>
//                 <p className="text-muted-foreground mt-2">
//                   {user?.role === "client"
//                     ? "Manage all your projects"
//                     : "Find your next opportunity"}
//                 </p>
//               </div>

//               {user?.role === "client" && (
//                 <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
//                   <DialogTrigger asChild>
//                     <Button>
//                       <PlusCircle className="w-4 h-4 mr-2" />
//                       New Project
//                     </Button>
//                   </DialogTrigger>
//                   <DialogContent className="max-w-2xl">
//                     <DialogHeader>
//                       <DialogTitle>Create New Project</DialogTitle>
//                       <DialogDescription>
//                         Post a project and find the best freelancers
//                       </DialogDescription>
//                     </DialogHeader>
//                     <Form {...form}>
//                       <form
//                         onSubmit={form.handleSubmit(onSubmit)}
//                         className="space-y-4"
//                       >
//                         <FormField
//                           control={form.control}
//                           name="title"
//                           render={({ field }) => (
//                             <FormItem>
//                               <FormLabel>Project Title</FormLabel>
//                               <FormControl>
//                                 <Input
//                                   placeholder="E.g., Build a mobile app"
//                                   {...field}
//                                 />
//                               </FormControl>
//                               <FormMessage />
//                             </FormItem>
//                           )}
//                         />

//                         <FormField
//                           control={form.control}
//                           name="description"
//                           render={({ field }) => (
//                             <FormItem>
//                               <FormLabel>Description</FormLabel>
//                               <FormControl>
//                                 <Textarea
//                                   placeholder="Describe your project requirements..."
//                                   className="min-h-[120px]"
//                                   {...field}
//                                 />
//                               </FormControl>
//                               <FormMessage />
//                             </FormItem>
//                           )}
//                         />

//                         <FormField
//                           control={form.control}
//                           name="skills"
//                           render={({ field }) => (
//                             <FormItem>
//                               <FormLabel>
//                                 Required Skills (comma-separated)
//                               </FormLabel>
//                               <FormControl>
//                                 <Input
//                                   placeholder="React, Node.js, MongoDB"
//                                   {...field}
//                                 />
//                               </FormControl>
//                               <FormMessage />
//                             </FormItem>
//                           )}
//                         />

//                         <FormField
//                           control={form.control}
//                           name="budget"
//                           render={({ field }) => (
//                             <FormItem>
//                               <FormLabel>Budget ($)</FormLabel>
//                               <FormControl>
//                                 <Input
//                                   type="number"
//                                   placeholder="5000"
//                                   {...field}
//                                 />
//                               </FormControl>
//                               <FormMessage />
//                             </FormItem>
//                           )}
//                         />

//                         <div className="flex gap-3">
//                           <Button
//                             type="button"
//                             variant="outline"
//                             onClick={() => setDialogOpen(false)}
//                             className="flex-1"
//                           >
//                             Cancel
//                           </Button>
//                           <Button type="submit" className="flex-1">
//                             Create Project
//                           </Button>
//                         </div>
//                       </form>
//                     </Form>
//                   </DialogContent>
//                 </Dialog>
//               )}
//             </div>

//             <div className="flex gap-3">
//               <div className="relative flex-1">
//                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
//                 <Input
//                   placeholder="Search projects..."
//                   className="pl-9"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//               </div>
//               <Button variant="outline">
//                 <Filter className="w-4 h-4 mr-2" />
//                 Filters
//               </Button>
//             </div>

//             {loading ? (
//               <div className="text-center py-12 text-muted-foreground">
//                 Loading projects...
//               </div>
//             ) : projects.length > 0 ? (
//               <>
//                 <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//                   {projects.map((project) => (
//                     <ProjectCard key={project._id} project={project} />
//                   ))}
//                 </div>
//                 {totalPages > 1 && (
//                   <div className="flex items-center justify-between px-4 py-3 bg-background border-t rounded-md">
//                     <Button
//                       variant="outline"
//                       size="sm"
//                       onClick={() =>
//                         setCurrentPage((prev) => Math.max(prev - 1, 1))
//                       }
//                       disabled={currentPage === 1}
//                     >
//                       <ChevronLeft className="w-4 h-4 mr-2" />
//                       Previous
//                     </Button>
//                     <div className="flex items-center space-x-2">
//                       <span className="text-sm text-muted-foreground">
//                         Page {currentPage} of {totalPages} ({totalProjects}{" "}
//                         total)
//                       </span>
//                     </div>
//                     <Button
//                       variant="outline"
//                       size="sm"
//                       onClick={() =>
//                         setCurrentPage((prev) => Math.min(prev + 1, totalPages))
//                       }
//                       disabled={currentPage === totalPages}
//                     >
//                       Next
//                       <ChevronRight className="w-4 h-4 ml-2" />
//                     </Button>
//                   </div>
//                 )}
//               </>
//             ) : (
//               <div className="text-center py-12 text-muted-foreground">
//                 No projects found
//               </div>
//             )}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// src/components/ProjectCard.tsx (Fixed: Replaced em dashes with hyphens to avoid potential parsing issues in some environments)
import { useNavigate } from "react-router-dom";
import { useChatsStore } from "@/stores/chatsStore";
import { useAuthStore } from "@/stores/authStore";
import { Project } from "@/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DollarSign,
  User,
  Calendar,
  MessageCircle,
  ExternalLink,
} from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  project: Project & { source?: string; originalId?: number; jobUrl?: string }; // Extended for external
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const { createChat } = useChatsStore();
  const isExternal = project.source === "jobicy";
  const detailPath = isExternal
    ? `/external-jobs/${project.originalId}`
    : `/projects/${project._id}`;

  // Guard against undefined user
  if (!user && !isExternal) {
    console.warn("User not authenticated in ProjectCard (local project)");
  }

  // Guard date: If invalid, fallback to now
  const createdAtDate = project.createdAt
    ? new Date(project.createdAt)
    : new Date();
  const formattedDate = !isNaN(createdAtDate.getTime())
    ? format(createdAtDate, "MMM d, yyyy")
    : "N/A";

  const handleContactRecruiter = async () => {
    if (!user) {
      toast.error("Please log in as a freelancer to contact the recruiter.");
      navigate("/register"); // Redirect to login if not authenticated
      return;
    }

    if (
      user.role !== "freelancer" ||
      !project.clientChat ||
      project.client._id.toString() === user._id
    ) {
      toast.error("Cannot initiate chat: Invalid conditions");
      return;
    }

    const { chatId, name } = project.clientChat;

    if (chatId) {
      // Navigate to existing chat in chats page
      navigate(`/chats/${chatId}`);
    } else {
      // Initiate new chat using store, fetch client details implicitly via API
      const initialMessage = `Hi ${name}, I'm interested in your project "${project.title}". Let's discuss!`;
      const newChatId = await createChat(
        project.client._id.toString(),
        initialMessage
      );
      if (newChatId) {
        navigate(`/chats/${newChatId}`);
      } else {
        toast.error("Failed to initiate chat. Please try again.");
      }
    }
  };

  const handleApply = () => {
    if (project.jobUrl) {
      window.open(project.jobUrl, "_blank");
    } else {
      toast.error("Apply link not available");
    }
  };

  const isFreelancer = user?.role === "freelancer";
  const hasClientChat = !!project.clientChat;
  const notOwnProject = project.client?._id?.toString() !== user?._id;
  const canChat = !isExternal && isFreelancer && hasClientChat && notOwnProject;

  // FIXED: Smarter tooltip based on specific failure reasons (local only)
  const tooltipTitle = !user
    ? "Please log in"
    : !isFreelancer
    ? "Log in as freelancer to contact clients"
    : !hasClientChat
    ? "Chat not available for this project yet"
    : !notOwnProject
    ? "Own project - cannot message self"
    : "Click to contact recruiter";

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-base font-semibold line-clamp-1">
            {project.title}
          </CardTitle>
          <Badge
            variant={project.status === "open" ? "default" : "secondary"}
            className="text-xs px-2 py-0.5"
          >
            {project.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-2 pt-0">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1">
          {project.skills.map((skill) => (
            <Badge
              key={skill}
              variant="outline"
              className="text-xs px-2 py-0.5"
            >
              {skill}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <DollarSign className="w-3 h-3" />
            <span className="font-medium">
              ${project.budget.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <User className="w-3 h-3" />
            <span
              onClick={canChat ? handleContactRecruiter : undefined}
              className={canChat ? "cursor-pointer hover:underline" : ""}
              title={
                isExternal
                  ? "External job - contact via application"
                  : tooltipTitle
              }
            >
              {project.client?.name || "Unknown"}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Calendar className="w-3 h-3" />
          <span>Posted {formattedDate}</span>
        </div>

        {project.bids && project.bids.length > 0 && !isExternal && (
          <div className="text-xs text-muted-foreground">
            {project.bids.length} bid{project.bids.length !== 1 ? "s" : ""}
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-2 pb-3">
        <div className="flex flex-col sm:flex-row gap-1 w-full">
          <Button asChild size="sm" className="flex-1 h-8">
            <Link to={detailPath}>View Details</Link>
          </Button>
          {isExternal ? (
            <Button
              variant="secondary"
              size="sm"
              onClick={handleApply}
              className="flex-1 h-8 flex items-center gap-1 text-xs"
            >
              <ExternalLink className="w-3 h-3" />
              Apply Now
            </Button>
          ) : canChat ? (
            <Button
              variant="secondary"
              size="sm"
              onClick={handleContactRecruiter}
              className="flex-1 h-8 flex items-center gap-1 text-xs"
            >
              <MessageCircle className="w-3 h-3" />
              Contact
            </Button>
          ) : null}
        </div>
      </CardFooter>
    </Card>
  );
};
