import { useState } from "react"

export type RegisteredProps = {
    name: string
    imageUrl?: string | null
}

export function Registered({ name, imageUrl }: RegisteredProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

    const avatarSrc =
        imageUrl && imageUrl.trim().length > 0
            ? imageUrl
            : `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}`

    return (
        <div className="relative flex items-center justify-end gap-3">
            <button
                type="button"
                className="flex rounded-full bg-slate-800 text-sm shadow-sm transition-all duration-200 hover:bg-slate-900 hover:shadow-md focus:outline-2 focus:outline-offset-2 focus:outline-white"
                id="user-menu-button"
                aria-haspopup="false"
                aria-expanded={false}
                onClick={() => {
                    setMobileMenuOpen(false)
                    window.location.href = "/profile"
                }}
            >
                <span className="sr-only">Open profile</span>
                <img className="h-8 w-8 rounded-full" src={avatarSrc} alt="User avatar" />
            </button>
        </div>
    )
}

export function Unregistered() {
    return (
        <div className="flex items-center justify-end gap-3">
            <button
                type="button"
                className="rounded-full border border-slate-400 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all duration-200 hover:bg-slate-100 hover:shadow-md"
                onClick={() => {
                    window.location.href = "/auth/login"
                }}
            >
                Login
            </button>

            <button
                type="button"
                className="rounded-full bg-slate-800 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-slate-900 hover:shadow-md"
                onClick={() => {
                    window.location.href = "/auth/register"
                }}
            >
                Register
            </button>
        </div>
    )
}
