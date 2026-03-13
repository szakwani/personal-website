import { useState } from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';
import { projects } from '../data/portfolio';

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'featured'>('featured');

  const displayed =
    filter === 'featured' ? projects.filter((p) => p.featured) : projects;

  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-primary-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Key initiatives
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Initiatives</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-blue-400 rounded-full mx-auto" />
        </div>

        {/* Filter */}
        <div className="flex justify-center gap-2 mb-12">
          {(['featured', 'all'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 capitalize ${
                filter === f
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                  : 'text-dark-300 hover:text-white hover:bg-dark-700/60'
              }`}
            >
              {f === 'featured' ? '⭐ Featured' : 'All Projects'}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((project) => (
            <div
              key={project.id}
              className="glass-card overflow-hidden group hover:border-primary-600/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-600/10 flex flex-col"
            >
              {/* Project Image / Color Band */}
              <div
                className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <div className="text-8xl font-black text-white">
                    {project.title.charAt(0)}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />

                {project.featured && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-dark-900/70 backdrop-blur-sm text-yellow-400 text-xs font-semibold px-2.5 py-1 rounded-full border border-yellow-400/20">
                    <Star size={10} fill="currentColor" />
                    Featured
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold text-xl">{project.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <p className="text-dark-300 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="tag text-xs">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="text-dark-400 text-xs py-1">
                      +{project.tags.length - 4} more
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-dark-300 hover:text-white text-sm font-medium transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors ml-auto"
                  >
                    Live Demo
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <p className="text-dark-400 text-sm mb-4">
            Want to see more? Check out my GitHub profile.
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
          >
            <Github size={18} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
