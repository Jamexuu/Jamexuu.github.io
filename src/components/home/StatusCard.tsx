function StatusCard() {
  return (
    <div className="col-span-2 bg-emerald-50 rounded-3xl p-4 flex flex-col justify-between shadow-md">
      <span className="text-xs tracking-widest uppercase text-green-600">Status</span>
      <div className="flex flex-col gap-1.5 mt-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0"></span>
          <span className="text-sm font-medium text-stone-700">Ongoing capstone project development</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0"></span>
          <span className="text-sm font-medium text-stone-700">Open for freelancing projects and opportunities</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0"></span>
          <span className="text-sm font-medium text-stone-700">Still progressing...</span>
        </div>
      </div>
    </div>
  );
}

export default StatusCard;
