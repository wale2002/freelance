import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useChatsStore } from '@/stores/chatsStore';
import { useAuthStore } from '@/stores/authStore';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { ChatWindow } from '@/components/ChatWindow';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

export default function ChatsPage() {
  const { chatId } = useParams();
  const { user } = useAuthStore();
  const { chats, fetchChats } = useChatsStore();

  useEffect(() => {
    fetchChats();
  }, [fetchChats]);

  const selectedChat = chatId ? chats.find(c => c.id === chatId) : null;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 flex overflow-hidden">
          <div className="w-80 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="p-4 border-b">
              <h2 className="font-semibold text-lg">Messages</h2>
            </div>
            <ScrollArea className="h-[calc(100vh-8rem)]">
              {chats.length > 0 ? (
                <div className="p-2 space-y-2">
                  {chats.map((chat) => {
                    const otherParticipant = chat.participants.find(p => p.id !== user?.id);
                    return (
                      <Link
                        key={chat.id}
                        to={`/chats/${chat.id}`}
                        className={cn(
                          'flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors',
                          chatId === chat.id && 'bg-muted'
                        )}
                      >
                        <Avatar>
                          <AvatarImage src={otherParticipant?.profileImage} />
                          <AvatarFallback>
                            {otherParticipant?.name.charAt(0).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">{otherParticipant?.name}</p>
                          {chat.lastMessage && (
                            <p className="text-sm text-muted-foreground truncate">
                              {chat.lastMessage.text}
                            </p>
                          )}
                        </div>
                        {chat.lastMessage && (
                          <span className="text-xs text-muted-foreground">
                            {format(new Date(chat.lastMessage.timestamp), 'MMM d')}
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <div className="p-8 text-center text-muted-foreground">
                  <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No conversations yet</p>
                </div>
              )}
            </ScrollArea>
          </div>

          <div className="flex-1">
            {selectedChat ? (
              <ChatWindow chat={selectedChat} />
            ) : (
              <div className="h-full flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <MessageSquare className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Select a conversation to start messaging</p>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
