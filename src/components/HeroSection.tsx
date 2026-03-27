import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDownIcon, ArrowRightIcon } from "lucide-react";
const ROLES = ["Fullstack Developer", "UI/UX Enthusiast", "Creative Coder"];
function useTypingAnimation(
  words: string[],
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseDuration = 2000,
) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      setDisplayText(words[0]);
      return;
    }
    const currentWord = words[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentWord.length) {
            setDisplayText(currentWord.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(currentWord.slice(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    );
    return () => clearTimeout(timeout);
  }, [
    displayText,
    wordIndex,
    isDeleting,
    words,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);
  return displayText;
}
const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};
export function HeroSection() {
  const typedText = useTypingAnimation(ROLES);
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el)
      el.scrollIntoView({
        behavior: "smooth",
      });
  };
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-3xl mx-auto"
      >
        <motion.p
          variants={fadeUp}
          className="font-body text-sm sm:text-base text-slate-400 mb-4 tracking-wide"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4 leading-[1.05]"
        >
          <span className="gradient-text">Bryan Mayodi</span>
        </motion.h1>

        <motion.div
          variants={fadeUp}
          className="h-10 sm:h-12 flex items-center justify-center mb-6"
        >
          <span className="font-heading text-xl sm:text-2xl md:text-3xl font-semibold text-slate-200">
            {typedText}
          </span>
          <span
            className="inline-block w-[2px] h-6 sm:h-8 bg-neon-purple ml-1 animate-pulse"
            aria-hidden="true"
          />
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="font-body text-base sm:text-lg text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          I craft elegant digital experiences at the intersection of design and
          engineering. Passionate about building products that are beautiful,
          fast, and accessible.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => handleScrollTo("projects")}
            className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-heading text-sm font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-neon-purple/25"
            style={{
              background: "linear-gradient(135deg, #a855f7, #3b82f6)",
            }}
          >
            <span className="relative z-10">View My Work</span>
            <ArrowRightIcon className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple-dim to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button
            onClick={() => handleScrollTo("contact")}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-heading text-sm font-semibold text-slate-300 glass hover:text-white hover:border-neon-purple/30 transition-all duration-300"
          >
            Get In Touch
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
          duration: 0.8,
        }}
        onClick={() => handleScrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-slate-500 hover:text-slate-300 transition-colors"
        aria-label="Scroll to about section"
      >
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDownIcon className="w-6 h-6" />
        </motion.div>
      </motion.button>

      {/* Ambient glow behind hero */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.4), rgba(59, 130, 246, 0.2), transparent 70%)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
