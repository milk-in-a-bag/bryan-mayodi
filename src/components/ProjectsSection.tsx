import { motion } from "framer-motion";
import { ExternalLinkIcon } from "lucide-react";
import { FaGithub as GithubIcon } from "react-icons/fa";
import { SectionHeading } from "./SectionHeading";
import { GlowCard } from "./GlowCard";
import { useScrollReveal } from "../hooks/useScrollReveal";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};
export function ProjectsSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  return (
    <section id="projects" className="relative py-24 sm:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="Portfolio" title="Featured Projects" />

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Project 1: CloudSync Dashboard */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <GlowCard className="h-full">
              <div className="p-1">
                <div
                  className="w-full h-44 rounded-xl flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(59, 130, 246, 0.3))",
                  }}
                >
                  <span className="font-heading text-2xl font-bold text-white/60">
                    CS
                  </span>
                </div>
              </div>
              <div className="p-5 pt-3">
                <h3 className="font-heading text-lg font-bold text-slate-50 mb-2">
                  CloudSync Dashboard
                </h3>
                <p className="font-body text-sm text-slate-400 mb-4 leading-relaxed">
                  Real-time cloud infrastructure monitoring dashboard with live
                  metrics, alerting, and team collaboration features.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-neon-blue/10 text-blue-300 border border-neon-blue/20">
                    React
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-neon-teal/10 text-teal-300 border border-neon-teal/20">
                    Node.js
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-neon-purple/10 text-purple-300 border border-neon-purple/20">
                    WebSocket
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-neon-blue/10 text-blue-300 border border-neon-blue/20">
                    D3.js
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-200 transition-colors"
                    aria-label="View CloudSync Dashboard on GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-neon-purple transition-colors"
                    aria-label="View CloudSync Dashboard live demo"
                  >
                    <ExternalLinkIcon className="w-4 h-4" />
                    Live
                  </a>
                </div>
              </div>
            </GlowCard>
          </motion.div>

          {/* Project 2: Neural Canvas */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <GlowCard className="h-full">
              <div className="p-1">
                <div
                  className="w-full h-44 rounded-xl flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(20, 184, 166, 0.3), rgba(168, 85, 247, 0.3))",
                  }}
                >
                  <span className="font-heading text-2xl font-bold text-white/60">
                    NC
                  </span>
                </div>
              </div>
              <div className="p-5 pt-3">
                <h3 className="font-heading text-lg font-bold text-slate-50 mb-2">
                  Neural Canvas
                </h3>
                <p className="font-body text-sm text-slate-400 mb-4 leading-relaxed">
                  AI-powered generative art platform where users create unique
                  artworks through natural language prompts and style mixing.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-neon-teal/10 text-teal-300 border border-neon-teal/20">
                    Python
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-neon-blue/10 text-blue-300 border border-neon-blue/20">
                    Next.js
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-neon-purple/10 text-purple-300 border border-neon-purple/20">
                    TensorFlow
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-neon-teal/10 text-teal-300 border border-neon-teal/20">
                    PostgreSQL
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-200 transition-colors"
                    aria-label="View Neural Canvas on GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-neon-purple transition-colors"
                    aria-label="View Neural Canvas live demo"
                  >
                    <ExternalLinkIcon className="w-4 h-4" />
                    Live
                  </a>
                </div>
              </div>
            </GlowCard>
          </motion.div>

          {/* Project 3: DevFlow CLI */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <GlowCard className="h-full">
              <div className="p-1">
                <div
                  className="w-full h-44 rounded-xl flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(20, 184, 166, 0.3))",
                  }}
                >
                  <span className="font-heading text-2xl font-bold text-white/60">
                    DF
                  </span>
                </div>
              </div>
              <div className="p-5 pt-3">
                <h3 className="font-heading text-lg font-bold text-slate-50 mb-2">
                  DevFlow CLI
                </h3>
                <p className="font-body text-sm text-slate-400 mb-4 leading-relaxed">
                  Developer productivity CLI tool that automates project
                  scaffolding, deployment pipelines, and environment management.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-neon-teal/10 text-teal-300 border border-neon-teal/20">
                    Go
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-neon-purple/10 text-purple-300 border border-neon-purple/20">
                    Docker
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-neon-blue/10 text-blue-300 border border-neon-blue/20">
                    AWS SDK
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-neon-purple/10 text-purple-300 border border-neon-purple/20">
                    GitHub API
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-200 transition-colors"
                    aria-label="View DevFlow CLI on GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-neon-purple transition-colors"
                    aria-label="View DevFlow CLI live demo"
                  >
                    <ExternalLinkIcon className="w-4 h-4" />
                    Live
                  </a>
                </div>
              </div>
            </GlowCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
