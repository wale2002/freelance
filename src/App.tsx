// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { AuthGuard } from "./components/AuthGuard";
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";
// import DashboardPage from "./pages/DashboardPage";
// import ProjectsPage from "./pages/ProjectsPage";
// import ProjectDetailPage from "./pages/ProjectDetailPage";
// import ProfilePage from "./pages/ProfilePage";
// import PortfolioPage from "./pages/PortfolioPage";
// import ChatsPage from "./pages/ChatsPage";
// import NotFound from "./pages/NotFound";
// import Index from "./pages/Index";
// import ExternalJobsPage from "./pages/ExternalJobsPage"; // NEW
// import ExternalJobDetailPage from "./pages/ExternalJobDetailPage";
// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Index />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/register" element={<RegisterPage />} />
//           <Route
//             path="/dashboard"
//             element={
//               <AuthGuard>
//                 <DashboardPage />
//               </AuthGuard>
//             }
//           />
//           <Route
//             path="/projects"
//             element={
//               <AuthGuard>
//                 <ProjectsPage />
//               </AuthGuard>
//             }
//           />
//           <Route
//             path="/projects/:id"
//             element={
//               <AuthGuard>
//                 <ProjectDetailPage />
//               </AuthGuard>
//             }
//           />
//           <Route
//             path="/external-jobs"
//             element={
//               <AuthGuard>
//                 <ExternalJobsPage />
//               </AuthGuard>
//             }
//           />{" "}
//           {/* NEW */}
//           <Route
//             path="/external-jobs/:originalId"
//             element={
//               <AuthGuard>
//                 <ExternalJobDetailPage />
//               </AuthGuard>
//             }
//           />{" "}
//           {/* NEW */}
//           <Route
//             path="/profile"
//             element={
//               <AuthGuard>
//                 <ProfilePage />
//               </AuthGuard>
//             }
//           />
//           <Route
//             path="/profile/portfolio"
//             element={
//               <AuthGuard>
//                 <PortfolioPage />
//               </AuthGuard>
//             }
//           />
//           <Route
//             path="/chats"
//             element={
//               <AuthGuard>
//                 <ChatsPage />
//               </AuthGuard>
//             }
//           />
//           <Route
//             path="/chats/:chatId"
//             element={
//               <AuthGuard>
//                 <ChatsPage />
//               </AuthGuard>
//             }
//           />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;

// src/App.tsx (updated: added route for freelancer profile view)
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthGuard } from "./components/AuthGuard";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ProfilePage from "./pages/ProfilePage";
import PortfolioPage from "./pages/PortfolioPage";
import ChatsPage from "./pages/ChatsPage";
import FreelancerProfilePage from "./pages/FreelancerProfilePage"; // NEW
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";
import ExternalJobsPage from "./pages/ExternalJobsPage";
import ExternalJobDetailPage from "./pages/ExternalJobDetailPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/dashboard"
            element={
              <AuthGuard>
                <DashboardPage />
              </AuthGuard>
            }
          />
          <Route
            path="/projects"
            element={
              <AuthGuard>
                <ProjectsPage />
              </AuthGuard>
            }
          />
          <Route
            path="/projects/:id"
            element={
              <AuthGuard>
                <ProjectDetailPage />
              </AuthGuard>
            }
          />
          <Route
            path="/external-jobs"
            element={
              <AuthGuard>
                <ExternalJobsPage />
              </AuthGuard>
            }
          />
          <Route
            path="/external-jobs/:originalId"
            element={
              <AuthGuard>
                <ExternalJobDetailPage />
              </AuthGuard>
            }
          />
          <Route
            path="/profile"
            element={
              <AuthGuard>
                <ProfilePage />
              </AuthGuard>
            }
          />
          <Route
            path="/profile/:userId"
            element={
              <AuthGuard>
                <FreelancerProfilePage />
              </AuthGuard>
            }
          />{" "}
          {/* NEW */}
          <Route
            path="/profile/portfolio"
            element={
              <AuthGuard>
                <PortfolioPage />
              </AuthGuard>
            }
          />
          <Route
            path="/chats"
            element={
              <AuthGuard>
                <ChatsPage />
              </AuthGuard>
            }
          />
          <Route
            path="/chats/:chatId"
            element={
              <AuthGuard>
                <ChatsPage />
              </AuthGuard>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
