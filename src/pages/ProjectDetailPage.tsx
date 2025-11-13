// import { useEffect, useState, useCallback } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import {
//   getProject,
//   getMatches,
//   initiateChat,
//   generateAIProposal,
// } from "@/lib/api";
// import { useAuthStore } from "@/stores/authStore";
// import { Project, Bid, FreelancerMatch } from "@/types";
// import { Header } from "@/components/Header";
// import { Sidebar } from "@/components/Sidebar";
// import { BidForm } from "@/components/BidForm";
// import { MatchList } from "@/components/MatchList";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/separator";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import {
//   DollarSign,
//   Calendar,
//   User,
//   ArrowLeft,
//   FileText,
//   Users,
//   MessageCircle,
//   Bot,
//   Send,
// } from "lucide-react";
// import { format } from "date-fns";
// import { toast } from "sonner";
// import { Loader2, Copy } from "lucide-react";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Textarea } from "@/components/ui/textarea";

// export default function ProjectDetailPage() {
//   const { id } = useParams<{ id: string }>();
//   const { user } = useAuthStore();
//   const navigate = useNavigate();
//   const [project, setProject] = useState<Project | null>(null);
//   const [matches, setMatches] = useState<FreelancerMatch[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [bidFormOpen, setBidFormOpen] = useState(false);
//   const [loadingMatches, setLoadingMatches] = useState(false);
//   const [proposalDialogOpen, setProposalDialogOpen] = useState(false);
//   const [generatedProposal, setGeneratedProposal] = useState("");
//   const [suggestedNextStep, setSuggestedNextStep] = useState("");
//   const [loadingProposal, setLoadingProposal] = useState(false);
//   const [initialProposalForBid, setInitialProposalForBid] = useState("");

//   // Fetch single project by ID (refetch callback for post-bid update)
//   const fetchProject = useCallback(async () => {
//     if (!id) {
//       toast.error("Invalid project ID");
//       navigate("/projects");
//       return;
//     }
//     try {
//       setLoading(true);
//       const response = await getProject(id);
//       if (response.data?.success && response.data?.data) {
//         // FIXED: Ensure status defaults to "open" if undefined (backend issue)
//         const projectData = {
//           ...response.data.data,
//           status: response.data.data.status || "open",
//         };
//         setProject(projectData);
//       } else {
//         toast.error("Project not found");
//         navigate("/projects");
//       }
//     } catch (error: any) {
//       console.error("Project fetch error:", error);
//       toast.error(error.response?.data?.message || "Failed to load project");
//       navigate("/projects");
//     } finally {
//       setLoading(false);
//     }
//   }, [id, navigate]);

//   useEffect(() => {
//     fetchProject();
//   }, [fetchProject]);

//   // Fetch matches (client-only)
//   const fetchMatches = async () => {
//     if (!id || user?.role !== "client") {
//       toast.error("Only project owners can view matches");
//       return;
//     }
//     setLoadingMatches(true);
//     try {
//       const response = await getMatches(id);
//       if (response.data.success && response.data.data) {
//         setMatches(response.data.data.matches);
//       } else {
//         toast.error("Failed to load matches");
//       }
//     } catch (error: any) {
//       toast.error(error.response?.data?.message || "Failed to load matches");
//     } finally {
//       setLoadingMatches(false);
//     }
//   };

//   // Handle chat initiation
//   const handleChatClick = async () => {
//     if (
//       !project ||
//       !user ||
//       !project.client ||
//       project.client._id.toString() === user._id
//     ) {
//       toast.error("Cannot message: Invalid conditions");
//       return;
//     }

//     if (project.clientChat?.chatId) {
//       navigate(`/chats/${project.clientChat.chatId}`);
//     } else {
//       try {
//         const initialMessage = `Hi ${project.client.name}, I'm interested in your project "${project.title}". Let's discuss!`;
//         const response = await initiateChat({
//           otherUserId: project.client._id,
//           initialMessage,
//         });
//         if (response.data) {
//           toast.success("Chat initiated!");
//           navigate(`/chats/${response.data._id}`);
//         }
//       } catch (error: any) {
//         toast.error(error.response?.data?.message || "Failed to start chat");
//       }
//     }
//   };

