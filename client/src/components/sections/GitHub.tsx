import { motion } from "framer-motion";
import { Github, GitCommit, GitFork, Star, ExternalLink, Loader2, AlertCircle } from "lucide-react";
import SectionHeading from "../SectionHeading";
import AnimatedCounter from "../AnimatedCounter";
import { useGitHub } from "../../hooks/useGitHub";

const GITHUB_USERNAME = "wisdom-geek";

// Simulated contribution graph (will be replaced with real data from GitHub API)
const contributionData = Array.from({ length: 52 * 7 }, (_, i) => {
  const level = Math.floor(Math.random() * 5);
  return level;
});

const contributionColors = [
  "bg-white/[0.04]",
  "bg-cyan-400/20",
  "bg-cyan-400/40",
  "bg-cyan-400/60",
  "bg-cyan-400/80",
];

export default function GitHubSection() {
  const { user, repos, loading, error } = useGitHub(GITHUB_USERNAME);

  return (
    <section id="github" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="container relative z-10">
        <SectionHeading
          label="GitHub"
          title="Open source activity"
          description="A snapshot of my coding activity — contributions, repositories, and projects on GitHub."
        />

        {error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="mt-12 glass rounded-2xl p-6 border border-amber-400/20 bg-amber-400/5"
          >
            <div className="flex items-start gap-3">
              <AlertCircle size={20} className="text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-amber-300 mb-1">GitHub data unavailable</h3>
                <p className="text-sm text-amber-200/70">
                  Unable to fetch live GitHub data at the moment. This is often due to API rate limits or network restrictions. 
                  <a 
                    href={`https://github.com/${GITHUB_USERNAME}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 underline hover:text-amber-100 transition-colors"
                  >
                    Visit my GitHub profile →
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {!error && (
          <>
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {[
                { icon: GitCommit, label: "Public Repos", value: user?.public_repos || 0 },
                { icon: Star, label: "Followers", value: user?.followers || 0 },
                { icon: GitFork, label: "Following", value: user?.following || 0 },
                {
                  icon: Github,
                  label: "Member Since",
                  value: user ? new Date(user.created_at).getFullYear() : 0,
                },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass glass-hover rounded-xl p-5 text-center"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 bg-cyan-400/10 border border-cyan-400/30">
                    <stat.icon size={18} className="text-cyan-400" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white font-display">
                    {loading ? (
                      <Loader2 size={20} className="animate-spin mx-auto" />
                    ) : user ? (
                      <AnimatedCounter value={stat.value} />
                    ) : (
                      "—"
                    )}
                  </div>
                  <div className="text-xs text-zinc-500 mt-1 font-mono uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contribution graph */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="glass glass-hover rounded-2xl p-6 md:p-8 mt-6"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Github size={20} className="text-white" />
                  <h3 className="text-sm font-semibold text-white font-display">
                    Contribution Activity
                  </h3>
                </div>
                <span className="text-xs font-mono text-zinc-500">Past 12 months</span>
              </div>

              {/* Grid */}
              <div className="overflow-x-auto">
                <div
                  className="grid grid-flow-col gap-[3px] min-w-[700px]"
                  style={{ gridTemplateRows: "repeat(7, 1fr)" }}
                >
                  {contributionData.map((level, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: (i % 50) * 0.005 }}
                      className={`w-[11px] h-[11px] rounded-sm ${contributionColors[level]}`}
                    />
                  ))}
                </div>
              </div>

              {/* Legend */}
              <div className="flex items-center justify-end gap-2 mt-4">
                <span className="text-xs font-mono text-zinc-500">Less</span>
                {contributionColors.map((color, i) => (
                  <div key={i} className={`w-[11px] h-[11px] rounded-sm ${color}`} />
                ))}
                <span className="text-xs font-mono text-zinc-500">More</span>
              </div>
            </motion.div>

            {/* Pinned repos */}
            {repos.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6"
              >
                <h3 className="text-lg font-semibold text-white font-display mb-4">
                  Featured Repositories
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {repos.slice(0, 4).map((repo, i) => (
                    <motion.a
                      key={repo.id}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="glass glass-hover rounded-2xl p-5 group"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h4 className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors font-display">
                            {repo.name}
                          </h4>
                          <p className="text-xs text-zinc-500 mt-0.5">
                            {repo.language || "No language"}
                          </p>
                        </div>
                        <ExternalLink
                          size={16}
                          className="text-zinc-500 group-hover:text-cyan-400 transition-colors flex-shrink-0 ml-2"
                        />
                      </div>

                      {repo.description && (
                        <p className="text-xs text-zinc-400 mb-4 line-clamp-2">
                          {repo.description}
                        </p>
                      )}

                      <div className="flex items-center gap-4 text-xs text-zinc-500">
                        {repo.stargazers_count > 0 && (
                          <div className="flex items-center gap-1">
                            <Star size={12} />
                            <span>{repo.stargazers_count}</span>
                          </div>
                        )}
                        {repo.forks_count > 0 && (
                          <div className="flex items-center gap-1">
                            <GitFork size={12} />
                            <span>{repo.forks_count}</span>
                          </div>
                        )}
                      </div>

                      {repo.topics.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {repo.topics.slice(0, 3).map((topic) => (
                            <span
                              key={topic}
                              className="px-2 py-0.5 text-[10px] font-mono text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}

            {loading && !user && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass rounded-2xl p-6 md:p-8 mt-6 text-center"
              >
                <div className="flex items-center justify-center gap-2">
                  <Loader2 size={18} className="animate-spin text-cyan-400" />
                  <p className="text-sm text-zinc-500">Loading GitHub data...</p>
                </div>
              </motion.div>
            )}
          </>
        )}

        {/* Direct link to GitHub profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass glass-hover rounded-xl text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <Github size={18} />
            View full profile on GitHub
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
