import { FreelancerMatch } from '@/types';
import { useNavigate } from 'react-router-dom';
import { useChatsStore } from '@/stores/chatsStore';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, DollarSign, Award } from 'lucide-react';
import { toast } from 'sonner';

interface MatchListProps {
  matches: FreelancerMatch[];
}

export const MatchList = ({ matches }: MatchListProps) => {
  const navigate = useNavigate();
  const { createChat } = useChatsStore();

  const handleContact = async (freelancerId: string, freelancerName: string) => {
    const chatId = await createChat(freelancerId, `Hi ${freelancerName}, I'd like to discuss a project with you.`);
    if (chatId) {
      navigate(`/chats/${chatId}`);
    } else {
      toast.error('Failed to start chat');
    }
  };

  if (matches.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        No matches found for this project
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {matches.map((match) => (
        <Card key={match.freelancer.id}>
          <CardContent className="pt-6 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-lg">{match.freelancer.name}</h3>
                {match.freelancer.hourlyRate && (
                  <div className="flex items-center gap-1 text-muted-foreground mt-1">
                    <DollarSign className="w-4 h-4" />
                    <span>${match.freelancer.hourlyRate}/hr</span>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full">
                <Award className="w-4 h-4" />
                <span className="font-semibold">{match.score}%</span>
              </div>
            </div>

            {match.freelancer.bio && (
              <p className="text-sm text-muted-foreground line-clamp-2">
                {match.freelancer.bio}
              </p>
            )}

            <div className="flex flex-wrap gap-2">
              {match.freelancer.skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>

            <p className="text-sm text-muted-foreground italic">
              {match.reason}
            </p>
          </CardContent>
          <CardFooter>
            <Button
              onClick={() => handleContact(match.freelancer.id, match.freelancer.name)}
              className="w-full"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Contact Freelancer
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
