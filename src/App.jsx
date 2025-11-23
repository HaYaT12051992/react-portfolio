
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <section id="home" className="pt-24">
          <Hero />
        </section>

        <section id="projects" className="pt-20">
          <Projects />
        </section>

        <section id="experience" className="pt-20">
          <Experience />
        </section>

        <section id="education" className="pt-20">
          <Education />
        </section>

        <section id="contact" className="pt-20 pb-20">
          <Contact />
        </section>
      </main>
    </div>
  );
}


