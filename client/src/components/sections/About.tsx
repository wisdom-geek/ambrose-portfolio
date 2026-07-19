import { motion } from "framer-motion";
import { GraduationCap, Code2, Layers, DollarSign, Shield, Database, Lightbulb } from "lucide-react";
import SectionHeading from "../SectionHeading";
import AnimatedCounter from "../AnimatedCounter";

const journey = [
  {
    icon: Code2,
    title: "Backend Development",
    description: "Architecting robust server-side applications with Django, DRF, and Node.js.",
    color: "#22d3ee",
  },
  {
    icon: Layers,
    title: "Software Architecture",
    description: "Designing scalable, maintainable systems with clean separation of concerns.",
    color: "#8b5cf6",
  },
  {
    icon: DollarSign,
    title: "Financial Technology",
    description: "Building FinTech platforms — lending, savings, payments, and embedded finance.",
    color: "#10b981",
  },
  {
    icon: Shield,
    title: "Cybersecurity Interest",
    description: "Exploring API security, penetration testing, and secure coding practices.",
    color: "#f59e0b",
  },
  {
    icon: Database,
    title: "Database Engineering",
    description: "Optimizing PostgreSQL, MySQL, and MariaDB for performance and reliability.",
    color: "#ec4899",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Applying mathematical thinking to decompose complex engineering challenges.",
    color: "#06b6d4",
  },
];

const stats = [
  { value: 3, suffix: "+", label: "Years Building" },
  { value: 10, suffix: "+", label: "Projects Shipped" },
  { value: 6, suffix: "", label: "Core Technologies" },
  { value: 100, suffix: "%", label: "Commitment" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="container relative z-10">
        <SectionHeading
          label="About"
          title="Engineering with purpose"
          description="A backend software engineer rooted in mathematics and driven by the challenge of building financial systems that create real impact."
        />

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass glass-hover rounded-xl p-5 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text-cyan font-display">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs text-zinc-500 mt-2 font-mono uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Journey grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {journey.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="glass glass-hover rounded-2xl p-6 group"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `${item.color}15`,
                  border: `1px solid ${item.color}30`,
                }}
              >
                <item.icon size={20} style={{ color: item.color }} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 font-display">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mt-8 glass glass-hover rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start gap-6"
        >
          <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center flex-shrink-0">
            <GraduationCap size={26} className="text-cyan-400" />
          </div>
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">
              Education
            </span>
            <h3 className="text-xl font-semibold text-white mt-2 font-display">
              Bachelor's Degree in Mathematics and Computer Science
            </h3>
            <p className="text-zinc-400 mt-1">Kenyatta University</p>
            <p className="text-sm text-zinc-500 mt-3 leading-relaxed">
              A foundation in mathematical reasoning and computational theory that
              informs a structured, analytical approach to software engineering —
              from algorithm design to system architecture.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