//   // Generate AI Proposal for freelancers
//   const generateProposal = async () => {
//     if (!id || user?.role !== "freelancer") {
//       toast.error("Only freelancers can generate proposals");
//       return;
//     }
//     setLoadingProposal(true);
//     try {
//       const response = await generateAIProposal(id);
//       if (response.data.success && response.data.data) {
//         setGeneratedProposal(response.data.data.proposal);
//         setSuggestedNextStep(response.data.data.suggestedNextStep);
//         setInitialProposalForBid(response.data.data.proposal);
//         setProposalDialogOpen(true);
//         toast.success("Proposal generated successfully!");
//       } else {
//         toast.error("Failed to generate proposal");
//       }
//     } catch (error: any) {
//       console.error("Proposal generation error:", error);
//       toast.error(
//         error.response?.data?.message || "Failed to generate proposal"
//       );
//     } finally {
//       setLoadingProposal(false);
//     }
//   };

//   // Open bid form with prefilled proposal from modal
//   const handleUseInBid = () => {
//     setBidFormOpen(true);
//     setProposalDialogOpen(false);
//   };

//   // Refetch project after successful bid (passed to BidForm)
//   const refetchProject = useCallback(() => {
//     fetchProject();
//   }, [fetchProject]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex flex-col">
//         <Header />
//         <div className="flex flex-1 items-center justify-center">
//           <Loader2 className="w-8 h-8 animate-spin text-primary" />
//         </div>
//       </div>
//     );
//   }

//   if (!project) {
//     return (
//       <div className="min-h-screen flex flex-col">
//         <Header />
//         <div className="flex flex-1 items-center justify-center">
//           <div className="text-center">
//             <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
//             <p className="text-muted-foreground mb-6">
//               This project may have been removed or the ID is invalid.
//             </p>
//             <Button onClick={() => navigate("/projects")}>
//               Back to Projects
//             </Button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   const isClient = user?.role === "client";
//   const isFreelancer = user?.role === "freelancer";
//   // FIXED: Use fallback status to ensure canBid works even if backend omits it
//   const projectStatus = project.status || "open";
//   const canBid = isFreelancer && projectStatus === "open";
//   const canChat =
//     isFreelancer &&
//     project.clientChat &&
//     project.client._id.toString() !== user?._id;

//   const createdAtDate = project.createdAt ? new Date(project.createdAt) : null;
//   const formattedDate =
//     createdAtDate && !isNaN(createdAtDate.getTime())
//       ? format(createdAtDate, "MMM d, yyyy")
//       : "N/A";

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Header />
//       <div className="flex flex-1">
//         <Sidebar />
//         <main className="flex-1 p-6 overflow-auto">
//           <div className="max-w-5xl mx-auto space-y-6">
//             <Button variant="ghost" onClick={() => navigate("/projects")}>
//               <ArrowLeft className="w-4 h-4 mr-2" />
//               Back to Projects
//             </Button>

//             <Card>
//               <CardHeader>
//                 <div className="flex items-start justify-between gap-4">
//                   <div className="flex-1">
//                     <CardTitle className="text-2xl mb-2">
//                       {project.title}
//                     </CardTitle>
//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {project.skills.map((skill) => (
//                         <Badge key={skill} variant="outline">
//                           {skill}
//                         </Badge>
//                       ))}
//                     </div>
//                   </div>
//                   <Badge
//                     variant={projectStatus === "open" ? "default" : "secondary"}
//                   >
//                     {projectStatus}
//                   </Badge>
//                 </div>

//                 <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
//                   <div className="flex items-center gap-2">
//                     <DollarSign className="w-4 h-4" />
//                     <span className="font-semibold text-foreground">
//                       ${project.budget.toLocaleString()}
//                     </span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <User className="w-4 h-4" />
//                     <span>{project.client?.name || "Unknown"}</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Calendar className="w-4 h-4" />
//                     <span>Posted {formattedDate}</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <FileText className="w-4 h-4" />
//                     <span>
//                       {project.bids?.length || 0} bid
//                       {project.bids?.length !== 1 ? "s" : ""}
//                     </span>
//                   </div>
//                 </div>
//               </CardHeader>

