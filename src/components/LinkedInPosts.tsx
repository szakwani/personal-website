import { Linkedin, ThumbsUp, MessageCircle, ExternalLink } from 'lucide-react';
import { linkedinPosts, personalInfo } from '../data/portfolio';

export default function LinkedInPosts() {
  return (
    <section id="linkedin-posts" className="section-padding">
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
            Sharing insights on digital transformation, AI, and leadership from my
            journey in the energy sector.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {linkedinPosts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 flex flex-col gap-4 hover:border-primary-600/40 transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Post Header */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-600 to-blue-500 flex items-center justify-center flex-shrink-0">
                  <Linkedin size={18} className="text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-white font-semibold text-sm truncate">
                    {personalInfo.name}
                  </p>
                  <p className="text-dark-400 text-xs">{post.date}</p>
                </div>
                <ExternalLink
                  size={14}
                  className="ml-auto text-dark-500 group-hover:text-primary-400 transition-colors flex-shrink-0"
                />
              </div>

              {/* Post Content */}
              <p className="text-dark-300 text-sm leading-relaxed flex-1 line-clamp-6">
                {post.content}
              </p>

              {/* Hashtags */}
              <div className="flex flex-wrap gap-1.5">
                {post.hashtags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Engagement Stats */}
              <div className="flex items-center gap-4 pt-3 border-t border-dark-600/50 text-dark-400 text-xs">
                <span className="flex items-center gap-1.5">
                  <ThumbsUp size={13} className="text-primary-400" />
                  {post.likes.toLocaleString()}
                </span>
                <span className="flex items-center gap-1.5">
                  <MessageCircle size={13} className="text-primary-400" />
                  {post.comments}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* View More CTA */}
        <div className="text-center mt-10">
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <Linkedin size={16} />
            View All Posts on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
