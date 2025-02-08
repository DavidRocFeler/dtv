// components/ProtectedRoute.tsx
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";
import Cookies from "js-cookie";
import NotFound from "./not-found";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);
  const { setIsAuthenticated } = useAuthStore();

  useEffect(() => {
    const checkAuth = () => {
      const token = Cookies.get("authToken");
      
      if (!token) {
        setIsAuthenticated(false);
        router.push('/404');
        return;
      }
      
      setIsAuthenticated(true);
      setIsChecking(false);
    };

    checkAuth();
  }, []);

  // No renderizamos nada mientras verificamos
  if (isChecking) {
    return <NotFound/>;
  }

  return <>{children}</>;
}