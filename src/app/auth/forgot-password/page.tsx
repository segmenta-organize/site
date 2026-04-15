export default function ForgotPasswordPage() {
    return (
        <main className="mx-auto flex min-h-[calc(100vh-64px)] w-full max-w-7xl items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
            <section className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="mb-8 flex flex-col items-center text-center">
                    <img src="/image/icon-black.png" alt="Segmenta" className="h-10 w-auto" />
                    <h1 className="mt-4 text-2xl font-black tracking-tight text-slate-800">
                        Forgot your password?
                    </h1>
                    <p className="mt-2 text-sm text-slate-500">
                        Enter your email to reset your password.
                    </p>
                </div>

                <form action="#" method="POST" className="space-y-5">
                    <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-800">
                            Email address
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            required
                            autoComplete="email"
                            placeholder="Email address"
                            className="block w-full rounded-full border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-slate-800 focus:ring-2 focus:ring-slate-800/20"
                        />
                    </div>

                    <div className="pt-1">
                        <button
                            type="submit"
                            className="flex w-full items-center justify-center rounded-full bg-slate-800 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-900"
                        >
                            Reset Password
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-center text-sm text-slate-500">
                    Remember your password?{" "}
                    <a href="/auth/login" className="font-semibold text-slate-800 hover:text-slate-900">
                        Sign in
                    </a>
                </p>
            </section>
        </main>
    );
}