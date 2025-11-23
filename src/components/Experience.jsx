const items = [
  {
    company: "ALX Platform",
    role: "AI Professional Training",
    period: "05 May — 05 July 2025",
    bullets: [
      "Completed professional training in Artificial Intelligence",
      "Worked on practical AI projects and hands-on exercises"
    ],
  },
  {
    company: "ALX Platform",
    role: "AI Starter Kit – Fundamentals of AI",
    period: "10 February — 11 March 2025",
    bullets: [
      "Learned foundational AI concepts",
      "Developed basic AI and machine learning skills"
    ],
  },
  {
    company: "ONHYM – Office National des Hydrocarbures et des Mines",
    role: "Intern – Laboratory & Environmental Studies",
    period: "18 February — 08 May 2020",
    bullets: [
      "Participated in environmental and laboratory analyses",
      "Contributed to data reporting and sample processing"
    ],
  },
  {
    company: "CAPM – Centre Anti Poison et de Pharmacovigilance du Maroc",
    role: "Intern – Toxicology & Data Analysis",
    period: "12 March — 12 June 2018",
    bullets: [
      "Assisted in toxicological analysis",
      "Supported data management and reporting tasks"
    ],
  },
  {
    company: "Faculty of Sciences – UM5 Rabat",
    role: "Intern – Chemistry Laboratory",
    period: "March — May 2017",
    bullets: [
      "Conducted chemical synthesis and laboratory experiments",
      "Performed analysis and documentation of results"
    ],
  },
];

export default function Experience() {
  return (
    <div>
      <h2 className="text-2xl font-semibold">Experience</h2>
      <p className="mt-2 text-slate-600">Professional experience and roles.</p>

      <div className="mt-6 space-y-6">
        {items.map((it) => (
          <div key={it.company} className="border rounded-lg p-4 bg-white shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">{it.role}</h3>
                <p className="text-sm text-slate-600">{it.company}</p>
              </div>
              <div className="text-sm text-slate-500">{it.period}</div>
            </div>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-600 space-y-1">
              {it.bullets.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
