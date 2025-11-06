import { User, Project, Bid, Chat, Message, FreelancerMatch } from '@/types';

// Mock data storage
let mockUsers: User[] = [
  {
    id: '1',
    name: 'John Client',
    email: 'client@test.com',
    role: 'client',
    location: 'New York, USA',
  },
  {
    id: '2',
    name: 'Jane Freelancer',
    email: 'freelancer@test.com',
    role: 'freelancer',
    skills: ['React', 'TypeScript', 'Node.js'],
    hourlyRate: 75,
    bio: 'Full-stack developer with 5 years experience',
    location: 'San Francisco, USA',
  },
];

let mockProjects: Project[] = [
  {
    id: '1',
    title: 'Build E-commerce Website',
    description: 'Need a modern e-commerce platform with payment integration',
    skills: ['React', 'Node.js', 'MongoDB'],
    budget: 5000,
    client: { id: '1', name: 'John Client', email: 'client@test.com' },
    status: 'open',
    createdAt: new Date('2024-01-15'),
    bids: [],
  },
  {
    id: '2',
    title: 'Mobile App Development',
    description: 'iOS and Android app for fitness tracking',
    skills: ['React Native', 'Firebase'],
    budget: 8000,
    client: { id: '1', name: 'John Client', email: 'client@test.com' },
    status: 'open',
    createdAt: new Date('2024-01-10'),
    bids: [],
  },
];

