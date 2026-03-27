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
          {/* Project 1: Online Gallery */}
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
                    EV
                  </span>
                </div>
              </div>
              <div className="p-5 pt-3">
                <h3 className="font-heading text-lg font-bold text-slate-50 mb-2">
                  Elara Voss' Online Gallery
                </h3>
                <p className="font-body text-sm text-slate-400 mb-4 leading-relaxed">
                  A sophisticated online art gallery and e-commerce platform
                  showcasing contemporary art. Features a curated collection
                  with detailed artwork pages, shopping cart functionality, and
                  a multi-step checkout process.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-neon-blue/10 text-blue-300 border border-neon-blue/20">
                    React
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-neon-teal/10 text-teal-300 border border-neon-teal/20">
                    TypeScript
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-neon-purple/10 text-purple-300 border border-neon-purple/20">
                    TailwindCSS
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-neon-blue/10 text-blue-300 border border-neon-blue/20">
                    Radix UI
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/milk-in-a-bag/online-gallery"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-200 transition-colors"
                    aria-label="Online gallery on GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href="https://online-gallery-mbls.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-neon-purple transition-colors"
                    aria-label="Online gallery live demo"
                  >
                    <ExternalLinkIcon className="w-4 h-4" />
                    Live
                  </a>
                </div>
              </div>
            </GlowCard>
          </motion.div>

          {/* Project 2: Multi-tenant SaaS Backend */}
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
                    SB
                  </span>
                </div>
              </div>
              <div className="p-5 pt-3">
                <h3 className="font-heading text-lg font-bold text-slate-50 mb-2">
                  Multi-tenant SaaS Backend
                </h3>
                <p className="font-body text-sm text-slate-400 mb-4 leading-relaxed">
                  A production-ready Django starter kit for building
                  multi-tenant SaaS products. Features tenant isolation, JWT and
                  API keyauthentication, role-based access control, rate
                  limiting, audit logging, and a resource scaffolding CLI.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-neon-teal/10 text-teal-300 border border-neon-teal/20">
                    Django
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-neon-blue/10 text-blue-300 border border-neon-blue/20">
                    Django REST
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-neon-purple/10 text-purple-300 border border-neon-purple/20">
                    PostgreSQL
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-neon-teal/10 text-teal-300 border border-neon-teal/20">
                    JWT
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/milk-in-a-bag/multi-tenant-saas-backend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-200 transition-colors"
                    aria-label="Multi-tenant SaaS  on GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href="https://multi-tenant-saas-backend.vercel.app/api/docs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-neon-purple transition-colors"
                    aria-label="Multi-tenant SaaS live demo"
                  >
                    <ExternalLinkIcon className="w-4 h-4" />
                    Live
                  </a>
                </div>
              </div>
            </GlowCard>
          </motion.div>

          {/* Project 3: Sample Dashboard */}
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
                    SD
                  </span>
                </div>
              </div>
              <div className="p-5 pt-3">
                <h3 className="font-heading text-lg font-bold text-slate-50 mb-2">
                  Sample Dashboard
                </h3>
                <p className="font-body text-sm text-slate-400 mb-4 leading-relaxed">
                  About A React frontend built to test and demonstrate the
                  multi-tenant SaaS backend. The backend is hosted separately,
                  this UI exists purely to exercise its API endpoints and verify
                  they work correctly.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-neon-teal/10 text-teal-300 border border-neon-teal/20">
                    React
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-neon-purple/10 text-purple-300 border border-neon-purple/20">
                    TypeScript
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-neon-blue/10 text-blue-300 border border-neon-blue/20">
                    TailwindCSS
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/milk-in-a-bag/sample-dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-200 transition-colors"
                    aria-label="Sample dashboard on GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href="https://sample-dashboard-zeta.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-neon-purple transition-colors"
                    aria-label="Sample dashboard live demo"
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
