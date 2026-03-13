import { skillCategories } from '../data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-dark-800/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary-400 text-sm font-semibold tracking-widest uppercase mb-3">
            What I work with
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-blue-400 rounded-full mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat) => (
            <div key={cat.category} className="glass-card p-6">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-white font-bold text-lg">{cat.category}</h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-dark-200 text-sm font-medium">
                        {skill.name}
                      </span>
                      <span className="text-primary-400 text-xs font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-dark-600/60 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary-600 to-blue-400 rounded-full transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional tech tags */}
        <div className="mt-12 text-center">
          <p className="text-dark-400 text-sm mb-5">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Webpack', 'Vite', 'Storybook', 'Tailwind CSS', 'Prisma',
              'tRPC', 'Zustand', 'React Query', 'Socket.io', 'Nginx',
              'GitHub Actions', 'Sentry', 'Datadog',
            ].map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
