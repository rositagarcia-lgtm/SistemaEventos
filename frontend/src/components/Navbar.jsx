import { NavLink } from "react-router-dom";
import { FaHome, FaUsers, FaCalendarAlt } from "react-icons/fa";

function Navbar() {
  const linkBase =
    "flex items-center gap-2 px-4 py-2 rounded-xl transition";
  return (
    <header className="bg-slate-900 text-white px-6 py-4 shadow-md">

      <div className="grid grid-cols-3 items-center">

        <h1 className="font-bold text-lg">
          Sistema Eventos
        </h1>

        <nav className="flex justify-center gap-3">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? "bg-blue-600" : "hover:bg-slate-800"}`
            }
          >
            <FaHome />
            Home
          </NavLink>

          <NavLink
            to="/organizadores"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? "bg-blue-600" : "hover:bg-slate-800"}`
            }
          >
            <FaUsers />
            Organizadores
          </NavLink>

          <NavLink
            to="/eventos"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? "bg-blue-600" : "hover:bg-slate-800"}`
            }
          >
            <FaCalendarAlt />
            Eventos
          </NavLink>

        </nav>
        <div />
      </div>
    </header>
  );
}

export default Navbar;
