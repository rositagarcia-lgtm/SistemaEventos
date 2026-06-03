function Header({ titulo, subtitulo }) {
  return (
    <div className="bg-gradient-to-r from-slate-50 to-white border-b border-slate-100 px-8 py-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-800 tracking-tight">
          {titulo}
        </h1>
        <p className="text-slate-500 mt-2 text-sm">
          {subtitulo}
        </p>
        <div className="mt-4 w-16 h-1 bg-blue-500 rounded-full opacity-70"></div>

      </div>

    </div>
  );
}

export default Header;