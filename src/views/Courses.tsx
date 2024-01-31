import { useEffect, useState } from "react";
import fetchData from "../utils/fetchData";

export const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();

      setCourses(data);
      console.log(courses);
      return () => {
        console.log(courses);
      };
    };
    getData();
  }, []);

  return (
    <div className="container p-8 mx-auto">
      <h1 className="text-3xl font-bold">Cursos</h1>

      <ul>
        {courses?.map((course) => {
          return (
            <li key={course.id}>
              {course.name} - {course.tutor} - {course.category}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
