/**
 * DESIGN: Academic Paper Texture
 * - Warm parchment background (#FAF8F5) + deep olive sidebar (#2D3B2D)
 * - Cormorant Garamond for titles, Lora for body text
 * - Fixed left sidebar navigation, scrollable right content
 * - Academic red (#C0392B) for emphasis, gold (#B8860B) for awards
 */

import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Mail, Phone, BookOpen, Award, GraduationCap, Microscope, Star, ChevronRight } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663652084443/R3DE3A2KehZRS6obApzfbK/hero-bg-6KeKLw3j4kAZ8V6tNzTQiA.webp";
const RESEARCH_VIS = "https://d2xsxph8kpxj0f.cloudfront.net/310519663652084443/R3DE3A2KehZRS6obApzfbK/research-visual-4VCZbF3cuQFrYp7qj3Zpca.webp";

const navItems = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "research", label: "Research" },
  { id: "publications", label: "Publications" },
  { id: "highlights", label: "Highlights" },
  { id: "service", label: "Service" },
  { id: "awards", label: "Awards" },
];

const publications = {
  main: [
    {
      id: 1,
      title: "LaTexBlend: Scaling Multi-concept Customized Generation with Latent Textual Blending",
      authors: "Jian Jin, Zhenbo Yu, Yang Shen, Zhenyong Fu†, and Jian Yang†",
      venue: "CVPR 2025",
      tag: "CVPR",
      highlight: "Highlight (Top 3%)",
      links: [],
    },
    {
      id: 2,
      title: "Customized Generation Reimagined: Fidelity and Editability Harmonized",
      authors: "Jian Jin, Yang Shen, Zhenyong Fu†, and Jian Yang†",
      venue: "ECCV 2024",
      tag: "ECCV",
      links: [],
    },
    {
      id: 3,
      title: "UniCanvas: Unified Real Image Editing via Customized Text-to-image Generation",
      authors: "Jian Jin, Yang Shen, Zhenyong Fu†, and Jian Yang†",
      venue: "IJCV 2025",
      tag: "IJCV",
      projectUrl: "https://github.com/jinjianrick/unicanvas",
      links: [{ label: "Project Page", url: "https://github.com/jinjianrick/unicanvas" }],
    },
    {
      id: 4,
      title: "Latent Textual Space: Pivot for scaling Customized Text-to-image and Video Generation",
      authors: "Jian Jin, Zhenbo Yu, Yang Shen, Zhenyong Fu†, and Jian Yang†",
      venue: "Submitted to TPAMI",
      tag: "Under Review",
      status: "Major Revision",
      links: [],
    },
    {
      id: 5,
      title: "Less is More: Shrinking Injection to Reconcile Fidelity and Editability in Customized Generation",
      authors: "Jian Jin, Shangbing Gao, Zhenyong Fu†, and Jian Yang†",
      venue: "Submitted to TMM",
      tag: "Under Review",
      status: "Minor Revision",
      links: [],
    },
    {
      id: 6,
      title: "Toward Semantically-Consistent Tuning-Free Customization for Rectified Flow Transformers",
      authors: "Jian Jin, Kai Zhang, Zhenyong Fu†, and Jian Yang†",
      venue: "Submitted to ICML 2026",
      tag: "Under Review",
      links: [],
    },
  ],
  broader: [
    {
      id: 1,
      title: "Few-Shot Open-Set Recognition via Pairwise Discriminant Aggregation",
      authors: "Jian Jin, Yang Shen, Zhenyong Fu†, and Jian Yang†",
      venue: "Neurocomputing 2024",
      tag: "Journal",
      links: [],
    },
    {
      id: 2,
      title: "Twofold Debiasing Enhances Fine-Grained Learning with Coarse Labels",
      authors: "Xinyang Zhao, Jian Jin, Yangyang Li, Yazhou Yao†",
      venue: "AAAI 2024",
      tag: "AAAI",
      links: [],
    },
    {
      id: 3,
      title: "Explanatory Instructions: Towards Unified Vision Tasks Understanding and Zero-shot Generalization",
      authors: "Yang Shen, Xiu-Shen Wei, Yifan Sun, YuXin Song, Tao Yuan, Jian Jin, et al.",
      venue: "ICML 2025",
      tag: "ICML",
      links: [],
    },
    {
      id: 4,
      title: "Image processing and machine learning based cavings characterization and classification",
      authors: "Jian Jin, Yan Jin, Yunhu Lu, Huiwen Pang",
      venue: "Journal of Petroleum Science and Engineering, 2022",
      tag: "Journal",
      links: [],
    },
    {
      id: 5,
      title: "Exploring multi-semantic disentangled controls in GANs using conjugate gradient optimization",
      authors: "Zhenbo Yu, Jian Jin, Zhenyong Fu†, and Jian Yang",
      venue: "Pattern Recognition Letters, 2025",
      tag: "Journal",
      links: [],
    },
  ],
};

