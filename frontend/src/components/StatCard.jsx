function StatCard({ titulo, valor, icono, color = "blue" }) {
  const colors = {
    blue: "text-blue-500 bg-blue-50 border-blue-100",
    emerald: "text-emerald-500 bg-emerald-50 border-emerald-100",
    violet: "text-violet-500 bg-violet-50 border-violet-100",
    orange: "text-orange-500 bg-orange-50 border-orange-100",
    slate: "text-slate-600 bg-slate-50 border-slate-200",
  };

  const theme = colors[color] || colors.blue;

  return (
    <div
      className="
        group
        bg-white/80 backdrop-blur-md
        border border-slate-100
        rounded-2xl
        p-6
        shadow-sm
        hover:shadow-lg
        transition-all duration-300
        hover:-translate-y-1
      "
    >
      <div className="flex items-center justify-between">

        <div>
          <p className="text-slate-500 text-sm font-medium tracking-wide">
            {titulo}
          </p>

          <h2 className="text-4xl font-bold mt-2 text-slate-800">
            {valor}
          </h2>
        </div>

        <div
          className={`
            p-3 rounded-xl
            ${theme}
            text-2xl
            group-hover:scale-110
            transition-transform
          `}
        >
          {icono}
        </div>

      </div>
    </div>
  );
}

export default StatCard;