import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { useScrollReveal } from "../hooks/useScrollReveal";
interface SkillPill {
  name: string;
  color: "purple" | "blue" | "teal";
}
const SKILL_GROUPS: {
  category: string;
  skills: SkillPill[];
}[] = [
  {
    category: "Frontend",
    skills: [
      {
        name: "React",
        color: "blue",
      },
      {
        name: "TypeScript",
        color: "blue",
      },
      {
        name: "Next.js",
        color: "blue",
      },
      {
        name: "Tailwind CSS",
        color: "blue",
      },
      {
        name: "Framer Motion",
        color: "blue",
      },
    ],
  },
  {
    category: "Backend",
    skills: [
      {
        name: "Node.js",
        color: "teal",
      },
      {
        name: "Python",
        color: "teal",
      },
      {
        name: "PostgreSQL",
        color: "teal",
      },
      {
        name: "GraphQL",
        color: "teal",
      },
      {
        name: "Redis",
        color: "teal",
      },
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      {
        name: "Docker",
        color: "purple",
      },
      {
        name: "AWS",
        color: "purple",
      },
      {
        name: "Git",
        color: "purple",
      },
      {
        name: "CI/CD",
        color: "purple",
      },
      {
        name: "Figma",
        color: "purple",
      },
    ],
  },
];
const colorMap = {
  purple: {
    bg: "rgba(168, 85, 247, 0.1)",
    border: "rgba(168, 85, 247, 0.2)",
    hoverBorder: "rgba(168, 85, 247, 0.5)",
    text: "#c084fc",
    glow: "rgba(168, 85, 247, 0.15)",
  },
  blue: {
    bg: "rgba(59, 130, 246, 0.1)",
    border: "rgba(59, 130, 246, 0.2)",
    hoverBorder: "rgba(59, 130, 246, 0.5)",
    text: "#93c5fd",
    glow: "rgba(59, 130, 246, 0.15)",
  },
  teal: {
    bg: "rgba(20, 184, 166, 0.1)",
    border: "rgba(20, 184, 166, 0.2)",
    hoverBorder: "rgba(20, 184, 166, 0.5)",
    text: "#5eead4",
    glow: "rgba(20, 184, 166, 0.15)",
  },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};
export function AboutSection() {
  const { ref: bioRef, isVisible: bioVisible } =
    useScrollReveal<HTMLDivElement>();
  const { ref: skillsRef, isVisible: skillsVisible } =
    useScrollReveal<HTMLDivElement>();
  return (
    <section id="about" className="relative py-24 sm:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="About Me" title="Who I Am" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Bio */}
          <motion.div
            ref={bioRef}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={
              bioVisible
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="space-y-5"
          >
            <p className="font-body text-base sm:text-lg text-slate-400 leading-relaxed">
              I'm a fullstack developer with a deep love for crafting digital
              experiences that feel intuitive and alive. With over 5 years of
              experience shipping products across startups and agencies, I've
              developed a keen eye for the details that make software feel{" "}
              <em className="text-slate-100 not-italic font-medium">
                truly great
              </em>
              .
            </p>
            <p className="font-body text-base sm:text-lg text-slate-400 leading-relaxed">
              My sweet spot is the intersection of design and engineering, where
              pixel-perfect interfaces meet robust, scalable architectures. I
              believe the best products are built when you care equally about
              how something looks and how it works under the hood.
            </p>
            <p className="font-body text-base sm:text-lg text-slate-400 leading-relaxed">
              When I'm not coding, you'll find me exploring generative art,
              contributing to open-source projects, or experimenting with new
              interaction patterns that push the boundaries of what's possible
              on the web.
            </p>
          </motion.div>

          {/* Skills */}
          <div ref={skillsRef} className="space-y-8">
            {SKILL_GROUPS.map((group, groupIndex) => (
              <motion.div
                key={group.category}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={
                  skillsVisible
                    ? {
                        opacity: 1,
                        y: 0,
                      }
                    : {}
                }
                transition={{
                  duration: 0.5,
                  delay: groupIndex * 0.15,
                }}
              >
                <h3 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-3">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, skillIndex) => {
                    const colors = colorMap[skill.color];
                    return (
                      <motion.span
                        key={skill.name}
                        custom={groupIndex * 5 + skillIndex}
                        variants={fadeUp}
                        initial="hidden"
                        animate={skillsVisible ? "visible" : "hidden"}
                        whileHover={{
                          scale: 1.05,
                          boxShadow: `0 0 16px ${colors.glow}`,
                        }}
                        className="inline-flex items-center px-3.5 py-1.5 rounded-lg text-sm font-medium cursor-default transition-colors duration-300"
                        style={{
                          backgroundColor: colors.bg,
                          border: `1px solid ${colors.border}`,
                          color: colors.text,
                        }}
                      >
                        {skill.name}
                      </motion.span>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
