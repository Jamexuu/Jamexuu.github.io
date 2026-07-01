const skills = ["Laravel", "TypeScript", "React", "React Native", "REST", "Tailwind CSS", "Git"];

function SkillsCard() {
  return (
    <div className="col-span-2 bg-emerald-50 rounded-3xl p-6 flex flex-col justify-between shadow-md">
      <span className="text-xs tracking-widest uppercase text-green-600">Skills & Tech Stack</span>
      <div className="flex flex-wrap gap-2 mt-3">
        {skills.map((skill) => (
          <span key={skill} className="text-xs bg-emerald-100 text-emerald-800 border border-emerald-200 rounded-full px-3 py-1">
            {skill}
          </span>
        ))}
      </div>
      <a href="#" className="mt-4 text-xs text-green-600 underline underline-offset-2 self-end hover:text-green-800 transition-colors">
        See more
      </a>
    </div>
  );
}

export default SkillsCard;
