const fetchData = async () => {
  try {
    const data = await fetch("http://localhost:5173/data.json");
    const res = await data.json();
    return res;
  } catch (error) {
    console.log(error);
  }
};

export default fetchData;
