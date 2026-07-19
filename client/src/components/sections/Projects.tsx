import { motion } from "framer-motion";
import { ArrowUpRight, Landmark, CreditCard, PiggyBank } from "lucide-react";
import SectionHeading from "../SectionHeading";

const projects = [
  {
    icon: Landmark,
    title: "MAMA PESA",
    tagline: "AI-powered financial inclusion platform for women entrepreneurs",
    description:
      "A comprehensive FinTech platform integrating lending, savings, financial literacy, and AI-driven assistance with MPESA integration for the Kenyan market.",
    features: [
      "Loan Management",
      "Savings",
      "Financial Literacy",
      "Trust Score",
      "Supplier Marketplace",
      "Embedded Finance",
      "MPESA Integration",
      "AI Assistant",
    ],
    tech: ["Django", "DRF", "PostgreSQL", "React"],
    color: "#22d3ee",
    featured: true,
  },
  {
    icon: CreditCard,
    title: "Loan Management API",
    tagline: "Backend credit scoring and loan lifecycle engine",
    description:
      "A RESTful API handling the complete loan lifecycle — from credit scoring and approval to repayment tracking and transaction history.",
    features: [
      "Credit Scoring",
      "Loan Approval",
      "Repayment Logic",
      "Transaction History",
      "Authentication",
    ],
    tech: ["Django", "DRF", "PostgreSQL"],
    color: "#8b5cf6",
    featured: false,
  },
  {
    icon: PiggyBank,
    title: "Savings Platform",
    tagline: "Goal-oriented savings with analytics",
    description:
      "A savings platform enabling users to set financial goals, make deposits and withdrawals, and visualize their progress through detailed analytics.",
    features: [
      "Goal Savings",
      "Deposits",
      "Withdrawals",
      "Savings Analytics",
    ],
    tech: ["Django", "DRF", "PostgreSQL"],
    color: "#10b981",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="container relative z-10">
        <SectionHeading
          label="Projects"
          title="Things I've built"
          description="FinTech solutions engineered to solve real financial challenges — from AI-powered lending platforms to savings and loan management systems."
        />

        <div className="grid lg:grid-cols-3 gap-5 mt-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`glass glass-hover rounded-2xl p-6 md:p-7 group relative overflow-hidden flex flex-col ${
                project.featured ? "lg:col-span-3 lg:flex-row lg:gap-8" : ""
              }`}
            >
              {/* Glow */}
              <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl"
                style={{ background: `${project.color}15` }}
              />

              <div className={`relative z-10 ${project.featured ? "lg:flex-1" : ""}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `${project.color}15`,
                      border: `1px solid ${project.color}30`,
                    }}
                  >
                    <project.icon size={22} style={{ color: project.color }} />
                  </div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-white font-display">{project.title}</h3>
                    {project.featured && (
                      <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-sm font-medium text-zinc-300 mb-3">{project.tagline}</p>
                <p className="text-sm text-zinc-400 leading-relaxed mb-5">{project.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2.5 py-1 text-xs font-mono text-zinc-400 bg-white/[0.03] border border-white/[0.06] rounded-md"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono rounded-md"
                      style={{
                        color: project.color,
                        background: `${project.color}10`,
                        border: `1px solid ${project.color}20`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.featured && (
                <div className="relative z-10 lg:w-64 lg:flex-shrink-0 mt-6 lg:mt-0">
                  <div className="glass rounded-xl p-5 h-full flex flex-col justify-between">
                    <div>
                      <span className="font-mono text-xs uppercase tracking-wider text-zinc-500">
                        Impact
                      </span>
                      <div className="mt-3 space-y-3">
                        <div>
                          <div className="text-2xl font-bold text-white font-display">8</div>
                          <div className="text-xs text-zinc-500">Core Features</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-white font-display">4</div>
                          <div className="text-xs text-zinc-500">Technologies</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold gradient-text-cyan font-display">
                            MPESA
                          </div>
                          <div className="text-xs text-zinc-500">Payment Integration</div>
                        </div>
                      </div>
                    </div>
                    <button className="mt-4 flex items-center gap-1.5 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors group/btn">
                      View Details
                      <ArrowUpRight
                        size={14}
                        className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                      />
                    </button>
                  </div>
                </div>
              )}

              {!project.featured && (
                <button className="relative z-10 mt-auto flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-white transition-colors group/btn pt-4">
                  View Details
                  <ArrowUpRight
                    size={14}
                    className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                  />
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
