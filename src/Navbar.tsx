import { Link, NavLink } from "react-router-dom";
import { UserAuth } from "./context/AuthContext";

export const Navbar = () => {
  const { session } = UserAuth();

  return (
    <nav className="bg-blue-600 p-2 flex flex-wrap justify-between">
      <Link to="/" className="p-2 text-gray-100 text-xl font-semibold mr-4">
        IsoAcademy
      </Link>
      <div className="inline-flex items-center ml-0 mr-auto">
        <NavLink to="/cursos" className="p-2 text-gray-100 mr-8">
          Cursos
        </NavLink>
        <NavLink to="/cursos" className="p-2 text-gray-100">
          Talleres
        </NavLink>
      </div>
      <div className="inline-flex items-center gap-4 ">
        {!session ? (
          <>
            <NavLink to="/login" className="py-1 px-2 text-gray-100 rounded border border-gray-300">
              Crear cuenta
            </NavLink>
            <NavLink to="/login" className="py-1 px-2 text-gray-100 rounded bg-green-600">
              Iniciar sesión
            </NavLink>
          </>
        ) : (
          <NavLink to="/perfil" className="py-1 px-2 text-gray-100">
            Perfil
          </NavLink>
        )}
      </div>
    </nav>
  );
};
