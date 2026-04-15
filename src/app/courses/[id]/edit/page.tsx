"use client";

import { useRouter } from "next/navigation";
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
    chapters: [
        { title: "Introduction", duration: "10:00" },
        { title: "Chapter 1: Basics", duration: "25:30" },
        { title: "Chapter 2: Intermediate", duration: "35:45" },
        { title: "Conclusion", duration: "15:00" },
    ],
    currentChapter: 1,
};

export default function EditCoursePage() {
    const router = useRouter();

    const [title, setTitle] = useState(mockCourse.title);
    const [description, setDescription] = useState(mockCourse.description);
    const [thumbnailUrl, setThumbnailUrl] = useState(mockCourse.thumbnail);
    const [tags, setTags] = useState<string[]>(mockCourse.tags);
    const [tagInput, setTagInput] = useState("");
    const [chapters, setChapters] = useState(mockCourse.chapters);
    const [showDiscardModal, setShowDiscardModal] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [showSavedToast, setShowSavedToast] = useState(false);

    const handleAddTag = () => {
        const trimmed = tagInput.trim();
        if (trimmed && !tags.includes(trimmed)) {
            setTags([...tags, trimmed]);
            setTagInput("");
        }
    };

    const handleRemoveTag = (tagToRemove: string) => {
        setTags(tags.filter((t) => t !== tagToRemove));
    };

    const handleTagKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleAddTag();
        }
    };

    const handleChapterTitleChange = (index: number, newTitle: string) => {
        const updated = [...chapters];
        updated[index] = { ...updated[index], title: newTitle };
        setChapters(updated);
    };

    const handleRemoveChapter = (index: number) => {
        setChapters(chapters.filter((_, i) => i !== index));
    };

    const handleAddChapter = () => {
        setChapters([
            ...chapters,
            { title: "", duration: "00:00" },
        ]);
    };

    const handleSave = () => {
        setIsSaving(true);
        // TODO: replace with real save handler
        setTimeout(() => {
            setIsSaving(false);
            setShowSavedToast(true);
            setTimeout(() => setShowSavedToast(false), 2500);
        }, 1200);
    };

    const hasChanges =
        title !== mockCourse.title ||
        description !== mockCourse.description ||
        thumbnailUrl !== mockCourse.thumbnail ||
        JSON.stringify(tags) !== JSON.stringify(mockCourse.tags) ||
        JSON.stringify(chapters) !== JSON.stringify(mockCourse.chapters);

    return (
        <div className="space-y-6 sm:space-y-8 pb-24">
            {/* Header */}
            <div className="flex w-full flex-col gap-4 rounded-lg py-4 sm:flex-row sm:items-center sm:justify-between sm:py-6">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => router.back()}
                        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-200 hover:bg-slate-50 hover:text-slate-700 hover:shadow-md"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 12H5" />
                            <polyline points="12 19 5 12 12 5" />
                        </svg>
                    </button>
                    <div className="min-w-0">
                        <h1 className="truncate text-xl font-bold tracking-tight text-slate-800 sm:text-2xl">
                            Edit Course
                        </h1>
                        <p className="truncate text-sm text-slate-400">
                            Make changes to your course details
                        </p>
                    </div>
                </div>

                <div className="ml-auto flex w-full flex-nowrap items-center justify-end gap-2 overflow-x-auto sm:w-auto [&>button]:flex-none">
                    <button
                        onClick={handleSave}
                        disabled={isSaving || !hasChanges}
                        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-slate-800 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-slate-900 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50 sm:flex-none sm:px-5"
                    >
                        {isSaving ? (
                            <svg className="h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                                <polyline points="17 21 17 13 7 13 7 21" />
                                <polyline points="7 3 7 8 15 8" />
                            </svg>
                        )}
                        {isSaving ? "Saving..." : "Save Changes"}
                    </button>

                    <button
                        onClick={() => {
                            // TODO: replace with real update-check handler
                            console.log("Checking for updates...");
                        }}
                        className="flex flex-1 items-center justify-center gap-2 rounded-full border border-blue-400 bg-white px-4 py-2 text-sm font-medium text-blue-600 shadow-sm transition-all duration-200 hover:bg-blue-50 hover:shadow-md sm:flex-none sm:px-5"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 12a9 9 0 1 1-2.64-6.36" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                        Check Update
                    </button>

                    <button
                        onClick={() => {
                            if (hasChanges) {
                                setShowDiscardModal(true);
                            } else {
                                router.back();
                            }
                        }}
                        className="flex flex-1 items-center justify-center gap-2 rounded-full border border-red-400 bg-white px-4 py-2 text-sm font-medium text-red-700 shadow-sm transition-all duration-200 hover:bg-red-100 hover:shadow-md sm:flex-none sm:px-5"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                        Discard
                    </button>
                </div>
            </div>

            {/* Main Content - Two Column Layout */}
            <div className="flex flex-col gap-6 lg:flex-row">
                {/* Left Column — Form Fields */}
                <div className="flex min-w-0 flex-col gap-5 lg:flex-[2]">
                    {/* Thumbnail Preview */}
                    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                        <div className="border-b border-slate-100 px-5 py-4">
                            <h2 className="text-sm font-bold tracking-tight text-slate-800">
                                Thumbnail Preview
                            </h2>
                            <p className="mt-0.5 text-xs text-slate-400">
                                Set the cover image for your course
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 p-5">
                            <div
                                className="relative w-full overflow-hidden rounded-xl bg-slate-100"
                                style={{ paddingBottom: "56.25%" }}
                            >
                                <img
                                    src={thumbnailUrl}
                                    alt="Course thumbnail"
                                    className="absolute left-0 top-0 h-full w-full object-cover transition-opacity duration-300"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src =
                                            "https://placehold.co/1280x720/1e293b/white?text=Course+Thumbnail";
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                            </div>
                            <div>
                                <label className="mb-1.5 block text-xs font-medium text-slate-500">
                                    Thumbnail URL
                                </label>
                                <input
                                    type="url"
                                    value={thumbnailUrl}
                                    onChange={(e) => setThumbnailUrl(e.target.value)}
                                    placeholder="https://example.com/thumbnail.jpg"
                                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-700 outline-none transition-all duration-200 placeholder:text-slate-300 focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-200"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Course Title */}
                    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                        <div className="border-b border-slate-100 px-5 py-4">
                            <h2 className="text-sm font-bold tracking-tight text-slate-800">
                                Course Information
                            </h2>
                            <p className="mt-0.5 text-xs text-slate-400">
                                Basic details about your course
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 p-5">
                            <div>
                                <label className="mb-1.5 block text-xs font-medium text-slate-500">
                                    Course Title
                                </label>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Enter course title..."
                                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700 outline-none transition-all duration-200 placeholder:text-slate-300 focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-200"
                                />
                            </div>

                            <div>
                                <label className="mb-1.5 block text-xs font-medium text-slate-500">
                                    Description
                                </label>
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Write a description for your course..."
                                    rows={4}
                                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm leading-relaxed text-slate-700 outline-none transition-all duration-200 placeholder:text-slate-300 focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-200"
                                />
                                <p className="mt-1 text-right text-xs text-slate-300">
                                    {description.length} characters
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                        <div className="border-b border-slate-100 px-5 py-4">
                            <h2 className="text-sm font-bold tracking-tight text-slate-800">
                                Tags
                            </h2>
                            <p className="mt-0.5 text-xs text-slate-400">
                                Add relevant tags to help categorize your course
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 p-5">
                            <div className="flex flex-wrap gap-2">
                                {tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="group flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100 py-1 pl-3 pr-2 text-xs font-medium text-slate-600 transition-all duration-150 hover:border-red-200 hover:bg-red-50 hover:text-red-500"
                                    >
                                        {tag}
                                        <button
                                            onClick={() => handleRemoveTag(tag)}
                                            className="flex h-4 w-4 items-center justify-center rounded-full text-slate-400 transition-colors group-hover:text-red-400"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="18" y1="6" x2="6" y2="18" />
                                                <line x1="6" y1="6" x2="18" y2="18" />
                                            </svg>
                                        </button>
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={tagInput}
                                    onChange={(e) => setTagInput(e.target.value)}
                                    onKeyDown={handleTagKeyDown}
                                    placeholder="Add a tag..."
                                    className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700 outline-none transition-all duration-200 placeholder:text-slate-300 focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-200"
                                />
                                <button
                                    onClick={handleAddTag}
                                    disabled={!tagInput.trim()}
                                    className="flex items-center gap-1.5 rounded-xl bg-slate-800 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-slate-900 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-40"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="12" y1="5" x2="12" y2="19" />
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                    </svg>
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column — Chapters & Meta */}
                <div className="w-full flex-col gap-4 lg:w-1/3">
                    <div className="flex flex-col gap-4">
                        {/* Course Metadata (Read-Only) */}
                        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                            <div className="border-b border-slate-100 px-5 py-4">
                                <h2 className="text-sm font-bold tracking-tight text-slate-800">
                                    Course Details
                                </h2>
                                <p className="mt-0.5 text-xs text-slate-400">
                                    Overview of course statistics
                                </p>
                            </div>
                            <div className="grid grid-cols-1 divide-y divide-slate-100 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                                {[
                                    { label: "Total Duration", value: mockCourse.totalDuration, icon: "🕐" },
                                    { label: "Total Chapters", value: `${chapters.length} chapters`, icon: "🎬" },
                                    { label: "Last Updated", value: mockCourse.lastUpdated, icon: "📅" },
                                    { label: "Version", value: `v${mockCourse.version}`, icon: "⚡" },
                                ].map((stat, i) => (
                                    <div key={i} className="flex flex-col gap-0.5 px-5 py-4">
                                        <span className="text-xs font-medium text-slate-400">
                                            {stat.icon} {stat.label}
                                        </span>
                                        <span className="text-sm font-semibold text-slate-700">
                                            {stat.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Channel Info (Read-Only) */}
                        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                            <div className="border-b border-slate-100 px-5 py-4">
                                <h2 className="text-sm font-bold tracking-tight text-slate-800">
                                    Channel Info
                                </h2>
                                <p className="mt-0.5 text-xs text-slate-400">
                                    Source channel of this course
                                </p>
                            </div>
                            <div className="flex flex-col items-center gap-3 p-5 sm:flex-row sm:gap-4 sm:text-left text-center">
                                <img
                                    src={mockCourse.channelAvatar}
                                    alt={mockCourse.channel}
                                    className="h-12 w-12 rounded-full object-cover ring-2 ring-slate-200"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                                            mockCourse.channel
                                        )}&background=1e293b&color=fff`;
                                    }}
                                />
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-sm font-bold text-slate-800">
                                        {mockCourse.channel}
                                    </span>
                                    <span className="text-xs text-slate-400">
                                        {mockCourse.subscribers} subscribers
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Chapters Editor */}
                        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                                <div>
                                    <h2 className="text-sm font-bold tracking-tight text-slate-800">
                                        Chapters
                                    </h2>
                                    <p className="mt-0.5 text-xs text-slate-400">
                                        {chapters.length} chapter{chapters.length !== 1 ? "s" : ""}
                                    </p>
                                </div>
                                <button
                                    onClick={handleAddChapter}
                                    className="flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 transition-all duration-200 hover:bg-slate-200 hover:text-slate-800"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="12" y1="5" x2="12" y2="19" />
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                    </svg>
                                    Add
                                </button>
                            </div>
                            <div className="flex flex-col divide-y divide-slate-100">
                                {chapters.map((chapter, index) => (
                                    <div
                                        key={index}
                                        className="group flex items-center gap-3 px-5 py-4 transition-colors duration-150 hover:bg-slate-50"
                                    >
                                        <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xs font-bold text-slate-500">
                                            {index + 1}
                                        </span>
                                        <div className="flex min-w-0 flex-1 flex-col gap-1">
                                            <input
                                                type="text"
                                                value={chapter.title}
                                                onChange={(e) =>
                                                    handleChapterTitleChange(index, e.target.value)
                                                }
                                                placeholder="Chapter title..."
                                                className="w-full border-0 bg-transparent p-0 text-sm font-medium text-slate-600 outline-none placeholder:text-slate-300 focus:text-slate-900"
                                            />
                                            <span className="font-mono text-xs text-slate-400">
                                                {chapter.duration}
                                            </span>
                                        </div>
                                        <button
                                            onClick={() => handleRemoveChapter(index)}
                                            className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg text-slate-300 opacity-0 transition-all duration-150 hover:bg-red-50 hover:text-red-400 group-hover:opacity-100"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="3 6 5 6 21 6" />
                                                <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                                                <path d="M10 11v6M14 11v6" />
                                                <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                                            </svg>
                                        </button>
                                    </div>
                                ))}

                                {chapters.length === 0 && (
                                    <div className="flex flex-col items-center gap-2 p-8 text-center">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                                <line x1="8" y1="21" x2="16" y2="21" />
                                                <line x1="12" y1="17" x2="12" y2="21" />
                                            </svg>
                                        </div>
                                        <p className="text-sm text-slate-400">No chapters yet</p>
                                        <button
                                            onClick={handleAddChapter}
                                            className="mt-1 text-xs font-medium text-slate-600 underline decoration-slate-300 underline-offset-2 transition-colors hover:text-slate-800"
                                        >
                                            Add your first chapter
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Unsaved Changes Indicator */}
                        {hasChanges && (
                            <div className="flex items-center gap-2 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 shadow-sm">
                                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-amber-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <line x1="12" y1="8" x2="12" y2="12" />
                                        <line x1="12" y1="16" x2="12.01" y2="16" />
                                    </svg>
                                </div>
                                <p className="text-xs font-medium text-amber-700">
                                    You have unsaved changes
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Discard Changes Modal */}
            {showDiscardModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
                    <div className="mx-4 flex w-full max-w-sm flex-col gap-4 rounded-2xl bg-white p-6 shadow-xl">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                                    <line x1="12" y1="9" x2="12" y2="13" />
                                    <line x1="12" y1="17" x2="12.01" y2="17" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-slate-800">
                                    Discard Changes?
                                </h3>
                                <p className="mt-0.5 text-xs text-slate-400">
                                    Your changes will be lost.
                                </p>
                            </div>
                        </div>

                        <p className="text-sm leading-relaxed text-slate-500">
                            You have unsaved changes to{" "}
                            <span className="font-semibold text-slate-700">
                                &quot;{title}&quot;
                            </span>
                            . Are you sure you want to leave without saving?
                        </p>

                        <div className="mt-1 flex gap-3">
                            <button
                                onClick={() => setShowDiscardModal(false)}
                                className="flex-1 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-slate-50"
                            >
                                Keep Editing
                            </button>
                            <button
                                onClick={() => {
                                    setShowDiscardModal(false);
                                    router.back();
                                }}
                                className="flex-1 rounded-full bg-red-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-red-600"
                            >
                                Yes, Discard
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Save Success Toast */}
            <div
                className={`fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2.5 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2.5 shadow-lg transition-all duration-300 ${showSavedToast
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-4 opacity-0"
                    }`}
            >
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                </div>
                <span className="text-sm font-medium text-emerald-700">
                    Changes saved successfully!
                </span>
            </div>
        </div>
    );
}
