// // src/pages/ProjectsPage.tsx (Fixed: Added missing useState import)
// import { useEffect, useState } from "react"; // Fixed: Added useState
// import { useAuthStore } from "@/stores/authStore";
// import { useProjectsStore } from "@/stores/projectsStore"; // Import the store
// import { Header } from "@/components/Header";
// import { Sidebar } from "@/components/Sidebar";
// import { ProjectCard } from "@/components/ProjectCard";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { PlusCircle, Search, Filter } from "lucide-react";
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

// export default function ProjectsPage() {
//   const { user } = useAuthStore();
//   const { projects, loading, fetchProjects, createProject } =
//     useProjectsStore();
//   const [searchQuery, setSearchQuery] = useState(""); // Now defined
//   const [dialogOpen, setDialogOpen] = useState(false); // Now defined

//   const form = useForm<z.infer<typeof projectSchema>>({
//     resolver: zodResolver(projectSchema),
//     defaultValues: {
//       title: "",
//       description: "",
//       skills: "",
//       budget: 0,
//     },
//   });

//   useEffect(() => {
//     fetchProjects(1, 10); // Use store to fetch
//   }, [fetchProjects]);

//   const onSubmit = async (data: z.infer<typeof projectSchema>) => {
//     try {
//       const skillsArray = data.skills
//         .split(",")
//         .map((s) => s.trim())
//         .filter(Boolean);
//       await createProject({
//         // Use store method
//         title: data.title,
//         description: data.description,
//         budget: data.budget,
//         skills: skillsArray,
//       });
//       form.reset();
//       setDialogOpen(false);
//     } catch (error) {
//       // Error handled in store
//     }
//   };

//   const filteredProjects = projects.filter(
//     (p) =>
//       p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       p.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()))
//   );

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
//             ) : filteredProjects.length > 0 ? (
//               <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//                 {filteredProjects.map((project) => (
//                   <ProjectCard key={project._id} project={project} />
//                 ))}
//               </div>
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

// src/pages/ProjectsPage.tsx (Updated: Added toggle for pagination visibility - shown only after clicking "Show Pagination")
import { useEffect, useState } from "react";
import { useAuthStore } from "@/stores/authStore";
import { useProjectsStore } from "@/stores/projectsStore"; // Import the store
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  PlusCircle,
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const projectSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  skills: z.string().min(1, "At least one skill is required"),
  budget: z.coerce.number().min(1, "Budget must be greater than 0"),
});

const ITEMS_PER_PAGE = 3;

export default function ProjectsPage() {
  const { user } = useAuthStore();
  const { projects, loading, fetchProjects, createProject } =
    useProjectsStore();
  const [searchQuery, setSearchQuery] = useState(""); // Now defined
  const [currentPage, setCurrentPage] = useState(1);
  const [dialogOpen, setDialogOpen] = useState(false); // Now defined
  const [showPagination, setShowPagination] = useState(false);

  const form = useForm<z.infer<typeof projectSchema>>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: "",
      description: "",
      skills: "",
      budget: 0,
    },
  });

  useEffect(() => {
    fetchProjects(1, 30); // Fetch more for pagination (adjust limit as needed)
  }, [fetchProjects]);

  // Reset to page 1 on search change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const onSubmit = async (data: z.infer<typeof projectSchema>) => {
    try {
      const skillsArray = data.skills
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
      await createProject({
        // Use store method
        title: data.title,
        description: data.description,
        budget: data.budget,
        skills: skillsArray,
      });
      form.reset();
      setDialogOpen(false);
      fetchProjects(1, 30); // Refetch to include new project
      toast.success("Project created successfully!");
    } catch (error) {
      // Error handled in store
      toast.error("Failed to create project.");
    }
  };

  const filteredProjects = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Pagination
  const indexOfLastProject = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstProject = indexOfLastProject - ITEMS_PER_PAGE;
  const paginatedProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold">Projects</h1>
                <p className="text-muted-foreground mt-2">
                  {user?.role === "client"
                    ? "Manage all your projects"
                    : "Find your next opportunity"}
                </p>
              </div>

              {user?.role === "client" && (
                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                  <DialogTrigger asChild>
                    <Button>
                      <PlusCircle className="w-4 h-4 mr-2" />
                      New Project
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Create New Project</DialogTitle>
                      <DialogDescription>
                        Post a project and find the best freelancers
                      </DialogDescription>
                    </DialogHeader>
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-4"
                      >
                        <FormField
                          control={form.control}
                          name="title"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Project Title</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="E.g., Build a mobile app"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="description"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Description</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Describe your project requirements..."
                                  className="min-h-[120px]"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="skills"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                Required Skills (comma-separated)
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="React, Node.js, MongoDB"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="budget"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Budget ($)</FormLabel>
                              <FormControl>
                                <Input
                                  type="number"
                                  placeholder="5000"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="flex gap-3">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setDialogOpen(false)}
                            className="flex-1"
                          >
                            Cancel
                          </Button>
                          <Button type="submit" className="flex-1">
                            Create Project
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </DialogContent>
                </Dialog>
              )}
            </div>

            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search projects..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>

            {loading ? (
              <div className="text-center py-12 text-muted-foreground">
                Loading projects...
              </div>
            ) : filteredProjects.length > 0 ? (
              <>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {paginatedProjects.map((project) => (
                    <ProjectCard key={project._id} project={project} />
                  ))}
                </div>
                {totalPages > 1 && (
                  <div className="text-center mt-4">
                    {!showPagination ? (
                      <Button
                        variant="outline"
                        onClick={() => setShowPagination(true)}
                      >
                        Load More
                      </Button>
                    ) : (
                      <div className="flex items-center justify-between px-4 py-3 bg-background border-t rounded-md">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            setCurrentPage((prev) => Math.max(prev - 1, 1))
                          }
                          disabled={currentPage === 1}
                        >
                          <ChevronLeft className="w-4 h-4 mr-2" />
                          Previous
                        </Button>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-muted-foreground">
                            Page {currentPage} of {totalPages}
                          </span>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            setCurrentPage((prev) =>
                              Math.min(prev + 1, totalPages)
                            )
                          }
                          disabled={currentPage === totalPages}
                        >
                          Next
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                No projects found
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
