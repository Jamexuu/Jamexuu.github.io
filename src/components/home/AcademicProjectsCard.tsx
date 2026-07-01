function AcademicProjectsCard() {
  return (
    <div className="col-span-2 bg-gradient-to-br from-green-400 to-emerald-600 text-white rounded-3xl p-6 flex flex-col justify-between shadow-md">
      <div className="flex justify-between items-start">
        <span className="text-xs tracking-widest uppercase text-green-100">Academic Projects</span>
        <span className="text-xs border border-white/40 text-white/80 rounded-full px-3 py-1">In progress</span>
      </div>
      <div className="mt-3 space-y-2">
        <p className="text-xs text-green-100">Details coming soon…</p>
      </div>
      <a href="#" className="mt-4 text-xs text-green-100 underline underline-offset-2 self-end hover:text-white transition-colors">
        See more
      </a>
    </div>
  );
}

export default AcademicProjectsCard;
