import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 px-6">

      <div className="text-center max-w-md">

        {/* Número */}
        <h1 className="text-9xl font-extrabold text-blue-600 tracking-tight">
          404
        </h1>

        {/* Mensaje */}
        <h2 className="text-2xl font-semibold text-slate-800 mt-4">
          Página no encontrada
        </h2>

        <p className="text-slate-500 mt-2">
          La página que estás buscando no existe o fue movida.
        </p>

        {/* Botón */}
        <Link
          to="/"
          className="
            inline-block mt-8
            bg-blue-600 hover:bg-blue-700
            text-white
            px-6 py-3
            rounded-xl
            shadow-sm
            transition
          "
        >
          Volver al inicio
        </Link>

      </div>

    </div>
  );
}

export default NotFound;