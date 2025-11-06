import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/stores/authStore';
import { useProjectsStore } from '@/stores/projectsStore';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { ProjectCard } from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlusCircle, Briefcase, Users, MessageSquare } from 'lucide-react';

export default function DashboardPage() {
  const { user } = useAuthStore();
  const { projects, fetchProjects } = useProjectsStore();
  const navigate = useNavigate();

  useEffect(() => {
    fetchProjects(1, 6);
  }, [fetchProjects]);

  const userProjects = user?.role === 'client' 
    ? projects.filter(p => p.client.id === user.id)
    : projects.filter(p => p.status === 'open');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-7xl mx-auto space-y-6">
            <div>
              <h1 className="text-3xl font-bold">
                Welcome back, {user?.name}!
              </h1>
              <p className="text-muted-foreground mt-2">
                {user?.role === 'client' 
                  ? 'Manage your projects and find the best talent'
                  : 'Browse projects and grow your freelance career'
                }
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {user?.role === 'client' ? 'Active Projects' : 'Open Projects'}
                  </CardTitle>
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{userProjects.length}</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {user?.role === 'client' ? 'Total Bids' : 'My Bids'}
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {userProjects.reduce((acc, p) => acc + (p.bids?.length || 0), 0)}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Messages</CardTitle>
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">0</div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>
                      {user?.role === 'client' ? 'Your Projects' : 'Recommended Projects'}
                    </CardTitle>
                    <CardDescription className="mt-2">
                      {user?.role === 'client' 
                        ? 'Projects you\'ve posted'
                        : 'Projects matching your skills'
                      }
                    </CardDescription>
                  </div>
                  <Button onClick={() => navigate(user?.role === 'client' ? '/projects/new' : '/projects')}>
                    {user?.role === 'client' ? (
                      <>
                        <PlusCircle className="w-4 h-4 mr-2" />
                        New Project
                      </>
                    ) : (
                      'Browse All'
                    )}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {userProjects.length > 0 ? (
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {userProjects.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <Briefcase className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>No projects found</p>
                    {user?.role === 'client' && (
                      <Button className="mt-4" onClick={() => navigate('/projects/new')}>
                        <PlusCircle className="w-4 h-4 mr-2" />
                        Create Your First Project
                      </Button>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
