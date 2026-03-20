"use client";

import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

const mockCourse = {
    id: "1",
    title: "Complete TypeScript & React Masterclass",
    description: "Master TypeScript and React from beginner to advanced. Learn modern web development with hands-on projects, real-world examples, and best practices used by top companies.",
    thumbnail: "https://img.youtube.com/vi/SOTamWNgDKc/maxresdefault.jpg",
    channel: "Traversy Media",
    channelAvatar: "https://yt3.googleusercontent.com/ytc/AIdro_placeholder",
    subscribers: "2.1M",
    totalDuration: "12h 30m",
    totalSections: 5,
    totalLessons: 42,
    progress: 40,
    rating: 4.8,
    enrolled: "12,543",
    lastUpdated: "November 2024",
    tags: ["TypeScript", "React", "Web Development", "Frontend"],
    sections: [
        { title: "Introduction", duration: "10:00", lessons: 3 },
        { title: "Chapter 1: Basics", duration: "25:30", lessons: 8 },
        { title: "Chapter 2: Intermediate", duration: "35:45", lessons: 10 },
        { title: "Chapter 3: Advanced", duration: "45:00", lessons: 12 },
        { title: "Conclusion", duration: "15:00", lessons: 9 },
    ]
};

export default function CoursePage() {
    const { id } = useParams();
    const router = useRouter();
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    return (
        <div className="mx-auto max-w-7xl w-full px-2 sm:px-6 lg:px-8 min-h-[calc(100vh-64px)] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between w-full rounded-lg py-6">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => router.back()}
                        className="p-2 hover:bg-slate-100 rounded-lg transition-colors duration-200 text-slate-500 hover:text-slate-700"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 12H5M12 5l-7 7 7 7" />
                        </svg>
                    </button>
                    <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Course Overview</h1>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => router.push(`/courses/${id}/learn`)}
                        className="flex items-center gap-2 px-5 py-2 bg-slate-800 hover:bg-slate-900 text-white text-sm font-medium rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                        Continue Learning
                    </button>
                    <button className="flex items-center gap-2 px-5 py-2 bg-white hover:bg-slate-100 text-slate-700 text-sm font-medium rounded-full transition-all duration-200 shadow-sm hover:shadow-md border border-slate-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                        Edit Course
                    </button>
                    <button
                        onClick={() => setShowDeleteModal(true)}
                        className="flex items-center gap-2 px-5 py-2 bg-white hover:bg-red-50 text-red-500 hover:text-red-600 text-sm font-medium rounded-full transition-all duration-200 shadow-sm hover:shadow-md border border-red-200 hover:border-red-300"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
            <div className="flex gap-6 pb-10">
                {/* Left - Main Info */}
                <div className="flex flex-col gap-5 w-2/3">
                    {/* Thumbnail */}
                    <div className="relative w-full rounded-2xl overflow-hidden shadow-md" style={{ paddingBottom: '56.25%' }}>
                        <img
                            src={mockCourse.thumbnail}
                            alt={mockCourse.title}
                            className="absolute top-0 left-0 w-full h-full object-cover"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = `https://placehold.co/1280x720/1e293b/white?text=Course+Thumbnail`;
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <button
                            onClick={() => router.push(`/courses/${id}/learn`)}
                            className="absolute inset-0 flex items-center justify-center group"
                        >
                            <div className="w-16 h-16 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110 shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </button>
                        <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="px-3 py-1 bg-slate-800/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                                    {mockCourse.totalDuration}
                                </span>
                                <span className="px-3 py-1 bg-slate-800/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                                    {mockCourse.totalLessons} lessons
                                </span>
                            </div>
                            <span className="px-3 py-1 bg-emerald-500/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                                {mockCourse.progress}% Complete
                            </span>
                        </div>
                    </div>

                    {/* Title & Description */}
                    <div className="flex flex-col gap-3">
                        <h2 className="text-2xl font-bold text-slate-800 tracking-tight">{mockCourse.title}</h2>
                        <p className="text-sm text-slate-500 leading-relaxed">{mockCourse.description}</p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {mockCourse.tags.map((tag, i) => (
                            <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full border border-slate-200">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Channel Info */}
                    <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <img
                            src={mockCourse.channelAvatar}
                            alt={mockCourse.channel}
                            className="w-11 h-11 rounded-full object-cover ring-2 ring-slate-200"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(mockCourse.channel)}&background=1e293b&color=fff`;
                            }}
                        />
                        <div className="flex flex-col gap-0.5">
                            <span className="text-sm font-semibold text-slate-800">{mockCourse.channel}</span>
                            <span className="text-xs text-slate-400">{mockCourse.subscribers} subscribers</span>
                        </div>
                        <button className="ml-auto px-5 py-2 bg-slate-800 hover:bg-slate-900 text-white text-sm font-medium rounded-full transition-all duration-200 shadow-sm hover:shadow-md">
                            Visit Channel
                        </button>
                    </div>
                </div>

                {/* Right - Course Details & Outline */}
                <div className="w-1/3 flex flex-col gap-4">
                    {/* Stats Card */}
                    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                        <div className="px-5 py-4 border-b border-slate-100">
                            <h3 className="text-sm font-bold text-slate-800 tracking-tight">Course Details</h3>
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-y divide-slate-100">
                            {[
                                { label: "Total Duration", value: mockCourse.totalDuration, icon: "🕐" },
                                { label: "Total Sections", value: `${mockCourse.totalSections} sections`, icon: "📚" },
                                { label: "Total Lessons", value: `${mockCourse.totalLessons} lessons`, icon: "🎬" },
                                { label: "Last Updated", value: mockCourse.lastUpdated, icon: "📅" },
                                { label: "Rating", value: `⭐ ${mockCourse.rating}/5.0`, icon: "🏆" },
                                { label: "Enrolled", value: mockCourse.enrolled, icon: "👥" },
                            ].map((stat, i) => (
                                <div key={i} className="flex flex-col gap-0.5 px-4 py-3">
                                    <span className="text-xs text-slate-400">{stat.icon} {stat.label}</span>
                                    <span className="text-sm font-semibold text-slate-700">{stat.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Course Outline */}
                    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                        <div className="px-5 py-4 border-b border-slate-200">
                            <h2 className="text-sm font-bold text-slate-800 tracking-tight">Course Outline</h2>
                            <p className="text-xs text-slate-400 mt-0.5">{mockCourse.totalSections} sections • {mockCourse.totalLessons} lessons</p>
                            <div className="mt-2 flex items-center gap-2">
                                <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-slate-700 rounded-full transition-all duration-300"
                                        style={{ width: `${mockCourse.progress}%` }}
                                    />
                                </div>
                                <span className="text-xs text-slate-400 font-mono flex-shrink-0">{mockCourse.progress}%</span>
                            </div>
                        </div>
                        <div className="flex flex-col divide-y divide-slate-100">
                            {mockCourse.sections.map((section, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 px-5 py-3.5 hover:bg-slate-50 transition-colors duration-150 cursor-pointer group"
                                    onClick={() => router.push(`/courses/${id}/learn`)}
                                >
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 rounded accent-slate-700 cursor-pointer flex-shrink-0"
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                    <div className="flex flex-1 justify-between items-center gap-2 min-w-0">
                                        <div className="flex flex-col min-w-0">
                                            <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors truncate">
                                                {section.title}
                                            </span>
                                            <span className="text-xs text-slate-400">{section.lessons} lessons</span>
                                        </div>
                                        <span className="text-xs text-slate-400 font-mono flex-shrink-0">{section.duration}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Delete / Unenroll Modal */}
            {showDeleteModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm mx-4 flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                                    <line x1="12" y1="9" x2="12" y2="13" />
                                    <line x1="12" y1="17" x2="12.01" y2="17" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-slate-800">Unenroll from Course?</h3>
                                <p className="text-xs text-slate-400 mt-0.5">This action cannot be undone.</p>
                            </div>
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            You are about to unenroll from <span className="font-semibold text-slate-700">"{mockCourse.title}"</span>. Your progress will be lost.
                        </p>
                        <div className="flex gap-3 mt-1">
                            <button
                                onClick={() => setShowDeleteModal(false)}
                                className="flex-1 px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-full border border-slate-200 transition-all duration-200"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => { setShowDeleteModal(false); router.push('/courses'); }}
                                className="flex-1 px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-full transition-all duration-200 shadow-sm"
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