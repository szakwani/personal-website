import { Linkedin, ThumbsUp, MessageCircle, ExternalLink } from 'lucide-react';
import { linkedInPosts, personalInfo } from '../data/portfolio';

export default function LinkedInPosts() {
  return (
    <section id="linkedin-posts" className="section-padding bg-dark-800/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Latest thoughts
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Recent <span className="gradient-text">LinkedIn Posts</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-blue-400 rounded-full mx-auto mb-6" />
          <p className="text-dark-300 max-w-lg mx-auto text-balance">
            Sharing insights on digital transformation, AI, and leadership in the energy sector.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {linkedInPosts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 flex flex-col gap-4 hover:border-primary-600/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-600/10 group"
            >
              {/* Post Header */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary-600/30">
                  <img
                    src="/avatar.jpg"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-white font-semibold text-sm leading-tight truncate">
                    {personalInfo.name}
                  </p>
                  <p className="text-dark-400 text-xs truncate">{post.date}</p>
                </div>
                <div className="ml-auto flex-shrink-0">
                  <div className="w-8 h-8 rounded-lg bg-[#0077B5]/20 border border-[#0077B5]/30 flex items-center justify-center group-hover:bg-[#0077B5] transition-colors">
                    <Linkedin size={14} className="text-[#0077B5] group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <p className="text-dark-200 text-sm leading-relaxed line-clamp-6 flex-1 whitespace-pre-line">
                {post.content}
              </p>

              {/* Hashtags */}
              <div className="flex flex-wrap gap-1.5">
                {post.hashtags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-primary-400 text-xs font-medium hover:text-primary-300 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
                {post.hashtags.length > 3 && (
                  <span className="text-dark-400 text-xs">+{post.hashtags.length - 3} more</span>
                )}
              </div>

              {/* Engagement */}
              <div className="flex items-center gap-4 pt-3 border-t border-dark-600/50 text-dark-400 text-xs">
                <span className="flex items-center gap-1.5">
                  <ThumbsUp size={13} />
                  {post.likes.toLocaleString()}
                </span>
                <span className="flex items-center gap-1.5">
                  <MessageCircle size={13} />
                  {post.comments}
                </span>
                <span className="ml-auto flex items-center gap-1 text-primary-400 group-hover:text-primary-300 transition-colors font-medium">
                  View post
                  <ExternalLink size={11} />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* LinkedIn CTA */}
        <div className="text-center mt-10">
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
          >
            <Linkedin size={18} />
            Follow on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
