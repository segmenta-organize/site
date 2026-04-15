"use client";

import { useRouter } from "next/navigation";

const stats = [
    { label: "Courses Enrolled", value: "12" },
    { label: "Hours Learned", value: "48h" },
    { label: "Completed", value: "5" },
    { label: "Certificates", value: "4" },
];

const courses = [
    { title: "Complete TypeScript & React Masterclass", channel: "Traversy Media", progress: 40 },
    { title: "Node.js & Express Backend Development", channel: "Academind", progress: 70 },
    { title: "Next.js 14 Full Course", channel: "Fireship", progress: 15 },
];

export default function ProfilePage() {
    const router = useRouter();

    return (
        <div className="mx-auto w-full space-y-6 pb-24 pt-2">
            {/* Page Header */}
            <div className="flex w-full flex-col gap-4 rounded-lg py-4 sm:flex-row sm:items-center sm:justify-between sm:py-6">
                <h1 className="py-1 text-2xl font-bold text-black">Profile</h1>
            </div>

            {/* Profile Card */}
            <section className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:gap-6">
                <img
                    src="https://ui-avatars.com/api/?name=John+Doe&background=1e293b&color=fff&size=128"
                    alt="Profile Avatar"
                    className="h-24 w-24 rounded-full object-cover ring-2 ring-slate-200 mx-auto sm:mx-0"
                />

                <div className="flex-1 text-center sm:text-left">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-800">John Doe</h2>
                    <p className="text-sm text-slate-400">johndoe@email.com</p>
                    <p className="mt-1 max-w-lg text-sm leading-relaxed text-slate-500">
                        Full-stack developer passionate about learning new technologies. Currently mastering
                        TypeScript and React.
                    </p>

                    <div className="mt-2 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500">
                            🎓 12 Courses Enrolled
                        </span>
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500">
                            ✅ 5 Completed
                        </span>
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500">
                            ⭐ 4 Certificates
                        </span>
                    </div>
                </div>

                <button
                    onClick={() => router.push("/profile/edit")}
                    className="self-center rounded-full bg-slate-800 px-5 py-2 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-slate-900 hover:shadow-md sm:self-start"
                >
                    Edit Profile
                </button>
            </section>

            {/* Stats */}
            <section className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((stat) => (
                    <div
                        key={stat.label}
                        className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                    >
                        <span className="text-2xl font-bold text-slate-800">{stat.value}</span>
                        <span className="text-center text-xs text-slate-400">{stat.label}</span>
                    </div>
                ))}
            </section>

            {/* Current Courses */}
            <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-200 px-5 py-4">
                    <h3 className="text-sm font-bold tracking-tight text-slate-800">My Courses</h3>
                    <p className="mt-0.5 text-xs text-slate-400">Your enrolled and in-progress courses</p>
                </div>

                <div className="divide-y divide-slate-100">
                    {courses.map((course) => {
                        const isCompleted = course.progress === 100;

                        return (
                            <div
                                key={course.title}
                                className="group flex items-center gap-4 px-5 py-4 transition-colors duration-150 hover:bg-slate-50"
                            >
                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-slate-100 text-sm font-bold text-slate-500">
                                    {course.title.charAt(0)}
                                </div>

                                <div className="min-w-0 flex-1">
                                    <p className="truncate text-sm font-medium text-slate-700 group-hover:text-slate-900">
                                        {course.title}
                                    </p>
                                    <p className="text-xs text-slate-400">{course.channel}</p>

                                    <div className="mt-1 flex items-center gap-2">
                                        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
                                            <div
                                                className="h-full rounded-full bg-slate-700 transition-all duration-300"
                                                style={{ width: `${course.progress}%` }}
                                            />
                                        </div>
                                        <span className="flex-shrink-0 font-mono text-xs text-slate-400">
                                            {course.progress}%
                                        </span>
                                    </div>
                                </div>

                                <span
                                    className={`flex-shrink-0 rounded-full px-3 py-1 text-xs font-medium ${isCompleted ? "bg-emerald-100 text-emerald-600" : "bg-slate-100 text-slate-500"
                                        }`}
                                >
                                    {isCompleted ? "Completed" : "In Progress"}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}