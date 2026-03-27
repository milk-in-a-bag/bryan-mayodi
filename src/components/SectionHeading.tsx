import { motion } from "framer-motion";
import { useScrollReveal } from "../hooks/useScrollReveal";
interface SectionHeadingProps {
  label: string;
  title: string;
  id?: string;
}
export function SectionHeading({ label, title, id }: SectionHeadingProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  return (
    <div ref={ref} id={id} className="mb-16 text-center scroll-mt-24">
      <motion.span
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={
          isVisible
            ? {
                opacity: 1,
                y: 0,
              }
            : {}
        }
        transition={{
          duration: 0.5,
        }}
        className="inline-block font-heading text-xs font-bold uppercase tracking-[0.3em] text-neon-purple mb-3"
      >
        {label}
      </motion.span>
      <motion.h2
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={
          isVisible
            ? {
                opacity: 1,
                y: 0,
              }
            : {}
        }
        transition={{
          duration: 0.5,
          delay: 0.1,
        }}
        className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-slate-50"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{
          scaleX: 0,
        }}
        animate={
          isVisible
            ? {
                scaleX: 1,
              }
            : {}
        }
        transition={{
          duration: 0.6,
          delay: 0.3,
          ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        }}
        className="mt-4 mx-auto h-1 w-20 rounded-full origin-left"
        style={{
          background: "linear-gradient(90deg, #a855f7, #3b82f6, #14b8a6)",
        }}
      />
    </div>
  );
}
