import { NavLink, useParams } from "react-router-dom";
import fetchData from "../utils/fetchData";
import { useEffect, useState } from "react";
import { Course as ICourse } from "../utils/types";

export const Course = () => {
  const { id } = useParams();
  const [course, setCourse] = useState<ICourse>({});

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData(id);
      setCourse(data[0]);

      return () => {
        console.log(course);
      };
    };
    getData();
  }, []);

  return (
    <div className="container p-6 mx-auto">
      <div className="flex flex-row gap-4 justify-between">
        <div className="info h-fit inline-block p-6 bg-white rounded-xl">
          <h1 className="text-4xl font-bold">{course.name}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae deserunt similique consequatur velit
            eum sunt porro laudantium maiores provident qui.
          </p>
          <h2>¿Qué aprenderás?</h2>
          <ul className="list-disc ps-8">
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit.</li>
          </ul>
          <NavLink to="01" className="inline-block mt-4 py-3 px-4 bg-blue-600 text-white rounded-xl">
            Ver Curso
          </NavLink>
        </div>
        <img src="http://localhost:5173/assets/course-poster.png" className="inline-block w-3/6 rounded-xl" alt="" />
      </div>
    </div>
  );
};
