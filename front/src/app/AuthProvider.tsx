"use client";

import { useEffect } from "react";
import { initializeAuthState } from "@/store/useAuthStore";

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initializeAuthState(); // ✅ Sincroniza Zustand con cookies al inicio
  }, []);

  return <>{children}</>; 
}
