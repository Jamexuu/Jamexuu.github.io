import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-stone-900 relative selection:bg-stone-900 selection:text-white">
      {/* Subtle architectural vertical desk guides (visible on wide screens) */}
      <div className="pointer-events-none fixed inset-0 max-w-6xl mx-auto px-6 sm:px-8 border-x border-stone-200/40 z-0 hidden lg:block" />

      {/* Main content layer */}
      <div className="relative z-10">
        <Outlet />
      </div>
    </div>
  );
}
