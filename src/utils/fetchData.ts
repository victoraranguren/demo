import { Course } from "./types";

const fetchData = async (id?: number) => {
  try {
    const data = await fetch("http://localhost:5173/data.json");
    const res: Course[] = await data.json();
    if (id) {
      const resFilterred = res.filter((x) => x.id === id);
      return resFilterred;
    } else {
      return res;
    }
  } catch (error) {
    console.log(error);
  }
};

export default fetchData;
