export const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-6 flex justify-between">
      <a href="/" className="text-gray-100 text-xl">
        IsoAcademy
      </a>
      <div className="inline-flex items-center">
        <a href="/cursos" className="text-gray-100">
          Cursos
        </a>
      </div>
      <div className="inline-flex items-center">
        <a href="#" className="text-gray-100">
          Iniciar Sesión
        </a>
      </div>
    </nav>
  );
};
