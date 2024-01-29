import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-6 flex justify-between">
      <Link to="/" className="text-gray-100 text-xl font-semibold">
        IsoAcademy
      </Link>
      <div className="inline-flex items-center">
        <Link to="/cursos" className="text-gray-100">
          Cursos
        </Link>
      </div>
      <div className="inline-flex items-center">
        <Link to="/perfil" className="text-gray-100">
          Perfil
        </Link>
      </div>
    </nav>
  );
};
