// import { Navigate } from 'react-router-dom';
// import { useAuthStore } from '@/stores/authStore';
// import { UserRole } from '@/types';

// interface AuthGuardProps {
//   children: React.ReactNode;
//   requiredRole?: UserRole;
// }

// export const AuthGuard = ({ children, requiredRole }: AuthGuardProps) => {
//   const { isAuthenticated, user } = useAuthStore();

//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />;
//   }

//   if (requiredRole && user?.role !== requiredRole) {
//     return <Navigate to="/dashboard" replace />;
//   }

//   return <>{children}</>;
// };

// src/components/AuthGuard.tsx
import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/stores/authStore";
import { UserRole } from "@/types";

interface AuthGuardProps {
  children: React.ReactNode;
  requiredRole?: UserRole;
}

export const AuthGuard = ({ children, requiredRole }: AuthGuardProps) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/register" replace />;
  }

  if (requiredRole && user?.role !== requiredRole) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};
