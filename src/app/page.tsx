"use client";

import React from "react";

export default function Page() {
    return (
        <div className="relative mx-auto flex min-h-[calc(100vh-64px)] max-w-7xl flex-col items-center justify-center overflow-hidden px-4 text-slate-800 sm:px-6 lg:px-8">
            <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-400 px-3 py-1 text-xs font-bold uppercase tracking-widest text-slate-700">
                    📝 Structured Learning
                </span>

                {/* Heading */}
                <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-800 sm:text-5xl md:text-6xl lg:text-7xl">
                    Turn Long Videos Into
                    <span className="relative mt-1 block">
                        <span className="relative">Structured Learning.</span>
                    </span>
                </h1>

                {/* Description */}
                <p className="max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base md:text-lg">
                    Segmenta transforms lengthy YouTube tutorials into organized, chapter-based courses.
                    Learn smarter with clear sections, track your progress, and focus on what truly matters —
                    <span className="font-semibold text-slate-800"> without scrubbing through hours of video.</span>
                </p>

                {/* CTA Buttons */}
                <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row">
                    <button
                        className="group flex items-center gap-2 rounded-full bg-slate-800 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-slate-900 hover:shadow-md"
                        onClick={() => (window.location.href = "/courses")}
                    >
                        Let's Start
                        <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </button>
                </div>

                {/* Stats row */}
                <div className="mt-4 flex w-full items-center justify-center gap-8 pt-6">
                    {[
                        { value: "10x", label: "Faster Learning" },
                        { value: "100%", label: "Free to Use" },
                        { value: "∞", label: "Videos Supported" },
                    ].map((stat) => (
                        <div key={stat.label} className="flex flex-col items-center gap-1">
                            <span className="text-xl font-black text-slate-800">{stat.value}</span>
                            <span className="text-xs tracking-wide text-slate-400">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
