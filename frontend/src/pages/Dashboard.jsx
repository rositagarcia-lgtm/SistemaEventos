import { useEffect, useState } from "react";
import {
  FaUsers,
  FaCalendarAlt,
  FaCheckCircle,
  FaChartLine,
} from "react-icons/fa";
import api from "../services/api";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import LoadingSpinner from "../components/LoadingSpinner";
function Dashboard() {
  const [totalOrganizadores, setTotalOrganizadores] = useState(0);
  const [totalEventos, setTotalEventos] = useState(0);
  const [eventosProximos, setEventosProximos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    cargarDatos();
  }, []);
  const cargarDatos = async () => {
    try {
      const [organizadores, eventos] = await Promise.all([
        api.get("organizadores/"),
        api.get("eventos/"),
      ]);

      setTotalOrganizadores(organizadores.data.length);
      setTotalEventos(eventos.data.length);

      // FILTRAR EVENTOS PRÓXIMOS
      const hoy = new Date();

      const proximos = eventos.data
        .filter((e) => new Date(e.fecha) >= hoy)
        .sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
      setEventosProximos(proximos);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="space-y-10">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 shadow-md">
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>
        <p className="text-blue-100 mt-2">
          Resumen general del sistema de eventos
        </p>
        <div className="mt-6 flex items-center gap-2 text-sm text-blue-100">
          <FaChartLine />
          Panel de control en tiempo real
        </div>
      </div>
      {/* HEADER */}
      <Header
        titulo="Estadísticas"
        subtitulo="Datos generales del sistema"
      />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          {/* STATS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <StatCard
              titulo="Organizadores"
              valor={totalOrganizadores}
              icono={<FaUsers className="text-blue-500" />}
            />
            <StatCard
              titulo="Eventos"
              valor={totalEventos}
              icono={<FaCalendarAlt className="text-emerald-500" />}
            />
            {/* ESTADO SISTEMA */}
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500 text-2xl" />
                <div>
                  <p className="text-slate-500 text-sm">
                    Estado del sistema
                  </p>
                  <h2 className="text-lg font-bold text-green-600">
                    Activo
                  </h2>
                </div>
              </div>
              <p className="text-slate-400 mt-3 text-sm">
                Todos los servicios funcionando correctamente
              </p>
            </div>
          </div>
          {/* PRÓXIMOS EVENTOS */}
          <div className="bg-white rounded-2xl shadow-md p-6 mt-8">
            <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <FaCalendarAlt className="text-blue-500" />
              Próximos eventos
            </h2>
            {eventosProximos.length === 0 ? (
              <p className="text-slate-500 text-sm">
                No hay eventos próximos
              </p>
            ) : (
              <div className="space-y-3">
                {eventosProximos.slice(0, 5).map((evento) => (
                  <div
                    key={evento.id}
                    className="flex justify-between items-center p-3 bg-slate-50 rounded-xl"
                  >
                    <div>
                      <p className="font-semibold text-slate-800">
                        {evento.nombre}
                      </p>
                      <p className="text-sm text-slate-500">
                        {evento.lugar}
                      </p>
                    </div>
                    <div className="text-sm text-blue-600 font-medium">
                      {new Date(evento.fecha).toLocaleDateString("es-PE")}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
export default Dashboard;