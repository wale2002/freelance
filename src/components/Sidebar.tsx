// // // // // import { Link, useLocation } from 'react-router-dom';
// // // // // import { LayoutDashboard, Briefcase, MessageSquare, User, FolderKanban } from 'lucide-react';
// // // // // import { useAuthStore } from '@/stores/authStore';
// // // // // import { cn } from '@/lib/utils';

// // // // // export const Sidebar = () => {
// // // // //   const location = useLocation();
// // // // //   const { user } = useAuthStore();

// // // // //   const links = [
// // // // //     { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
// // // // //     { to: '/projects', icon: Briefcase, label: 'Projects' },
// // // // //     { to: '/chats', icon: MessageSquare, label: 'Messages' },
// // // // //     { to: '/profile', icon: User, label: 'Profile' },
// // // // //     ...(user?.role === 'freelancer' ? [{ to: '/profile/portfolio', icon: FolderKanban, label: 'Portfolio' }] : []),
// // // // //   ];

// // // // //   return (
// // // // //     <aside className="w-64 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 hidden lg:block">
// // // // //       <nav className="p-4 space-y-2">
// // // // //         {links.map((link) => {
// // // // //           const Icon = link.icon;
// // // // //           const isActive = location.pathname === link.to;
// // // // //           return (
// // // // //             <Link
// // // // //               key={link.to}
// // // // //               to={link.to}
// // // // //               className={cn(
// // // // //                 'flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors',
// // // // //                 isActive
// // // // //                   ? 'bg-primary text-primary-foreground'
// // // // //                   : 'hover:bg-muted text-muted-foreground hover:text-foreground'
// // // // //               )}
// // // // //             >
// // // // //               <Icon className="w-5 h-5" />
// // // // //               <span className="font-medium">{link.label}</span>
// // // // //             </Link>
// // // // //           );
// // // // //         })}
// // // // //       </nav>
// // // // //     </aside>
// // // // //   );
// // // // // };

// // // // // src/components/Sidebar.tsx
// // // // import { Link, useLocation } from 'react-router-dom';
// // // // import { LayoutDashboard, Briefcase, MessageSquare, User, FolderKanban } from 'lucide-react';
// // // // import { useAuthStore } from '@/stores/authStore';
// // // // import { cn } from '@/lib/utils';

// // // // export const Sidebar = () => {
// // // //   const location = useLocation();
// // // //   const { user } = useAuthStore();

// // // //   const links = [
// // // //     { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
// // // //     { to: '/projects', icon: Briefcase, label: 'Projects' },
// // // //     { to: '/chats', icon: MessageSquare, label: 'Messages' },
// // // //     { to: '/profile', icon: User, label: 'Profile' },
// // // //     ...(user?.role === 'freelancer' ? [{ to: '/profile/portfolio', icon: FolderKanban, label: 'Portfolio' }] : []),
// // // //   ];

// // // //   return (
// // // //     <aside className="w-64 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 hidden lg:block">
// // // //       <nav className="p-4 space-y-2">
// // // //         {links.map((link) => {
// // // //           const Icon = link.icon;
// // // //           const isActive = location.pathname === link.to;
// // // //           return (
// // // //             <Link
// // // //               key={link.to}
// // // //               to={link.to}
// // // //               className={cn(
// // // //                 'flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors',
// // // //                 isActive
// // // //                   ? 'bg-primary text-primary-foreground'
// // // //                   : 'hover:bg-muted text-muted-foreground hover:text-foreground'
// // // //               )}
// // // //             >
// // // //               <Icon className="w-5 h-5" />
// // // //               <span className="font-medium">{link.label}</span>
// // // //             </Link>
// // // //           );
// // // //         })}
// // // //       </nav>
// // // //     </aside>
// // // //   );
// // // // };

// // // // src/components/Sidebar.tsx (Updated: Added static External Jobs link after Projects; imported Globe icon for it)
// // // import { Link, useLocation } from "react-router-dom";
// // // import {
// // //   LayoutDashboard,
// // //   Briefcase,
// // //   MessageSquare,
// // //   User,
// // //   FolderKanban,
// // //   Globe,
// // // } from "lucide-react";
// // // import { useAuthStore } from "@/stores/authStore";
// // // import { cn } from "@/lib/utils";

// // // export const Sidebar = () => {
// // //   const location = useLocation();
// // //   const { user } = useAuthStore();

