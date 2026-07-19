import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className={`flex items-center gap-3 mb-4 ${align === "center" ? "justify-center" : ""}`}
      >
        <div className="h-px w-8 bg-gradient-to-r from-cyan-400 to-transparent" />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">
          {label}
        </span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className={`mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
