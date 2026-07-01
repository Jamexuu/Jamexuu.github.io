import profilePic from "../../assets/2_Mercado_JamesFrancis_Pic 2.png";

function HeroCard() {
  return (
    <div className="col-span-2 row-span-2 relative overflow-hidden bg-gradient-to-br from-green-500 to-emerald-700 text-white rounded-3xl p-6 md:p-6 flex flex-col min-h-64 shadow-xl">

      {/* Background decorations */}
      <div className="absolute -top-8 -right-8 w-52 h-52 bg-white/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute top-6 right-12 w-28 h-28 bg-emerald-300/20 rounded-full blur-xl pointer-events-none" />
      <div className="absolute top-16 right-4 w-14 h-14 border border-white/20 rounded-full pointer-events-none" />
      <div className="absolute top-10 right-28 w-6 h-6 border border-white/20 rounded-full pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-green-300/15 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-20 left-4 w-10 h-10 border border-white/15 rounded-full pointer-events-none" />

      <span className="relative z-10 text-xs tracking-widest uppercase text-green-200">Portfolio</span>
      <div className="relative z-10 flex flex-1 flex-col items-center md:items-start justify-center gap-3 m-3">
        <img
          src={profilePic}
          alt="James Francis L. Mercado"
          className="w-60 h-60 rounded-3xl object-cover border-2 border-white/40 shrink-0"
        />
        <div className="text-center md:text-left">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight">James Francis L. Mercado</h1>
          <p className="mt-1 text-base md:text-lg text-green-100">Full-Stack Developer</p>
        </div>
      </div>
    </div>
  );
}

export default HeroCard;
