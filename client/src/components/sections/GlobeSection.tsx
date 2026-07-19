import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import GlobeDemo from "./GridGlobe";

export default function GlobeSection() {
  return (
    <section id="globe" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container relative z-10">
        <SectionHeading
          label="Global Reach"
          title="Connecting across continents"
          description="Building solutions that impact communities worldwide — from Africa to Asia, Europe to the Americas."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mt-16 relative"
        >
          {/* Globe Container */}
          <div className="relative w-full h-[500px] md:h-[750px] rounded-2xl overflow-hidden glass">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />
            
            {/* Globe */}
            <GlobeDemo />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 grid md:grid-cols-3 gap-8"
          >
            <div className="glass rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center mb-3">
                <span className="text-cyan-400 font-semibold">🌍</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Global Impact</h3>
              <p className="text-sm text-zinc-400">
                Building FinTech solutions that serve communities across multiple continents with localized expertise.
              </p>
            </div>

            <div className="glass rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center mb-3">
                <span className="text-cyan-400 font-semibold">🔗</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Connected Systems</h3>
              <p className="text-sm text-zinc-400">
                Designing scalable backend architectures that connect diverse markets and enable seamless transactions.
              </p>
            </div>

            <div className="glass rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center mb-3">
                <span className="text-cyan-400 font-semibold">💡</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Innovation Hub</h3>
              <p className="text-sm text-zinc-400">
                Collaborating with teams worldwide to bring cutting-edge financial technology to emerging markets.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
