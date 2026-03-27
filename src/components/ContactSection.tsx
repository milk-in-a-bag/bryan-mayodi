import React, { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { SendIcon, MailIcon, MapPinIcon } from "lucide-react";
import {
  FaGithub as GithubIcon,
  FaLinkedin as LinkedinIcon,
} from "react-icons/fa";
import { FaXTwitter as TwitterIcon } from "react-icons/fa6";
import { SectionHeading } from "./SectionHeading";
import { useScrollReveal } from "../hooks/useScrollReveal";
interface FormState {
  name: string;
  email: string;
  message: string;
}
interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}
function SocialButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{
        scale: 1.1,
        y: -2,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="inline-flex items-center justify-center w-11 h-11 rounded-xl glass text-slate-400 hover:text-neon-purple hover:border-neon-purple/30 transition-colors duration-300"
    >
      {children}
    </motion.a>
  );
}
export function ContactSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const validate = useCallback((): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!form.message.trim()) newErrors.message = "Message is required";
    else if (form.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [form]);
  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!validate()) return;
      setIsSubmitting(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      setSubmitStatus("success");
      setForm({
        name: "",
        email: "",
        message: "",
      });
      setTimeout(() => setSubmitStatus("idle"), 4000);
    },
    [validate],
  );
  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };
  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4">
      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full opacity-10 blur-[100px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(20, 184, 166, 0.5), rgba(168, 85, 247, 0.3), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeading label="Say Hello" title="Get In Touch" />

        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{
              opacity: 0,
              y: 30,
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
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="space-y-5"
            noValidate
          >
            <div>
              <label
                htmlFor="contact-name"
                className="block font-body text-sm font-medium text-slate-300 mb-1.5"
              >
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Your name"
                className={`w-full px-4 py-3 rounded-xl font-body text-sm text-slate-100 placeholder-slate-600 bg-white/[0.04] border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neon-purple/40 focus:border-neon-purple/50 ${errors.name ? "border-red-500/50" : "border-white/[0.08]"}`}
                style={{
                  backdropFilter: "blur(10px)",
                }}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p
                  id="name-error"
                  className="mt-1.5 text-xs text-red-400"
                  role="alert"
                >
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="block font-body text-sm font-medium text-slate-300 mb-1.5"
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="you@example.com"
                className={`w-full px-4 py-3 rounded-xl font-body text-sm text-slate-100 placeholder-slate-600 bg-white/[0.04] border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neon-purple/40 focus:border-neon-purple/50 ${errors.email ? "border-red-500/50" : "border-white/[0.08]"}`}
                style={{
                  backdropFilter: "blur(10px)",
                }}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p
                  id="email-error"
                  className="mt-1.5 text-xs text-red-400"
                  role="alert"
                >
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block font-body text-sm font-medium text-slate-300 mb-1.5"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder="Tell me about your project..."
                rows={5}
                className={`w-full px-4 py-3 rounded-xl font-body text-sm text-slate-100 placeholder-slate-600 bg-white/[0.04] border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neon-purple/40 focus:border-neon-purple/50 resize-none ${errors.message ? "border-red-500/50" : "border-white/[0.08]"}`}
                style={{
                  backdropFilter: "blur(10px)",
                }}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p
                  id="message-error"
                  className="mt-1.5 text-xs text-red-400"
                  role="alert"
                >
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-heading text-sm font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-neon-purple/25 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                background: "linear-gradient(135deg, #a855f7, #3b82f6)",
              }}
            >
              <span className="relative z-10">
                {isSubmitting ? "Sending..." : "Send Message"}
              </span>
              {!isSubmitting && (
                <SendIcon className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple-dim to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            {submitStatus === "success" && (
              <motion.p
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="text-sm text-emerald-400 font-medium"
                role="status"
              >
                ✓ Message sent successfully! I'll get back to you soon.
              </motion.p>
            )}
          </motion.form>

          {/* Contact info */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
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
              duration: 0.6,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-heading text-lg font-bold text-slate-50 mb-4">
                Let's build something great together.
              </h3>
              <p className="font-body text-sm text-slate-400 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Whether it's a quick
                question or a full project brief, feel free to reach out.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg glass">
                  <MailIcon className="w-4 h-4 text-neon-purple" />
                </div>
                <div>
                  <p className="font-body text-xs text-slate-500 uppercase tracking-wider">
                    Email
                  </p>
                  <a
                    href="bryanmayodi@gmail.com"
                    className="font-body text-sm text-slate-300 hover:text-neon-purple transition-colors"
                  >
                    bryanmayodi@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg glass">
                  <MapPinIcon className="w-4 h-4 text-neon-blue" />
                </div>
                <div>
                  <p className="font-body text-xs text-slate-500 uppercase tracking-wider">
                    Location
                  </p>
                  <p className="font-body text-sm text-slate-300">
                    Nairobi, Kenya
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="font-body text-xs text-slate-500 uppercase tracking-wider mb-3">
                Connect
              </p>
              <div className="flex items-center gap-3">
                <SocialButton href="https://github.com" label="GitHub profile">
                  <GithubIcon className="w-5 h-5" />
                </SocialButton>
                <SocialButton
                  href="https://linkedin.com"
                  label="LinkedIn profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </SocialButton>
                <SocialButton
                  href="https://twitter.com"
                  label="Twitter profile"
                >
                  <TwitterIcon className="w-5 h-5" />
                </SocialButton>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
