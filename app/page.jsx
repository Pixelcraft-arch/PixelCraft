"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function PixelCraftLanding() {
  const year = new Date().getFullYear();

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-black text-white">
      {/* BLUE GRADIENT BACKDROP */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.4),rgba(0,0,30,0.96))]" />

      {/* FLOATING BLUE ORBS */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-blue-500/40 blur-[140px]"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-40 -right-32 h-96 w-96 rounded-full bg-cyan-300/30 blur-[150px]"
      />

      {/* MAIN CONTENT WRAPPER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        
        {/* NAV */}
        <header className="w-full py-6 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            PixelCraft{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Studios
            </span>
          </h1>

          <nav className="hidden md:flex gap-10 text-sm">
            <a href="#services" className="opacity-70 hover:opacity-100">
              Services
            </a>
            <a href="#work" className="opacity-70 hover:opacity-100">
              Work
            </a>
            <a href="#contact" className="opacity-70 hover:opacity-100">
              Contact Us
            </a>
          </nav>

          <a
            href="#contact"
            className="hidden md:block border border-white/20 px-5 py-2 rounded-xl hover:bg-white hover:text-black transition text-sm font-medium"
          >
            Get Started
          </a>
        </header>

        {/* HERO */}
        <section className="pt-16 md:pt-24 pb-24 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight md:leading-[1.05]"
          >
            We Craft{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">
              Digital Worlds
            </span>
            <br className="hidden md:block" />
            That Turn Ideas Into Brands.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="text-base md:text-lg lg:text-xl opacity-80 mt-6 max-w-2xl mx-auto"
          >
            PixelCraft Studios is a software & creative agency building sleek web
            experiences, powerful products, and identities that actually feel
            premium.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
          >
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-white text-black font-medium flex items-center justify-center gap-2 hover:bg-blue-100 transition shadow-xl"
            >
              Start a Project
              <ArrowRight size={18} />
            </a>

            <a
              href="#work"
              className="px-8 py-4 rounded-full border border-white/30 font-medium text-sm sm:text-base hover:bg-white/10 transition"
            >
              View Our Work
            </a>
          </motion.div>
        </section>

        {/* SERVICES */}
        <section id="services" className="pb-24">
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-3xl md:text-4xl font-semibold">What We Do</h3>
            <span className="hidden md:inline text-xs uppercase tracking-[0.25em] text-white/50">
              Services
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                title: "Custom Web Apps",
                desc: "Full-stack products built with modern frameworks like Next.js. Fast, responsive, and engineered for scale.",
              },
              {
                title: "UI/UX & Brand Systems",
                desc: "Visual identities and interfaces that feel sharp, minimal, and unforgettable in a scroll-heavy world.",
              },
              {
                title: "Automation & Integrations",
                desc: "Workflows, APIs, and AI-powered automation that cut manual tasks and give you real leverage.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-7 md:p-8 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-xl hover:bg-white/10 hover:border-blue-300/70 transition shadow-[0_0_40px_rgba(37,99,235,0.25)]"
              >
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="opacity-75 text-sm md:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="pb-24">
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-3xl md:text-4xl font-semibold">Recent Work</h3>
            <span className="hidden md:inline text-xs uppercase tracking-[0.25em] text-white/50">
              Portfolio
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Flamingo Card */}
            <a
              href="https://flamingo-six.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[4/5] rounded-3xl bg-white/5 border border-white/15 overflow-hidden flex flex-col justify-end p-6 md:p-7 hover:border-blue-300 hover:bg-white/10 transition"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-blue-600/40 via-transparent to-transparent transition" />

              {/* 🔹 ADDED IMAGE — the only change */}
              <img
                src="/your-flamingo-image.png"
                alt="Flamingo Preview"
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition"
              />

              <div className="relative z-10">
                <p className="text-xs uppercase tracking-[0.25em] text-white/60 mb-2">
                  SaaS Product
                </p>
                <h4 className="text-xl font-semibold mb-2">Flamingo</h4>
                <p className="opacity-75 text-sm">
                  Lead-finding SaaS helping freelancers & agencies discover clients
                  with filters, scoring, and a clean UI.
                </p>
                <p className="mt-4 text-xs text-blue-300/80">
                  View live build →
                </p>
              </div>
            </a>

            {/* Placeholder Project Slots */}
            <div className="aspect-[4/5] rounded-3xl bg-white/3 border border-dashed border-white/20 flex flex-col items-center justify-center text-center px-6">
              <p className="text-sm uppercase tracking-[0.3em] text-white/40 mb-2">
                Coming Soon
              </p>
              <p className="text-sm opacity-75">
                Reserved for next launch. Will be Replace with a product.
              </p>
            </div>

            <div className="aspect-[4/5] rounded-3xl bg-white/3 border border-dashed border-white/20 flex flex-col items-center justify-center text-center px-6">
              <p className="text-sm uppercase tracking-[0.3em] text-white/40 mb-2">
                Coming Soon
              </p>
              <p className="text-sm opacity-75">
                Another future case study. Landing pages, dashboards, or full platforms.
              </p>
            </div>
          </div>

          <p className="opacity-50 text-xs mt-4">
            (Swap placeholders with real projects as you ship more work.)
          </p>
        </section>

        {/* CONTACT */}
        <section id="contact" className="pb-28 text-center max-w-2xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-semibold mb-4">
            Contact Us
          </h3>
          <p className="opacity-80 mb-8 text-sm md:text-base">
            Tell us about your project, your timeline, and your vision. We&apos;ll
            respond within 24 hours with next steps.
          </p>

          <a
            href="mailto:pixelcraftdesigns.webs@gmail.com"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-300 text-black font-semibold hover:brightness-110 transition shadow-[0_0_45px_rgba(56,189,248,0.55)]"
          >
            Contact Us
            <ArrowRight size={18} className="ml-2" />
          </a>

          <p className="mt-4 text-xs text-white/50">
            Or email us directly at{" "}
            <span className="text-cyan-300">
              pixelcraftdesigns.webs@gmail.com
            </span>
          </p>
        </section>

        {/* FOOTER */}
        <footer className="pb-10 pt-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50 border-t border-white/10">
          <p>© {year} PixelCraft Studios. All rights reserved.</p>
          <p className="opacity-60">
            Built with intention, motion, and clean code.
          </p>
        </footer>
      </div>
    </div>
  );
}
