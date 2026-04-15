import Link from "next/link"
import type { ReactNode } from "react"

type NavLink = { href: string; label: string }
type SocialLink = { href: string; label: string; icon: ReactNode }

const productLinks: NavLink[] = [
    { href: "/about", label: "About" },
    { href: "/features", label: "Features" },
    { href: "/contact", label: "Contact" },
]

const legalLinks: NavLink[] = [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
]

function FooterLink({ href, label, className }: { href: string; label: string; className?: string }) {
    return (
        <Link href={href} className={className}>
            {label}
        </Link>
    )
}

function SocialIconLink({ href, label, icon }: SocialLink) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-700 bg-slate-800 text-slate-300 transition hover:bg-slate-700 hover:text-white"
            aria-label={label}
            title={label}
        >
            {icon}
        </a>
    )
}

export function Footer() {
    const year = new Date().getFullYear()

    const socials: SocialLink[] = [
        {
            href: "https://github.com/segmenta-organize/",
            label: "GitHub",
            icon: (
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                    <path d="M12 .5C5.73.5.75 5.62.75 12.02c0 5.12 3.29 9.46 7.86 10.99.58.11.79-.26.79-.57v-2.1c-3.2.71-3.88-1.58-3.88-1.58-.53-1.38-1.3-1.75-1.3-1.75-1.06-.75.08-.74.08-.74 1.17.08 1.79 1.24 1.79 1.24 1.04 1.82 2.73 1.3 3.4 1 .11-.77.41-1.3.74-1.6-2.55-.3-5.23-1.31-5.23-5.82 0-1.29.44-2.34 1.17-3.17-.12-.3-.51-1.52.11-3.17 0 0 .96-.31 3.15 1.21.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.19-1.52 3.15-1.21 3.15-1.21.62 1.65.23 2.87.11 3.17.73.83 1.17 1.88 1.17 3.17 0 4.52-2.69 5.52-5.25 5.82.42.37.79 1.1.79 2.22v3.29c0 .31.21.68.8.57 4.56-1.53 7.85-5.87 7.85-10.99C23.25 5.62 18.27.5 12 .5z" />
                </svg>
            ),
        }
    ]

    return (
        <footer className="relative bg-slate-900 text-slate-100 after:pointer-events-none after:absolute after:inset-x-0 after:top-0 after:h-px after:bg-slate-700">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="grid gap-8 py-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-2 text-center sm:text-left">
                        <div className="text-base font-semibold text-slate-100">Segmenta</div>
                        <p className="text-sm leading-relaxed text-slate-300">
                            Turn long YouTube tutorials into clear, chapter-based courses. Learn efficiently, track progress, and skip the fluff.
                        </p>
                    </div>

                    <nav aria-label="Footer navigation" className="space-y-3 text-center sm:text-left">
                        <div className="text-sm font-semibold text-slate-100">Product</div>
                        <ul className="space-y-2">
                            {productLinks.map((l) => (
                                <li key={l.href}>
                                    <FooterLink href={l.href} label={l.label} className="text-sm text-slate-300 transition hover:text-white" />
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="space-y-3 text-center sm:text-left">
                        <div className="text-sm font-semibold text-slate-100">Contact</div>
                        <ul className="space-y-2">
                            <li>
                                <a href="mailto:segmenta-organize@gmail.com" className="text-sm text-slate-300 transition hover:text-white">
                                    segmenta-organize@gmail.com
                                </a>
                            </li>
                            <li className="text-sm text-slate-300">Indonesia</li>
                        </ul>
                    </div>

                    <div className="space-y-3 text-center sm:text-left">
                        <div className="text-sm font-semibold text-slate-100">Follow</div>

                        <div className="flex items-center justify-center gap-3 sm:justify-start">
                            {socials.map((s) => (
                                <SocialIconLink key={s.label} {...s} />
                            ))}
                        </div>

                        <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 pt-2 sm:justify-start">
                            {legalLinks.map((l) => (
                                <li key={l.href}>
                                    <FooterLink href={l.href} label={l.label} className="text-xs text-slate-400 transition hover:text-white" />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col gap-2 border-t border-slate-700 py-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-center text-sm text-slate-300 sm:text-left">© {year} Segmenta. Made by Hilmi Musyafa</p>
                </div>
            </div>
        </footer>
    )
}
