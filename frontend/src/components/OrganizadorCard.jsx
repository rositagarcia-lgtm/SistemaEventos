import {
  FaEdit,
  FaTrash,
  FaEnvelope,
  FaPhone,
  FaUserTie,
} from "react-icons/fa";

function OrganizadorCard({ organizador, onEditar, onEliminar }) {
  return (
    <div className="bg-white/80 backdrop-blur-md border border-slate-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-5 group">

      {/* Header */}
      <div className="flex justify-between items-start mb-4">

        <div>
          <h2 className="text-lg font-bold text-slate-800">
            {organizador.nombre}
          </h2>

          <p className="text-slate-500 text-sm mt-1">
            Organizador
          </p>
        </div>

        <div className="p-3 rounded-xl bg-blue-50 text-blue-500 group-hover:scale-110 transition">
          <FaUserTie className="text-xl" />
        </div>

      </div>
      <div className="space-y-3 text-slate-600 text-sm">

        <p className="flex items-center gap-2">
          <FaEnvelope className="text-slate-400" />
          <span className="truncate">{organizador.correo}</span>
        </p>

        <p className="flex items-center gap-2">
          <FaPhone className="text-slate-400" />
          {organizador.telefono}
        </p>

      </div>
      <div className="flex gap-2 mt-5">

        <button
          onClick={() => onEditar(organizador)}
          className="
            flex-1
            bg-blue-50 text-blue-600
            hover:bg-blue-100
            py-2 rounded-xl
            flex items-center justify-center gap-2
            font-medium
            transition
          "
        >
          <FaEdit />
          Editar
        </button>

        <button
          onClick={() => onEliminar(organizador.id)}
          className="
            flex-1
            bg-red-50 text-red-600
            hover:bg-red-100
            py-2 rounded-xl
            flex items-center justify-center gap-2
            font-medium
            transition
          "
        >
          <FaTrash />
          Eliminar
        </button>

      </div>

    </div>
  );
}

export default OrganizadorCard;