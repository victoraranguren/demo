import App from "../App";
import { Courses } from "../views/Courses";
import { Account } from "../views/Account";

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
    path: "/perfil",
    element: <Account />,
  },
];

export { routes };
