const timelineItems = [
  { year: "2021", desc: 'Wrote my first "Hello World" using C++' },
  { year: "2022–2023", desc: "Senior Highschool TVL-ICT · La Consolacion College Tanauan" },
  { year: "2023–present", desc: "BSIT · Polytechnic University of the Philippines" },
];

function TimelineCard() {
  return (
    <div className="col-span-2 md:col-span-1 bg-gradient-to-br from-emerald-500 to-green-700 text-white rounded-3xl p-6 flex flex-col justify-between shadow-md">
      <span className="text-xs tracking-widest uppercase text-green-200">Timeline</span>
      <div className="mt-4 flex flex-col gap-4 relative">
        <div className="absolute left-[5px] top-1 bottom-1 w-px bg-white/20" />
        {timelineItems.map((item) => (
          <div key={item.year} className="flex gap-3 relative">
            <div className="w-3 h-3 rounded-full bg-white shrink-0 mt-1 z-10" />
            <div>
              <span className="text-xs font-bold text-green-200">{item.year}</span>
              <p className="text-sm text-green-100 leading-snug">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TimelineCard;
