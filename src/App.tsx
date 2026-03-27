import React from "react";
import { ParticleBackground } from "./components/ParticleBackground";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ContactSection } from "./components/ContactSection";
export function App() {
  return (
    <div className="relative min-h-screen w-full bg-deep text-slate-50 font-body">
      <ParticleBackground />
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-4 border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-slate-500">
            © 2026 Alex Chen. Built with React, Tailwind & a lot of ☕
          </p>
          <p className="font-body text-xs text-slate-600">
            Designed & developed with care.
          </p>
        </div>
      </footer>
    </div>
  );
}
