function ProjectCard() {
  return (
    <div className="col-span-2 bg-emerald-50 rounded-3xl p-6 flex flex-col justify-between shadow-md">
      <div className="flex justify-between items-start">
        <span className="text-xs tracking-widest uppercase text-green-600">Project</span>
        <span className="text-xs border border-emerald-400 text-emerald-700 rounded-full px-3 py-1">In progress</span>
      </div>
      <div>
        <h2 className="text-xl font-bold mt-3 text-stone-800">Coming soon…</h2>
        <p className="text-sm text-stone-500 mt-1">Something cool is being built.</p>
      </div>
      <a href="#" className="mt-4 text-xs text-green-600 underline underline-offset-2 self-end hover:text-green-800 transition-colors">
        See more
      </a>
    </div>
  );
}

export default ProjectCard;
