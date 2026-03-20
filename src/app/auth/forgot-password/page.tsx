export default function ForgotPasswordPage() {
    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-24 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=gray&shade=900" alt="Your Company" className="mx-auto h-10 w-auto" />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-black">Forgot your password?</h2>
                <p className="mt-2 text-center text-sm/6 text-gray-600">Enter your email to reset your password</p>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form action="#" method="POST" className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-black">Email address</label>
                        <div className="mt-2">
                            <input id="email" type="email" name="email" required autoComplete="email" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-2 -outline-offset-2 outline-black/20 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black sm:text-sm/6" />
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Reset Password</button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-600">
                    Remember your password?{" "}
                    <a href="/auth/login" className="font-semibold text-black hover:text-gray-800">Sign in</a>
                </p>
            </div>
        </div>
    );
}