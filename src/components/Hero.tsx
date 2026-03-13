import { Github, Linkedin, Twitter, ArrowDown, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Hero() {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl animate-pulse-slow animate-delay-300" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-900/20 rounded-full blur-3xl" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="section-container relative z-10 pt-24 pb-20">
        <div className="max-w-4xl">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark-700/60 border border-dark-600/60 rounded-full text-sm text-dark-200 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {personalInfo.availability}
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up">
            Hi, I'm{' '}
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-dark-200 mb-6 animate-fade-in-up animate-delay-100">
            {personalInfo.title}
          </h2>

          <p className="text-base sm:text-lg text-dark-300 max-w-2xl leading-relaxed mb-10 animate-fade-in-up animate-delay-200">
            {personalInfo.tagline}{' '}
            <span className="text-dark-200">{personalInfo.intro}</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-14 animate-fade-in-up animate-delay-300">
            <button
              onClick={() => handleScroll('projects')}
              className="btn-primary"
            >
              View My Work
              <ArrowDown size={18} />
            </button>
            <a
              href={personalInfo.socials.resume}
              className="btn-outline"
            >
              Download CV
              <Download size={18} />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 animate-fade-in-up animate-delay-400">
            <span className="text-dark-400 text-sm">Find me on</span>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-dark-700/60 hover:bg-primary-600 border border-dark-600/50 flex items-center justify-center text-dark-300 hover:text-white transition-all duration-200 hover:-translate-y-1"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-dark-700/60 hover:bg-primary-600 border border-dark-600/50 flex items-center justify-center text-dark-300 hover:text-white transition-all duration-200 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={personalInfo.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-dark-700/60 hover:bg-primary-600 border border-dark-600/50 flex items-center justify-center text-dark-300 hover:text-white transition-all duration-200 hover:-translate-y-1"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => handleScroll('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-dark-400 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} />
      </button>
    </section>
  );
}
