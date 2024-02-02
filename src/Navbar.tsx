import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-6 flex justify-between">
      <Link to="/" className="text-gray-100 text-xl font-semibold mr-4">
        IsoAcademy
      </Link>
      <div className="inline-flex items-center ml-0 mr-auto">
        <NavLink to="/cursos" className="text-gray-100 mr-8">
          Cursos
        </NavLink>
        <NavLink to="/cursos" className="text-gray-100">
          Talleres
        </NavLink>
      </div>
      <div className="inline-flex items-center">
        <NavLink to="/perfil" className="text-gray-100">
          Perfil
        </NavLink>
      </div>
    </nav>
  );
};
