import { useEffect, useState } from "react";
import api from "../services/api";
import Swal from "sweetalert2";
import OrganizadorCard from "../components/OrganizadorCard";
import OrganizadorModal from "../components/OrganizadorModal";
import { FaPlus } from "react-icons/fa";

function Organizadores() {
  const [organizadores, setOrganizadores] =
    useState([]);

  const [mostrarModal, setMostrarModal] =
    useState(false);

  const [modoEdicion, setModoEdicion] =
    useState(false);

  const [formulario, setFormulario] =
    useState({
      id: null,
      nombre: "",
      correo: "",
      telefono: "",
    });

  useEffect(() => {
    obtenerOrganizadores();
  }, []);

  const obtenerOrganizadores = async () => {
    try {
      const response = await api.get(
        "organizadores/"
      );
      setOrganizadores(response.data);
    } catch {
      Swal.fire(
        "Error",
        "No se pudieron cargar los organizadores",
        "error"
      );
    }
  };

  const abrirNuevo = () => {
    setModoEdicion(false);
    setFormulario({
      id: null,
      nombre: "",
      correo: "",
      telefono: "",
    });

    setMostrarModal(true);
  };
  const abrirEditar = (org) => {
    setModoEdicion(true);

    setFormulario({
      id: org.id,
      nombre: org.nombre,
      correo: org.correo,
      telefono: org.telefono,
    });

    setMostrarModal(true);
  };
  const guardarOrganizador = async () => {
    if (
      !formulario.nombre ||
      !formulario.correo ||
      !formulario.telefono
    ) {
      return Swal.fire(
        "Campos requeridos",
        "Complete todos los campos",
        "warning"
      );
    }
    try {
      if (modoEdicion) {
        await api.put(
          `organizadores/${formulario.id}/`,
          formulario
        );
      } else {
        await api.post(
          "organizadores/",
          formulario
        );
      }
      Swal.fire({
        icon: "success",
        title: modoEdicion
          ? "Organizador actualizado"
          : "Organizador registrado",
        timer: 1500,
        showConfirmButton: false,
      });

      setMostrarModal(false);
      obtenerOrganizadores();
    } catch (error) {

      if (
        error.response?.data?.correo
      ) {
        Swal.fire(
          "Correo duplicado",
          "Ya existe un organizador con ese correo",
          "error"
        );
      } else {
        Swal.fire(
          "Error",
          "No se pudo guardar",
          "error"
        );
      }
    }
  };

  const eliminarOrganizador = async (id) => {
    const result = await Swal.fire({
      title: "¿Eliminar organizador?",
      icon: "warning",
      showCancelButton: true,
    });
    if (!result.isConfirmed) return;
    await api.delete(
      `organizadores/${id}/`
    );
    obtenerOrganizadores();
    Swal.fire(
      "Eliminado",
      "Organizador eliminado",
      "success"
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">
            Organizadores
          </h1>
          <p className="text-slate-500">
            Total: {organizadores.length}
          </p>
        </div>
        <button
          onClick={abrirNuevo}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl flex items-center gap-2"
        >
          <FaPlus />
          Nuevo Organizador
        </button>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {organizadores.map((org) => (
          <OrganizadorCard
            key={org.id}
            organizador={org}
            onEditar={abrirEditar}
            onEliminar={eliminarOrganizador}
          />
        ))}
      </div>
      <OrganizadorModal
        mostrar={mostrarModal}
        cerrar={() =>
          setMostrarModal(false)
        }
        guardar={guardarOrganizador}
        formulario={formulario}
        setFormulario={setFormulario}
        modoEdicion={modoEdicion}
      />
    </div>
  );
}
export default Organizadores;