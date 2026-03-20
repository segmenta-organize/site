import CourseCards from "@/src/components/cards";

export default function ExplorePage() {
    return (
        <div className="mx-auto max-w-7xl w-full px-2 sm:px-6 lg:px-8 min-h-[calc(100vh-64px)] flex flex-col">
            <div className="flex items-center justify-between w-full rounded-lg py-6">
                <h1 className="text-2xl font-bold text-black py-1">Explore Courses</h1>

            </div>
            <div className="flex items-center justify-between w-full rounded-lg py-6"> 
                <CourseCards />
            </div>
        </div>
    );
}