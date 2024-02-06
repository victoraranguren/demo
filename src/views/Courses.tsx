import { useEffect, useState } from "react";
import fetchData from "../utils/fetchData";
import { Course } from "../utils/types.d";
import "./Courses.css";
import { Link } from "react-router-dom";

export const Courses = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();

      setCourses(data);
      return () => {
        console.log(courses);
      };
    };
    getData();
  }, []);

  return (
    <div className="container p-6 mx-auto">
      <h1 className="text-4xl font-bold mb-10">Cursos</h1>

      <div className="flex flex-row flex-wrap gap-4">
        {courses?.map((course: Course) => {
          return (
            <Link
              to={`${course.id}`}
              key={course.id}
              className="card__body flex flex-col rounded-xl	overflow-hidden bg-white"
            >
              <img src="http://localhost:5173/assets/course-poster.png" alt="" />
              <div className="flex flex-col p-3">
                <h3>{course.name}</h3>
                <h3>{course.tutor} </h3>
                <h3> {course.category}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
