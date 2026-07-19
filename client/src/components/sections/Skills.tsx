import { motion } from "framer-motion";
import { Code2, Server, Layout, Database, Wrench, ShieldCheck } from "lucide-react";
import SectionHeading from "../SectionHeading";

const skillCategories = [
  {
    icon: Code2,
    title: "Languages",
    color: "#22d3ee",
    skills: ["Python", "JavaScript", "TypeScript", "VB.NET", "SQL"],
  },
  {
    icon: Server,
    title: "Backend",
    color: "#8b5cf6",
    skills: ["Django", "Django REST Framework", "Node.js", "REST APIs"],
  },
  {
    icon: Layout,
    title: "Frontend",
    color: "#10b981",
    skills: ["React", "Next.js", "Tailwind", "shadcn/ui"],
  },
  {
    icon: Database,
    title: "Databases",
    color: "#f59e0b",
    skills: ["PostgreSQL", "MySQL", "MariaDB", "SQLite"],
  },
  {
    icon: Wrench,
    title: "Tools",
    color: "#ec4899",
    skills: ["Git", "GitHub", "Linux", "VS Code", "Postman", "npm"],
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    color: "#ef4444",
    skills: ["Linux", "API Security", "Penetration Testing (Learning)"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container relative z-10">
        <SectionHeading
          label="Skills"
          title="Tools of the craft"
          description="A versatile toolkit spanning languages, frameworks, databases, and security — honed through real-world FinTech development."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="glass glass-hover rounded-2xl p-6 group relative overflow-hidden"
            >
              {/* Glow accent */}
              <div
                className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"
                style={{ background: `${cat.color}20` }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `${cat.color}15`,
                      border: `1px solid ${cat.color}30`,
                    }}
                  >
                    <cat.icon size={18} style={{ color: cat.color }} />
                  </div>
                  <h3 className="text-lg font-semibold text-white font-display">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: j * 0.05 }}
                      className="px-3 py-1.5 text-xs font-mono text-zinc-300 bg-white/[0.04] border border-white/[0.08] rounded-lg hover:border-white/20 hover:text-white transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
