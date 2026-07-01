function ContactCard() {
  return (
    <div className="col-span-2 bg-gradient-to-br from-emerald-600 to-teal-800 text-white rounded-3xl p-6 flex flex-col justify-between shadow-md">
      <span className="text-xs tracking-widest uppercase text-green-200">Contact</span>
      <div className="flex items-center gap-1.5 mt-2">
        <span className="material-symbols-outlined text-green-200 text-base">location_on</span>
        <span className="text-sm text-green-100">Batangas, Philippines</span>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <a href="mailto:you@example.com" className="text-sm border border-white rounded-full px-4 py-2 hover:bg-white hover:text-green-700 transition-colors">Email</a>
        <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-sm border border-white rounded-full px-4 py-2 hover:bg-white hover:text-green-700 transition-colors">GitHub</a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-sm border border-white rounded-full px-4 py-2 hover:bg-white hover:text-green-700 transition-colors">LinkedIn</a>
      </div>
    </div>
  );
}

export default ContactCard;
