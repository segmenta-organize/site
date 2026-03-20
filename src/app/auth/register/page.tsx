"use client";

import { useState } from "react";
import type { SyntheticEvent } from "react";

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        
        setLoading(true);
        try {
            const res = await fetch("http://localhost:3344/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.message || "Registration failed");
                return;
            }

            // Registration successful — redirect to login
            window.location.href = "/auth/login";
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-24 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=gray&shade=900" alt="Your Company" className="mx-auto h-10 w-auto" />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-black">Sign up for an account</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form action="#" method="POST" className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block text-sm/6 font-medium text-black">Full Name</label>
                        <div className="mt-2">
                            <input id="name" type="text" name="name" required autoComplete="name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-2 -outline-offset-2 outline-black/20 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black sm:text-sm/6" onChange={(e) => setName(e.target.value)} />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-black">Email address</label>
                        <div className="mt-2">
                            <input id="email" type="email" name="email" required autoComplete="email" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-2 -outline-offset-2 outline-black/20 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black sm:text-sm/6" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm/6 font-medium text-black">Password</label>
                        </div>
                        <div className="mt-2">
                            <input id="password" type="password" name="password" required autoComplete="current-password" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-2 -outline-offset-2 outline-black/20 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black sm:text-sm/6" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="confirm-password" className="block text-sm/6 font-medium text-black">Confirm Password</label>
                        </div>
                        <div className="mt-2">
                            <input id="confirm-password" type="password" name="confirm-password" required autoComplete="current-password" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-2 -outline-offset-2 outline-black/20 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black sm:text-sm/6" onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                    </div>

                    {error && (
                        <p className="text-sm text-red-600">{error}</p>
                    )}

                    <div>
                        <button type="submit" disabled={loading} className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50">
                            {loading ? "Signing up..." : "Sign up"}
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-600">
                    Have an account?{" "}
                    <a href="/auth/login" className="font-semibold text-black hover:text-gray-800">Sign in</a>
                </p>
            </div>
        </div>
    );
}