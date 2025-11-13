// // src/pages/ExternalJobDetailPage.tsx (New: Details page for external jobs)
// import { useEffect, useState } from "react";
// import { useParams, useSearchParams, useNavigate } from "react-router-dom";
// import { fetchAllExternalJobs } from "@/lib/api";
// import { useAuthStore } from "@/stores/authStore";
// import { Header } from "@/components/Header";
// import { Sidebar } from "@/components/Sidebar";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/separator";
// import {
//   DollarSign,
//   Calendar,
//   User,
//   ArrowLeft,
//   FileText,
//   ExternalLink,
// } from "lucide-react";
// import { format } from "date-fns";
// import { toast } from "sonner";
// import { Loader2 } from "lucide-react";
// import { ExternalProject } from "./ExternalJobsPage"; // Import type

// export default function ExternalJobDetailPage() {
//   const { originalId } = useParams<{ originalId: string }>();
//   const [searchParams] = useSearchParams();
//   const searchTag = searchParams.get("query") || "dev";
//   const { user } = useAuthStore();
//   const navigate = useNavigate();
//   const [job, setJob] = useState<ExternalProject | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadJob = async () => {
//       if (!originalId) {
//         toast.error("Invalid job ID");
//         navigate("/external-jobs");
//         return;
//       }
//       try {
//         const allJobs = await fetchAllExternalJobs(searchTag);
//         const foundJob = allJobs.find(
//           (j: ExternalProject) => j.originalId.toString() === originalId
//         );
//         if (foundJob) {
//           setJob(foundJob);
//         } else {
//           toast.error("Job not found");
//           navigate("/external-jobs");
//         }
//       } catch (error) {
//         toast.error("Failed to load job details");
//         navigate("/external-jobs");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadJob();
//   }, [originalId, searchTag, navigate]);

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

//   if (!job) {
//     return (
//       <div className="min-h-screen flex flex-col">
//         <Header />
//         <div className="flex flex-1 items-center justify-center">
//           <div className="text-center">
//             <h2 className="text-2xl font-bold mb-4">Job Not Found</h2>
//             <Button onClick={() => navigate("/external-jobs")}>
//               Back to External Jobs
//             </Button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   const createdAtDate = job.createdAt ? new Date(job.createdAt) : null;
//   const formattedDate =
//     createdAtDate && !isNaN(createdAtDate.getTime())
//       ? format(createdAtDate, "MMM d, yyyy")
//       : "N/A";

//   const handleApply = () => {
//     window.open(job.jobUrl, "_blank");
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Header />
//       <div className="flex flex-1">
//         <Sidebar />
//         <main className="flex-1 p-6 overflow-auto">
//           <div className="max-w-5xl mx-auto space-y-6">
//             <Button
//               variant="ghost"
//               onClick={() => navigate(`/external-jobs?query=${searchTag}`)}
//             >
//               <ArrowLeft className="w-4 h-4 mr-2" />
//               Back to External Jobs
//             </Button>

//             <Card>
//               <CardHeader>
//                 <div className="flex items-start justify-between gap-4">
//                   <div className="flex-1">
//                     <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {job.skills.map((skill) => (
//                         <Badge key={skill} variant="outline">
//                           {skill}
//                         </Badge>
//                       ))}
//                     </div>
//                   </div>
//                   <Badge variant="secondary">External - {job.source}</Badge>
//                 </div>

//                 <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
//                   <div className="flex items-center gap-2">
//                     <DollarSign className="w-4 h-4" />
//                     <span className="font-semibold text-foreground">
//                       ${job.budget.toLocaleString()}
//                     </span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <User className="w-4 h-4" />
//                     <span>{job.client?.name || "Unknown"}</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Calendar className="w-4 h-4" />
//                     <span>Posted {formattedDate}</span>
//                   </div>
//                   {job.jobIndustry && (
//                     <div className="flex items-center gap-2">
//                       <FileText className="w-4 h-4" />
//                       <span>{job.jobIndustry}</span>
//                     </div>
//                   )}
//                   {job.jobType && (
//                     <div className="flex items-center gap-2">
//                       <FileText className="w-4 h-4" />
//                       <span>{job.jobType}</span>
//                     </div>
//                   )}
//                   {job.jobLevel && (
//                     <div className="flex items-center gap-2">
//                       <FileText className="w-4 h-4" />
//                       <span>{job.jobLevel}</span>
//                     </div>
//                   )}
//                 </div>
//               </CardHeader>

