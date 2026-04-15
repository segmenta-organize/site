"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const mockProfile = {
    name: "John Doe",
    email: "johndoe@email.com",
    bio: "Full-stack developer passionate about learning new technologies. Currently mastering TypeScript and React.",
    avatar: "https://ui-avatars.com/api/?name=John+Doe&background=1e293b&color=fff&size=128",
    phone: "+62 812 3456 7890",
    location: "Jakarta, Indonesia",
    website: "https://johndoe.dev",
    github: "johndoe",
    linkedin: "johndoe",
};

export default function EditProfilePage() {
    const router = useRouter();

    const [name, setName] = useState(mockProfile.name);
    const [email, setEmail] = useState(mockProfile.email);
    const [bio, setBio] = useState(mockProfile.bio);
    const [phone, setPhone] = useState(mockProfile.phone);
    const [location, setLocation] = useState(mockProfile.location);
    const [website, setWebsite] = useState(mockProfile.website);
    const [github, setGithub] = useState(mockProfile.github);
    const [linkedin, setLinkedin] = useState(mockProfile.linkedin);
    const [avatarUrl, setAvatarUrl] = useState(mockProfile.avatar);

    const [showDiscardModal, setShowDiscardModal] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [showSavedToast, setShowSavedToast] = useState(false);

    const handleSave = () => {
        setIsSaving(true);
        setTimeout(() => {
            setIsSaving(false);
            setShowSavedToast(true);
            setTimeout(() => setShowSavedToast(false), 2500);
        }, 1200);
    };

    const hasChanges =
        name !== mockProfile.name ||
        email !== mockProfile.email ||
        bio !== mockProfile.bio ||
        phone !== mockProfile.phone ||
        location !== mockProfile.location ||
        website !== mockProfile.website ||
        github !== mockProfile.github ||
        linkedin !== mockProfile.linkedin ||
        avatarUrl !== mockProfile.avatar;

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
                            Edit Profile
                        </h1>
                        <p className="truncate text-sm text-slate-400">
                            Update your personal information
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
                {/* Left Column — Profile Photo & Personal Info */}
                <div className="flex min-w-0 flex-col gap-5 lg:flex-[2]">
                    {/* Personal Information */}
                    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                        <div className="border-b border-slate-100 px-5 py-4">
                            <h2 className="text-sm font-bold tracking-tight text-slate-800">
                                Personal Information
                            </h2>
                            <p className="mt-0.5 text-xs text-slate-400">
                                Your basic profile details
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 p-5">
                            {/* Avatar & Full Name */}
                            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                                {/* Clickable Avatar */}
                                <div className="flex-shrink-0 self-center sm:self-start">
                                    <label
                                        htmlFor="avatar-upload"
                                        className="group relative flex cursor-pointer items-center justify-center"
                                    >
                                        <img
                                            src={avatarUrl}
                                            alt="Profile Avatar"
                                            className="h-20 w-20 rounded-full object-cover ring-2 ring-slate-200 transition-all duration-200 group-hover:opacity-80"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src =
                                                    "https://ui-avatars.com/api/?name=User&background=1e293b&color=fff&size=128";
                                            }}
                                        />
                                        <div className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-slate-800 text-white shadow-sm transition-transform duration-200 group-hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M12 20h9" />
                                                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                                            </svg>
                                        </div>
                                    </label>
                                    <input
                                        id="avatar-upload"
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => {
                                            const file = e.target.files?.[0];
                                            if (file) {
                                                const reader = new FileReader();
                                                reader.onloadend = () => {
                                                    setAvatarUrl(reader.result as string);
                                                };
                                                reader.readAsDataURL(file);
                                            }
                                        }}
                                        className="hidden"
                                    />
                                </div>

                                {/* Full Name */}
                                <div className="w-full flex-1">
                                    <label className="mb-1.5 block text-xs font-medium text-slate-500">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Enter your full name..."
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700 outline-none transition-all duration-200 placeholder:text-slate-300 focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-200"
                                    />
                                    <p className="mt-1.5 text-xs text-slate-400">
                                        Click the photo to upload a new profile picture.
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="mb-1.5 block text-xs font-medium text-slate-500">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email address..."
                                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-700 outline-none transition-all duration-200 placeholder:text-slate-300 focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-200"
                                />
                            </div>

                            {/* Phone & Location - Side by Side */}
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="mb-1.5 block text-xs font-medium text-slate-500">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="+62 xxx xxxx xxxx"
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-700 outline-none transition-all duration-200 placeholder:text-slate-300 focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-200"
                                    />
                                </div>
                                <div>
                                    <label className="mb-1.5 block text-xs font-medium text-slate-500">
                                        Location
                                    </label>
                                    <input
                                        type="text"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        placeholder="City, Country"
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-700 outline-none transition-all duration-200 placeholder:text-slate-300 focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-200"
                                    />
                                </div>
                            </div>

                            {/* Bio */}
                            <div className="mt-4">
                                <label className="mb-1 block text-xs font-medium text-slate-500">
                                    Bio
                                </label>
                                <textarea
                                    value={bio}
                                    onChange={(e) => setBio(e.target.value)}
                                    placeholder="Tell us a little about yourself..."
                                    rows={3}
                                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm leading-relaxed text-slate-700 outline-none transition-all duration-200 placeholder:text-slate-300 focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-200"
                                />
                                <p className="mt-1 text-right text-[10px] text-slate-400">
                                    {bio.length} / 300 characters
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column — Social Links & Preview */}
                <div className="w-full flex-col gap-4 lg:w-1/3">
                    <div className="flex flex-col gap-4">
                        {/* Social Links */}
                        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                            <div className="border-b border-slate-100 px-5 py-4">
                                <h2 className="text-sm font-bold tracking-tight text-slate-800">
                                    Social Links
                                </h2>
                                <p className="mt-0.5 text-xs text-slate-400">
                                    Connect your social profiles
                                </p>
                            </div>
                            <div className="flex flex-col gap-4 p-5">
                                {/* Website */}
                                <div>
                                    <label className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-slate-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10" />
                                            <line x1="2" y1="12" x2="22" y2="12" />
                                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                        </svg>
                                        Website
                                    </label>
                                    <input
                                        type="url"
                                        value={website}
                                        onChange={(e) => setWebsite(e.target.value)}
                                        placeholder="https://yourwebsite.com"
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-700 outline-none transition-all duration-200 placeholder:text-slate-300 focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-200"
                                    />
                                </div>

                                {/* GitHub */}
                                <div>
                                    <label className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-slate-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        GitHub
                                    </label>
                                    <div className="flex items-center gap-0 rounded-xl border border-slate-200 bg-slate-50 transition-all duration-200 focus-within:border-slate-400 focus-within:bg-white focus-within:ring-2 focus-within:ring-slate-200">
                                        <span className="flex-shrink-0 pl-4 text-sm text-slate-400">github.com/</span>
                                        <input
                                            type="text"
                                            value={github}
                                            onChange={(e) => setGithub(e.target.value)}
                                            placeholder="username"
                                            className="w-full border-0 bg-transparent px-1 py-2.5 text-sm text-slate-700 outline-none placeholder:text-slate-300"
                                        />
                                    </div>
                                </div>

                                {/* LinkedIn */}
                                <div>
                                    <label className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-slate-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                        LinkedIn
                                    </label>
                                    <div className="flex items-center gap-0 rounded-xl border border-slate-200 bg-slate-50 transition-all duration-200 focus-within:border-slate-400 focus-within:bg-white focus-within:ring-2 focus-within:ring-slate-200">
                                        <span className="flex-shrink-0 pl-4 text-sm text-slate-400">linkedin.com/in/</span>
                                        <input
                                            type="text"
                                            value={linkedin}
                                            onChange={(e) => setLinkedin(e.target.value)}
                                            placeholder="username"
                                            className="w-full border-0 bg-transparent px-1 py-2.5 text-sm text-slate-700 outline-none placeholder:text-slate-300"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Profile Preview Card */}
                        {/* <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                            <div className="border-b border-slate-100 px-5 py-4">
                                <h2 className="text-sm font-bold tracking-tight text-slate-800">
                                    Preview
                                </h2>
                                <p className="mt-0.5 text-xs text-slate-400">
                                    How your profile will look
                                </p>
                            </div>
                            <div className="flex flex-col items-center gap-3 p-5 text-center">
                                <img
                                    src={avatarUrl}
                                    alt="Preview Avatar"
                                    className="h-16 w-16 rounded-full object-cover ring-2 ring-slate-200"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src =
                                            "https://ui-avatars.com/api/?name=User&background=1e293b&color=fff&size=128";
                                    }}
                                />
                                <div>
                                    <h3 className="text-sm font-bold text-slate-800">
                                        {name || "Your Name"}
                                    </h3>
                                    <p className="text-xs text-slate-400">
                                        {email || "your@email.com"}
                                    </p>
                                </div>
                                {bio && (
                                    <p className="max-w-xs text-xs leading-relaxed text-slate-500">
                                        {bio.length > 120 ? bio.slice(0, 120) + "..." : bio}
                                    </p>
                                )}
                                <div className="flex flex-wrap items-center justify-center gap-1.5">
                                    {location && (
                                        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-500">
                                            📍 {location}
                                        </span>
                                    )}
                                    {website && (
                                        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-500">
                                            🌐 Website
                                        </span>
                                    )}
                                </div>
                                {(github || linkedin) && (
                                    <div className="flex items-center gap-3 pt-1">
                                        {github && (
                                            <span className="text-xs text-slate-400 hover:text-slate-600 transition-colors">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                </svg>
                                            </span>
                                        )}
                                        {linkedin && (
                                            <span className="text-xs text-slate-400 hover:text-slate-600 transition-colors">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                </svg>
                                            </span>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div> */}
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
                            You have unsaved changes to your profile. Are you sure you want to leave without saving?
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
                    Profile updated successfully!
                </span>
            </div>
        </div>
    );
}