import { create } from 'zustand';
import { Project } from '@/types';
import { mockApi } from '@/api/mockApi';
import { toast } from 'sonner';

interface ProjectsState {
  projects: Project[];
  loading: boolean;
  total: number;
  currentPage: number;
  fetchProjects: (page?: number, limit?: number) => Promise<void>;
  createProject: (data: { title: string; description: string; skills: string[]; budget: number }) => Promise<void>;
}

export const useProjectsStore = create<ProjectsState>((set, get) => ({
  projects: [],
  loading: false,
  total: 0,
  currentPage: 1,
  
  fetchProjects: async (page = 1, limit = 10) => {
    set({ loading: true });
    try {
      const response = await mockApi.projects.list(page, limit);
      if (response.success && response.data) {
        set({
          projects: response.data.projects,
          total: response.data.total,
          currentPage: page,
        });
      }
    } catch (error) {
      toast.error('Failed to fetch projects');
    } finally {
      set({ loading: false });
    }
  },
  
  createProject: async (data) => {
    try {
      const response = await mockApi.projects.create(data);
      if (response.success) {
        toast.success('Project created successfully');
        await get().fetchProjects();
      } else {
        toast.error(response.error || 'Failed to create project');
      }
    } catch (error) {
      toast.error('Failed to create project');
    }
  },
}));