const tagColors: Record<string, string> = {
  "CVPR": "bg-red-700 text-white",
  "ECCV": "bg-orange-700 text-white",
  "IJCV": "bg-blue-700 text-white",
  "ICML": "bg-purple-700 text-white",
  "AAAI": "bg-teal-700 text-white",
  "Journal": "bg-stone-600 text-white",
  "Under Review": "bg-amber-700 text-white",
};

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-30% 0px -60% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);
  return active;
}

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const activeSection = useActiveSection(navItems.map((n) => n.id));
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex" style={{ fontFamily: "'Lora', Georgia, serif" }}>
      {/* ── Sidebar ── */}
      <aside
        className="hidden lg:flex flex-col fixed left-0 top-0 h-screen w-56 z-40 overflow-y-auto"
        style={{ backgroundColor: "oklch(0.26 0.04 140)", color: "oklch(0.88 0.015 90)" }}
      >
        {/* Logo / Name */}
        <div className="px-6 pt-8 pb-6 border-b" style={{ borderColor: "oklch(0.32 0.04 140)" }}>
          <div
            className="text-xs tracking-widest uppercase mb-2"
            style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "oklch(0.65 0.03 90)" }}
          >
            Academic Homepage
          </div>
          <div
            className="text-xl font-semibold leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "oklch(0.95 0.01 90)" }}
          >
            Jian JIN
          </div>
          <div
            className="text-xs mt-1"
            style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "oklch(0.65 0.03 90)" }}
          >
            金健
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="w-full text-left px-3 py-2 rounded transition-all duration-200 flex items-center gap-2 group"
              style={{
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontSize: "0.8rem",
                letterSpacing: "0.04em",
                backgroundColor: activeSection === item.id ? "oklch(0.32 0.04 140)" : "transparent",
                color: activeSection === item.id ? "oklch(0.95 0.01 90)" : "oklch(0.72 0.02 90)",
              }}
            >
              <ChevronRight
                size={12}
                className="transition-transform duration-200"
                style={{
                  opacity: activeSection === item.id ? 1 : 0,
                  transform: activeSection === item.id ? "translateX(0)" : "translateX(-4px)",
                  color: "oklch(0.45 0.18 25)",
                }}
              />
              {item.label}
            </button>
          ))}
        </nav>

        {/* Contact links */}
        <div className="px-6 py-6 border-t space-y-2" style={{ borderColor: "oklch(0.32 0.04 140)" }}>
          <a
            href="mailto:jinj@njust.edu.cn"
            className="flex items-center gap-2 text-xs transition-colors duration-200 hover:opacity-80"
            style={{ fontFamily: "'IBM Plex Mono', monospace", color: "oklch(0.65 0.03 90)" }}
          >
            <Mail size={12} />
            jinj@njust.edu.cn
          </a>
          <a
            href="https://github.com/jinjianRick"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs transition-colors duration-200 hover:opacity-80"
            style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "oklch(0.65 0.03 90)" }}
          >
            <Github size={12} />
            GitHub
          </a>
        </div>
      </aside>

      {/* ── Mobile Header ── */}
      <header
        className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3"
        style={{ backgroundColor: "oklch(0.26 0.04 140)", color: "oklch(0.88 0.015 90)" }}
      >
        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontWeight: 600 }}>
          Jian JIN
        </span>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-1"
          style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "0.75rem", letterSpacing: "0.05em" }}
        >
          {menuOpen ? "✕ Close" : "☰ Menu"}
        </button>
      </header>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div
          className="lg:hidden fixed top-12 left-0 right-0 z-40 py-4"
          style={{ backgroundColor: "oklch(0.26 0.04 140)" }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { scrollTo(item.id); setMenuOpen(false); }}
              className="w-full text-left px-6 py-2 text-sm"
              style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "oklch(0.82 0.015 90)" }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      {/* ── Main Content ── */}
      <main
        className="flex-1 lg:ml-56 min-h-screen paper-texture"
        style={{ backgroundColor: "oklch(0.978 0.008 80)" }}
      >
        {/* ── Hero Section ── */}
        <section
          id="about"
          className="relative overflow-hidden pt-16 lg:pt-0"
          style={{
            backgroundImage: `url(${HERO_BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: "oklch(0.978 0.008 80 / 0.75)" }} />
          <div className="relative max-w-4xl mx-auto px-8 py-16 lg:py-20">
            <div className="animate-fade-in-up">
              {/* Name */}
              <h1
                className="leading-none mb-2"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(3rem, 7vw, 5.5rem)",
                  fontWeight: 300,
                  color: "oklch(0.18 0.015 60)",
                  letterSpacing: "-0.01em",
                }}
              >
                Jian <span style={{ fontWeight: 600 }}>JIN</span>
              </h1>
              <div
                className="text-2xl mb-6"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  color: "oklch(0.45 0.18 25)",
                  fontWeight: 400,
                }}
              >
                金健
              </div>

              {/* Affiliation */}
              <div
                className="mb-6 space-y-1"
                style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "oklch(0.35 0.015 60)" }}
              >
                <div className="flex items-center gap-2 text-sm">
                  <GraduationCap size={15} style={{ color: "oklch(0.45 0.18 25)" }} />
                  <span>Ph.D. Candidate, Computer Science and Technology</span>
                </div>
                <div className="text-sm pl-6">
                  PCALab, Nanjing University of Science and Technology (NJUST)
                </div>
                <div className="text-sm pl-6" style={{ color: "oklch(0.52 0.02 70)" }}>
                  Advisor: Prof. Jian Yang · Sept. 2022 – Present
                </div>
              </div>

              {/* Research Interest Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["Generative AI", "Controllable Image Generation", "Video Generation", "Diffusion Models", "Customized Generation"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-sm"
                    style={{
                      fontFamily: "'IBM Plex Sans', sans-serif",
                      letterSpacing: "0.05em",
                      backgroundColor: "oklch(0.87 0.015 75)",
                      color: "oklch(0.3 0.015 60)",
                      border: "1px solid oklch(0.82 0.018 75)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Contact Links */}
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: <Mail size={14} />, label: "jinj@njust.edu.cn", href: "mailto:jinj@njust.edu.cn" },
                  { icon: <Mail size={14} />, label: "jinjian0918@gmail.com", href: "mailto:jinjian0918@gmail.com" },
                  { icon: <Github size={14} />, label: "GitHub", href: "https://github.com/jinjianRick" },
                  { icon: <BookOpen size={14} />, label: "Google Scholar", href: "https://scholar.google.com" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm transition-all duration-200 hover:opacity-70"
                    style={{
                      fontFamily: "'IBM Plex Sans', sans-serif",
                      color: "oklch(0.45 0.18 25)",
                      textDecoration: "none",
                    }}
                  >
                    {link.icon}
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom border */}
          <div className="h-px" style={{ backgroundColor: "oklch(0.87 0.015 75)" }} />
        </section>

        {/* ── Content Sections ── */}
        <div className="max-w-4xl mx-auto px-8 py-12 space-y-16">

          {/* ── Education ── */}
          <section id="education" className="animate-fade-in-up">
            <h2 className="section-title text-2xl mb-8" style={{ color: "oklch(0.18 0.015 60)" }}>
              Education
            </h2>
            <div className="space-y-6">
              {[
                {
                  school: "Nanjing University of Science and Technology (NJUST)",
                  location: "Nanjing, China",
                  degree: "Ph.D. in Computer Science and Technology",
                  detail: "PCALab · Advisor: Prof. Jian Yang",
                  period: "Sept. 2022 – Present",
                  gpa: null,
                },
                {
                  school: "China University of Petroleum, Beijing (CUPB)",
                  location: "Beijing, China",
                  degree: "M.S. in AI for Engineering",
                  detail: "Advisor: Prof. Yan Jin",
                  period: "Sept. 2019 – Jun. 2022",
                  gpa: "GPA: 4.04/5.0",
                },
                {
                  school: "China University of Petroleum, Beijing (CUPB)",
                  location: "Beijing, China",
                  degree: "B.S. in Petroleum Engineering",
                  detail: null,
                  period: "Sept. 2015 – Jun. 2019",
                  gpa: "GPA: 4.2/5.0",
                },
              ].map((edu, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-start gap-4 pb-6"
                  style={{ borderBottom: i < 2 ? "1px solid oklch(0.87 0.015 75)" : "none" }}
                >
                  <div className="flex-1">
                    <div
                      className="font-semibold text-base mb-0.5"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem", color: "oklch(0.18 0.015 60)" }}
                    >
                      {edu.school}
                    </div>
                    <div
                      className="text-sm mb-1"
                      style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "oklch(0.45 0.18 25)", fontWeight: 500 }}
                    >
                      {edu.degree}
                    </div>
                    {edu.detail && (
                      <div className="text-sm" style={{ color: "oklch(0.52 0.02 70)" }}>
                        {edu.detail}
                      </div>
                    )}
                  </div>
                  <div className="text-right shrink-0">
                    <div
                      className="text-sm mb-1"
                      style={{ fontFamily: "'IBM Plex Mono', monospace", color: "oklch(0.52 0.02 70)" }}
                    >
                      {edu.period}
                    </div>
                    <div className="text-xs" style={{ color: "oklch(0.52 0.02 70)" }}>{edu.location}</div>
                    {edu.gpa && (
                      <div
                        className="text-xs mt-1 font-medium"
                        style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "oklch(0.45 0.15 80)" }}
                      >
                        {edu.gpa}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Research Interests ── */}
          <section id="research">
            <h2 className="section-title text-2xl mb-8" style={{ color: "oklch(0.18 0.015 60)" }}>
              Research Interests
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div
                className="p-5 rounded-sm"
                style={{ backgroundColor: "oklch(0.965 0.01 80)", border: "1px solid oklch(0.87 0.015 75)" }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <Microscope size={18} style={{ color: "oklch(0.45 0.18 25)", marginTop: "2px", flexShrink: 0 }} />
                  <div>
                    <div
                      className="font-semibold mb-1"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", color: "oklch(0.18 0.015 60)" }}
                    >
                      Generative AI
                    </div>
                    <div
                      className="text-xs mb-2"
                      style={{ fontFamily: "'IBM Plex Mono', monospace", color: "oklch(0.52 0.02 70)" }}
                    >
                      Jul. 2023 – Present
                    </div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.35 0.015 60)" }}>
                  Controllable image and video generation, customized generation, diffusion models, image editing, fine-tuning, in-context learning, and vision encoders.
                </p>
              </div>
              <div
                className="p-5 rounded-sm"
                style={{ backgroundColor: "oklch(0.965 0.01 80)", border: "1px solid oklch(0.87 0.015 75)" }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <Microscope size={18} style={{ color: "oklch(0.45 0.18 25)", marginTop: "2px", flexShrink: 0 }} />
                  <div>
                    <div
                      className="font-semibold mb-1"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", color: "oklch(0.18 0.015 60)" }}
                    >
                      Few-Shot Open-Set Recognition
                    </div>
                    <div
                      className="text-xs mb-2"
                      style={{ fontFamily: "'IBM Plex Mono', monospace", color: "oklch(0.52 0.02 70)" }}
                    >
                      Aug. 2022 – Jun. 2023
                    </div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.35 0.015 60)" }}>
                  Recognition under limited supervision with open-set conditions, pairwise discriminant learning, and generalization to unseen categories.
                </p>
              </div>
            </div>
          </section>

          {/* ── Publications ── */}
          <section id="publications">
            <h2 className="section-title text-2xl mb-8" style={{ color: "oklch(0.18 0.015 60)" }}>
              Publications
            </h2>

            {/* Controllable Image and Video Generation */}
            <div className="mb-10">
              <h3
                className="text-base font-medium mb-5 pb-2"
                style={{
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  letterSpacing: "0.04em",
                  color: "oklch(0.35 0.015 60)",
                  borderBottom: "1px solid oklch(0.87 0.015 75)",
                }}
              >
                Controllable Image and Video Generation
              </h3>
              <ol className="space-y-5">
                {publications.main.map((pub) => (
                  <li key={pub.id} className="flex gap-4 group">
                    <span
                      className="shrink-0 text-sm font-medium mt-0.5 w-5 text-right"
                      style={{ fontFamily: "'IBM Plex Mono', monospace", color: "oklch(0.65 0.02 70)" }}
                    >
                      [{pub.id}]
                    </span>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start gap-2 mb-1">
                        <span
                          className={`pub-tag ${tagColors[pub.tag] || "bg-stone-600 text-white"}`}
                          style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                        >
                          {pub.tag}
                        </span>
                        {pub.highlight && (
                          <span
                            className="pub-tag"
                            style={{
                              fontFamily: "'IBM Plex Sans', sans-serif",
                              backgroundColor: "oklch(0.75 0.15 80)",
                              color: "oklch(0.2 0.05 60)",
                            }}
                          >
                            ★ {pub.highlight}
                          </span>
                        )}
                        {pub.status && (
                          <span
                            className="pub-tag"
                            style={{
                              fontFamily: "'IBM Plex Sans', sans-serif",
                              backgroundColor: "oklch(0.92 0.05 80)",
                              color: "oklch(0.35 0.08 70)",
                            }}
                          >
                            {pub.status}
                          </span>
                        )}
                      </div>
                      <div
                        className="font-medium mb-1 leading-snug transition-colors duration-200 group-hover:text-red-700"
                        style={{ fontFamily: "'Lora', serif", fontSize: "0.95rem", color: "oklch(0.18 0.015 60)" }}
                      >
                        {pub.title}
                      </div>
                      <div
                        className="text-sm mb-1"
                        style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "oklch(0.45 0.015 60)" }}
                      >
                        {pub.authors}
                      </div>
                      <div className="flex items-center gap-3">
                        <span
                          className="text-sm italic"
                          style={{ fontFamily: "'Lora', serif", color: "oklch(0.52 0.02 70)" }}
                        >
                          {pub.venue}
                        </span>
                        {pub.links?.map((link) => (
                          <a
                            key={link.label}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs transition-opacity duration-200 hover:opacity-70"
                            style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "oklch(0.45 0.18 25)" }}
                          >
                            <ExternalLink size={11} />
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Broader Research Areas */}
            <div>
              <h3
                className="text-base font-medium mb-5 pb-2"
                style={{
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  letterSpacing: "0.04em",
                  color: "oklch(0.35 0.015 60)",
                  borderBottom: "1px solid oklch(0.87 0.015 75)",
                }}
              >
                Broader Research Areas
              </h3>
              <ol className="space-y-5">
                {publications.broader.map((pub) => (
                  <li key={pub.id} className="flex gap-4 group">
                    <span
                      className="shrink-0 text-sm font-medium mt-0.5 w-5 text-right"
                      style={{ fontFamily: "'IBM Plex Mono', monospace", color: "oklch(0.65 0.02 70)" }}
                    >
                      [{pub.id}]
                    </span>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start gap-2 mb-1">
                        <span
                          className={`pub-tag ${tagColors[pub.tag] || "bg-stone-600 text-white"}`}
                          style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                        >
                          {pub.tag}
                        </span>
                      </div>
                      <div
                        className="font-medium mb-1 leading-snug transition-colors duration-200 group-hover:text-red-700"
                        style={{ fontFamily: "'Lora', serif", fontSize: "0.95rem", color: "oklch(0.18 0.015 60)" }}
                      >
                        {pub.title}
                      </div>
                      <div
                        className="text-sm mb-1"
                        style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "oklch(0.45 0.015 60)" }}
                      >
                        {pub.authors}
                      </div>
                      <span
                        className="text-sm italic"
                        style={{ fontFamily: "'Lora', serif", color: "oklch(0.52 0.02 70)" }}
                      >
                        {pub.venue}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* ── Research Highlights ── */}
          <section id="highlights">
            <h2 className="section-title text-2xl mb-8" style={{ color: "oklch(0.18 0.015 60)" }}>
              Research Highlights
            </h2>

            {/* Research Visual */}
            <div className="mb-10 rounded-sm overflow-hidden" style={{ border: "1px solid oklch(0.87 0.015 75)" }}>
              <img
                src={RESEARCH_VIS}
                alt="Research visualization of AI image generation and diffusion models"
                className="w-full object-cover"
                style={{ maxHeight: "340px" }}
              />
            </div>

            <div className="space-y-10">
              {/* Highlight 1 */}
              <div className="research-block">
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "oklch(0.18 0.015 60)" }}
                >
                  Scalable Multi-concept Customized Image/Video Generation
                </h3>
                <div
                  className="text-sm mb-4 p-3 rounded-sm"
                  style={{
                    fontFamily: "'IBM Plex Sans', sans-serif",
                    backgroundColor: "oklch(0.96 0.01 80)",
                    border: "1px solid oklch(0.87 0.015 75)",
                    color: "oklch(0.35 0.015 60)",
                  }}
                >
                  <strong>Challenge:</strong> The degradation of generation quality and the explosion of computational cost when scaling multi-concept customized generation.
                </div>
                <div className="space-y-3 text-sm" style={{ color: "oklch(0.3 0.015 60)" }}>
                  <div>
                    <span className="font-semibold" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>Latent Textual Space (LTS):</span>
                    <span className="ml-1">Identified the linear projection space after the Text Encoder as the pivot for scaling. Verified its ability to encode sufficient customization information, mitigate denoising deviation, and provide superior scalability.</span>
                  </div>
                  <div>
                    <span className="font-semibold" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>General Multi-modal Concept Representation:</span>
                    <span className="ml-1">Developed a single-concept fine-tuning strategy using latent textual rectification and anchor-guided context learning to obtain a general concept representation for versatile multi-concept customized generation tasks.</span>
                  </div>
                  <div>
                    <span className="font-semibold" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>Scalable Inference Pipelines:</span>
                    <span className="ml-1">Developed LaTexBlend-i/g/v, scalable inference pipelines based on multi-concept feature blending in LTS, supporting customized text-to-image generation, spatially controllable generation, and video generation.</span>
                  </div>
                  <div>
                    <span className="font-semibold" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>Architecture Generalization:</span>
                    <span className="ml-1">Generalized the LTS and LaTexBlend framework from U-Net architectures to the latest MM-DiT architectures.</span>
                  </div>
                </div>
                <a
                  href="https://github.com/jinjianRick/latexblend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-4 text-sm transition-opacity duration-200 hover:opacity-70"
                  style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "oklch(0.45 0.18 25)" }}
                >
                  <Github size={13} />
                  Project Page: latexblend
                </a>
              </div>

              {/* Highlight 2 */}
              <div className="research-block">
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "oklch(0.18 0.015 60)" }}
                >
                  Semantically Consistent Tuning-free Customization for MM-DiT
                </h3>
                <div
                  className="text-sm mb-4 p-3 rounded-sm"
                  style={{
                    fontFamily: "'IBM Plex Sans', sans-serif",
                    backgroundColor: "oklch(0.96 0.01 80)",
                    border: "1px solid oklch(0.87 0.015 75)",
                    color: "oklch(0.35 0.015 60)",
                  }}
                >
                  <strong>Challenge:</strong> Tuning-free customization suffers from both textual and visual semantic inconsistencies.
                </div>
                <div className="space-y-3 text-sm" style={{ color: "oklch(0.3 0.015 60)" }}>
                  <div>
                    <span className="font-semibold" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>SemanticFlow:</span>
                    <span className="ml-1">Proposed SemanticFlow, introducing explicit semantic control into MM-DiT.</span>
                  </div>
                  <div>
                    <span className="font-semibold" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>Perception-Manipulation Mechanism:</span>
                    <span className="ml-1">Designed lightweight semantic token flows as runtime probes to capture spatial semantic distribution. Introduced an energy-guided manipulation mechanism to perturb the velocity field, enhancing both textual and visual semantic consistency.</span>
                  </div>
                </div>
              </div>

              {/* Highlight 3 */}
              <div className="research-block">
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "oklch(0.18 0.015 60)" }}
                >
                  Affordance-Aware Unified Image Editing
                </h3>
                <div
                  className="text-sm mb-4 p-3 rounded-sm"
                  style={{
                    fontFamily: "'IBM Plex Sans', sans-serif",
                    backgroundColor: "oklch(0.96 0.01 80)",
                    border: "1px solid oklch(0.87 0.015 75)",
                    color: "oklch(0.35 0.015 60)",
                  }}
                >
                  <strong>Challenge:</strong> Existing conditional image editing methods lack affordance perception and a unified framework.
                </div>
                <div className="space-y-3 text-sm" style={{ color: "oklch(0.3 0.015 60)" }}>
                  <div>
                    <span className="font-semibold" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>Affordance Perception:</span>
                    <span className="ml-1">Designed customization strategies to map multi-modal inputs into a shared text-conditioned space, leveraging the strong semantic understanding and perceptual priors of generative models to enhance affordance perception.</span>
                  </div>
                  <div>
                    <span className="font-semibold" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>Unified Editing Framework:</span>
                    <span className="ml-1">Based on the unified input representation, designed a dual-branch dynamic interactive inference pipeline to enable subject-driven and text-driven editing in parallel within a single forward pass.</span>
                  </div>
                </div>
                <a
                  href="https://github.com/jinjianrick/unicanvas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-4 text-sm transition-opacity duration-200 hover:opacity-70"
                  style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "oklch(0.45 0.18 25)" }}
                >
                  <Github size={13} />
                  Project Page: unicanvas
                </a>
              </div>
            </div>
          </section>

          {/* ── Academic Service ── */}
          <section id="service">
            <h2 className="section-title text-2xl mb-8" style={{ color: "oklch(0.18 0.015 60)" }}>
              Academic Service
            </h2>
            <div
              className="p-5 rounded-sm"
              style={{ backgroundColor: "oklch(0.965 0.01 80)", border: "1px solid oklch(0.87 0.015 75)" }}
            >
              <div className="flex items-start gap-3">
                <BookOpen size={16} style={{ color: "oklch(0.45 0.18 25)", marginTop: "3px", flexShrink: 0 }} />
                <div>
                  <div
                    className="font-medium mb-2"
                    style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "0.9rem", color: "oklch(0.3 0.015 60)" }}
                  >
                    Reviewer
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["CVPR", "ECCV", "ICML", "IEEE TMM"].map((venue) => (
                      <span
                        key={venue}
                        className="pub-tag"
                        style={{
                          fontFamily: "'IBM Plex Sans', sans-serif",
                          backgroundColor: "oklch(0.87 0.015 75)",
                          color: "oklch(0.3 0.015 60)",
                        }}
                      >
                        {venue}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Honors & Awards ── */}
          <section id="awards">
            <h2 className="section-title text-2xl mb-8" style={{ color: "oklch(0.18 0.015 60)" }}>
              Honors &amp; Awards
            </h2>
            <div className="space-y-3">
              {[
                { award: "Ph.D. National Scholarship", year: "2025", level: "National" },
                { award: "First-class Academic Scholarship", year: "2023, 2024, 2025", level: "University" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-3 px-4 rounded-sm"
                  style={{
                    backgroundColor: "oklch(0.965 0.01 80)",
                    border: "1px solid oklch(0.87 0.015 75)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <Award size={16} style={{ color: "oklch(0.6 0.12 80)", flexShrink: 0 }} />
                    <div>
                      <div
                        className="font-medium text-sm"
                        style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "oklch(0.2 0.015 60)" }}
                      >
                        {item.award}
                      </div>
                      <div
                        className="text-xs"
                        style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "oklch(0.55 0.02 70)" }}
                      >
                        {item.level}
                      </div>
                    </div>
                  </div>
                  <span
                    className="text-sm"
                    style={{ fontFamily: "'IBM Plex Mono', monospace", color: "oklch(0.52 0.02 70)" }}
                  >
                    {item.year}
                  </span>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* ── Footer ── */}
        <footer
          className="mt-16 py-8 px-8 text-center"
          style={{
            borderTop: "1px solid oklch(0.87 0.015 75)",
            backgroundColor: "oklch(0.965 0.01 80)",
          }}
        >
          <p
            className="text-sm"
            style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "oklch(0.55 0.02 70)" }}
          >
            © {new Date().getFullYear()} Jian JIN · Nanjing University of Science and Technology
          </p>
          <p
            className="text-xs mt-1"
            style={{ fontFamily: "'IBM Plex Mono', monospace", color: "oklch(0.65 0.015 70)" }}
          >
            jinj@njust.edu.cn · (+86) 150-1005-0398
          </p>
        </footer>
      </main>
    </div>
  );
}
