import { NavLink, useParams } from "react-router-dom";
import fetchData from "../utils/fetchData";
import { useEffect, useState } from "react";
import { Course as ICourse } from "../utils/types";

import ReactPlayer from "react-player/lazy";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/Accordion";

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
    <div className="container p-6 mx-auto">
      <div className="flex flex-row gap-4 justify-between">
        <div className="info flex flex-column flex-wrap gap-4 w-3/4 h-fit p-6 bg-white rounded-xl">
          <h1 className="w-auto text-4xl font-bold inline-block">{course.name}</h1>
          <ReactPlayer
            url="https://www.youtube-nocookie.com/embed/Z1rTSD2zQk4?si=ktAI1vRctGcw23HN"
            width={1120}
            height={600}
            controls={true}
          />
          <h2>En esta clase verás:</h2>
          <p className="w-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, odit veritatis rerum suscipit deserunt
            ullam, ut excepturi aspernatur laudantium expedita quibusdam quaerat obcaecati blanditiis itaque ducimus
            deleniti veniam? Nulla, excepturi?
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full h-fit p-6 bg-white rounded-xl">
          <AccordionItem value="item-1">
            <AccordionTrigger>Sección 1</AccordionTrigger>
            <NavLink to="">
              <AccordionContent>Clase 1</AccordionContent>
            </NavLink>
            <NavLink to="">
              <AccordionContent>Clase 2</AccordionContent>
            </NavLink>
            <NavLink to="">
              <AccordionContent>Clase 3</AccordionContent>
            </NavLink>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Sección 2</AccordionTrigger>
            <NavLink to="">
              <AccordionContent>Clase 1</AccordionContent>
            </NavLink>
            <NavLink to="">
              <AccordionContent>Clase 2</AccordionContent>
            </NavLink>
            <NavLink to="">
              <AccordionContent>Clase 3</AccordionContent>
            </NavLink>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Sección 2</AccordionTrigger>
            <NavLink to="">
              <AccordionContent>Clase 1</AccordionContent>
            </NavLink>
            <NavLink to="">
              <AccordionContent>Clase 2</AccordionContent>
            </NavLink>
            <NavLink to="">
              <AccordionContent>Clase 3</AccordionContent>
            </NavLink>
            <NavLink to="">
              <AccordionContent>Clase 4</AccordionContent>
            </NavLink>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Sección 4</AccordionTrigger>
            <NavLink to="">
              <AccordionContent>Clase 1</AccordionContent>
            </NavLink>
            <NavLink to="">
              <AccordionContent>Clase 2</AccordionContent>
            </NavLink>
            <NavLink to="">
              <AccordionContent>Clase 3</AccordionContent>
            </NavLink>
            <NavLink to="">
              <AccordionContent>Clase 4</AccordionContent>
            </NavLink>
            <NavLink to="">
              <AccordionContent>Clase 5</AccordionContent>
            </NavLink>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
