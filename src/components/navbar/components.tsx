"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Registered, Unregistered } from "./support/buttons"

const navigation = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Explore", href: "/explore" },
]

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const pathname = usePathname()
    const session = null

    const isCurrent = (href: string) => {
        if (href === "/") return pathname === "/"
        return pathname === href || pathname.startsWith(`${href}/`)
    }

    return (
        <nav className="relative bg-white after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    {/* Mobile menu button */}
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-expanded={mobileMenuOpen}
                            className="relative inline-flex items-center justify-center rounded-md text-slate-500 hover:bg-slate-100 hover:text-slate-800 focus:outline-2 focus:-outline-offset-1 focus:outline-slate-800"
                        >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            {mobileMenuOpen ? (
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true" className="size-6">
                                    <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            ) : (
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true" className="size-6">
                                    <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Mobile profile (top-right): show only if logged in */}
                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                        {session ? <Registered name="John Doe" imageUrl={null} /> : null}
                    </div>

                    {/* Logo & Desktop Nav */}
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <a href="/" aria-label="Home">
                                <img src="/image/logo-black.png" alt="Segmenta" className="mr-2 h-6.5 w-auto" />
                            </a>
                        </div>

                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => {
                                    const current = isCurrent(item.href)
                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            aria-current={current ? "page" : undefined}
                                            className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                                                current
                                                    ? "font-bold text-slate-800"
                                                    : "text-slate-600 hover:text-slate-800"
                                            }`}
                                        >
                                            {item.name}
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Profile (desktop only) */}
                    <div className="absolute inset-y-0 right-0 hidden items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:flex sm:pr-0">
                        <div className="relative">{session ? <Registered name="John Doe" imageUrl={null} /> : <Unregistered />}</div>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="border-t border-slate-200 bg-white sm:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {navigation.map((item) => {
                            const current = isCurrent(item.href)
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    aria-current={current ? "page" : undefined}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
                                        current
                                            ? "font-bold text-slate-800"
                                            : "text-slate-600 hover:text-slate-800"
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            )
                        })}

                        {/* Profile (mobile, inside burger) */}
                        {!session && (
                            <div className="mt-2 flex justify-center border-t border-slate-200 pt-3">
                                <Unregistered />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    )
}