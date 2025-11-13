import { create } from "zustand";
import { getProjects, createProject } from "@/lib/api"; // Real API
import { Project } from "@/types";
import { toast } from "sonner";

interface ProjectsState {
  projects: Project[];
  loading: boolean;
  total: number;
  currentPage: number;
  fetchProjects: (page?: number, limit?: number) => Promise<void>;
  createProject: (data: {
    title: string;
    description: string;
    skills: string[];
    budget: number;
  }) => Promise<void>;
}

export const useProjectsStore = create<ProjectsState>((set, get) => ({
  projects: [],
  loading: false,
  total: 0,
  currentPage: 1,

  fetchProjects: async (page = 1, limit = 10) => {
    set({ loading: true });
    try {
      const response = await getProjects({ page, limit });
      console.log("Projects response:", response.data); // Debug log
      if (response.data) {
        set({
          projects: response.data.projects || [],
          total: response.data.total || 0,
          currentPage: page,
        });
      }
    } catch (error: any) {
      console.error("Fetch projects error:", error);
      toast.error(error.response?.data?.message || "Failed to fetch projects");
    } finally {
      set({ loading: false });
    }
  },

  createProject: async (data) => {
    try {
      const response = await createProject(data);
      if (response.data) {
        // Assume success if response
        toast.success("Project created successfully");
        await get().fetchProjects(); // Refetch to show new project
      } else {
        toast.error("Failed to create project");
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to create project");
    }
  },
}));