// // //   const links = [
// // //     { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
// // //     { to: "/projects", icon: Briefcase, label: "Projects" },
// // //     { to: "/external-jobs", icon: Globe, label: "External Jobs" }, // NEW: Static link for external jobs
// // //     { to: "/chats", icon: MessageSquare, label: "Messages" },
// // //     { to: "/profile", icon: User, label: "Profile" },
// // //     ...(user?.role === "freelancer"
// // //       ? [{ to: "/profile/portfolio", icon: FolderKanban, label: "Portfolio" }]
// // //       : []),
// // //   ];

// // //   return (
// // //     <aside className="w-64 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 hidden lg:block">
// // //       <nav className="p-4 space-y-2">
// // //         {links.map((link) => {
// // //           const Icon = link.icon;
// // //           const isActive = location.pathname === link.to;
// // //           return (
// // //             <Link
// // //               key={link.to}
// // //               to={link.to}
// // //               className={cn(
// // //                 "flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors",
// // //                 isActive
// // //                   ? "bg-primary text-primary-foreground"
// // //                   : "hover:bg-muted text-muted-foreground hover:text-foreground"
// // //               )}
// // //             >
// // //               <Icon className="w-5 h-5" />
// // //               <span className="font-medium">{link.label}</span>
// // //             </Link>
// // //           );
// // //         })}
// // //       </nav>
// // //     </aside>
// // //   );
// // // };

// // // src/components/Sidebar.tsx (Updated: Added static External Jobs link after Projects; imported Globe icon for it)
// // // New: Added loading overlay (white card) on sidebar link clicks to indicate API fetching; shows for min 2s post-click
// // import { Link, useLocation } from "react-router-dom";
// // import {
// //   LayoutDashboard,
// //   Briefcase,
// //   MessageSquare,
// //   User,
// //   FolderKanban,
// //   Globe,
// //   Loader2,
// // } from "lucide-react";
// // import { useAuthStore } from "@/stores/authStore";
// // import { cn } from "@/lib/utils";
// // import { useState, useEffect } from "react";

// // export const Sidebar = () => {
// //   const location = useLocation();
// //   const { user } = useAuthStore();
// //   const [showLoading, setShowLoading] = useState(false);

// //   const links = [
// //     { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
// //     { to: "/projects", icon: Briefcase, label: "Projects" },
// //     { to: "/external-jobs", icon: Globe, label: "External Jobs" },
// //     { to: "/chats", icon: MessageSquare, label: "Messages" },
// //     { to: "/profile", icon: User, label: "Profile" },
// //     ...(user?.role === "freelancer"
// //       ? [{ to: "/profile/portfolio", icon: FolderKanban, label: "Portfolio" }]
// //       : []),
// //   ];

// //   const handleLinkClick = () => {
// //     setShowLoading(true);
// //   };

// //   // Auto-hide loading after 2s (min duration for feedback, even on fast loads)
// //   useEffect(() => {
// //     if (showLoading) {
// //       const timer = setTimeout(() => {
// //         setShowLoading(false);
// //       }, 2000);
// //       return () => clearTimeout(timer);
// //     }
// //   }, [showLoading]);

// //   // Reset on location change (if nav completes faster than timer)
// //   useEffect(() => {
// //     setShowLoading(false);
// //   }, [location]);

// //   return (
// //     <>
// //       <aside className="w-64 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 hidden lg:block">
// //         <nav className="p-4 space-y-2">
// //           {links.map((link) => {
// //             const Icon = link.icon;
// //             const isActive = location.pathname === link.to;
// //             return (
// //               <Link
// //                 key={link.to}
// //                 to={link.to}
// //                 onClick={handleLinkClick}
// //                 className={cn(
// //                   "flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors",
// //                   isActive
// //                     ? "bg-primary text-primary-foreground"
// //                     : "hover:bg-muted text-muted-foreground hover:text-foreground"
// //                 )}
// //               >
// //                 <Icon className="w-5 h-5" />
// //                 <span className="font-medium">{link.label}</span>
// //               </Link>
// //             );
// //           })}
// //         </nav>
// //       </aside>

// //       {/* White card overlay for loading */}
// //       {showLoading && (
// //         <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-sm">
// //           <div className="text-center space-y-4">
// //             <Loader2 className="h-8 w-8 animate-spin mx-auto text-gray-600" />
// //             <p className="text-lg font-medium text-gray-800">Fetching API...</p>
// //           </div>
// //         </div>
// //       )}
// //     </>
// //   );
// // };

// // src/components/Sidebar.tsx (Updated: Added focus ring offsets and smooth transitions to prevent layout shifts on click; retained loading overlay)
// import { Link, useLocation } from "react-router-dom";
// import {
//   LayoutDashboard,
//   Briefcase,
//   MessageSquare,
//   User,
//   FolderKanban,
//   Globe,
//   Loader2,
// } from "lucide-react";
// import { useAuthStore } from "@/stores/authStore";
// import { cn } from "@/lib/utils";
// import { useState, useEffect } from "react";

