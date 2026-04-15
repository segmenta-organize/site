"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

const mockCourse = {
    id: "1",
    title: "Complete TypeScript & React Masterclass",
    description:
        "Master TypeScript and React from beginner to advanced. Learn modern web development with hands-on projects, real-world examples, and best practices used by top companies.",
    thumbnail: "https://img.youtube.com/vi/SOTamWNgDKc/maxresdefault.jpg",
    channel: "Traversy Media",
    channelAvatar: "https://yt3.googleusercontent.com/ytc/AIdro_placeholder",
    subscribers: "2.1M",
    totalDuration: "12h 30m",
    totalLessons: 42,
    progress: 40,
    lastUpdated: "November 2024",
    version: "1",
    tags: ["TypeScript", "React", "Web Development", "Frontend"],
    sections: [
        { title: "Introduction", duration: "10:00" },
        { title: "Chapter 1: Basics", duration: "25:30" },
        { title: "Chapter 2: Intermediate", duration: "35:45" },
        { title: "Conclusion", duration: "15:00" },
    ],
};

export default function CoursePage() {
    const { id } = useParams();
    const router = useRouter();
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    return (
        <div className="space-y-4 sm:space-y-6">
            {/* Header */}
            <div className="flex flex-col gap-4 rounded-lg py-4 sm:flex-row sm:items-center sm:justify-between sm:py-6">
                <div className="flex items-center gap-3">
                    <h1 className="text-xl font-bold tracking-tight text-slate-800 sm:text-2xl">
                        Course Overview
                    </h1>
                </div>

                <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto sm:justify-end">
                    <button
                        onClick={() => router.push(`/courses/${id}/learn`)}
                        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-slate-800 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-slate-900 hover:shadow-md sm:flex-none sm:px-5"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M8 5v14l11-7z" />
                        </svg>
                        Continue
                    </button>

                    <button className="flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-400 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all duration-200 hover:bg-slate-100 hover:shadow-md sm:flex-none sm:px-5">
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
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                        Edit
                    </button>

                    <button
                        onClick={() => setShowDeleteModal(true)}
                        className="flex flex-1 items-center justify-center gap-2 rounded-full border border-red-400 bg-white px-4 py-2 text-sm font-medium text-red-500 shadow-sm transition-all duration-200 hover:border-red-300 hover:bg-red-50 hover:text-red-600 hover:shadow-md sm:flex-none sm:px-5"
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
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                            <path d="M10 11v6M14 11v6" />
                            <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                        </svg>
                        Unenroll
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col gap-6 pb-10 lg:flex-row">
                {/* Left - Main Info */}
                <div className="flex min-w-0 flex-col gap-5 lg:flex-[2]">
                    {/* Thumbnail */}
                    <div
                        className="relative w-full overflow-hidden rounded-2xl shadow-md"
                        style={{ paddingBottom: "56.25%" }}
                    >
                        <img
                            src={mockCourse.thumbnail}
                            alt={mockCourse.title}
                            className="absolute left-0 top-0 h-full w-full object-cover"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src =
                                    "https://placehold.co/1280x720/1e293b/white?text=Course+Thumbnail";
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <button
                            onClick={() => router.push(`/courses/${id}/learn`)}
                            className="group absolute inset-0 flex items-center justify-center"
                        >
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 shadow-lg backdrop-blur-sm transition-all duration-200 group-hover:scale-110 group-hover:bg-white/30 sm:h-16 sm:w-16">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="ml-1 h-7 w-7 text-white sm:h-8 sm:w-8"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
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

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {mockCourse.tags.map((tag, i) => (
                            <span
                                key={i}
                                className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Channel Info */}
                    <div className="flex flex-col items-center gap-3 overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm sm:flex-row sm:items-center sm:gap-4 sm:text-left">
                        <img
                            src={mockCourse.channelAvatar}
                            alt={mockCourse.channel}
                            className="h-11 w-11 rounded-full object-cover ring-2 ring-slate-200"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                                    mockCourse.channel
                                )}&background=1e293b&color=fff`;
                            }}
                        />
                        <div className="flex flex-col gap-0.5">
                            <span className="text-sm font-semibold text-slate-800">
                                {mockCourse.channel}
                            </span>
                            <span className="text-xs text-slate-400">
                                {mockCourse.subscribers} subscribers
                            </span>
                        </div>
                        <button className="w-full rounded-full bg-slate-800 px-5 py-2 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-slate-900 hover:shadow-md sm:ml-auto sm:w-auto">
                            Visit Channel
                        </button>
                    </div>
                </div>

                {/* Right - Course Details & Outline */}
                <div className="w-full flex-col gap-4 lg:w-1/3">
                    <div className="flex flex-col gap-4">
                        {/* Stats Card */}
                        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                            <div className="border-b border-slate-100 px-5 py-4">
                                <h2 className="text-sm font-bold tracking-tight text-slate-800">
                                    Course Details
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 divide-y divide-slate-100 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                                {[
                                    { label: "Total Duration", value: mockCourse.totalDuration, icon: "🕐" },
                                    { label: "Total Chapters", value: `${mockCourse.totalLessons} chapters`, icon: "🎬" },
                                    { label: "Last Updated", value: mockCourse.lastUpdated, icon: "📅" },
                                    { label: "Version", value: `v${mockCourse.version}`, icon: "⚡" },
                                ].map((stat, i) => (
                                    <div key={i} className="flex flex-col gap-0.5 px-4 py-3">
                                        <span className="text-xs text-slate-400">
                                            {stat.icon} {stat.label}
                                        </span>
                                        <span className="text-sm font-semibold text-slate-700">
                                            {stat.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Course Progress */}
                        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                            <div className="border-b border-slate-100 px-5 py-4">
                                <h2 className="text-sm font-bold tracking-tight text-slate-800">
                                    Your Progress
                                </h2>
                            </div>
                            <div className="p-5">
                                <div className="mb-3 flex items-center gap-2">
                                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                                        <div
                                            className="h-full rounded-full bg-slate-700 transition-all duration-300"
                                            style={{ width: `${mockCourse.progress}%` }}
                                        />
                                    </div>
                                    <span className="flex-shrink-0 font-mono text-xs text-slate-400">
                                        {mockCourse.progress}%
                                    </span>
                                </div>
                                <p className="text-sm leading-relaxed text-slate-500">
                                    You have completed {mockCourse.progress}% of this course. Keep
                                    up the great work and continue learning!
                                </p>
                            </div>
                        </div>

                        {/* Course Outline */}
                        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                            <div className="border-b border-slate-200 px-5 py-4">
                                <h2 className="text-sm font-bold tracking-tight text-slate-800">
                                    Course Outline
                                </h2>
                            </div>
                            <div className="flex flex-col divide-y divide-slate-100">
                                {mockCourse.sections.map((section, index) => (
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
            </div>

            {/* Delete / Unenroll Modal */}
            {showDeleteModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
                    <div className="mx-4 flex w-full max-w-sm flex-col gap-4 rounded-2xl bg-white p-6 shadow-xl">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-red-500"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                                    <line x1="12" y1="9" x2="12" y2="13" />
                                    <line x1="12" y1="17" x2="12.01" y2="17" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-slate-800">
                                    Unenroll from Course?
                                </h3>
                                <p className="mt-0.5 text-xs text-slate-400">
                                    This action cannot be undone.
                                </p>
                            </div>
                        </div>

                        <p className="text-sm leading-relaxed text-slate-500">
                            You are about to unenroll from{" "}
                            <span className="font-semibold text-slate-700">
                                "{mockCourse.title}"
                            </span>
                            . Your progress will be lost.
                        </p>

                        <div className="mt-1 flex gap-3">
                            <button
                                onClick={() => setShowDeleteModal(false)}
                                className="flex-1 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-slate-50"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => {
                                    setShowDeleteModal(false);
                                    router.push("/courses");
                                }}
                                className="flex-1 rounded-full bg-red-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-red-600"
                            >
                                Yes, Unenroll
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}