import Cookies from "js-cookie";
import { useAuthStore } from "@/store/useAuthStore";

export function logout() {
  Cookies.remove("authToken"); 
  useAuthStore.getState().logout(); 
}
