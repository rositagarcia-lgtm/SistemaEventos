import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Organizadores from "./pages/Organizadores";
import Eventos from "./pages/Eventos";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>

      <div className="min-h-screen bg-slate-50">

        {/* NAVBAR ARRIBA */}
        <Navbar />

        {/* CONTENIDO ABAJO */}
        <main className="max-w-6xl mx-auto px-6 py-8">

          <Routes>

            <Route path="/" element={<Dashboard />} />
            <Route path="/organizadores" element={<Organizadores />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="*" element={<NotFound />} />

          </Routes>

        </main>

      </div>

    </BrowserRouter>
  );
}

export default App;
