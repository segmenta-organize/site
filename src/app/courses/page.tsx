import CourseCards from "@/src/components/cards";

export default function CoursesPage() {
    return (
        <main className="space-y-6">
            <div className="flex w-full flex-col gap-4 rounded-lg py-4 sm:flex-row sm:items-center sm:justify-between sm:py-6">
                <h1 className="py-1 text-2xl font-bold tracking-tight text-slate-800">
                    Courses
                </h1>

                <div className="flex w-full flex-col gap-3 sm:ml-auto sm:w-auto sm:flex-row sm:items-center">
                    <form
                        role="search"
                        aria-label="Course search"
                        className="w-full sm:w-72"
                    >
                        <input
                            id="course-search"
                            name="query"
                            type="search"
                            placeholder="Search courses..."
                            autoComplete="off"
                            className="w-full rounded-full border border-slate-400 px-4 py-2 text-sm text-slate-700 placeholder-slate-400 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-800"
                        />
                    </form>

                    <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-800 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-800 sm:w-auto">
                        <span aria-hidden="true" className="text-base leading-none">
                            +
                        </span>
                        <span>Create new course</span>
                    </button>
                </div>
            </div>

            <div className="w-full rounded-lg pb-10 sm:pb-10">
                <CourseCards />
            </div>
        </main>
    );
}