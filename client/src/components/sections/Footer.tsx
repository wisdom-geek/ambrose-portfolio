import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import Logo from "../Logo";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 border-t border-white/[0.06] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 group"
            aria-label="Back to top"
          >
            <motion.div
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="relative w-9 h-9 flex items-center justify-center"
            >
              <Logo className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" />
            </motion.div>
            <span className="font-display font-bold text-sm tracking-tight text-white">
              Ambrose<span className="text-cyan-400">.</span>
            </span>
          </button>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center gap-1 md:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="px-3 py-1.5 text-xs font-medium text-zinc-500 hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-zinc-400 glass glass-hover rounded-lg transition-all group"
          >
            <span>Back to top</span>
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-white/[0.04] text-center">
          <p className="text-xs text-zinc-600 font-mono">
            Designed &amp; Developed by{" "}
            <span className="text-zinc-400">Ambrose Musyoka</span>
          </p>
          <p className="text-xs text-zinc-700 mt-1 font-mono">
            Built with React, Three.js &amp; Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
