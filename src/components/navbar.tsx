"use client"

import { useState } from "react"
``
const navigation = [
    { name: "Home", href: "/", current: false },
    { name: "Courses", href: "/courses", current: false },
    { name: "Explore", href: "/explore", current: false },
]

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <nav className="relative bg-transparent after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">

                    {/* Mobile menu button */}
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-expanded={mobileMenuOpen}
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-white"
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

                    {/* Logo & Desktop Nav */}
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <img
                                src="/image/logo.png"
                                alt="Segmenta"
                                className="h-6.5 mr-2 w-auto"
                            />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current={item.current ? "page" : undefined}
                                        className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                                            item.current
                                                ? "text-white"
                                                : "text-gray-700 hover:text-black"
                                        }`}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Profile */}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="relative">
                            <button
                                type="button"
                                className="flex rounded-full bg-gray-800 text-sm focus:outline-2 focus:outline-offset-2 focus:outline-white"
                                id="user-menu-button"
                                aria-haspopup="true"
                            >
                                <span className="sr-only">Open user menu</span>
                                <img
                                    className="h-8 w-8 rounded-full"
                                    src="https://ui-avatars.com/api/?name=User"
                                    alt="User avatar"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="sm:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                aria-current={item.current ? "page" : undefined}
                                className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
                                    item.current
                                        ? "text-white"
                                        : "text-gray-700 hover:text-black"
                                }`}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}