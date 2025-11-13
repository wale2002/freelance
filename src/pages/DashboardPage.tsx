// src/pages/DashboardPage.tsx (Updated: Removed Inter font classes; removed stats/metrics cards for Active Projects, Total Bids/Global Bids, and Messages)
import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useAuthStore } from "@/stores/authStore";
import { getProjects, getProfile } from "@/lib/api";
import axios from "axios";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  PlusCircle,
  Briefcase,
  Users,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  User,
  Star,
  Search,
  FileText,
  Code,
  LayoutDashboard,
  Palette,
  ToggleRight,
} from "lucide-react";
import { toast } from "sonner";

export default function DashboardPage() {
  const { user, updateUser } = useAuthStore();
  const [projects, setProjects] = useState<any[]>([]);
  const [profileFetched, setProfileFetched] = useState(false);
  const [projectsLoading, setProjectsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [showPagination, setShowPagination] = useState(false);
  const [showProjects, setShowProjects] = useState(true);
  const navigate = useNavigate();

  const ITEMS_PER_PAGE = 3;

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  useEffect(() => {
    if (!user) {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        if (storedUser === "undefined") {
          console.log("Removing invalid 'undefined' user from localStorage");
          localStorage.removeItem("user");
          return;
        }
        try {
          const parsedUser = JSON.parse(storedUser);
          if (!parsedUser || !parsedUser._id) {
            console.log(
              "Invalid stored user (no _id) - removing from localStorage"
            );
            localStorage.removeItem("user");
            return;
          }
          updateUser(parsedUser);
          console.log("Loaded valid user from localStorage:", parsedUser.name);
        } catch (error) {
          console.error("Invalid stored user JSON:", error);
          localStorage.removeItem("user");
        }
      }
    }
  }, [user, updateUser]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Profile effect - token check:", !!token);
    if (!token || token === "undefined") {
      console.log("No token - skipping profile fetch");
      if (!user) navigate("/register", { replace: true });
      return;
    }
    if (profileFetched || user?._id) {
      console.log("Profile already fetched or user loaded - skipping");
      return;
    }
    const fetchUserProfile = async (noCache = false) => {
      try {
        console.log("Fetching profile...", noCache ? "(no-cache mode)" : "");
        let response;
        if (noCache) {
          response = await axios.get("/api/users/profile", {
            headers: {
              "Cache-Control": "no-cache, no-store, must-revalidate",
              Pragma: "no-cache",
              Expires: "0",
            },
          });
        } else {
          response = await getProfile();
        }
        console.log("Profile response status:", response.status);
        console.log("Profile response data:", response.data);
        if (response.status === 304) {
          console.warn("Received 304 (cached) - checking for valid user data");
          if (!response.data?.data?._id && !user?._id) {
            console.log(
              "No data on 304 and no user - forcing no-cache refetch"
            );
            return fetchUserProfile(true);
          } else if (user?._id) {
            console.log("304 with existing valid user - skipping update");
            setProfileFetched(true);
            return;
          }
        }
        if (response.data?.success && response.data?.data?._id) {
          const newUser = response.data.data;
          updateUser(newUser);
          localStorage.setItem("user", JSON.stringify(newUser));
          setProfileFetched(true);
          console.log("User updated in store and localStorage:", newUser.name);
        } else {
          console.warn("No valid user data in profile response");
          setProfileFetched(true);
        }
      } catch (error: any) {
        console.error("Fetch user error:", error);
        if (error.code === "ERR_NETWORK") {
          toast.error("Network glitch—refreshing page may help");
        } else if (error.response?.status === 401) {
          toast.error("Session expired - please log in again");
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          navigate("/register", { replace: true });
        } else {
          toast.error("Failed to load profile");
        }
        setProfileFetched(true);
      }
    };
    fetchUserProfile();
  }, [updateUser, navigate, user?._id, profileFetched, user]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token || token === "undefined") {
      console.log("No token - skipping projects fetch");
      setProjects([]);
      setProjectsLoading(false);
      return;
    }

    const fetchProjects = async () => {
      console.log("Fetching projects...");
      setProjectsLoading(true);
      try {
        const response = await getProjects({ page: 1, limit: 6 });
        console.log("Raw projects:", response.data.projects?.length || 0);
        console.log(
          "Sample project status:",
          response.data.projects?.[0]?.status
        );
        setProjects(response.data.projects || []);
      } catch (error: any) {
        console.error("Fetch projects error:", error);
        if (error.config) {
          console.error("Request config:", {
            url: error.config.url,
            baseURL: error.config.baseURL || "Not set",
            method: error.config.method,
            headers: error.config.headers,
          });
        }
        if (error.code === "ERR_NETWORK") {
          toast.error(
            "Network issue—check if your backend server is running and refresh."
          );
        } else {
          toast.error("Failed to load projects. Please try again.");
        }
        setProjects([]);
      } finally {
        setProjectsLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const userProjects = useMemo(() => {
    if (!projects.length) {
      console.log("Filter skipped - no projects");
      return [];
    }
    if (!user) {
      console.log("Filter skipped - no user, showing all");
      return projects.map((p) => ({ ...p, status: p.status || "open" }));
    }
    let filtered = [];
    if (user.role === "client") {
      filtered = projects.filter(
        (p) => p.client?._id === user._id || p.client?.id === user._id
      );
      console.log("Client filter result:", filtered.length);
    } else {
      filtered = projects.filter((p) => (p.status || "open") === "open");
      console.log(
        "Freelancer filter (open status):",
        filtered.length,
        "Statuses:",
        projects.map((p) => p.status || "undefined")
      );
    }
    return filtered;
  }, [user, projects]);

  const paginatedProjects = userProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  const totalPages = Math.ceil(userProjects.length / ITEMS_PER_PAGE);

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const toggleSection = () => {
    setShowProjects(!showProjects);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-7xl mx-auto space-y-6">
            <div>
              <h1 className="text-3xl font-bold">
                Welcome back, {user?.name || "User"}!
              </h1>
              <p className="text-white-foreground mt-2">
                {user?.role === "client"
                  ? "Manage your projects and find the best talent"
                  : "Browse projects and grow your freelance career"}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="cursor-pointer hover:shadow-lg transition-shadow p-3">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full mb-1">
                    <Star className="h-4 w-4 text-primary" />
                  </div>
                  <CardTitle className="text-center text-xs font-medium">
                    Recommended for You
                  </CardTitle>
                  <CardDescription className="text-center text-xs leading-tight">
                    {user?.role === "client"
                      ? "Post a project brief, get tailored offers for your needs"
                      : "Discover personalized project matches"}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="justify-center pt-1">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs px-2 py-1"
                    onClick={() => handleNavigate("/projects")}
                  >
                    <PlusCircle className="w-3 h-3 mr-1" />
                    Get Started
                  </Button>
                </CardFooter>
              </Card>

              <Card className="cursor-pointer hover:shadow-lg transition-shadow p-3">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-center w-8 h-8 bg-secondary/10 rounded-full mb-1">
                    <Search className="h-4 w-4 text-secondary" />
                  </div>
                  <CardTitle className="text-center text-xs font-medium">
                    Tailor Freelance Match
                  </CardTitle>
                  <CardDescription className="text-center text-xs leading-tight">
                    Match your skills to the perfect freelance opportunities
                  </CardDescription>
                </CardHeader>
                <CardFooter className="justify-center pt-1">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs px-2 py-1"
                    onClick={() => handleNavigate("/projects")}
                  >
                    Find Matches
                  </Button>
                </CardFooter>
              </Card>

              <Card className="cursor-pointer hover:shadow-lg transition-shadow p-3">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-center w-8 h-8 bg-accent/10 rounded-full mb-1">
                    <User className="h-4 w-4 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-center text-xs font-medium">
                    Complete Your Profile
                  </CardTitle>
                  <CardDescription className="text-center text-xs leading-tight">
                    Add skills, portfolio, and experiences to attract clients
                  </CardDescription>
                </CardHeader>
                <CardFooter className="justify-center pt-1">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs px-2 py-1"
                    onClick={() => handleNavigate("/profile")}
                  >
                    Update Profile
                  </Button>
                </CardFooter>
              </Card>

              <Card className="cursor-pointer hover:shadow-lg transition-shadow p-3">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-center w-8 h-8 bg-destructive/10 rounded-full mb-1">
                    <MessageSquare className="h-4 w-4 text-destructive" />
                  </div>
                  <CardTitle className="text-center text-xs font-medium">
                    Message Clients
                  </CardTitle>
                  <CardDescription className="text-center text-xs leading-tight">
                    Chat directly with clients from your local projects
                  </CardDescription>
                </CardHeader>
                <CardFooter className="justify-center pt-1">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs px-2 py-1"
                    onClick={() => handleNavigate("/chats")}
                  >
                    Start Chatting
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>
                      {showProjects
                        ? user?.role === "client"
                          ? "Your Projects"
                          : "Recommended Projects"
                        : "Explore Popular Job Categories"}
                    </CardTitle>
                    <CardDescription className="mt-2">
                      {showProjects
                        ? user?.role === "client"
                          ? "Projects you've posted"
                          : "Projects matching your skills"
                        : "Browse external jobs in trending fields like UI/UX, Frontend, Backend, and more"}
                    </CardDescription>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={toggleSection}
                    className="flex items-center gap-2"
                  >
                    <ToggleRight className="h-4 w-4" />
                    {showProjects ? "Explore Jobs" : "Your Projects"}
                  </Button>
                </div>
              </CardHeader>
              <AnimatePresence mode="wait">
                <motion.div
                  key={showProjects ? "projects" : "jobs"}
                  variants={sectionVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="overflow-hidden"
                >
                  <CardContent>
                    {showProjects ? (
                      projectsLoading ? (
                        <div className="text-center py-12 text-muted-foreground">
                          Loading projects...
                        </div>
                      ) : userProjects.length > 0 ? (
                        <>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {paginatedProjects.map((p) => (
                              <ProjectCard key={p._id} project={p} />
                            ))}
                          </div>
                          {totalPages > 1 && (
                            <div className="text-center mt-4">
                              {!showPagination ? (
                                <Button
                                  variant="outline"
                                  onClick={() => setShowPagination(true)}
                                >
                                  Show Pagination
                                </Button>
                              ) : (
                                <div className="flex items-center justify-between px-4 py-3 bg-background border-t rounded-md">
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() =>
                                      setCurrentPage((prev) =>
                                        Math.max(prev - 1, 1)
                                      )
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
                          <Briefcase className="w-12 h-12 mx-auto mb-4 opacity-50" />
                          <p>No projects found</p>
                          {user?.role === "client" && (
                            <Button
                              className="mt-4"
                              onClick={() => navigate("/projects")}
                            >
                              <PlusCircle className="w-4 h-4 mr-2" />
                              Create Your First Project
                            </Button>
                          )}
                        </div>
                      )
                    ) : (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <Card
                          className="cursor-pointer hover:shadow-lg transition-shadow p-2"
                          onClick={() => handleNavigate("/external-jobs")}
                        >
                          <CardHeader className="pb-1">
                            <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full mb-1">
                              <Palette className="h-4 w-4 text-primary" />
                            </div>
                            <CardTitle className="text-xs text-center font-medium">
                              UI/UX Gigs
                            </CardTitle>
                          </CardHeader>
                        </Card>
                        <Card
                          className="cursor-pointer hover:shadow-lg transition-shadow p-2"
                          onClick={() => handleNavigate("/external-jobs")}
                        >
                          <CardHeader className="pb-1">
                            <div className="flex items-center justify-center w-8 h-8 bg-secondary/10 rounded-full mb-1">
                              <Code className="h-4 w-4 text-secondary" />
                            </div>
                            <CardTitle className="text-xs text-center font-medium">
                              Frontend
                            </CardTitle>
                          </CardHeader>
                        </Card>
                        <Card
                          className="cursor-pointer hover:shadow-lg transition-shadow p-2"
                          onClick={() => handleNavigate("/external-jobs")}
                        >
                          <CardHeader className="pb-1">
                            <div className="flex items-center justify-center w-8 h-8 bg-accent/10 rounded-full mb-1">
                              <FileText className="h-4 w-4 text-accent-foreground" />
                            </div>
                            <CardTitle className="text-xs text-center font-medium">
                              Backend
                            </CardTitle>
                          </CardHeader>
                        </Card>
                        <Card
                          className="cursor-pointer hover:shadow-lg transition-shadow p-2"
                          onClick={() => handleNavigate("/external-jobs")}
                        >
                          <CardHeader className="pb-1">
                            <div className="flex items-center justify-center w-8 h-8 bg-destructive/10 rounded-full mb-1">
                              <LayoutDashboard className="h-4 w-4 text-destructive" />
                            </div>
                            <CardTitle className="text-xs text-center font-medium">
                              Manager
                            </CardTitle>
                          </CardHeader>
                        </Card>
                      </div>
                    )}
                  </CardContent>
                  {!showProjects && (
                    <CardFooter className="pt-2">
                      <Button
                        onClick={() => handleNavigate("/external-jobs")}
                        variant="outline"
                        className="w-full text-xs py-1"
                      >
                        Browse All External Jobs
                      </Button>
                    </CardFooter>
                  )}
                </motion.div>
              </AnimatePresence>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
