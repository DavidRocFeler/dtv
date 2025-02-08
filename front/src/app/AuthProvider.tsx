// AuthProvider.tsx
"use client";
import { useEffect } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import Cookies from "js-cookie";

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const { setIsAuthenticated } = useAuthStore();

  useEffect(() => {
    const checkAuth = () => {
      const token = Cookies.get("authToken");
      setIsAuthenticated(!!token);
    };

    checkAuth();
  }, []);

  return <>{children}</>;
}