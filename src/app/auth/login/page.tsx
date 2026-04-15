"use client";

import React, { useState } from "react";
import { loginAction } from "@/src/actions/auth.action";

export default function LoginPage() {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({ email: "", password: "" });

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const formData = new FormData(e.currentTarget);

            const result = await loginAction({
                email: String(formData.get("email") ?? ""),
                password: String(formData.get("password") ?? ""),
            });

            if (result?.success === false) {
                setError(result.message);
            }
        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="mx-auto flex min-h-[calc(100vh-64px)] w-full max-w-7xl items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
            <section className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="mb-8 flex flex-col items-center text-center">
                    <img src="/image/icon-black.png" alt="Segmenta" className="h-10 w-auto" />
                    <h1 className="mt-4 text-2xl font-black tracking-tight text-slate-800">
                        Sign in to your account
                    </h1>
                    <p className="mt-2 text-sm text-slate-500">
                        Continue your structured learning journey.
                    </p>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                            Email address
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Email address"
                            required
                            autoComplete="email"
                            value={form.email}
                            onChange={(e) =>
                                setForm((prev) => ({ ...prev, email: e.target.value }))
                            }
                            className="block w-full rounded-full border border-slate-400 bg-white px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 outline-none transition focus:border-slate-800 focus:ring-2 focus:ring-slate-800/20"
                        />
                    </div>

                    <div>
                        <div className="mb-2 flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                                Password
                            </label>
                            <a
                                href="/auth/forgot-password"
                                className="text-xs font-semibold text-slate-500 hover:text-slate-800"
                            >
                                Forgot Password?
                            </a>
                        </div>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                            autoComplete="current-password"
                            value={form.password}
                            onChange={(e) =>
                                setForm((prev) => ({ ...prev, password: e.target.value }))
                            }
                            className="block w-full rounded-full border border-slate-400 bg-white px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 outline-none transition focus:border-slate-800 focus:ring-2 focus:ring-slate-800/20"
                        />
                    </div>

                    <div className="pt-1">
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex w-full items-center justify-center rounded-full bg-slate-800 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {loading ? "Signing in..." : "Sign in"}
                        </button>
                        {error && (
                            <p className="mt-3 text-center text-sm text-red-500">{error}</p>
                        )}
                    </div>
                </form>

                <p className="mt-8 text-center text-sm text-slate-500">
                    New member?{" "}
                    <a href="/auth/register" className="font-semibold text-slate-800 hover:text-slate-900">
                        Sign up
                    </a>
                </p>
            </section>
        </main>
    );
}