//               <CardContent className="space-y-6">
//                 <div>
//                   <h3 className="font-semibold mb-2">Description</h3>
//                   <p className="text-muted-foreground whitespace-pre-wrap">
//                     {project.description}
//                   </p>
//                 </div>

//                 {canChat && (
//                   <Button
//                     onClick={handleChatClick}
//                     variant="outline"
//                     className="w-full sm:w-auto"
//                   >
//                     <MessageCircle className="w-4 h-4 mr-2" />
//                     Message Client ({project.clientChat?.name})
//                   </Button>
//                 )}

//                 {canBid && (
//                   <>
//                     <Separator />
//                     <div className="space-y-2">
//                       <Button
//                         onClick={generateProposal}
//                         disabled={loadingProposal}
//                         className="w-full"
//                       >
//                         <Bot className="w-4 h-4 mr-2" />
//                         {loadingProposal
//                           ? "Generating..."
//                           : "Generate AI Proposal"}
//                       </Button>
//                       <Button
//                         onClick={() => setBidFormOpen(true)}
//                         className="w-full"
//                       >
//                         Submit Bid
//                       </Button>
//                     </div>
//                   </>
//                 )}

//                 {isClient && (
//                   <>
//                     <Separator />
//                     <Button
//                       onClick={fetchMatches}
//                       className="w-full sm:w-auto"
//                       disabled={loadingMatches}
//                     >
//                       <Users className="w-4 h-4 mr-2" />
//                       {loadingMatches
//                         ? "Finding Matches..."
//                         : "Find Matching Freelancers"}
//                     </Button>
//                   </>
//                 )}
//               </CardContent>
//             </Card>

//             <Tabs defaultValue="bids" className="w-full">
//               <TabsList>
//                 <TabsTrigger value="bids">
//                   Bids ({project.bids?.length || 0})
//                 </TabsTrigger>
//                 {isClient && (
//                   <TabsTrigger value="matches">
//                     Matches ({matches.length})
//                   </TabsTrigger>
//                 )}
//               </TabsList>

//               <TabsContent value="bids" className="mt-6">
//                 {project.bids && project.bids.length > 0 ? (
//                   <div className="space-y-4">
//                     {project.bids.map((bid: Bid) => (
//                       <Card key={bid._id}>
//                         <CardContent className="pt-6">
//                           <div className="flex items-start justify-between mb-4">
//                             <div>
//                               <h4 className="font-semibold">
//                                 {bid.freelancer?.name || "Unknown"}
//                               </h4>
//                               <p className="text-sm text-muted-foreground">
//                                 {bid.freelancer?.email || "N/A"}
//                               </p>
//                             </div>
//                             <div className="text-right">
//                               <div className="font-bold text-lg">
//                                 ${bid.amount.toLocaleString()}
//                               </div>
//                               {bid.freelancer?.hourlyRate && (
//                                 <div className="text-sm text-muted-foreground">
//                                   ${bid.freelancer.hourlyRate}/hr
//                                 </div>
//                               )}
//                             </div>
//                           </div>
//                           <Separator className="my-4" />
//                           <div>
//                             <h5 className="font-medium mb-2">Proposal</h5>
//                             <p className="text-sm text-muted-foreground whitespace-pre-wrap">
//                               {bid.proposal}
//                             </p>
//                           </div>
//                           <div className="text-xs text-muted-foreground mt-4">
//                             Submitted{" "}
//                             {bid.createdAt
//                               ? format(new Date(bid.createdAt), "MMM d, yyyy")
//                               : "N/A"}
//                           </div>
//                         </CardContent>
//                       </Card>
//                     ))}
//                   </div>
//                 ) : (
//                   <Card>
//                     <CardContent className="py-12 text-center text-muted-foreground">
//                       No bids yet
//                     </CardContent>
//                   </Card>
//                 )}
//               </TabsContent>

