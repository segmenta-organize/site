"use client";

import React from 'react';
import { Navbar } from '../components/navbar';

export default function Page() {
    return (
        <div className="mx-auto max-w-7xl relative min-h-[calc(100vh-64px)] text-black flex flex-col items-center justify-center overflow-hidden">
            <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-widest uppercase border border-black rounded-full">
                    📝 Structured Learning
                </span>

                {/* Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                    Turn Long Videos Into
                    <span className="block relative mt-1">
                        <span className="relative">
                            Structured Learning.
                        </span>
                    </span>
                </h1>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl leading-relaxed">
                    Segmenta transforms lengthy YouTube tutorials into organized, chapter-based courses.
                    Learn smarter with clear sections, track your progress, and focus on what truly matters —
                    <span className="font-semibold text-black"> without scrubbing through hours of video.</span>
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
                    <button
                        className="group flex items-center gap-2 px-6 py-3 bg-black text-white text-sm font-semibold rounded-full hover:bg-gray-900 transition-all duration-200 shadow-lg hover:shadow-xl"
                        onClick={() => window.location.href = '/courses'}>
                        Let's Start
                        <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                    </button>
                    <button
                        className="px-6 py-3 border border-black text-black text-sm font-semibold rounded-full hover:bg-black hover:text-white transition-all duration-200"
                    >
                        See How It Works
                    </button>
                </div>

                {/* Stats row */}
                <div className="flex items-center gap-8 mt-4 pt-6 w-full justify-center">
                    {[
                        { value: "10x", label: "Faster Learning" },
                        { value: "100%", label: "Free to Use" },
                        { value: "∞", label: "Videos Supported" },
                    ].map((stat) => (
                        <div key={stat.label} className="flex flex-col items-center gap-1">
                            <span className="text-xl font-black">{stat.value}</span>
                            <span className="text-xs text-gray-500 tracking-wide">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}