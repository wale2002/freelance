// // // // src/pages/ExternalJobsPage.tsx (New: Listing page for external jobs)
// // // import { useEffect, useState } from "react";
// // // import { useSearchParams } from "react-router-dom";
// // // import { useAuthStore } from "@/stores/authStore";
// // // import { Header } from "@/components/Header";
// // // import { Sidebar } from "@/components/Sidebar";
// // // import { ProjectCard } from "@/components/ProjectCard"; // Reuse, but external jobs match Project shape mostly
// // // import { Button } from "@/components/ui/button";
// // // import { Input } from "@/components/ui/input";
// // // import { Search, ExternalLink } from "lucide-react";
// // // import { fetchExternalJobs } from "@/lib/api";
// // // import { Link } from "react-router-dom";
// // // import { toast } from "sonner";
// // // import { Loader2 } from "lucide-react";

// // // interface ExternalProject extends Omit<Project, "bids" | "clientChat"> {
// // //   source: "jobicy";
// // //   jobUrl: string;
// // //   originalId: number;
// // //   companyLogo?: string;
// // //   jobType?: string;
// // //   jobIndustry?: string;
// // //   jobLevel?: string;
// // // }

// // // export default function ExternalJobsPage() {
// // //   const { user } = useAuthStore();
// // //   const [searchParams, setSearchParams] = useSearchParams();
// // //   const [projects, setProjects] = useState<ExternalProject[]>([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [total, setTotal] = useState(0);
// // //   const [page, setPage] = useState(1);
// // //   const [limit] = useState(10);
// // //   const [searchTag, setSearchTag] = useState(
// // //     searchParams.get("query") || "dev"
// // //   );

// // //   useEffect(() => {
// // //     const loadJobs = async () => {
// // //       try {
// // //         setLoading(true);
// // //         const data = await fetchExternalJobs(page, limit, searchTag);
// // //         setProjects(data.projects || []);
// // //         setTotal(data.total || 0);
// // //       } catch (error) {
// // //         toast.error("Failed to load external jobs");
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     loadJobs();
// // //   }, [page, limit, searchTag]);

// // //   const handleSearch = (e: React.FormEvent) => {
// // //     e.preventDefault();
// // //     setPage(1);
// // //     setSearchParams({ query: searchTag });
// // //   };

// // //   const handlePageChange = (newPage: number) => {
// // //     setPage(newPage);
// // //   };

// // //   if (loading) {
// // //     return (
// // //       <div className="min-h-screen flex flex-col">
// // //         <Header />
// // //         <div className="flex flex-1 items-center justify-center">
// // //           <Loader2 className="w-8 h-8 animate-spin text-primary" />
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="min-h-screen flex flex-col">
// // //       <Header />
// // //       <div className="flex flex-1">
// // //         <Sidebar />
// // //         <main className="flex-1 p-6 overflow-auto">
// // //           <div className="max-w-7xl mx-auto space-y-6">
// // //             <div className="flex items-center justify-between">
// // //               <div>
// // //                 <h1 className="text-3xl font-bold">External Jobs</h1>
// // //                 <p className="text-muted-foreground mt-2">
// // //                   Discover remote opportunities from Jobicy
// // //                 </p>
// // //               </div>
// // //               <Link to="/projects">
// // //                 <Button variant="outline">View Local Projects</Button>
// // //               </Link>
// // //             </div>

// // //             <form onSubmit={handleSearch} className="flex gap-3">
// // //               <div className="relative flex-1">
// // //                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
// // //                 <Input
// // //                   placeholder="Search by tag (e.g., python, dev)"
// // //                   className="pl-9"
// // //                   value={searchTag}
// // //                   onChange={(e) => setSearchTag(e.target.value)}
// // //                 />
// // //               </div>
// // //               <Button type="submit">Search</Button>
// // //             </form>

// // //             {projects.length > 0 ? (
// // //               <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
// // //                 {projects.map((project) => (
// // //                   <ProjectCard
// // //                     key={project._id}
// // //                     project={project}
// // //                     // Pass originalId for details link
// // //                     detailLink={`/external-jobs/${project.originalId}?query=${searchTag}`}
// // //                     // Override apply button for external
// // //                     isExternal
// // //                     jobUrl={project.jobUrl}
// // //                   />
// // //                 ))}
// // //               </div>
// // //             ) : (
// // //               <div className="text-center py-12 text-muted-foreground">
// // //                 No external jobs found for "{searchTag}". Try another tag.
// // //               </div>
// // //             )}