//               {isClient && (
//                 <TabsContent value="matches" className="mt-6">
//                   <MatchList matches={matches} />
//                 </TabsContent>
//               )}
//             </Tabs>
//           </div>
//         </main>
//       </div>

//       {canBid && (
//         <BidForm
//           projectId={project._id}
//           initialProposal={initialProposalForBid}
//           open={bidFormOpen}
//           onOpenChange={setBidFormOpen}
//           onSuccess={refetchProject}
//         />
//       )}

//       {/* AI Proposal Dialog */}
//       <Dialog open={proposalDialogOpen} onOpenChange={setProposalDialogOpen}>
//         <DialogContent className="max-w-2xl">
//           <DialogHeader>
//             <DialogTitle>AI-Generated Proposal</DialogTitle>
//             <DialogDescription>
//               Here's a customized proposal for "{project?.title}". Review, edit,
//               and copy it to use in your bid.
//             </DialogDescription>
//           </DialogHeader>
//           <div className="space-y-4">
//             <Textarea
//               value={generatedProposal}
//               readOnly
//               className="min-h-[200px] font-medium"
//               placeholder="Generated proposal will appear here..."
//             />
//             <div className="flex gap-2">
//               <Button
//                 onClick={() => {
//                   navigator.clipboard.writeText(generatedProposal);
//                   toast.success("Copied to clipboard!");
//                 }}
//                 className="flex-1"
//               >
//                 <Copy className="w-4 h-4 mr-2" />
//                 Copy Proposal
//               </Button>
//               {projectStatus === "open" && (
//                 <Button
//                   onClick={handleUseInBid}
//                   variant="default"
//                   className="flex-1"
//                 >
//                   <Send className="w-4 h-4 mr-2" />
//                   Use in Bid
//                 </Button>
//               )}
//               <Button
//                 variant="outline"
//                 onClick={() => setProposalDialogOpen(false)}
//                 className="flex-1"
//               >
//                 Close
//               </Button>
//             </div>
//             <p className="text-xs text-muted-foreground">
//               {suggestedNextStep ||
//                 (projectStatus === "open"
//                   ? "Submit this with your bid to stand out!"
//                   : "Project is closed—use for reference.")}
//             </p>
//           </div>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }

import { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getProject,
  getMatches,
  initiateChat,
  generateAIProposal,
} from "@/lib/api";
import { useAuthStore } from "@/stores/authStore";
import { Project, Bid, FreelancerMatch } from "@/types";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { BidForm } from "@/components/BidForm";
import { MatchList } from "@/components/MatchList";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DollarSign,
  Calendar,
  User,
  ArrowLeft,
  FileText,
  Users,
  MessageCircle,
  Bot,
  Send,
} from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";
import { Loader2, Copy } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [matches, setMatches] = useState<FreelancerMatch[]>([]);
  const [loading, setLoading] = useState(true);
  const [bidFormOpen, setBidFormOpen] = useState(false);
  const [loadingMatches, setLoadingMatches] = useState(false);
  const [proposalDialogOpen, setProposalDialogOpen] = useState(false);
  const [generatedProposal, setGeneratedProposal] = useState("");
  const [suggestedNextStep, setSuggestedNextStep] = useState("");
  const [loadingProposal, setLoadingProposal] = useState(false);
  const [initialProposalForBid, setInitialProposalForBid] = useState("");

  // Fetch single project by ID (refetch callback for post-bid update)
  const fetchProject = useCallback(async () => {
    if (!id) {
      toast.error("Invalid project ID");
      navigate("/projects");
      return;
    }
    try {
      setLoading(true);
      const response = await getProject(id);
      if (response.data?.success && response.data?.data) {
        // FIXED: Ensure status defaults to "open" if undefined (backend issue)
        const projectData = {
          ...response.data.data,
          status: response.data.data.status || "open",
        };
        setProject(projectData);
      } else {
        toast.error("Project not found");
        navigate("/projects");
      }
    } catch (error: any) {
      console.error("Project fetch error:", error);
      toast.error(error.response?.data?.message || "Failed to load project");
      navigate("/projects");
    } finally {
      setLoading(false);
    }
  }, [id, navigate]);

  useEffect(() => {
    fetchProject();
  }, [fetchProject]);

  // Fetch matches (client-only)
  const fetchMatches = async () => {
    if (!id || user?.role !== "client") {
      toast.error("Only project owners can view matches");
      return;
    }
    setLoadingMatches(true);
    try {
      const response = await getMatches(id);
      if (response.data.success && response.data.data) {
        setMatches(response.data.data.matches);
      } else {
        toast.error("Failed to load matches");
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to load matches");
    } finally {
      setLoadingMatches(false);
    }
  };

  // Handle chat initiation
  const handleChatClick = async () => {
    if (
      !project ||
      !user ||
      !project.client ||
      project.client._id.toString() === user._id
    ) {
      toast.error("Cannot message: Invalid conditions");
      return;
    }

    if (project.clientChat?.chatId) {
      navigate(`/chats/${project.clientChat.chatId}`);
    } else {
      try {
        const initialMessage = `Hi ${project.client.name}, I'm interested in your project "${project.title}". Let's discuss!`;
        const response = await initiateChat({
          otherUserId: project.client._id,
          initialMessage,
        });
        if (response.data) {
          toast.success("Chat initiated!");
          navigate(`/chats/${response.data._id}`);
        }
      } catch (error: any) {
        toast.error(error.response?.data?.message || "Failed to start chat");
      }
    }
  };

  // Generate AI Proposal for freelancers
  const generateProposal = async () => {
    if (!id || user?.role !== "freelancer") {
      toast.error("Only freelancers can generate proposals");
      return;
    }
    setLoadingProposal(true);
    try {
      const response = await generateAIProposal(id);
      if (response.data.success && response.data.data) {
        setGeneratedProposal(response.data.data.proposal);
        setSuggestedNextStep(response.data.data.suggestedNextStep);
        setInitialProposalForBid(response.data.data.proposal);
        setProposalDialogOpen(true);
        toast.success("Proposal generated successfully!");
      } else {
        toast.error("Failed to generate proposal");
      }
    } catch (error: any) {
      console.error("Proposal generation error:", error);
      toast.error(
        error.response?.data?.message || "Failed to generate proposal"
      );
    } finally {
      setLoadingProposal(false);
    }
  };

  // Open bid form with prefilled proposal from modal
  const handleUseInBid = () => {
    setBidFormOpen(true);
    setProposalDialogOpen(false);
  };

  // Refetch project after successful bid (passed to BidForm)
  const refetchProject = useCallback(() => {
    fetchProject();
  }, [fetchProject]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex flex-1 items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
            <p className="text-muted-foreground mb-6">
              This project may have been removed or the ID is invalid.
            </p>
            <Button onClick={() => navigate("/projects")}>
              Back to Projects
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const isClient = user?.role === "client";
  const isFreelancer = user?.role === "freelancer";
  // FIXED: Use fallback status to ensure canBid works even if backend omits it
  const projectStatus = project.status || "open";
  const canBid = isFreelancer && projectStatus === "open";
  const canChat =
    isFreelancer &&
    project.clientChat &&
    project.client._id.toString() !== user?._id;

  const createdAtDate = project.createdAt ? new Date(project.createdAt) : null;
  const formattedDate =
    createdAtDate && !isNaN(createdAtDate.getTime())
      ? format(createdAtDate, "MMM d, yyyy")
      : "N/A";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-5xl mx-auto space-y-6">
            <Button variant="ghost" onClick={() => navigate("/projects")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>

            <Card>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">
                      {project.title}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.skills.map((skill) => (
                        <Badge key={skill} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Badge
                    variant={projectStatus === "open" ? "default" : "secondary"}
                  >
                    {projectStatus}
                  </Badge>
                </div>

                <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    <span className="font-semibold text-foreground">
                      ${project.budget.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{project.client?.name || "Unknown"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Posted {formattedDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span>
                      {project.bids?.length || 0} bid
                      {project.bids?.length !== 1 ? "s" : ""}
                    </span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Description</h3>
                  <p className="text-muted-foreground whitespace-pre-wrap">
                    {project.description}
                  </p>
                </div>

                {canChat && (
                  <Button
                    onClick={handleChatClick}
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Message Client ({project.clientChat?.name})
                  </Button>
                )}

                {canBid && (
                  <>
                    <Separator />
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button
                        onClick={generateProposal}
                        disabled={loadingProposal}
                        variant="outline"
                        className="flex-1"
                      >
                        <Bot className="w-4 h-4 mr-2" />
                        {loadingProposal ? "Generating..." : "AI Proposal"}
                      </Button>
                      <Button
                        onClick={() => setBidFormOpen(true)}
                        className="flex-1"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Submit Bid
                      </Button>
                    </div>
                  </>
                )}

                {isClient && (
                  <>
                    <Separator />
                    <Button
                      onClick={fetchMatches}
                      className="w-full sm:w-auto"
                      disabled={loadingMatches}
                    >
                      <Users className="w-4 h-4 mr-2" />
                      {loadingMatches
                        ? "Finding Matches..."
                        : "Find Matching Freelancers"}
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>

            {isClient && (
              <Tabs defaultValue="bids" className="w-full">
                <TabsList>
                  <TabsTrigger value="bids">
                    Bids ({project.bids?.length || 0})
                  </TabsTrigger>
                  <TabsTrigger value="matches">
                    Matches ({matches.length})
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="bids" className="mt-6">
                  {project.bids && project.bids.length > 0 ? (
                    <div className="space-y-4">
                      {project.bids.map((bid: Bid) => (
                        <Card key={bid._id}>
                          <CardContent className="pt-6">
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <h4 className="font-semibold">
                                  {bid.freelancer?.name || "Unknown"}
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                  {bid.freelancer?.email || "N/A"}
                                </p>
                              </div>
                              <div className="text-right">
                                <div className="font-bold text-lg">
                                  ${bid.amount.toLocaleString()}
                                </div>
                                {bid.freelancer?.hourlyRate && (
                                  <div className="text-sm text-muted-foreground">
                                    ${bid.freelancer.hourlyRate}/hr
                                  </div>
                                )}
                              </div>
                            </div>
                            <Separator className="my-4" />
                            <div>
                              <h5 className="font-medium mb-2">Proposal</h5>
                              <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                                {bid.proposal}
                              </p>
                            </div>
                            <div className="text-xs text-muted-foreground mt-4">
                              Submitted{" "}
                              {bid.createdAt
                                ? format(new Date(bid.createdAt), "MMM d, yyyy")
                                : "N/A"}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <Card>
                      <CardContent className="py-12 text-center text-muted-foreground">
                        No bids yet
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>

                <TabsContent value="matches" className="mt-6">
                  <MatchList matches={matches} />
                </TabsContent>
              </Tabs>
            )}
          </div>
        </main>
      </div>

      {canBid && (
        <BidForm
          projectId={project._id}
          initialProposal={initialProposalForBid}
          open={bidFormOpen}
          onOpenChange={setBidFormOpen}
          onSuccess={refetchProject}
        />
      )}

      {/* AI Proposal Dialog */}
      <Dialog open={proposalDialogOpen} onOpenChange={setProposalDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>AI-Generated Proposal</DialogTitle>
            <DialogDescription>
              Here's a customized proposal for "{project?.title}". Review, edit,
              and copy it to use in your bid.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <Textarea
              value={generatedProposal}
              readOnly
              className="min-h-[200px] font-medium"
              placeholder="Generated proposal will appear here..."
            />
            <div className="flex gap-2">
              <Button
                onClick={() => {
                  navigator.clipboard.writeText(generatedProposal);
                  toast.success("Copied to clipboard!");
                }}
                className="flex-1"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy Proposal
              </Button>
              {projectStatus === "open" && (
                <Button
                  onClick={handleUseInBid}
                  variant="default"
                  className="flex-1"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Use in Bid
                </Button>
              )}
              <Button
                variant="outline"
                onClick={() => setProposalDialogOpen(false)}
                className="flex-1"
              >
                Close
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              {suggestedNextStep ||
                (projectStatus === "open"
                  ? "Submit this with your bid to stand out!"
                  : "Project is closed—use for reference.")}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
