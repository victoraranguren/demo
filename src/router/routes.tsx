import { Home } from "../views/Home";
import { Courses } from "../views/Courses";
import { Account } from "../views/Account";
import { Course } from "../views/Course";
import { Player } from "../views/Player";
import { Login } from "../views/Login";

const routes = [
  {
    path: "/",
    element: <Home />,
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
    path: "/login",
    element: <Login />,
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
