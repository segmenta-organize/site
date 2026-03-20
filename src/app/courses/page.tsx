import CourseCards from "@/src/components/cards";

export default function CoursesPage() {
    return (
        <div className="mx-auto max-w-7xl w-full px-2 sm:px-6 lg:px-8 min-h-[calc(100vh-64px)] flex flex-col">
            <div className="flex items-center justify-between w-full rounded-lg py-6">
                <h1 className="text-2xl font-bold text-black py-1">Courses</h1>
                <button className="rounded-md bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                   Create new course
                </button>
            </div>
            <div className="flex items-center justify-between w-full rounded-lg py-6"> 
                <CourseCards />
            </div>
        </div>
    );
}