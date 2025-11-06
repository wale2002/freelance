import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Briefcase, MessageSquare, User, FolderKanban } from 'lucide-react';
import { useAuthStore } from '@/stores/authStore';
import { cn } from '@/lib/utils';

export const Sidebar = () => {
  const location = useLocation();
  const { user } = useAuthStore();

  const links = [
    { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/projects', icon: Briefcase, label: 'Projects' },
    { to: '/chats', icon: MessageSquare, label: 'Messages' },
    { to: '/profile', icon: User, label: 'Profile' },
    ...(user?.role === 'freelancer' ? [{ to: '/profile/portfolio', icon: FolderKanban, label: 'Portfolio' }] : []),
  ];

  return (
    <aside className="w-64 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 hidden lg:block">
      <nav className="p-4 space-y-2">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = location.pathname === link.to;
          return (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                'flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors',
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted text-muted-foreground hover:text-foreground'
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{link.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};
