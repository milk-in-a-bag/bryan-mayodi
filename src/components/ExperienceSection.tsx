import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { useScrollReveal } from "../hooks/useScrollReveal";
interface TimelineEntry {
  role: string;
  company: string;
  period: string;
  description: string;
}
function TimelineItem({
  entry,
  index,
}: {
  entry: TimelineEntry;
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.2,
  });
  const isLeft = index % 2 === 0;
  return (
    <div
      ref={ref}
      className={`relative flex items-start gap-6 md:gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      {/* Content card */}
      <motion.div
        initial={{
          opacity: 0,
          x: isLeft ? -40 : 40,
        }}
        animate={
          isVisible
            ? {
                opacity: 1,
                x: 0,
              }
            : {}
        }
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        }}
        className={`flex-1 md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}
      >
        <div className="glass rounded-xl p-5 sm:p-6">
          <span className="inline-block font-body text-xs font-semibold text-neon-purple mb-1.5 tracking-wide">
            {entry.period}
          </span>
          <h3 className="font-heading text-base sm:text-lg font-bold text-slate-50 mb-1">
            {entry.role}
          </h3>
          <p className="font-heading text-sm font-medium text-neon-blue-bright mb-3">
            {entry.company}
          </p>
          <p className="font-body text-sm text-slate-400 leading-relaxed">
            {entry.description}
          </p>
        </div>
      </motion.div>

      {/* Timeline dot — centered on the line (desktop) */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 z-10">
        <motion.div
          initial={{
            scale: 0,
          }}
          animate={
            isVisible
              ? {
                  scale: 1,
                }
              : {}
          }
          transition={{
            duration: 0.4,
            delay: 0.2,
          }}
          className="w-4 h-4 rounded-full border-2 border-neon-purple bg-deep animate-pulse-glow"
        />
      </div>

      {/* Mobile dot */}
      <div className="md:hidden absolute left-0 top-6 z-10">
        <motion.div
          initial={{
            scale: 0,
          }}
          animate={
            isVisible
              ? {
                  scale: 1,
                }
              : {}
          }
          transition={{
            duration: 0.4,
            delay: 0.2,
          }}
          className="w-3 h-3 rounded-full border-2 border-neon-purple bg-deep"
        />
      </div>

      {/* Spacer for the other side (desktop) */}
      <div className="hidden md:block flex-1 md:w-[calc(50%-2rem)]" />
    </div>
  );
}
export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeading label="Career" title="Experience" />

        <div className="relative">
          {/* Timeline line — desktop center */}
          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(to bottom, rgba(168, 85, 247, 0.4), rgba(20, 184, 166, 0.4), transparent)",
            }}
          />

          {/* Timeline line — mobile left */}
          <div
            className="md:hidden absolute left-[5px] top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(to bottom, rgba(168, 85, 247, 0.4), rgba(20, 184, 166, 0.4), transparent)",
            }}
          />

          <div className="space-y-12 md:space-y-16 pl-8 md:pl-0">
            <TimelineItem
              index={0}
              entry={{
                role: "Senior Fullstack Engineer",
                company: "Vercel",
                period: "2023 — Present",
                description:
                  "Leading frontend architecture for the dashboard team. Building performant, accessible interfaces used by millions of developers worldwide.",
              }}
            />
            <TimelineItem
              index={1}
              entry={{
                role: "Fullstack Developer",
                company: "Stripe",
                period: "2021 — 2023",
                description:
                  "Built and maintained payment processing UIs and internal tools. Reduced checkout latency by 40% through strategic code splitting and caching.",
              }}
            />
            <TimelineItem
              index={2}
              entry={{
                role: "Frontend Engineer",
                company: "Linear",
                period: "2020 — 2021",
                description:
                  "Developed core product features including the command palette, keyboard navigation system, and real-time collaboration features.",
              }}
            />
            <TimelineItem
              index={3}
              entry={{
                role: "Junior Developer",
                company: "Freelance",
                period: "2018 — 2020",
                description:
                  "Designed and built web applications for startups and small businesses. Developed a strong foundation in React, Node.js, and modern CSS.",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
