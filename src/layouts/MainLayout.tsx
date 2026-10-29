import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[#f8faf7] text-stone-900 relative overflow-x-clip selection:bg-brand-200 selection:text-brand-900">
      {/* Subtle architectural vertical desk guides (visible on wide screens) */}
      <div className="pointer-events-none fixed inset-0 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-x border-brand-900/6 z-0 hidden xl:block" />

      {/* Main content layer */}
      <div className="relative z-10">
        <Outlet />
      </div>
    </div>
  );
}
