import { AuthProvider } from "react-admin";

const VALID_USERNAME = import.meta.env.VITE_VALID_USERNAME;
const VALID_PASSWORD = import.meta.env.VITE_VALID_PASSWORD;

export const authProvider: AuthProvider = {
    async login({ username, password }) {
        if (
            username !== VALID_USERNAME &&
            password !== VALID_PASSWORD
        ) {
            throw new Error("Usuario y contraseña incorrectos");
        }

        if (username !== VALID_USERNAME) {
            throw new Error("Usuario incorrecto");
        }

        if (password !== VALID_PASSWORD) {
            throw new Error("Contraseña incorrecta");
        }

        sessionStorage.setItem("username", username);
    },

    async logout() {
        sessionStorage.removeItem("username");
    },

    async checkError({ status }: { status: number }) {
        if (status === 401 || status === 403) {
            sessionStorage.removeItem("username");
            throw new Error("La sesión ha expirado");
        }
    },

    async checkAuth() {
        if (!sessionStorage.getItem("username")) {
            return Promise.reject();
        }

        return Promise.resolve();
    },

    async getIdentity() {
        const username = sessionStorage.getItem("username");

        return {
            id: username ?? "user",
            fullName: username ?? "Usuario",
            avatar: "https://i.pravatar.cc/150?img=12",
        };
    },
};