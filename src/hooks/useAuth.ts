import { useState } from "react";
import { useRouter } from "next/navigation";
import { setToken, removeToken } from "@/lib/auth";

interface LoginPayload {
    email: string;
    password: string;
}

export const useAuth = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const login = async (payload: LoginPayload) => {
        setLoading(true);
        setError(null);

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (!res.ok || !data.success) {
                throw new Error(data.message || "Login gagal");
            }

            setToken(data.data.token);
            router.push("/courses");
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Terjadi kesalahan");
            }
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        removeToken();
        router.push("/auth/login");
    };

    return { login, logout, loading, error };
};
