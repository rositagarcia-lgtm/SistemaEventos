import { FaTimes } from "react-icons/fa";

function EventoModal({
  mostrar,
  cerrar,
  guardar,
  formulario,
  setFormulario,
  organizadores,
  modoEdicion,
  eventoSeleccionado,
}) {
  if (!mostrar) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 w-full max-w-lg shadow-2xl relative border border-slate-100">
        <button
          onClick={cerrar}
          className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition"
        >
          <FaTimes />
        </button>
        <h2 className="text-2xl font-bold text-slate-800 mb-1">
          {modoEdicion ? "Editar Evento" : "Nuevo Evento"}
        </h2>

        <p className="text-sm text-slate-500 mb-5">
          Completa la información del evento
        </p>

        {/* Formulario */}
        <div className="space-y-4">

          <input
            type="text"
            placeholder="Nombre del evento"
            value={formulario.nombre}
            onChange={(e) =>
              setFormulario({ ...formulario, nombre: e.target.value })
            }
            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />

          <input
            type="date"
            value={formulario.fecha}
            onChange={(e) =>
              setFormulario({ ...formulario, fecha: e.target.value })
            }
            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />

          <input
            type="text"
            placeholder="Lugar del evento"
            value={formulario.lugar}
            onChange={(e) =>
              setFormulario({ ...formulario, lugar: e.target.value })
            }
            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />

          <select
            value={formulario.organizador}
            onChange={(e) =>
              setFormulario({ ...formulario, organizador: e.target.value })
            }
            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            <option value="">Selecciona organizador</option>
            {organizadores.map((org) => (
              <option key={org.id} value={org.id}>
                {org.nombre}
              </option>
            ))}
          </select>

          {/* Imagen preview */}
          {modoEdicion && eventoSeleccionado?.imagen && (
            <div className="overflow-hidden rounded-xl border border-slate-200">
              <img
                src={eventoSeleccionado.imagen}
                alt="Evento"
                className="w-full h-40 object-cover"
              />
            </div>
          )}

          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setFormulario({
                ...formulario,
                imagen: e.target.files[0],
              })
            }
            className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100"
          />
        </div>

        {/* Botones */}
        <div className="flex justify-end gap-2 mt-6">

          <button
            onClick={cerrar}
            className="px-4 py-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition"
          >
            Cancelar
          </button>

          <button
            onClick={guardar}
            className="px-5 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition shadow-sm"
          >
            Guardar
          </button>

        </div>

      </div>
    </div>
  );
}
export default EventoModal;