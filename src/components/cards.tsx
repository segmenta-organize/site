interface Course {
    id: number;
    title: string;
    description: string;
    lessonCount: number;
}

interface CourseCardProps {
    course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => (
    <div className="rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
        <div className="h-40 w-full rounded-t-lg bg-gray-200" />
        <div className="p-4">
            <h2 className="text-lg font-semibold text-black">{course.title}</h2>
            <p className="mt-1 text-sm text-gray-500">{course.description}</p>
            <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-gray-400">{course.lessonCount} Lessons</span>
                <button className="rounded-md bg-black px-3 py-1.5 text-xs font-semibold text-white hover:bg-gray-800">
                    View Course
                </button>
            </div>
        </div>
    </div>
);

interface CourseCardsProps {
    courses?: Course[];
}

const defaultCourses: Course[] = [1, 2, 3, 4, 5, 6].map((i) => ({
    id: i,
    title: `Course Title ${i}`,
    description: `This is a short description of course ${i}.`,
    lessonCount: 12,
}));

const CourseCards = ({ courses = defaultCourses }: CourseCardsProps) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
        ))}
    </div>
);

export default CourseCards;