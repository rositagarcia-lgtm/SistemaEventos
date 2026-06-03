import { useEffect, useState } from "react";
import api from "../services/api";
import Swal from "sweetalert2";
import EventoCard from "../components/EventoCard";
import EventoModal from "../components/EventoModal";
import { FaPlus } from "react-icons/fa";

function Eventos() {
  const [eventos, setEventos] = useState([]);
  const [organizadores, setOrganizadores] = useState([]);
  const [loading, setLoading] = useState(true);

  const [mostrarModal, setMostrarModal] = useState(false);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [eventoSeleccionado, setEventoSeleccionado] = useState(null);

  const [formulario, setFormulario] = useState({
    id: null,
    nombre: "",
    fecha: "",
    lugar: "",
    organizador: "",
    imagen: null,
  });

  useEffect(() => {
    cargarDatos();
  }, []);

  const cargarDatos = async () => {
    setLoading(true);

    try {
      const [resEventos, resOrganizadores] = await Promise.all([
        api.get("eventos/"),
        api.get("organizadores/"),
      ]);

      setEventos(resEventos.data);
      setOrganizadores(resOrganizadores.data);
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "No se pudieron cargar los datos", "error");
    } finally {
      setLoading(false);
    }
  };

  const abrirNuevo = () => {
    setModoEdicion(false);
    setEventoSeleccionado(null);

    setFormulario({
      id: null,
      nombre: "",
      fecha: "",
      lugar: "",
      organizador: "",
      imagen: null,
    });

    setMostrarModal(true);
  };

  const abrirEditar = (evento) => {
    setModoEdicion(true);
    setEventoSeleccionado(evento);

    setFormulario({
      id: evento.id,
      nombre: evento.nombre,
      fecha: evento.fecha,
      lugar: evento.lugar,
      organizador: evento.organizador,
      imagen: null,
    });

    setMostrarModal(true);
  };

  const guardarEvento = async () => {
    if (
      !formulario.nombre ||
      !formulario.fecha ||
      !formulario.lugar ||
      !formulario.organizador
    ) {
      return Swal.fire(
        "Campos incompletos",
        "Completa todos los campos",
        "warning"
      );
    }

    if (!modoEdicion && !formulario.imagen) {
      return Swal.fire(
        "Imagen requerida",
        "Selecciona una imagen",
        "warning"
      );
    }

    try {
      const data = new FormData();

      Object.entries(formulario).forEach(([key, value]) => {
        if (value !== null) {
          data.append(key, value);
        }
      });

      if (modoEdicion) {
        await api.patch(`eventos/${formulario.id}/`, data);
      } else {
        await api.post("eventos/", data);
      }

      Swal.fire({
        icon: "success",
        title: modoEdicion
          ? "Evento actualizado"
          : "Evento creado",
        timer: 1500,
        showConfirmButton: false,
      });

      setMostrarModal(false);
      cargarDatos();
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "No se pudo guardar el evento", "error");
    }
  };

  const eliminarEvento = async (id) => {
    const result = await Swal.fire({
      title: "¿Eliminar evento?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (!result.isConfirmed) return;

    try {
      await api.delete(`eventos/${id}/`);
      setEventos((prev) => prev.filter((e) => e.id !== id));

      Swal.fire("Eliminado", "Evento eliminado correctamente", "success");
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "No se pudo eliminar", "error");
    }
  };

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">

        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Eventos
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Total registrados: {eventos.length}
          </p>
        </div>

        <button
          onClick={abrirNuevo}
          className="
            bg-blue-600 hover:bg-blue-700
            text-white
            px-5 py-3
            rounded-xl
            flex items-center gap-2
            shadow-sm
            transition
          "
        >
          <FaPlus />
          Nuevo Evento
        </button>

      </div>

      {/* CONTENT */}
      {loading ? (
        <div className="py-20">
          <div className="text-center text-slate-500 animate-pulse">
            Cargando eventos...
          </div>
        </div>
      ) : eventos.length === 0 ? (
        <div className="text-center py-20 text-slate-500">
          No hay eventos registrados
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">

          {eventos.map((evento) => (
            <EventoCard
              key={evento.id}
              evento={evento}
              onEditar={abrirEditar}
              onEliminar={eliminarEvento}
            />
          ))}

        </div>
      )}
      <EventoModal
        mostrar={mostrarModal}
        cerrar={() => setMostrarModal(false)}
        guardar={guardarEvento}
        formulario={formulario}
        setFormulario={setFormulario}
        organizadores={organizadores}
        modoEdicion={modoEdicion}
        eventoSeleccionado={eventoSeleccionado}
      />

    </div>
  );
}
export default Eventos;