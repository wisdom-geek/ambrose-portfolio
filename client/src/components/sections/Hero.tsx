import { lazy, Suspense, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, FileDown, FolderGit2 } from "lucide-react";
import MagneticButton from "../MagneticButton";

const Hero3DScene = lazy(() => import("../Hero3DScene"));

const roles = [
  "Backend Software Engineer",
  "FinTech Builder",
  "Problem Solver",
  "Software Architect",
];

function RotatingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[1.2em] overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="gradient-text-cyan font-display font-semibold"
        >
          {roles[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* 3D Scene */}
      <Suspense fallback={null}>
        <Hero3DScene />
      </Suspense>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/40 via-transparent to-[#030712] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030712_80%)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container flex flex-col items-center text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-full px-4 py-1.5 mb-8 flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono text-zinc-300 tracking-wide">
            Available for opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[0.95]"
        >
          Ambrose
          <br />
          <span className="gradient-text animated-gradient">Musyoka</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 text-xl sm:text-2xl md:text-3xl font-display font-medium text-zinc-300 h-[1.5em]"
        >
          <RotatingText />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 max-w-xl text-base sm:text-lg text-zinc-400 leading-relaxed"
        >
          Passionate about building secure, scalable, and impactful software
          from intuitive user interfaces to robust backend systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <MagneticButton>
            <button
              onClick={scrollToProjects}
              className="group flex items-center gap-2 px-6 py-3 bg-cyan-400 text-[#030712] font-semibold rounded-xl hover:bg-cyan-300 transition-colors duration-200 glow-cyan"
            >
              <FolderGit2 size={18} />
              View Projects
              <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </button>
          </MagneticButton>

          <MagneticButton>
            <a
              href="/manus-storage/ambrose_modern_resume_57abf521.pdf"
              download="Ambrose_Musyoka_Resume.pdf"
              className="group flex items-center gap-2 px-6 py-3 glass glass-hover text-white font-medium rounded-xl hover:bg-white/[0.08] transition-colors"
            >
              <FileDown size={18} />
              Download Resume
            </a>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-mono text-zinc-500 tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-cyan-400/50 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
