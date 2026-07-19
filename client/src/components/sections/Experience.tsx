import { motion } from "framer-motion";
import { Rocket, Building2, GraduationCap } from "lucide-react";
import SectionHeading from "../SectionHeading";

const timeline = [
  {
    period: "Present",
    title: "Backend Software Engineer",
    org: "Independent / Open Source",
    description:
      "Building FinTech platforms with Django and Node.js. Focused on scalable API design, database optimization, and secure payment integrations including MPESA.",
    icon: Rocket,
    color: "#22d3ee",
    tags: ["Django", "DRF", "PostgreSQL", "MPESA API"],
  },
  {
    period: "Growth",
    title: "FinTech Project Development",
    org: "MAMA PESA & Loan Systems",
    description:
      "Designed and developed AI-powered financial inclusion platforms — implementing loan management, credit scoring, savings, and embedded finance features.",
    icon: Building2,
    color: "#10b981",
    tags: ["Loan Management", "Credit Scoring", "Savings", "AI Assistant"],
  },
  {
    period: "Foundation",
    title: "Mathematics & Computer Science",
    org: "Kenyatta University",
    description:
      "Built a strong foundation in mathematical reasoning, algorithms, and computational theory. Applied structured problem-solving to software engineering.",
    icon: GraduationCap,
    color: "#8b5cf6",
    tags: ["Algorithms", "Data Structures", "Mathematics"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container relative z-10">
        <SectionHeading
          label="Experience"
          title="The journey so far"
          description="A progression from mathematical foundations to building production FinTech systems — each step adding depth and capability."
        />

        <div className="relative mt-14">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/40 via-violet-500/20 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className={`relative flex items-start gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Node */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center border-2"
                    style={{
                      background: "#030712",
                      borderColor: item.color,
                    }}
                  >
                    <div
                      className="w-2 h-2 rounded-full animate-pulse"
                      style={{ background: item.color }}
                    />
                  </div>
                </div>

                {/* Content card */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                  <div className="glass glass-hover rounded-2xl p-6">
                    <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: `${item.color}15`,
                          border: `1px solid ${item.color}30`,
                        }}
                      >
                        <item.icon size={18} style={{ color: item.color }} />
                      </div>
                      <span
                        className="font-mono text-xs uppercase tracking-[0.15em]"
                        style={{ color: item.color }}
                      >
                        {item.period}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white font-display">{item.title}</h3>
                    <p className="text-sm text-zinc-500 mt-0.5">{item.org}</p>
                    <p className="text-sm text-zinc-400 mt-3 leading-relaxed">{item.description}</p>
                    <div className={`flex flex-wrap gap-2 mt-4 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs font-mono text-zinc-400 bg-white/[0.04] border border-white/[0.08] rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for other side */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
