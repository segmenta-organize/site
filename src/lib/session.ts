import { cookies } from "next/headers";

export async function saveSession(token: string) {
const cookieStore = await cookies();
  cookieStore.set("token", token, {
    httpOnly: true,  
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });
}

export async function getSession() {
  const cookieStore = await cookies();
  return cookieStore.get("token")?.value ?? null;
}

export async function clearSession() {
  const cookieStore = await cookies();
  cookieStore.delete("token");
}