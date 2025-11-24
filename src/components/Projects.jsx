import React from "react";
import { motion } from "framer-motion";

// Replace the 'image' values with actual image paths when ready
const myProjects = [
  {
    title: "Educational Kids Website",
    description: "An interactive and engaging educational website designed for children.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/DOM.png",
    link: "#",
  },
  {
    title: "Personal E-Card",
    description: "A personalized electronic card showcasing creative design and functionality.",
    tech: ["React", "CSS", "Animations"],
    image: "/my card.png",
    link: "#",
  },
  {
    title: "Women's Bags Landing Page",
    description: "A visually appealing landing page for showcasing women's bags products.",
    tech: ["HTML", "Tailwind CSS", "Responsive Design"],
    image: "/landing page.png",
    link: "#",
  },
];

export default function Projects() {
  return (
    <div>
      <h2 className="text-2xl font-semibold">Projects</h2>
      <p className="mt-2 text-slate-600">Selected works — case studies and links.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {myProjects.map((p, index) => (
          <motion.article
            key={p.title}
            className="border rounded-lg p-4 bg-white shadow-sm cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="h-40 w-full bg-gray-100 flex items-center justify-center mb-3">
              <img src={p.image} alt={p.title} className="object-contain h-full" />
            </div>
            <h3 className="font-medium text-lg">{p.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="text-xs px-2 py-1 bg-slate-100 rounded">{t}</span>
              ))}
            </div>
            <div className="mt-4">
              <a href={p.link} className="text-sm text-slate-700 hover:underline">
                View project →
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
