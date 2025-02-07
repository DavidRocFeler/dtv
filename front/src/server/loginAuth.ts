import { ILoginProps } from "@/interface/globalTypes";
import Swal from "sweetalert2";
import Cookies from "js-cookie"; 
import { jwtEncode } from "@/utils/jwtUtils"; 
import { useAuthStore } from "@/store/useAuthStore"; 

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function loginApiRequest(userData: ILoginProps) {
    try {
        const res = await fetch(`${API_URL}/users/login`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
        });

        const responseData = await res.json(); // ✅ Capturamos la respuesta antes de continuar

        if (res.ok) {
            const { token, user } = responseData;

            // ✅ Encripta el token antes de almacenarlo en las cookies
            const hashedToken = jwtEncode(token);
            Cookies.set("authToken", hashedToken, { 
                secure: true, 
                sameSite: "strict",
                expires: 7 // El token expirará en 7 días
            });

            console.log("🔐 Token almacenado en cookies:", Cookies.get("authToken"));

            // ✅ Actualiza el estado global de Zustand
            const setUser = useAuthStore.getState().setUser;
            const setIsAuthenticated = useAuthStore.getState().setIsAuthenticated;

            setUser(user); // Guarda el usuario en el estado global
            setIsAuthenticated(true); // Marca al usuario como autenticado

            Swal.fire({
                icon: "success",
                title: "Login exitoso",
                text: `Bienvenido, ${user.name}!`,
                width: 400,
                padding: "3rem",
                customClass: {
                    popup: "custom-swal-popup"
                }
            });

            return responseData; // ✅ Devuelve los datos del usuario junto con el token
        } else {
            console.warn("⚠️ Error en el login - Respuesta del servidor:", responseData);

            // ✅ Mostramos un mensaje de error sin romper la app
            Swal.fire({
                icon: "error",
                title: "Error de autenticación",
                text: responseData.message || "Email o contraseña incorrectos.",
                width: 400,
                padding: "3rem",
                confirmButtonColor: "#d33",
                customClass: {
                    popup: "custom-swal-popup"
                }
            });

            return null; // ✅ Retornamos `null` en lugar de lanzar un error
        }
    } catch (error) {
        console.error("❌ Error en el login:", error);

        // ✅ Si la conexión falla, mostramos un mensaje claro
        Swal.fire({
            icon: "error",
            title: "Error de Conexión",
            text: "No se pudo conectar con el servidor. Inténtalo nuevamente.",
            confirmButtonColor: "#d33",
            width: 400,
            padding: "3rem",
            customClass: {
                popup: "custom-swal-popup"
            }
        });

        return null; // ✅ Retornamos `null` en lugar de romper la app
    }
}
