import { MapPin, Mail, Calendar, User } from 'lucide-react';
import { personalInfo, aboutContent } from '../data/portfolio';

export default function About() {
  return (
    <section id="about" className="section-padding bg-dark-800/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Get to know me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-blue-400 rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Avatar / Illustration Side */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary-600/20 scale-110 animate-pulse-slow" />
              <div className="absolute inset-0 rounded-full border border-primary-600/10 scale-125" />

              {/* Avatar placeholder */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-primary-800/50 to-dark-700 border-2 border-primary-600/30 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-600 to-blue-500 flex items-center justify-center mx-auto mb-2">
                    <User size={64} className="text-white/80" />
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute bottom-6 right-6 bg-dark-800 border border-dark-600 rounded-xl px-3 py-2 shadow-lg">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-medium text-white">Available</span>
                  </div>
                </div>
              </div>

              {/* Stat cards */}
              <div className="absolute -top-4 -left-4 bg-dark-800 border border-dark-600 rounded-xl p-3 shadow-xl">
                <div className="text-2xl font-bold text-primary-400">15+</div>
                <div className="text-xs text-dark-300">Years Exp.</div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-dark-800 border border-dark-600 rounded-xl p-3 shadow-xl">
                <div className="text-2xl font-bold text-primary-400">30+</div>
                <div className="text-xs text-dark-300">Projects</div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Technology Executive &{' '}
              <span className="gradient-text">Digital Transformation Leader</span>
            </h3>

            <div className="space-y-4 mb-8">
              {aboutContent.bio.map((paragraph, idx) => (
                <p key={idx} className="text-dark-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-lg bg-primary-900/40 border border-primary-800/40 flex items-center justify-center flex-shrink-0">
                  <MapPin size={14} className="text-primary-400" />
                </div>
                <div>
                  <div className="text-dark-400 text-xs">Location</div>
                  <div className="text-white font-medium">{personalInfo.location}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-lg bg-primary-900/40 border border-primary-800/40 flex items-center justify-center flex-shrink-0">
                  <Mail size={14} className="text-primary-400" />
                </div>
                <div>
                  <div className="text-dark-400 text-xs">Email</div>
                  <div className="text-white font-medium">{personalInfo.email}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-lg bg-primary-900/40 border border-primary-800/40 flex items-center justify-center flex-shrink-0">
                  <Calendar size={14} className="text-primary-400" />
                </div>
                <div>
                  <div className="text-dark-400 text-xs">Experience</div>
                  <div className="text-white font-medium">15+ Years</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-lg bg-primary-900/40 border border-primary-800/40 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-400 text-xs font-bold">💼</span>
                </div>
                <div>
                  <div className="text-dark-400 text-xs">Status</div>
                  <div className="text-emerald-400 font-medium">Open to Work</div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {aboutContent.highlights.map((item) => (
                <div
                  key={item.label}
                  className="glass-card p-4 text-center"
                >
                  <div className="text-2xl font-bold gradient-text mb-1">
                    {item.value}
                  </div>
                  <div className="text-xs text-dark-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
