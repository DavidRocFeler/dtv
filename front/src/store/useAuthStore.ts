"use client"; 

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import Cookies from "js-cookie";

interface User {
  id: string;
  email: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  setIsAuthenticated: (status: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      setUser: (user) => {
        set({ user, isAuthenticated: true });

        // ✅ Guarda el usuario en cookies y Zustand (persistencia)
        Cookies.set("authToken", JSON.stringify(user), {
          secure: true,
          sameSite: "strict",
          expires: 7,
        });
      },

      setIsAuthenticated: (status) => set({ isAuthenticated: status }),

      logout: () => {
        Cookies.remove("authToken");
        set({ user: null, isAuthenticated: false });
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage), // ✅ Persistencia en localStorage
    }
  )
);

// ✅ Asegura que solo se ejecute en el cliente
export const initializeAuthState = () => {
  if (typeof window !== "undefined") {
    const authToken = Cookies.get("authToken");

    if (authToken) {
      try {
        const user = JSON.parse(authToken);
        useAuthStore.getState().setUser(user);
        useAuthStore.getState().setIsAuthenticated(true);
      } catch (error) {
        console.error("Error parsing authToken:", error);
        Cookies.remove("authToken");
      }
    }
  }
};
