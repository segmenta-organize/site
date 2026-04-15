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
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md">
        <div className="h-40 w-full rounded-t-2xl bg-slate-200" />
        <div className="p-4">
            <h2 className="text-lg font-semibold text-slate-800">{course.title}</h2>
            <p className="mt-1 text-sm text-slate-500">{course.description}</p>
            <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-slate-400">{course.lessonCount} Lessons</span>
                <button className="rounded-full bg-slate-800 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-slate-900 hover:shadow-md">
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
    <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
        ))}
    </div>
);

export default CourseCards;