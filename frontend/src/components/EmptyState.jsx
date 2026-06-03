import { FaInbox } from "react-icons/fa";

function EmptyState({ mensaje }) {
  return (
    <div className="bg-white/80 backdrop-blur-md border border-slate-100 rounded-2xl p-10 text-center shadow-sm">

      <div className="flex justify-center mb-4">
        <div className="p-4 rounded-full bg-slate-100 text-slate-400">
          <FaInbox className="text-2xl" />
        </div>
      </div>

      <h2 className="text-xl font-semibold text-slate-700">
        Sin registros
      </h2>

      <p className="text-slate-500 mt-2 text-sm max-w-sm mx-auto">
        {mensaje}
      </p>

    </div>
  );
}

export default EmptyState;