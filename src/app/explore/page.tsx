import CourseCards from "@/src/components/cards";

export default function ExplorePage() {
    return (
        <div className="space-y-6">
            <div className="flex w-full flex-col gap-4 rounded-lg py-4 sm:flex-row sm:items-center sm:justify-between sm:py-6">
                <h1 className="py-1 text-2xl font-bold tracking-tight text-slate-800">
                    Explore Courses
                </h1>

                <div className="flex w-full flex-col gap-3 sm:ml-auto sm:w-auto sm:flex-row sm:items-center">
                    <label htmlFor="course-search" className="sr-only">
                        Search
                    </label>
                    <form role="search" aria-label="Course search" className="w-full sm:w-72">
                        <input
                            id="course-search"
                            name="query"
                            type="search"
                            placeholder="Search courses..."
                            autoComplete="off"
                            className="w-full rounded-full border border-slate-400 bg-white px-4 py-2 text-sm text-slate-700 placeholder-slate-400 shadow-sm transition focus:outline-none focus:ring-2 focus:ring-slate-800"
                        />
                    </form>
                </div>
            </div>

            <div className="w-full rounded-lg pb-10 sm:pb-10">
                <CourseCards />
            </div>
        </div>
    );
}
