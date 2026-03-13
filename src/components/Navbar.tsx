import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { useScrollspy } from '../hooks';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useScrollspy(
    ['about', 'experience', 'skills', 'projects', 'contact'],
    120
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-900/90 backdrop-blur-md shadow-lg shadow-black/20 border-b border-dark-700/50'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 text-white font-bold text-lg hover:text-primary-400 transition-colors"
          >
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <Code2 size={18} />
            </div>
            <span>Alex.dev</span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={`nav-link relative py-1 ${
                      isActive ? 'text-white' : ''
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-500 rounded-full" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="mailto:alex@example.com"
              className="btn-primary text-sm py-2 px-5"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-dark-200 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-800/95 backdrop-blur-md border-t border-dark-700/50">
          <div className="section-container py-4">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const id = link.href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-primary-900/50 text-primary-300'
                          : 'text-dark-200 hover:text-white hover:bg-dark-700/50'
                      }`}
                    >
                      {link.label}
                    </button>
                  </li>
                );
              })}
              <li className="pt-2">
                <a
                  href="mailto:alex@example.com"
                  className="btn-primary w-full justify-center text-sm py-3"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
