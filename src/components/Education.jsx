import React from "react";

const schools = [
  { degree: "Master en Chimie appliquée, Environnement et Développement Durable", school: "Université Ibn Tofail – Faculté des Sciences, Kénitra", year: "2020" },
  { degree: "Licence en Sciences de la matière – Chimie", school: "Université Mohammed V – Faculté des Sciences, Rabat", year: "2017" },
  { degree: "DEUG en Sciences de la matière – Chimie", school: "Université Mohammed V – Faculté des Sciences, Rabat", year: "2016" },
  { degree: "Baccalauréat en Sciences Physiques", school: "Lycée ASSADAKA – Guelmim", year: "2011" },
];

export default function Education() {
  return (
    <div>
      <h2 className="text-2xl font-semibold">Education</h2>
      <p className="mt-2 text-slate-600">Formal education and certifications.</p>

      <div className="mt-6 space-y-4">
        {schools.map((s) => (
          <div key={s.school} className="border rounded-lg p-4 bg-white shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">{s.degree}</h3>
                <p className="text-sm text-slate-600">{s.school}</p>
              </div>
              <div className="text-sm text-slate-500">{s.year}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
