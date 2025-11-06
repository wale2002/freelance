import { create } from 'zustand';
import { Chat } from '@/types';
import { mockApi } from '@/api/mockApi';
import { toast } from 'sonner';

interface ChatsState {
  chats: Chat[];
  loading: boolean;
  fetchChats: () => Promise<void>;
  sendMessage: (chatId: string, text: string) => Promise<void>;
  createChat: (otherUserId: string, initialMessage?: string) => Promise<string | null>;
}

export const useChatsStore = create<ChatsState>((set, get) => ({
  chats: [],
  loading: false,
  
  fetchChats: async () => {
    set({ loading: true });
    try {
      const response = await mockApi.chats.list();
      if (response.success && response.data) {
        set({ chats: response.data.chats });
      }
    } catch (error) {
      toast.error('Failed to fetch chats');
    } finally {
      set({ loading: false });
    }
  },
  
  sendMessage: async (chatId, text) => {
    try {
      const response = await mockApi.chats.sendMessage(chatId, { text });
      if (response.success) {
        await get().fetchChats();
      } else {
        toast.error(response.error || 'Failed to send message');
      }
    } catch (error) {
      toast.error('Failed to send message');
    }
  },
  
  createChat: async (otherUserId, initialMessage) => {
    try {
      const response = await mockApi.chats.create({ otherUserId, initialMessage });
      if (response.success && response.data) {
        await get().fetchChats();
        return response.data.chat.id;
      } else {
        toast.error(response.error || 'Failed to create chat');
        return null;
      }
    } catch (error) {
      toast.error('Failed to create chat');
      return null;
    }
  },
}));