// // //             {/* Simple pagination */}
// // //             {total > limit && (
// // //               <div className="flex justify-center gap-2">
// // //                 <Button
// // //                   variant="outline"
// // //                   onClick={() => handlePageChange(page - 1)}
// // //                   disabled={page === 1}
// // //                 >
// // //                   Previous
// // //                 </Button>
// // //                 <span className="px-4 py-2">
// // //                   Page {page} of {Math.ceil(total / limit)}
// // //                 </span>
// // //                 <Button
// // //                   variant="outline"
// // //                   onClick={() => handlePageChange(page + 1)}
// // //                   disabled={page * limit >= total}
// // //                 >
// // //                   Next
// // //                 </Button>
// // //               </div>
// // //             )}
// // //           </div>
// // //         </main>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // src/pages/ExternalJobsPage.tsx (Fixed: Removed unused detailLink prop passing; relies on ProjectCard computing path from originalId and isExternal)
// // import { useEffect, useState } from "react";
// // import { useSearchParams } from "react-router-dom";
// // import { useAuthStore } from "@/stores/authStore";
// // import { Header } from "@/components/Header";
// // import { Sidebar } from "@/components/Sidebar";
// // import { ProjectCard } from "@/components/ProjectCard"; // Reuse, but external jobs match Project shape mostly
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import { Search, ExternalLink } from "lucide-react";
// // import { fetchExternalJobs } from "@/lib/api";
// // import { Link } from "react-router-dom";
// // import { toast } from "sonner";
// // import { Loader2 } from "lucide-react";

// // interface ExternalProject extends Omit<Project, "bids" | "clientChat"> {
// //   source: "jobicy";
// //   jobUrl: string;
// //   originalId: number;
// //   companyLogo?: string;
// //   jobType?: string;
// //   jobIndustry?: string;
// //   jobLevel?: string;
// // }

// // export default function ExternalJobsPage() {
// //   const { user } = useAuthStore();
// //   const [searchParams, setSearchParams] = useSearchParams();
// //   const [projects, setProjects] = useState<ExternalProject[]>([]);
// //   const [loading, setLoading] = useState(true);
// //   const [total, setTotal] = useState(0);
// //   const [page, setPage] = useState(1);
// //   const [limit] = useState(10);
// //   const [searchTag, setSearchTag] = useState(
// //     searchParams.get("query") || "dev"
// //   );

// //   useEffect(() => {
// //     const loadJobs = async () => {
// //       try {
// //         setLoading(true);
// //         const data = await fetchExternalJobs(page, limit, searchTag);
// //         setProjects(data.projects || []);
// //         setTotal(data.total || 0);
// //       } catch (error) {
// //         toast.error("Failed to load external jobs");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     loadJobs();
// //   }, [page, limit, searchTag]);

// //   const handleSearch = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setPage(1);
// //     setSearchParams({ query: searchTag });
// //   };

// //   const handlePageChange = (newPage: number) => {
// //     setPage(newPage);
// //   };

// //   if (loading) {
// //     return (
// //       <div className="min-h-screen flex flex-col">
// //         <Header />
// //         <div className="flex flex-1 items-center justify-center">
// //           <Loader2 className="w-8 h-8 animate-spin text-primary" />
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen flex flex-col">
// //       <Header />
// //       <div className="flex flex-1">
// //         <Sidebar />
// //         <main className="flex-1 p-6 overflow-auto">
// //           <div className="max-w-7xl mx-auto space-y-6">
// //             <div className="flex items-center justify-between">
// //               <div>
// //                 <h1 className="text-3xl font-bold">External Jobs</h1>
// //                 <p className="text-black text-opacity-95 mb-6">
// //                   Discover remote opportunities from Jobicy
// //                 </p>
// //               </div>
// //               <Link to="/projects">
// //                 <Button variant="outline">View Local Projects</Button>
// //               </Link>
// //             </div>

// //             <form onSubmit={handleSearch} className="flex gap-3">
// //               <div className="relative flex-1">
// //                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
// //                 <Input
// //                   placeholder="Search by tag (e.g., python, dev)"
// //                   className="pl-9"
// //                   value={searchTag}
// //                   onChange={(e) => setSearchTag(e.target.value)}
// //                 />
// //               </div>
// //               <Button type="submit">Search</Button>
// //             </form>

