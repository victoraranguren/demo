import App from "../App";
import { Courses } from "../views/Courses";
import { Account } from "../views/Account";
import { Course } from "../views/Course";
import { Player } from "../views/Player";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cursos",
    element: <Courses />,
  },
  {
    path: "/cursos/:id",
    element: <Course />,
  },
  {
    path: "/cursos/:id/:section",
    element: <Player />,
  },
  {
    path: "/perfil",
    element: <Account />,
  },
  {
    path: "/*",
    element: <h1>404 Not Found</h1>,
  },
];

export { routes };