let mockChats: Chat[] = [];

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const mockApi = {
  auth: {
    register: async (data: { name: string; email: string; password: string; role?: 'client' | 'freelancer' }) => {
      await delay(500);
      const newUser: User = {
        id: String(mockUsers.length + 1),
        name: data.name,
        email: data.email,
        role: data.role || 'client',
      };
      mockUsers.push(newUser);
      return {
        success: true,
        data: {
          token: 'mock-jwt-token-' + newUser.id,
          user: newUser,
        },
      };
    },

    login: async (data: { email: string; password: string }) => {
      await delay(500);
      const user = mockUsers.find(u => u.email === data.email);
      if (!user) {
        return { success: false, error: 'Invalid credentials' };
      }
      return {
        success: true,
        data: {
          token: 'mock-jwt-token-' + user.id,
          user,
        },
      };
    },
  },

  users: {
    getProfile: async () => {
      await delay(300);
      const token = localStorage.getItem('token');
      const userId = token?.split('-')[3];
      const user = mockUsers.find(u => u.id === userId);
      if (!user) return { success: false, error: 'User not found' };
      return { success: true, data: { user } };
    },

    updateProfile: async (data: Partial<User>) => {
      await delay(500);
      const token = localStorage.getItem('token');
      const userId = token?.split('-')[3];
      const userIndex = mockUsers.findIndex(u => u.id === userId);
      if (userIndex === -1) return { success: false, error: 'User not found' };
      
      mockUsers[userIndex] = { ...mockUsers[userIndex], ...data };
      return { success: true, data: { user: mockUsers[userIndex] } };
    },

    uploadPortfolio: async (formData: FormData) => {
      await delay(1000);
      return {
        success: true,
        data: {
          portfolioId: 'portfolio-' + Date.now(),
          images: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400'],
          files: ['resume.pdf'],
        },
      };
    },
  },

  projects: {
    create: async (data: { title: string; description: string; skills: string[]; budget: number }) => {
      await delay(500);
      const token = localStorage.getItem('token');
      const userId = token?.split('-')[3];
      const user = mockUsers.find(u => u.id === userId);
      if (!user) return { success: false, error: 'Unauthorized' };

      const newProject: Project = {
        id: String(mockProjects.length + 1),
        ...data,
        client: { id: user.id, name: user.name, email: user.email },
        status: 'open',
        createdAt: new Date(),
        bids: [],
      };
      mockProjects.push(newProject);
      return { success: true, data: { project: newProject } };
    },

    list: async (page = 1, limit = 10) => {
      await delay(400);
      const start = (page - 1) * limit;
      const end = start + limit;
      return {
        success: true,
        data: {
          projects: mockProjects.slice(start, end),
          total: mockProjects.length,
          page,
          limit,
        },
      };
    },

    getById: async (id: string) => {
      await delay(300);
      const project = mockProjects.find(p => p.id === id);
      if (!project) return { success: false, error: 'Project not found' };
      return { success: true, data: { project } };
    },

    createBid: async (projectId: string, data: { amount: number; proposal: string }) => {
      await delay(500);
      const token = localStorage.getItem('token');
      const userId = token?.split('-')[3];
      const user = mockUsers.find(u => u.id === userId);
      if (!user || user.role !== 'freelancer') {
        return { success: false, error: 'Only freelancers can bid' };
      }

      const project = mockProjects.find(p => p.id === projectId);
      if (!project) return { success: false, error: 'Project not found' };

      const newBid: Bid = {
        id: String(Date.now()),
        freelancer: { id: user.id, name: user.name, email: user.email, hourlyRate: user.hourlyRate },
        ...data,
        createdAt: new Date(),
      };

      if (!project.bids) project.bids = [];
      project.bids.push(newBid);

      return { success: true, data: { bid: newBid } };
    },
  },

  proposals: {
    generate: async (projectId: string) => {
      await delay(1500);
      const project = mockProjects.find(p => p.id === projectId);
      if (!project) return { success: false, error: 'Project not found' };

      return {
        success: true,
        data: {
          proposal: `Dear ${project.client.name},\n\nI am excited to submit my proposal for "${project.title}". With expertise in ${project.skills.join(', ')}, I am confident I can deliver exceptional results.\n\nApproach:\n- Thorough requirements analysis\n- Agile development methodology\n- Regular progress updates\n- Quality assurance testing\n\nI estimate this project will take 4-6 weeks with a competitive rate of $${project.budget * 0.8}.\n\nLooking forward to discussing this opportunity further.\n\nBest regards`,
          projectTitle: project.title,
          projectStatus: project.status,
          suggestedNextStep: 'Review and customize this proposal before submitting',
        },
      };
    },
  },

  matches: {
    getMatches: async (projectId: string) => {
      await delay(800);
      const freelancers = mockUsers.filter(u => u.role === 'freelancer');
      const matches: FreelancerMatch[] = freelancers.map(f => ({
        freelancer: {
          id: f.id,
          name: f.name,
          skills: f.skills || [],
          hourlyRate: f.hourlyRate,
          bio: f.bio,
        },
        score: Math.floor(Math.random() * 30) + 70,
        reason: 'Strong match based on skills and experience',
      }));

      return {
        success: true,
        data: {
          matches,
          totalMatches: matches.length,
        },
      };
    },
  },

  chats: {
    create: async (data: { otherUserId: string; initialMessage?: string }) => {
      await delay(500);
      const token = localStorage.getItem('token');
      const userId = token?.split('-')[3];
      const currentUser = mockUsers.find(u => u.id === userId);
      const otherUser = mockUsers.find(u => u.id === data.otherUserId);
      
      if (!currentUser || !otherUser) {
        return { success: false, error: 'User not found' };
      }

      const newChat: Chat = {
        id: String(mockChats.length + 1),
        participants: [currentUser, otherUser],
        messages: data.initialMessage
          ? [{
              id: '1',
              text: data.initialMessage,
              sender: { id: currentUser.id, name: currentUser.name },
              timestamp: new Date(),
            }]
          : [],
      };

      mockChats.push(newChat);
      return { success: true, data: { chat: newChat } };
    },

    list: async () => {
      await delay(400);
      const token = localStorage.getItem('token');
      const userId = token?.split('-')[3];
      const userChats = mockChats.filter(c => 
        c.participants.some(p => p.id === userId)
      );
      return { success: true, data: { chats: userChats } };
    },

    sendMessage: async (chatId: string, data: { text: string }) => {
      await delay(300);
      const token = localStorage.getItem('token');
      const userId = token?.split('-')[3];
      const user = mockUsers.find(u => u.id === userId);
      const chat = mockChats.find(c => c.id === chatId);

      if (!user || !chat) {
        return { success: false, error: 'Chat or user not found' };
      }

      const newMessage: Message = {
        id: String(Date.now()),
        text: data.text,
        sender: { id: user.id, name: user.name },
        timestamp: new Date(),
      };

      chat.messages.push(newMessage);
      chat.lastMessage = newMessage;

      return { success: true, data: { message: newMessage } };
    },
  },
};
