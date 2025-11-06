import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockApi } from '@/api/mockApi';
import { useAuthStore } from '@/stores/authStore';
import { Project, Bid, FreelancerMatch } from '@/types';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { BidForm } from '@/components/BidForm';
import { MatchList } from '@/components/MatchList';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DollarSign, Calendar, User, ArrowLeft, FileText, Users } from 'lucide-react';
import { format } from 'date-fns';
import { toast } from 'sonner';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [matches, setMatches] = useState<FreelancerMatch[]>([]);
  const [loading, setLoading] = useState(true);
  const [bidFormOpen, setBidFormOpen] = useState(false);
  const [loadingMatches, setLoadingMatches] = useState(false);

  const fetchProject = async () => {
    if (!id) return;
    setLoading(true);
    try {
      const response = await mockApi.projects.getById(id);
      if (response.success && response.data) {
        setProject(response.data.project);
      }
    } catch (error) {
      toast.error('Failed to load project');
    } finally {
      setLoading(false);
    }
  };

  const fetchMatches = async () => {
    if (!id) return;
    setLoadingMatches(true);
    try {
      const response = await mockApi.matches.getMatches(id);
      if (response.success && response.data) {
        setMatches(response.data.matches);
      }
    } catch (error) {
      toast.error('Failed to load matches');
    } finally {
      setLoadingMatches(false);
    }
  };

  useEffect(() => {
    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-6 flex items-center justify-center">
            <div className="text-muted-foreground">Loading...</div>
          </main>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-6 flex items-center justify-center">
            <div className="text-center">
              <p className="text-muted-foreground mb-4">Project not found</p>
              <Button onClick={() => navigate('/projects')}>Back to Projects</Button>
            </div>
          </main>
        </div>
      </div>
    );
  }

  const isClient = user?.role === 'client';
  const isFreelancer = user?.role === 'freelancer';
  const canBid = isFreelancer && project.status === 'open';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-5xl mx-auto space-y-6">
            <Button variant="ghost" onClick={() => navigate('/projects')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>

            <Card>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.skills.map((skill) => (
                        <Badge key={skill}>{skill}</Badge>
                      ))}
                    </div>
                  </div>
                  <Badge variant={project.status === 'open' ? 'default' : 'secondary'}>
                    {project.status}
                  </Badge>
                </div>

                <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    <span className="font-semibold text-foreground">
                      ${project.budget.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{project.client.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Posted {format(new Date(project.createdAt), 'MMM d, yyyy')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span>{project.bids?.length || 0} bid{project.bids?.length !== 1 ? 's' : ''}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Description</h3>
                  <p className="text-muted-foreground whitespace-pre-wrap">{project.description}</p>
                </div>

                {canBid && (
                  <>
                    <Separator />
                    <Button onClick={() => setBidFormOpen(true)} className="w-full sm:w-auto">
                      Submit Your Bid
                    </Button>
                  </>
                )}

                {isClient && (
                  <>
                    <Separator />
                    <Button onClick={fetchMatches} className="w-full sm:w-auto" disabled={loadingMatches}>
                      <Users className="w-4 h-4 mr-2" />
                      {loadingMatches ? 'Finding Matches...' : 'Find Matching Freelancers'}
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>

            <Tabs defaultValue="bids" className="w-full">
              <TabsList>
                <TabsTrigger value="bids">Bids ({project.bids?.length || 0})</TabsTrigger>
                {isClient && <TabsTrigger value="matches">Matches ({matches.length})</TabsTrigger>}
              </TabsList>

              <TabsContent value="bids" className="mt-6">
                {project.bids && project.bids.length > 0 ? (
                  <div className="space-y-4">
                    {project.bids.map((bid) => (
                      <Card key={bid.id}>
                        <CardContent className="pt-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h4 className="font-semibold">{bid.freelancer.name}</h4>
                              <p className="text-sm text-muted-foreground">{bid.freelancer.email}</p>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-lg">${bid.amount.toLocaleString()}</div>
                              {bid.freelancer.hourlyRate && (
                                <div className="text-sm text-muted-foreground">
                                  ${bid.freelancer.hourlyRate}/hr
                                </div>
                              )}
                            </div>
                          </div>
                          <Separator className="my-4" />
                          <div>
                            <h5 className="font-medium mb-2">Proposal</h5>
                            <p className="text-sm text-muted-foreground whitespace-pre-wrap">{bid.proposal}</p>
                          </div>
                          <div className="text-xs text-muted-foreground mt-4">
                            Submitted {format(new Date(bid.createdAt), 'MMM d, yyyy')}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card>
                    <CardContent className="py-12 text-center text-muted-foreground">
                      No bids yet
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              {isClient && (
                <TabsContent value="matches" className="mt-6">
                  <MatchList matches={matches} />
                </TabsContent>
              )}
            </Tabs>
          </div>
        </main>
      </div>

      {canBid && (
        <BidForm
          projectId={project.id}
          open={bidFormOpen}
          onOpenChange={setBidFormOpen}
          onSuccess={fetchProject}
        />
      )}
    </div>
  );
}
