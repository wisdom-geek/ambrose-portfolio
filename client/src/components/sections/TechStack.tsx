import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";

const techIcons = [
  { name: "Python", symbol: "Py", color: "#3776ab" },
  { name: "Django", symbol: "Dj", color: "#092e20" },
  { name: "TypeScript", symbol: "TS", color: "#3178c6" },
  { name: "JavaScript", symbol: "JS", color: "#f7df1e" },
  { name: "React", symbol: "Re", color: "#61dafb" },
  { name: "Next.js", symbol: "Nx", color: "#ffffff" },
  { name: "Node.js", symbol: "No", color: "#339933" },
  { name: "PostgreSQL", symbol: "Pg", color: "#4169e1" },
  { name: "MySQL", symbol: "My", color: "#4479a1" },
  { name: "Tailwind", symbol: "Tw", color: "#06b6d4" },
  { name: "Git", symbol: "Gt", color: "#f05032" },
  { name: "Linux", symbol: "Lx", color: "#fcc624" },
];

export default function TechStack() {
  return (
    <section id="stack" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-violet-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10">
        <SectionHeading
          label="Tech Stack"
          title="Technologies I work with"
          description="The tools and frameworks I use to design, build, and deploy backend systems and FinTech solutions."
          align="center"
        />

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mt-14">
          {techIcons.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: (i % 6) * 0.08,
                ease: [0.23, 1, 0.32, 1],
              }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="glass glass-hover rounded-2xl p-4 md:p-6 flex flex-col items-center gap-3 group cursor-default"
            >
              <div
                className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center font-display font-bold text-lg transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `${tech.color}20`,
                  border: `1px solid ${tech.color}40`,
                  color: tech.color,
                }}
              >
                {tech.symbol}
              </div>
              <span className="text-xs md:text-sm font-mono text-zinc-400 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