//               <CardContent className="space-y-6">
//                 <div>
//                   <h3 className="font-semibold mb-2">Description</h3>
//                   <p className="text-muted-foreground whitespace-pre-wrap">
//                     {job.description}
//                   </p>
//                 </div>

//                 <div className="flex gap-4">
//                   <Button onClick={handleApply} className="flex-1">
//                     <ExternalLink className="w-4 h-4 mr-2" />
//                     Apply on Jobicy
//                   </Button>
//                   <Link to={`/projects`} className="flex-1">
//                     <Button variant="outline" className="w-full">
//                       View Local Projects
//                     </Button>
//                   </Link>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// src/pages/ExternalJobDetailPage.tsx (Fixed: Added missing Link import from react-router-dom)
import { useEffect, useState } from "react";
import {
  useParams,
  useSearchParams,
  useNavigate,
  Link,
} from "react-router-dom";
import { fetchAllExternalJobs } from "@/lib/api";
import { useAuthStore } from "@/stores/authStore";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  DollarSign,
  Calendar,
  User,
  ArrowLeft,
  FileText,
  ExternalLink,
} from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { ExternalProject } from "./ExternalJobsPage"; // Import type

export default function ExternalJobDetailPage() {
  const { originalId } = useParams<{ originalId: string }>();
  const [searchParams] = useSearchParams();
  const searchTag = searchParams.get("query") || "dev";
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const [job, setJob] = useState<ExternalProject | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadJob = async () => {
      if (!originalId) {
        toast.error("Invalid job ID");
        navigate("/external-jobs");
        return;
      }
      try {
        const allJobs = await fetchAllExternalJobs(searchTag);
        const foundJob = allJobs.find(
          (j: ExternalProject) => j.originalId.toString() === originalId
        );
        if (foundJob) {
          setJob(foundJob);
        } else {
          toast.error("Job not found");
          navigate("/external-jobs");
        }
      } catch (error) {
        toast.error("Failed to load job details");
        navigate("/external-jobs");
      } finally {
        setLoading(false);
      }
    };

    loadJob();
  }, [originalId, searchTag, navigate]);

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

  if (!job) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Job Not Found</h2>
            <Button onClick={() => navigate("/external-jobs")}>
              Back to External Jobs
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const createdAtDate = job.createdAt ? new Date(job.createdAt) : null;
  const formattedDate =
    createdAtDate && !isNaN(createdAtDate.getTime())
      ? format(createdAtDate, "MMM d, yyyy")
      : "N/A";

  const handleApply = () => {
    window.open(job.jobUrl, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-5xl mx-auto space-y-6">
            <Button
              variant="ghost"
              onClick={() => navigate(`/external-jobs?query=${searchTag}`)}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to External Jobs
            </Button>

            <Card>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.skills.map((skill) => (
                        <Badge key={skill} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Badge variant="secondary">External - {job.source}</Badge>
                </div>

                <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    <span className="font-semibold text-foreground">
                      ${job.budget.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{job.client?.name || "Unknown"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Posted {formattedDate}</span>
                  </div>
                  {job.jobIndustry && (
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      <span>{job.jobIndustry}</span>
                    </div>
                  )}
                  {job.jobType && (
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      <span>{job.jobType}</span>
                    </div>
                  )}
                  {job.jobLevel && (
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      <span>{job.jobLevel}</span>
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Description</h3>
                  <p className="text-muted-foreground whitespace-pre-wrap">
                    {job.description}
                  </p>
                </div>

                <div className="flex gap-4">
                  <Button onClick={handleApply} className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Apply on Jobicy
                  </Button>
                  <Link to={`/projects`} className="flex-1">
                    <Button variant="outline" className="w-full">
                      View Local Projects
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