// export const Sidebar = () => {
//   const location = useLocation();
//   const { user } = useAuthStore();
//   const [showLoading, setShowLoading] = useState(false);

//   const links = [
//     { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
//     { to: "/projects", icon: Briefcase, label: "Projects" },
//     { to: "/external-jobs", icon: Globe, label: "External Jobs" },
//     { to: "/chats", icon: MessageSquare, label: "Messages" },
//     { to: "/profile", icon: User, label: "Profile" },
//     ...(user?.role === "freelancer"
//       ? [{ to: "/profile/portfolio", icon: FolderKanban, label: "Portfolio" }]
//       : []),
//   ];

//   const handleLinkClick = () => {
//     setShowLoading(true);
//   };

//   // Auto-hide loading after 2s (min duration for feedback, even on fast loads)
//   useEffect(() => {
//     if (showLoading) {
//       const timer = setTimeout(() => {
//         setShowLoading(false);
//       }, 2000);
//       return () => clearTimeout(timer);
//     }
//   }, [showLoading]);

//   // Reset on location change (if nav completes faster than timer)
//   useEffect(() => {
//     setShowLoading(false);
//   }, [location]);

//   return (
//     <>
//       <aside className="w-64 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 hidden lg:block">
//         <nav className="p-4 space-y-2">
//           {links.map((link) => {
//             const Icon = link.icon;
//             const isActive = location.pathname === link.to;
//             return (
//               <Link
//                 key={link.to}
//                 to={link.to}
//                 onClick={handleLinkClick}
//                 className={cn(
//                   "flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-150 ease-in-out", // Enhanced: Added full transition for smooth changes
//                   "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background", // NEW: Prevent focus ring from shifting layout
//                   isActive
//                     ? "bg-primary text-primary-foreground"
//                     : "hover:bg-muted text-muted-foreground hover:text-foreground"
//                 )}
//               >
//                 <Icon className="w-5 h-5 transition-transform duration-150" />{" "}
//                 {/* Subtle icon transition if needed */}
//                 <span className="font-medium">{link.label}</span>
//               </Link>
//             );
//           })}
//         </nav>
//       </aside>

//       {/* White card overlay for loading */}
//       {showLoading && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-sm transition-opacity duration-200">
//           {" "}
//           {/* Smooth fade for overlay */}
//           <div className="text-center space-y-4">
//             <Loader2 className="h-8 w-8 animate-spin mx-auto text-gray-600" />
//             <p className="text-lg font-medium text-gray-800">Fetching API...</p>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// src/components/Sidebar.tsx (Updated: Reduced text sizes for nav labels and loading message; added smooth transitions to prevent layout shifts on click; retained loading overlay)
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Briefcase,
  MessageSquare,
  User,
  FolderKanban,
  Globe,
  Loader2,
} from "lucide-react";
import { useAuthStore } from "@/stores/authStore";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export const Sidebar = () => {
  const location = useLocation();
  const { user } = useAuthStore();
  const [showLoading, setShowLoading] = useState(false);

  const links = [
    { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { to: "/projects", icon: Briefcase, label: "Projects" },
    { to: "/external-jobs", icon: Globe, label: "External Jobs" },
    { to: "/chats", icon: MessageSquare, label: "Messages" },
    { to: "/profile", icon: User, label: "Profile" },
    ...(user?.role === "freelancer"
      ? [{ to: "/profile/portfolio", icon: FolderKanban, label: "Portfolio" }]
      : []),
  ];

  const handleLinkClick = () => {
    setShowLoading(true);
  };

  // Auto-hide loading after 2s (min duration for feedback, even on fast loads)
  useEffect(() => {
    if (showLoading) {
      const timer = setTimeout(() => {
        setShowLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showLoading]);

  // Reset on location change (if nav completes faster than timer)
  useEffect(() => {
    setShowLoading(false);
  }, [location]);

  return (
    <>
      <aside className="w-64 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 hidden lg:block">
        <nav className="p-4 space-y-2">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={handleLinkClick}
                className={cn(
                  "flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-150 ease-in-out",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className="w-5 h-5 transition-transform duration-150" />
                <span className="font-medium text-sm">{link.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* White card overlay for loading */}
      {showLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-sm transition-opacity duration-200">
          <div className="text-center space-y-4">
            <Loader2 className="h-8 w-8 animate-spin mx-auto text-gray-600" />
            <p className="text-sm font-medium text-gray-800">Fetching API...</p>
          </div>
        </div>
      )}
    </>
  );
};
