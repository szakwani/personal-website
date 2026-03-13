import { Github, Linkedin, Twitter, Code2, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-800/50 border-t border-dark-700/50">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <div className="w-7 h-7 bg-primary-600 rounded-md flex items-center justify-center">
                <Code2 size={15} />
              </div>
              <span>Alex.dev</span>
            </div>
            <p className="text-dark-300 text-sm text-center md:text-left">
              Building exceptional digital experiences.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-dark-700 hover:bg-primary-600 flex items-center justify-center text-dark-200 hover:text-white transition-all duration-200 hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-dark-700 hover:bg-primary-600 flex items-center justify-center text-dark-200 hover:text-white transition-all duration-200 hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={personalInfo.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-dark-700 hover:bg-primary-600 flex items-center justify-center text-dark-200 hover:text-white transition-all duration-200 hover:-translate-y-1"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-10 h-10 rounded-xl bg-dark-700 hover:bg-primary-600 flex items-center justify-center text-dark-200 hover:text-white transition-all duration-200 hover:-translate-y-1"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Copyright + Scroll to Top */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl bg-dark-700 hover:bg-primary-600 flex items-center justify-center text-dark-200 hover:text-white transition-all duration-200 hover:-translate-y-1"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
            <p className="text-dark-400 text-xs">
              © {year} {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
