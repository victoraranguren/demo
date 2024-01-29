import { Route, Routes } from "react-router-dom";

import { routes } from "./routes";

export const Router = () => {
  return (
    <Routes>
      {routes.map((routes) => {
        return <Route path={routes.path} element={routes.element} key={routes.path} />;
      })}
    </Routes>
  );
};
