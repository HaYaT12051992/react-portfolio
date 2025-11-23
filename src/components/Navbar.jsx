import React, { useState, useEffect } from "react"; 
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // متابعة التمرير لتغيير الخلفية والظل
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-md" : "bg-white/80"
      } border-b`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* زر القائمة للشاشات الصغيرة */}
          <div className="md:hidden flex items-center justify-between w-full">
            <button
              aria-label="Open menu"
              onClick={() => setOpen((s) => !s)}
              className="p-2 rounded-md text-slate-700 hover:bg-slate-100"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* روابط للشاشات الكبيرة */}
          <nav className="hidden md:flex items-center space-x-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-slate-700 hover:text-slate-900"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* القائمة المنسدلة للشاشات الصغيرة مع Animation */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden border-t bg-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-3 space-y-3">
              {/* روابط القائمة مع Animation متسلسل */}
              {links.map((l, index) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  className="block text-slate-700 py-1"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                >
                  {l.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