// //             {projects.length > 0 ? (
// //               <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
// //                 {projects.map((project) => (
// //                   <ProjectCard
// //                     key={project._id}
// //                     project={project}
// //                     // FIXED: Rely on ProjectCard to compute path using originalId; pass query via router state if needed, but for simplicity, pass as prop or use context—here, omit detailLink as ProjectCard computes
// //                     isExternal={true}
// //                     jobUrl={project.jobUrl}
// //                   />
// //                 ))}
// //               </div>
// //             ) : (
// //               <div className="text-center py-12 text-muted-foreground">
// //                 No external jobs found for "{searchTag}". Try another tag.
// //               </div>
// //             )}

// //             {/* Simple pagination */}
// //             {total > limit && (
// //               <div className="flex justify-center gap-2">
// //                 <Button
// //                   variant="outline"
// //                   onClick={() => handlePageChange(page - 1)}
// //                   disabled={page === 1}
// //                 >
// //                   Previous
// //                 </Button>
// //                 <span className="px-4 py-2">
// //                   Page {page} of {Math.ceil(total / limit)}
// //                 </span>
// //                 <Button
// //                   variant="outline"
// //                   onClick={() => handlePageChange(page + 1)}
// //                   disabled={page * limit >= total}
// //                 >
// //                   Next
// //                 </Button>
// //               </div>
// //             )}
// //           </div>
// //         </main>
// //       </div>
// //     </div>
// //   );
// // }

// // src/pages/ExternalJobsPage.tsx (Fixed: Removed unused detailLink prop passing; relies on ProjectCard computing path from originalId and isExternal)
// import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import { useAuthStore } from "@/stores/authStore";
// import { Header } from "@/components/Header";
// import { Sidebar } from "@/components/Sidebar";
// import { ProjectCard } from "@/components/ProjectCard"; // Reuse, but external jobs match Project shape mostly
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Search, ExternalLink } from "lucide-react";
// import { fetchExternalJobs } from "@/lib/api";
// import { Link } from "react-router-dom";
// import { toast } from "sonner";
// import { Loader2 } from "lucide-react";

// interface ExternalProject extends Omit<Project, "bids" | "clientChat"> {
//   source: "jobicy";
//   jobUrl: string;
//   originalId: number;
//   companyLogo?: string;
//   jobType?: string;
//   jobIndustry?: string;
//   jobLevel?: string;
// }

// export default function ExternalJobsPage() {
//   const { user } = useAuthStore();
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [projects, setProjects] = useState<ExternalProject[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [total, setTotal] = useState(0);
//   const [page, setPage] = useState(1);
//   const [limit] = useState(6);
//   const [searchTag, setSearchTag] = useState(
//     searchParams.get("query") || "dev"
//   );

//   useEffect(() => {
//     const loadJobs = async () => {
//       try {
//         setLoading(true);
//         const data = await fetchExternalJobs(page, limit, searchTag);
//         setProjects(data.projects || []);
//         setTotal(data.total || 0);
//       } catch (error) {
//         toast.error("Failed to load external jobs");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadJobs();
//   }, [page, limit, searchTag]);

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     setPage(1);
//     setSearchParams({ query: searchTag });
//   };

//   const handlePageChange = (newPage: number) => {
//     setPage(newPage);
//   };

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

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Header />
//       <div className="flex flex-1">
//         <Sidebar />
//         <main className="flex-1 p-6 overflow-auto">
//           <div className="max-w-7xl mx-auto space-y-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <h1 className="text-3xl font-bold">External Jobs</h1>
//                 <p className="text-black text-opacity-95 mb-6">
//                   Discover remote opportunities from Jobicy
//                 </p>
//               </div>
//               <Link to="/projects">
//                 <Button variant="outline">View Local Projects</Button>
//               </Link>
//             </div>

//             <form onSubmit={handleSearch} className="flex gap-3">
//               <div className="relative flex-1">
//                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
//                 <Input
//                   placeholder="Search by tag (e.g., python, dev)"
//                   className="pl-9"
//                   value={searchTag}
//                   onChange={(e) => setSearchTag(e.target.value)}
//                 />
//               </div>
//               <Button type="submit">Search</Button>
//             </form>

//             {projects.length > 0 ? (
//               <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//                 {projects.map((project) => (
//                   <ProjectCard
//                     key={project._id}
//                     project={project}
//                     // FIXED: Rely on ProjectCard to compute path using originalId; pass query via router state if needed, but for simplicity, pass as prop or use context—here, omit detailLink as ProjectCard computes
//                     isExternal={true}
//                     jobUrl={project.jobUrl}
//                   />
//                 ))}
//               </div>
//             ) : (
//               <div className="text-center py-12 text-muted-foreground">
//                 No external jobs found for "{searchTag}". Try another tag.
//               </div>
//             )}

//             {/* Simple pagination */}
//             {total > limit && (
//               <div className="flex justify-center gap-2">
//                 <Button
//                   variant="outline"
//                   onClick={() => handlePageChange(page - 1)}
//                   disabled={page === 1}
//                 >
//                   Previous
//                 </Button>
//                 <span className="px-4 py-2">
//                   Page {page} of {Math.ceil(total / limit)}
//                 </span>
//                 <Button
//                   variant="outline"
//                   onClick={() => handlePageChange(page + 1)}
//                   disabled={page * limit >= total}
//                 >
//                   Next
//                 </Button>
//               </div>
//             )}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// src/pages/ExternalJobsPage.tsx (Fixed: Removed unused detailLink prop passing; relies on ProjectCard computing path from originalId and isExternal)
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAuthStore } from "@/stores/authStore";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { ProjectCard } from "@/components/ProjectCard"; // Reuse, but external jobs match Project shape mostly
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ExternalLink } from "lucide-react";
import { fetchExternalJobs } from "@/lib/api";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import Lottie from "lottie-react";
import rocketAnimation from "@/assets/rocket.json";

