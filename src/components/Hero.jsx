// src/components/Hero.jsx
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="py-20" id="home">
      <div className="text-center">
        {/* صورة شخصية + الاسم */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src="/Profile.jpg" // ضع صورتك في public/Profile.jpg
            alt="Hayat Boutoumit"
            className="h-24 w-24 rounded-full object-cover"
            whileHover={{ scale: 1.1, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.h1
            className="text-4xl sm:text-5xl font-bold"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Hi, I’m Hayat Boutoumit
          </motion.h1>
        </motion.div>

        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          I build modern, accessible web applications with a focus on clean UI and delightful UX. I enjoy working with React, Tailwind CSS and building component-driven designs.
        </p>

        {/* أزرار */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <motion.a
            href="#contact"
            className="inline-flex items-center px-4 py-2 bg-slate-900 text-white rounded-md text-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Contact Me
          </motion.a>
          <motion.a
            href="#projects"
            className="inline-flex items-center px-4 py-2 border rounded-md text-sm text-slate-700"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            View Projects
          </motion.a>
        </div>

        {/* أيقونات تفاعلية */}
        <div className="mt-6 flex items-center justify-center gap-4 text-slate-600">
          <motion.a
            href="https://github.com/HaYaT12051992"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="github"
            whileHover={{ scale: 1.2, color: "#111827" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Github size={24} />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/hayat-boutoumit-0565b7350"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="linkedin"
            whileHover={{ scale: 1.2, color: "#111827" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Linkedin size={24} />
          </motion.a>

          <motion.a
            href="#contact"
            aria-label="email"
            whileHover={{ scale: 1.2, color: "#111827" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Mail size={24} />
          </motion.a>
        </div>
      </div>
    </div>
  );
}
