"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

const mockCourse = {
    id: "1",
    title: "Complete TypeScript & React Masterclass",
    description:
        "Master TypeScript and React from beginner to advanced. Learn modern web development with hands-on projects, real-world examples, and best practices used by top companies.",
    thumbnail: "https://img.youtube.com/vi/SOTamWNgDKc/maxresdefault.jpg",
    videoId: "SOTamWNgDKc",
    channel: "Traversy Media",
    channelAvatar: "https://yt3.googleusercontent.com/ytc/AIdro_placeholder",
    subscribers: "2.1M",
    totalDuration: "12h 30m",
    totalLessons: 42,
    progress: 40,
    lastUpdated: "November 2024",
    version: "1",
    tags: ["TypeScript", "React", "Web Development", "Frontend"],
    chapters: [
        { title: "Introduction", duration: "10:00" },
        { title: "Chapter 1: Basics", duration: "25:30" },
        { title: "Chapter 2: Intermediate", duration: "35:45" },
        { title: "Conclusion", duration: "15:00" },
    ],
    currentChapter: 1,
};

export default function LearnPage() {
    const { id } = useParams();
    const router = useRouter();
    const [showOutline, setShowOutline] = useState(true);
    const [isFocusMode, setIsFocusMode] = useState(false);

    if (isFocusMode) {
        return (
            <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black">
                <button
                    onClick={() => setIsFocusMode(false)}
                    className="absolute right-6 top-6 z-50 rounded-full bg-white/10 p-3 text-white/50 backdrop-blur-sm transition-colors hover:bg-white/20 hover:text-white"
                    title="Exit Focus Mode"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="relative w-full max-w-7xl aspect-video px-4 sm:px-10">
                    <iframe
                        className="absolute left-0 top-0 h-full w-full"
                        src={`https://www.youtube.com/embed/${mockCourse.videoId}?rel=0`}
                        title={mockCourse.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-4 sm:space-y-6">
            {/* Header */}
            <div className="flex w-full flex-col gap-4 rounded-lg py-4 sm:flex-row sm:items-center sm:justify-between sm:py-6">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center justify-center rounded-full border border-slate-300 bg-white p-2 text-slate-700 shadow-sm transition-all duration-200 hover:bg-slate-100 hover:shadow-md"
                        style={{ width: 40, height: 40, minWidth: 40, minHeight: 40 }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <div className="min-w-0">
                        <h1 className="truncate text-xl font-bold tracking-tight text-slate-800 sm:text-2xl">
                            {mockCourse.chapters[mockCourse.currentChapter].title}
                        </h1>
                        <p className="truncate text-sm text-slate-500">
                            {mockCourse.title}
                        </p>
                    </div>
                </div>

                <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto sm:justify-end">
                    {!showOutline && (
                        <button
                            onClick={() => setShowOutline(true)}
                            className="flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all duration-200 hover:bg-slate-100 hover:shadow-md sm:flex-none sm:px-5"
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="h-4 w-4" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            >
                                <rect width="18" height="18" x="3" y="3" rx="2" />
                                <path d="M15 3v18" />
                            </svg>
                            Show Outline
                        </button>
                    )}
                    <button
                        onClick={() => setIsFocusMode(true)}
                        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-slate-800 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-slate-900 hover:shadow-md sm:flex-none sm:px-5"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M8 3H5a2 2 0 0 0-2 2v3" />
                            <path d="M16 3h3a2 2 0 0 1 2 2v3" />
                            <path d="M8 21H5a2 2 0 0 1-2-2v-3" />
                            <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
                        </svg>
                        Focus Mode
                    </button>
                </div>
            </div>

            {/* Course Content */}
            <div className="flex flex-col gap-6 pb-10 lg:flex-row">
                {/* Left - Main Info */}
                <div className={`flex min-w-0 flex-col gap-5 ${showOutline ? "lg:flex-[2]" : "w-full"}`}>
                    {/* Video Player */}
                    <div
                        className="relative w-full overflow-hidden rounded-2xl shadow-md bg-slate-900"
                        style={{ paddingBottom: showOutline ? "56.25%" : "52.25%" }} // 16:9 Aspect Ratio
                    >
                        <iframe
                            className="absolute left-0 top-0 h-full w-full"
                            src={`https://www.youtube.com/embed/${mockCourse.videoId}?rel=0`}
                            title={mockCourse.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    {/* Chapter Navigation & Complete Button */}
                    <div className="flex flex-wrap items-center justify-between gap-2 py-2 sm:gap-3">
                        {/* Previous Chapter Button */}
                        <button
                            onClick={() => {
                                if (mockCourse.currentChapter > 0) {
                                    // logic to go to previous chapter
                                }
                            }}
                            disabled={mockCourse.currentChapter === 0}
                            className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium shadow-sm transition-all duration-200 sm:px-5 ${
                                mockCourse.currentChapter === 0
                                    ? "cursor-not-allowed border-slate-200 bg-slate-100 text-slate-300"
                                    : "border-slate-300 bg-white text-slate-700 hover:bg-slate-100 hover:shadow-md"
                            }`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                            {mockCourse.currentChapter === 0 ? "Start" : "Previous"}
                        </button>

                        {/* Check/Uncheck Button */}
                        <button
                            onClick={() => {
                                // logic to check/uncheck chapter
                            }}
                            className="flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all duration-200 hover:bg-slate-100 hover:shadow-md sm:px-5"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill={false ? "currentColor" : "none"}
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" fill="none" />
                                <path
                                    d="M8 12l3 3 5-5"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                />
                            </svg>
                            Mark Complete
                        </button>

                        {/* Next Chapter Button */}
                        <button
                            onClick={() => {
                                if (mockCourse.currentChapter < mockCourse.chapters.length - 1) {
                                    // logic to go to next chapter
                                }
                            }}
                            disabled={mockCourse.currentChapter === mockCourse.chapters.length - 1}
                            className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium shadow-sm transition-all duration-200 sm:px-5 ${
                                mockCourse.currentChapter === mockCourse.chapters.length - 1
                                    ? "cursor-not-allowed border-slate-200 bg-slate-100 text-slate-300"
                                    : "border-slate-300 bg-white text-slate-700 hover:bg-slate-100 hover:shadow-md"
                            }`}
                        >
                            {mockCourse.currentChapter === mockCourse.chapters.length - 1 ? "Finally" : "Next"}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                    {/* Title & Description */}
                    <div className="flex flex-col gap-3">
                        <h2 className="text-xl font-bold tracking-tight text-slate-800 sm:text-2xl">
                            {mockCourse.title}
                        </h2>
                        <p className="text-sm leading-relaxed text-slate-500">
                            {mockCourse.description}
                        </p>
                    </div>
                </div>
                
                {/* Right - Course Outline */}
                {showOutline && (
                    <div className="w-full flex-col gap-4 lg:w-1/4">
                        <div className="flex flex-col gap-4">
                            {/* Course Outline */}
                            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                                <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                                    <h2 className="text-sm font-bold tracking-tight text-slate-800">
                                        Course Outline
                                    </h2>
                                    <button 
                                        onClick={() => setShowOutline(false)}
                                        className="text-slate-400 transition-colors hover:text-slate-600"
                                        title="Hide Outline"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect width="18" height="18" x="3" y="3" rx="2" />
                                            <path d="M15 3v18" />
                                            <path d="m8 9 3 3-3 3" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex flex-col divide-y divide-slate-100">
                                    {mockCourse.chapters.map((section, index) => (
                                        <div
                                            key={index}
                                            className="group flex cursor-pointer items-center gap-3 px-4 py-3.5 transition-colors duration-150 hover:bg-slate-50 sm:px-5"
                                            onClick={() => router.push(`/courses/${id}/learn`)}
                                        >
                                            <input
                                                type="checkbox"
                                                className="h-4 w-4 flex-shrink-0 cursor-pointer rounded accent-slate-700"
                                                onClick={(e) => e.stopPropagation()}
                                            />
                                            <div className="flex min-w-0 flex-1 items-center justify-between gap-2">
                                                <div className="flex min-w-0 flex-col">
                                                    <span className="text-[11px] uppercase tracking-wide text-slate-400">
                                                        Chapter {index + 1}
                                                    </span>
                                                    <span className="truncate text-sm font-medium text-slate-600 transition-colors group-hover:text-slate-900">
                                                        {section.title}
                                                    </span>
                                                </div>
                                                <span className="flex-shrink-0 font-mono text-xs text-slate-400">
                                                    {section.duration}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
