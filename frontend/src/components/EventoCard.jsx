import {
  FaEdit,
  FaTrash,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUserTie,
} from "react-icons/fa";

function EventoCard({ evento, onEditar, onEliminar }) {
  return (
    <div className="bg-white/80 backdrop-blur-md border border-slate-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">

      {/* Imagen */}
      <div className="overflow-hidden">
        <img
          src={evento.imagen}
          alt={evento.nombre}
          className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-5">

        {/* Título */}
        <h2 className="text-lg font-bold text-slate-800 line-clamp-1">
          {evento.nombre}
        </h2>

        {/* Info */}
        <div className="space-y-3 mt-4 text-slate-600 text-sm">

          <p className="flex items-center gap-2">
            <FaCalendarAlt className="text-slate-400" />
            {new Date(evento.fecha).toLocaleDateString("es-PE")}
          </p>

          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-slate-400" />
            {evento.lugar}
          </p>

          <p className="flex items-center gap-2">
            <FaUserTie className="text-slate-400" />
            {evento.organizador_nombre}
          </p>

        </div>

        {/* Botones */}
        <div className="flex gap-2 mt-5">

          <button
            onClick={() => onEditar(evento)}
            className="
              flex-1
              bg-blue-50 text-blue-600
              hover:bg-blue-100
              py-2 rounded-xl
              flex items-center justify-center gap-2
              transition
              font-medium
            "
          >
            <FaEdit />
            Editar
          </button>

          <button
            onClick={() => onEliminar(evento.id)}
            className="
              flex-1
              bg-red-50 text-red-600
              hover:bg-red-100
              py-2 rounded-xl
              flex items-center justify-center gap-2
              transition
              font-medium
            "
          >
            <FaTrash />
            Eliminar
          </button>

        </div>

      </div>
    </div>
  );
}

export default EventoCard;