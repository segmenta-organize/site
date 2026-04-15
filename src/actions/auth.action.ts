"use server";

import { api } from "../lib/api";
import { saveSession } from "../lib/session";
import type { LoginPayload, LoginResponse } from "../types/auth.type";
import { redirect } from "next/navigation";

export async function loginAction(payload: LoginPayload) {
    try {
        const response = await api.post<LoginResponse>("api/auth/login", payload);

        if (!response.data.success) {
            throw new Error(response.data.message);
        }

        await saveSession(response.data.data.token);
        redirect("/courses"); 
    } catch (error: any) {
        const message = error?.response?.data?.message ?? "Login failed, please try again.";        
        return { success: false, message };
    }
}   