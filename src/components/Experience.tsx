import { useState } from 'react';
import { MapPin, Calendar, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { experiences } from '../data/portfolio';

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(experiences[0].id);

  return (
    <section id="experience" className="section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary-400 text-sm font-semibold tracking-widest uppercase mb-3">
            My journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-blue-400 rounded-full mx-auto" />
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 via-primary-600/40 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-8 w-3 h-3 rounded-full bg-primary-500 border-2 border-primary-400 shadow-lg shadow-primary-600/50 z-10" />

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                  <div
                    className={`glass-card p-6 cursor-pointer transition-all duration-300 hover:border-primary-600/40 ${
                      expanded === exp.id ? 'border-primary-600/40' : ''
                    }`}
                    onClick={() =>
                      setExpanded(expanded === exp.id ? null : exp.id)
                    }
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-white mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-primary-400 font-semibold text-sm mb-3">
                          {exp.company}
                        </p>
                        <div className="flex flex-wrap items-center gap-3 text-xs text-dark-300">
                          <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={12} />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      <button className="text-dark-400 hover:text-white transition-colors mt-1 flex-shrink-0">
                        {expanded === exp.id ? (
                          <ChevronUp size={18} />
                        ) : (
                          <ChevronDown size={18} />
                        )}
                      </button>
                    </div>

                    {/* Description */}
                    <p className="text-dark-300 text-sm mt-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Expanded Content */}
                    {expanded === exp.id && (
                      <div className="mt-5 pt-5 border-t border-dark-600/50 space-y-4">
                        <ul className="space-y-2">
                          {exp.highlights.map((h, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-dark-200"
                            >
                              <CheckCircle2
                                size={14}
                                className="text-primary-400 mt-0.5 flex-shrink-0"
                              />
                              {h}
                            </li>
                          ))}
                        </ul>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {exp.tech.map((t) => (
                            <span key={t} className="tag text-xs">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
