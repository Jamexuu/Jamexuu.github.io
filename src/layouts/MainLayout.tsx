import { Outlet } from "react-router";

function MainLayout() {
  return (
    <div className="relative min-h-screen bg-stone-100">

      {/* Page background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-emerald-300/30 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-[420px] h-[420px] bg-green-300/25 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 w-[460px] h-[460px] bg-teal-300/25 rounded-full blur-3xl" />
        <div className="absolute top-2/3 left-10 w-[260px] h-[260px] bg-emerald-200/25 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
