import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Chat } from '@/types';
import { useAuthStore } from '@/stores/authStore';
import { useChatsStore } from '@/stores/chatsStore';
import { format } from 'date-fns';
import { Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface ChatWindowProps {
  chat: Chat;
}

export const ChatWindow = ({ chat }: ChatWindowProps) => {
  const { user } = useAuthStore();
  const { sendMessage } = useChatsStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { register, handleSubmit, reset } = useForm<{ text: string }>();

  const otherParticipant = chat.participants.find(p => p.id !== user?.id);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chat.messages]);

  const onSubmit = async (data: { text: string }) => {
    if (!data.text.trim()) return;
    await sendMessage(chat.id, data.text);
    reset();
  };

  return (
    <div className="flex flex-col h-full">
      <div className="border-b p-4 flex items-center gap-3">
        <Avatar>
          <AvatarImage src={otherParticipant?.profileImage} />
          <AvatarFallback>{otherParticipant?.name.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold">{otherParticipant?.name}</h3>
          <p className="text-sm text-muted-foreground capitalize">{otherParticipant?.role}</p>
        </div>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {chat.messages.map((message) => {
            const isOwn = message.sender.id === user?.id;
            return (
              <div
                key={message.id}
                className={cn('flex gap-3', isOwn && 'flex-row-reverse')}
              >
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="text-xs">
                    {message.sender.name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className={cn('flex flex-col gap-1', isOwn && 'items-end')}>
                  <div
                    className={cn(
                      'px-4 py-2 rounded-2xl max-w-md',
                      isOwn
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    )}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                  <span className="text-xs text-muted-foreground px-2">
                    {format(new Date(message.timestamp), 'h:mm a')}
                  </span>
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      <form onSubmit={handleSubmit(onSubmit)} className="border-t p-4 flex gap-2">
        <Input
          {...register('text')}
          placeholder="Type a message..."
          className="flex-1"
        />
        <Button type="submit" size="icon">
          <Send className="w-4 h-4" />
        </Button>
      </form>
    </div>
  );
};
