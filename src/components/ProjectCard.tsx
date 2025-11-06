import { Link } from 'react-router-dom';
import { Project } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DollarSign, User, Calendar } from 'lucide-react';
import { format } from 'date-fns';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="line-clamp-1">{project.title}</CardTitle>
          <Badge variant={project.status === 'open' ? 'default' : 'secondary'}>
            {project.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.skills.map((skill) => (
            <Badge key={skill} variant="outline">
              {skill}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <DollarSign className="w-4 h-4" />
            <span className="font-medium">${project.budget.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{project.client.name}</span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Calendar className="w-3 h-3" />
          <span>Posted {format(new Date(project.createdAt), 'MMM d, yyyy')}</span>
        </div>

        {project.bids && project.bids.length > 0 && (
          <div className="text-sm text-muted-foreground">
            {project.bids.length} bid{project.bids.length !== 1 ? 's' : ''}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link to={`/projects/${project.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
