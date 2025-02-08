// useAuthStore.ts
import { create } from "zustand";
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

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  setUser: (user) => set({ user, isAuthenticated: !!user }),
  setIsAuthenticated: (status) => set({ isAuthenticated: status }),
  logout: () => {
    Cookies.remove("authToken");
    set({ user: null, isAuthenticated: false });
  },
}));