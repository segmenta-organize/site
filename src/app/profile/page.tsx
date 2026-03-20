export default function ProfilePage() {
    return (
        <div className="mx-auto max-w-7xl w-full px-2 sm:px-6 lg:px-8 min-h-[calc(100vh-64px)] flex flex-col py-8">
            {/* Profile Header */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 bg-white border border-slate-200 rounded-2xl shadow-sm mb-6">
            <img
                src="https://ui-avatars.com/api/?name=John+Doe&background=1e293b&color=fff&size=128"
                alt="Profile Avatar"
                className="w-24 h-24 rounded-full object-cover ring-2 ring-slate-200"
            />
            <div className="flex flex-col gap-1 flex-1 text-center sm:text-left">
                <h1 className="text-2xl font-bold text-slate-800 tracking-tight">John Doe</h1>
                <p className="text-sm text-slate-400">johndoe@email.com</p>
                <p className="text-sm text-slate-500 mt-1 leading-relaxed max-w-lg">
                Full-stack developer passionate about learning new technologies. Currently mastering TypeScript and React.
                </p>
                <div className="flex items-center gap-3 mt-2 justify-center sm:justify-start">
                <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full">🎓 12 Courses Enrolled</span>
                <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full">✅ 5 Completed</span>
                <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full">⭐ 4 Certificates</span>
                </div>
            </div>
            <button className="px-5 py-2 bg-slate-800 hover:bg-slate-900 text-white text-sm font-medium rounded-full transition-all duration-200 shadow-sm hover:shadow-md self-start">
                Edit Profile
            </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {[
                { label: "Courses Enrolled", value: "12" },
                { label: "Hours Learned", value: "48h" },
                { label: "Completed", value: "5" },
                { label: "Certificates", value: "4" },
            ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-5 bg-white border border-slate-200 rounded-2xl shadow-sm gap-1">
                <span className="text-2xl font-bold text-slate-800">{stat.value}</span>
                <span className="text-xs text-slate-400 text-center">{stat.label}</span>
                </div>
            ))}
            </div>

            {/* Current Courses */}
            <div className="flex flex-col bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-200">
                <h2 className="text-sm font-bold text-slate-800 tracking-tight">My Courses</h2>
                <p className="text-xs text-slate-400 mt-0.5">Your enrolled and in-progress courses</p>
            </div>
            <div className="flex flex-col divide-y divide-slate-100">
                {[
                { title: "Complete TypeScript & React Masterclass", channel: "Traversy Media", progress: 40 },
                { title: "Node.js & Express Backend Development", channel: "Academind", progress: 70 },
                { title: "Next.js 14 Full Course", channel: "Fireship", progress: 15 },
                { title: "Tailwind CSS from Scratch", channel: "Brad Traversy", progress: 100 },
                ].map((course, index) => (
                <div key={index} className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50 transition-colors duration-150 group">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0 text-slate-500 font-bold text-sm">
                    {course.title.charAt(0)}
                    </div>
                    <div className="flex flex-col gap-1 flex-1 min-w-0">
                    <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 truncate">{course.title}</span>
                    <span className="text-xs text-slate-400">{course.channel}</span>
                    <div className="flex items-center gap-2 mt-1">
                        <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-slate-700 rounded-full transition-all duration-300"
                            style={{ width: `${course.progress}%` }}
                        />
                        </div>
                        <span className="text-xs text-slate-400 font-mono flex-shrink-0">{course.progress}%</span>
                    </div>
                    </div>
                    <span className={`text-xs font-medium px-3 py-1 rounded-full flex-shrink-0 ${
                    course.progress === 100
                        ? "bg-emerald-100 text-emerald-600"
                        : "bg-slate-100 text-slate-500"
                    }`}>
                    {course.progress === 100 ? "Completed" : "In Progress"}
                    </span>
                </div>
                ))}
            </div>
            </div>
        </div>
        );
    }