import { FaTimes } from "react-icons/fa";

function OrganizadorModal({
  mostrar,
  cerrar,
  guardar,
  formulario,
  setFormulario,
  modoEdicion,
}) {
  if (!mostrar) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">

      <div className="bg-white/90 backdrop-blur-md border border-slate-100 rounded-3xl shadow-2xl w-full max-w-md p-6 relative">

        {/* Cerrar */}
        <button
          onClick={cerrar}
          className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition"
        >
          <FaTimes />
        </button>

        {/* Título */}
        <h2 className="text-2xl font-bold text-slate-800 mb-1">
          {modoEdicion ? "Editar Organizador" : "Nuevo Organizador"}
        </h2>

        <p className="text-sm text-slate-500 mb-6">
          Completa los datos del organizador
        </p>

        {/* Formulario */}
        <div className="space-y-4">

          <input
            type="text"
            placeholder="Nombre"
            value={formulario.nombre}
            onChange={(e) =>
              setFormulario({ ...formulario, nombre: e.target.value })
            }
            className="
              w-full
              bg-slate-50
              border border-slate-200
              rounded-xl
              p-3
              focus:outline-none
              focus:ring-2 focus:ring-blue-200
            "
          />

          <input
            type="email"
            placeholder="Correo"
            value={formulario.correo}
            onChange={(e) =>
              setFormulario({ ...formulario, correo: e.target.value })
            }
            className="
              w-full
              bg-slate-50
              border border-slate-200
              rounded-xl
              p-3
              focus:outline-none
              focus:ring-2 focus:ring-blue-200
            "
          />

          <input
            type="text"
            placeholder="Teléfono"
            value={formulario.telefono}
            onChange={(e) =>
              setFormulario({ ...formulario, telefono: e.target.value })
            }
            className="
              w-full
              bg-slate-50
              border border-slate-200
              rounded-xl
              p-3
              focus:outline-none
              focus:ring-2 focus:ring-blue-200
            "
          />

        </div>

        {/* Botones */}
        <div className="flex justify-end gap-3 mt-6">

          <button
            onClick={cerrar}
            className="
              px-4 py-2
              rounded-xl
              bg-slate-100
              text-slate-600
              hover:bg-slate-200
              transition
            "
          >
            Cancelar
          </button>

          <button
            onClick={guardar}
            className="
              px-5 py-2
              rounded-xl
              bg-blue-600
              text-white
              hover:bg-blue-700
              shadow-sm
              transition
            "
          >
            Guardar
          </button>

        </div>

      </div>

    </div>
  );
}

export default OrganizadorModal;