interface ExternalProject extends Omit<Project, "bids" | "clientChat"> {
  source: "jobicy";
  jobUrl: string;
  originalId: number;
  companyLogo?: string;
  jobType?: string;
  jobIndustry?: string;
  jobLevel?: string;
}

export default function ExternalJobsPage() {
  const { user } = useAuthStore();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("query") || "";
  const hasInitialQuery = initialQuery && initialQuery.trim() !== "";
  const [projects, setProjects] = useState<ExternalProject[]>([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit] = useState(6);
  const [searchInput, setSearchInput] = useState(initialQuery);
  const [searchQuery, setSearchQuery] = useState<string | null>(
    hasInitialQuery ? initialQuery.trim() : null
  );

  useEffect(() => {
    if (searchQuery === null) return;

    const loadJobs = async () => {
      try {
        setLoading(true);
        const data = await fetchExternalJobs(page, limit, searchQuery);
        setProjects(data.projects || []);
        setTotal(data.total || 0);
      } catch (error) {
        toast.error("Failed to load external jobs");
      } finally {
        setLoading(false);
      }
    };

    loadJobs();
  }, [page, limit, searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchInput.trim();
    if (!query) {
      toast.warning("Please enter a search tag to find jobs.");
      return;
    }
    setSearchQuery(query);
    setPage(1);
    setSearchParams({ query });
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const content =
    searchQuery === null ? (
      <div className="text-center py-12">
        <div className="mx-auto max-w-md mb-6">
          <Lottie
            animationData={rocketAnimation}
            loop={true}
            className="w-48 h-48 mx-auto"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Search for external jobs on job platforms
          </h3>
          <p className="text-muted-foreground">
            Enter a tag like 'python' or 'remote' to get started.
          </p>
        </div>
      </div>
    ) : loading ? (
      <div className="flex justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    ) : projects.length > 0 ? (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project._id}
            project={project}
            // FIXED: Rely on ProjectCard to compute path using originalId; pass query via router state if needed, but for simplicity, pass as prop or use context—here, omit detailLink as ProjectCard computes
            isExternal={true}
            jobUrl={project.jobUrl}
          />
        ))}
      </div>
    ) : (
      <div className="text-center py-12 text-muted-foreground">
        No external jobs found for "{searchQuery}". Try another tag.
      </div>
    );

  const pagination =
    searchQuery !== null && total > limit ? (
      <div className="flex justify-center gap-2">
        <Button
          variant="outline"
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          Previous
        </Button>
        <span className="px-4 py-2">
          Page {page} of {Math.ceil(total / limit)}
        </span>
        <Button
          variant="outline"
          onClick={() => handlePageChange(page + 1)}
          disabled={page * limit >= total}
        >
          Next
        </Button>
      </div>
    ) : null;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold">External Jobs</h1>
                <p className="text-black text-opacity-95 mb-6">
                  Discover remote opportunities from Jobicy
                </p>
              </div>
              <Link to="/projects">
                <Button variant="outline">View Local Projects</Button>
              </Link>
            </div>

            <form onSubmit={handleSearch} className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search by tag (e.g., python, remote)"
                  className="pl-9"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
              </div>
              <Button type="submit">Search</Button>
            </form>

            {content}
            {pagination}
          </div>
        </main>
      </div>
    </div>
  );
}
