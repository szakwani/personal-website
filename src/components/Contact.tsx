import { useState, type FormEvent } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle, Github, Linkedin, Twitter } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate sending
    await new Promise((r) => setTimeout(r, 1500));
    setSent(true);
    setLoading(false);
  };

  const contactDetails = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: '#',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-dark-800/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Let's talk
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-blue-400 rounded-full mx-auto mb-6" />
          <p className="text-dark-300 max-w-lg mx-auto text-balance">
            Have a project, collaboration, or speaking opportunity? I'd love to
            hear from you. Reach out and I'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactDetails.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="glass-card p-5 flex items-center gap-4 hover:border-primary-600/40 transition-all duration-200 group block"
              >
                <div className="w-11 h-11 rounded-xl bg-primary-900/50 border border-primary-800/50 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 transition-colors">
                  <Icon size={18} className="text-primary-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-dark-400 text-xs font-medium mb-0.5">{label}</p>
                  <p className="text-white font-medium text-sm">{value}</p>
                </div>
              </a>
            ))}

            {/* Social links */}
            <div className="glass-card p-5">
              <p className="text-dark-400 text-xs font-medium mb-4">Follow me</p>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-dark-700 hover:bg-primary-600 flex items-center justify-center text-dark-300 hover:text-white transition-all duration-200"
                >
                  <Github size={17} />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-dark-700 hover:bg-primary-600 flex items-center justify-center text-dark-300 hover:text-white transition-all duration-200"
                >
                  <Linkedin size={17} />
                </a>
                <a
                  href={personalInfo.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-dark-700 hover:bg-primary-600 flex items-center justify-center text-dark-300 hover:text-white transition-all duration-200"
                >
                  <Twitter size={17} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="glass-card p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-dark-300 text-sm max-w-sm">
                    Thank you for reaching out. I'll get back to you within 24
                    hours.
                  </p>
                  <button
                    onClick={() => {
                      setSent(false);
                      setForm({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-6 btn-outline text-sm py-2"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-dark-200 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full bg-dark-700/60 border border-dark-600 focus:border-primary-500 rounded-xl px-4 py-3 text-white placeholder-dark-400 text-sm outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-200 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full bg-dark-700/60 border border-dark-600 focus:border-primary-500 rounded-xl px-4 py-3 text-white placeholder-dark-400 text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-200 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project collaboration"
                      className="w-full bg-dark-700/60 border border-dark-600 focus:border-primary-500 rounded-xl px-4 py-3 text-white placeholder-dark-400 text-sm outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-200 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell me about your project..."
                      className="w-full bg-dark-700/60 border border-dark-600 focus:border-primary-500 rounded-xl px-4 py-3 text-white placeholder-dark-400 text-sm outline-none transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center py-3.5 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
