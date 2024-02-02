import { NavLink, useParams } from "react-router-dom";
import fetchData from "../utils/fetchData";
import { useEffect, useState } from "react";
import { Course as ICourse } from "../utils/types";

export const Player = () => {
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
    <div className="container p-8 mx-auto">
      <div className="flex flex-row gap-4 justify-between">
        <div className="info flex flex-column flex-wrap gap-4 w-3/4 h-fit p-6 bg-white rounded-xl">
          <h1 className="w-auto text-4xl font-bold inline-block">{course.name}</h1>
          <iframe
            width="1120"
            height="600"
            className="video w-full rounded-xl inline-block"
            src="https://www.youtube-nocookie.com/embed/Z1rTSD2zQk4?si=ktAI1vRctGcw23HN"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <h2>En esta clase verás:</h2>
          <p className="w-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, odit veritatis rerum suscipit deserunt
            ullam, ut excepturi aspernatur laudantium expedita quibusdam quaerat obcaecati blanditiis itaque ducimus
            deleniti veniam? Nulla, excepturi?
          </p>
        </div>
      </div>
    </div>
  );
};
