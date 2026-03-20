"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

const mockCourse = {
    id: "1",
    title: "Complete TypeScript & React Masterclass",
    description: "Master TypeScript and React from beginner to advanced. Learn modern web development with hands-on projects, real-world examples, and best practices used by top companies.",
    channel: "Traversy Media",
    channelAvatar: "https://yt3.googleusercontent.com/ytc/AIdro_placeholder",
    subscribers: "2.1M",
    totalSections: 5,
    totalLessons: 42,
    progress: 40,
    videoId: "SOTamWNgDKc",
    sections: [
        { title: "Introduction", duration: "10:00", lessons: 3, startTime: 0 },
        { title: "Chapter 1: Basics", duration: "25:30", lessons: 8, startTime: 600 },
        { title: "Chapter 2: Intermediate", duration: "35:45", lessons: 10, startTime: 2130 },
        { title: "Chapter 3: Advanced", duration: "45:00", lessons: 12, startTime: 4275 },
        { title: "Conclusion", duration: "15:00", lessons: 9, startTime: 6975 },
    ]
};

export default function LearnPage() {
    const { id } = useParams();
    const router = useRouter();
    const [showOutline, setShowOutline] = useState(true);
    const [activeSection, setActiveSection] = useState(0);
    const [completedSections, setCompletedSections] = useState<Set<number>>(new Set());
    const [currentSrc, setCurrentSrc] = useState(
        `https://www.youtube.com/embed/${mockCourse.videoId}?start=16479`
    );

    const toggleComplete = (index: number) => {
        setCompletedSections(prev => {
            const next = new Set(prev);
            next.has(index) ? next.delete(index) : next.add(index);
            return next;
        });
    };

    const handleSectionClick = (index: number, startTime: number) => {
        setActiveSection(index);
        setCurrentSrc(
            `https://www.youtube.com/embed/${mockCourse.videoId}?start=${startTime}&autoplay=1`
        );
    };

    const progressPercent = Math.round((completedSections.size / mockCourse.totalSections) * 100);

    return (
        <div className="mx-auto max-w-7xl w-full px-2 sm:px-6 lg:px-8 min-h-[calc(100vh-64px)] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between w-full rounded-lg py-5">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => router.push(`/courses/${id}`)}
                        className="p-2 hover:bg-slate-100 rounded-lg transition-colors duration-200 text-slate-500 hover:text-slate-700"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 12H5M12 5l-7 7 7 7" />
                        </svg>
                    </button>
                    <div>
                        <h1 className="text-lg font-bold text-slate-800 tracking-tight leading-tight">
                            {mockCourse.sections[activeSection].title}
                        </h1>
                        <p className="text-xs text-slate-400 mt-0.5">{mockCourse.title}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400 font-medium hidden sm:block">
                        {completedSections.size}/{mockCourse.totalSections} completed
                    </span>
                    <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden hidden sm:block">
                        <div
                            className="h-full bg-slate-700 rounded-full transition-all duration-300"
                            style={{ width: `${progressPercent}%` }}
                        />
                    </div>
                    <span className="text-xs font-semibold text-slate-700 hidden sm:block">{progressPercent}%</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex gap-5 pb-10">
                {/* Left - Video + Info */}
                <div className={`flex flex-col gap-4 transition-all duration-300 ${showOutline ? "w-3/4" : "w-full"}`}>
                    {/* Video Player */}
                    <div className="relative w-full rounded-2xl overflow-hidden shadow-md" style={{ paddingBottom: '56.25%' }}>
                        <iframe
                            className="absolute top-0 left-0 w-full h-full border-0 outline-none"
                            src={currentSrc}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                        {!showOutline && (
                            <button
                                onClick={() => setShowOutline(true)}
                                className="absolute top-3 right-3 z-10 p-1.5 bg-black/50 hover:bg-black/70 text-white rounded-lg transition-all duration-200 backdrop-blur-sm"
                                title="Show Course Outline"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="3" width="18" height="18" rx="2" />
                                    <path d="M9 3v18" />
                                    <path d="M15 9l-3 3 3 3" />
                                </svg>
                            </button>
                        )}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-between px-1">
                        <button
                            onClick={() => activeSection > 0 && handleSectionClick(activeSection - 1, mockCourse.sections[activeSection - 1].startTime)}
                            disabled={activeSection === 0}
                            className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 text-sm font-medium rounded-full transition-all duration-200 border border-slate-200 disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 12H5M12 5l-7 7 7 7" />
                            </svg>
                            Previous
                        </button>
                        <button
                            onClick={() => toggleComplete(activeSection)}
                            className={`flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 shadow-sm ${
                                completedSections.has(activeSection)
                                    ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                                    : "bg-slate-800 hover:bg-slate-900 text-white"
                            }`}
                        >
                            {completedSections.has(activeSection) ? (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20 6L9 17l-5-5" />
                                    </svg>
                                    Completed
                                </>
                            ) : (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M20 6L9 17l-5-5" />
                                    </svg>
                                    Mark Complete
                                </>
                            )}
                        </button>
                        <button
                            onClick={() => activeSection < mockCourse.sections.length - 1 && handleSectionClick(activeSection + 1, mockCourse.sections[activeSection + 1].startTime)}
                            disabled={activeSection === mockCourse.sections.length - 1}
                            className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 text-sm font-medium rounded-full transition-all duration-200 border border-slate-200 disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
                        >
                            Next
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Course Info */}
                    <div className="flex flex-col gap-3 pt-1">
                        <h2 className="text-2xl font-bold text-slate-800 tracking-tight">{mockCourse.title}</h2>
                        <p className="text-sm text-slate-500 leading-relaxed">{mockCourse.description}</p>
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
                        <div className="ml-auto flex items-center gap-2">
                            <button
                                onClick={() => router.push(`/courses/${id}`)}
                                className="px-5 py-2 bg-white hover:bg-slate-100 text-slate-700 text-sm font-medium rounded-full transition-all duration-200 shadow-sm hover:shadow-md border border-slate-200"
                            >
                                Course Overview
                            </button>
                            <button className="px-5 py-2 bg-slate-800 hover:bg-slate-900 text-white text-sm font-medium rounded-full transition-all duration-200 shadow-sm hover:shadow-md">
                                Visit Channel
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right - Course Outline */}
                {showOutline && (
                    <div className="w-1/4 flex flex-col bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden self-start sticky top-6">
                        <div className="px-5 py-4 border-b border-slate-200 flex items-start justify-between gap-3">
                            <div className="flex-1 min-w-0">
                                <h2 className="text-sm font-bold text-slate-800 tracking-tight">Course Outline</h2>
                                <p className="text-xs text-slate-400 mt-0.5">
                                    {mockCourse.totalSections} sections • {mockCourse.totalLessons} lessons
                                </p>
                                <div className="mt-2 flex items-center gap-2">
                                    <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-slate-700 rounded-full transition-all duration-300"
                                            style={{ width: `${progressPercent}%` }}
                                        />
                                    </div>
                                    <span className="text-xs text-slate-400 font-mono flex-shrink-0">{progressPercent}%</span>
                                </div>
                            </div>
                            <button
                                onClick={() => setShowOutline(false)}
                                className="p-1.5 hover:bg-slate-100 text-slate-400 hover:text-slate-600 rounded-lg transition-all duration-200 flex-shrink-0"
                                title="Hide Course Outline"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="3" width="18" height="18" rx="2" />
                                    <path d="M9 3v18" />
                                    <path d="M12 9l3 3-3 3" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-col divide-y divide-slate-100 overflow-y-auto max-h-[calc(56.25vw*0.67)]">
                            {mockCourse.sections.map((section, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center gap-3 px-5 py-3.5 transition-colors duration-150 cursor-pointer group ${
                                        activeSection === index
                                            ? "bg-slate-50 border-l-2 border-slate-700"
                                            : "hover:bg-slate-50"
                                    }`}
                                    onClick={() => handleSectionClick(index, section.startTime)}
                                >
                                    <input
                                        type="checkbox"
                                        checked={completedSections.has(index)}
                                        className="w-4 h-4 rounded accent-slate-700 cursor-pointer flex-shrink-0"
                                        onChange={() => toggleComplete(index)}
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                    <div className="flex flex-1 justify-between items-center gap-2 min-w-0">
                                        <div className="flex flex-col min-w-0">
                                            <span className={`text-sm font-medium transition-colors truncate ${
                                                activeSection === index
                                                    ? "text-slate-900"
                                                    : "text-slate-600 group-hover:text-slate-900"
                                            }`}>
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
                )}
            </div>
        </div>
    );
}