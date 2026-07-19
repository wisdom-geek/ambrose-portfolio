import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram, Send } from "lucide-react";
import { toast } from "sonner";
import SectionHeading from "../SectionHeading";
import MagneticButton from "../MagneticButton";
import LoadingSpinner from "../LoadingSpinner";
import SuccessModal from "../SuccessModal";
import { sendEmail } from "@/lib/email";
import SuccessAnimation from "./SuccessAnimation";

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/wisdom-geek",
    color: "#ffffff",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ambrose-musyoka-379009282/",
    color: "#0a66c2",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:codingwithambrose@gmail.com",
    color: "#22d3ee",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com",
    color: "#e1306c",
  },
];

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  // Auto-close success modal after 5 seconds
  useEffect(() => {
    if (!showSuccess) return;
    const timer = setTimeout(() => setShowSuccess(false), 5000);
    return () => clearTimeout(timer);
  }, [showSuccess]);

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) {
      e.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Please enter a valid email";
    }
    if (!form.message.trim()) {
      e.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      e.message = "Message should be at least 10 characters";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();

    if (!validate()) return;

    setSubmitting(true);

    try {
      await sendEmail({
        name: form.name,
        email: form.email,
        message: form.message,
      });

      setSubmitting(false);

      setEmailSent(true);
      setShowSuccess(true);

      toast.success("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setEmailSent(false);
      }, 3000);
    } catch (error) {
      console.error(error);

      setSubmitting(false);

      toast.error("Failed to send message. Please try again.");
    }
  };

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <SectionHeading
          label="Contact"
          title="Let's build something"
          description="Have a project in mind or looking for a backend engineer? I'm always open to discussing new opportunities and collaborations."
          align="center"
        />

        <div className="grid lg:grid-cols-5 gap-6 mt-14 max-w-5xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 glass glass-hover rounded-2xl p-6 md:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-zinc-300 mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={e => handleChange("name", e.target.value)}
                  disabled={submitting}
                  className={`w-full px-4 py-3 bg-white/[0.03] border rounded-xl text-white placeholder:text-zinc-600 outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                    errors.name
                      ? "border-red-500/50 focus:border-red-500"
                      : "border-white/[0.08] focus:border-cyan-400/50"
                  }`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-xs text-red-400 mt-1.5">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-zinc-300 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={e => handleChange("email", e.target.value)}
                  disabled={submitting}
                  className={`w-full px-4 py-3 bg-white/[0.03] border rounded-xl text-white placeholder:text-zinc-600 outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                    errors.email
                      ? "border-red-500/50 focus:border-red-500"
                      : "border-white/[0.08] focus:border-cyan-400/50"
                  }`}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="text-xs text-red-400 mt-1.5">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-zinc-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={e => handleChange("message", e.target.value)}
                  disabled={submitting}
                  className={`w-full px-4 py-3 bg-white/[0.03] border rounded-xl text-white placeholder:text-zinc-600 outline-none transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed ${
                    errors.message
                      ? "border-red-500/50 focus:border-red-500"
                      : "border-white/[0.08] focus:border-cyan-400/50"
                  }`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="text-xs text-red-400 mt-1.5">
                    {errors.message}
                  </p>
                )}
              </div>

              <MagneticButton strength={0.2}>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed bg-cyan-400 hover:bg-cyan-300 text-[#030712] glow-cyan"
                >
                  {submitting ? (
                    <>
                      <LoadingSpinner size="sm" color="#030712" />
                      <span>Sending...</span>
                    </>
                  ) : emailSent ? (
                    <>
                      <span className="text-green-600 text-lg">✓</span>
                      <span>Message Sent</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </MagneticButton>
            </form>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <div className="glass glass-hover rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-white font-display mb-1">
                Connect
              </h3>
              <p className="text-xs text-zinc-500 mb-5">
                Find me on these platforms
              </p>
              <div className="space-y-3">
                {socialLinks.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/15 hover:bg-white/[0.04] transition-all group"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{
                        background: `${link.color}15`,
                        border: `1px solid ${link.color}30`,
                      }}
                    >
                      <link.icon size={16} style={{ color: link.color }} />
                    </div>
                    <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
                      {link.label}
                    </span>
                    <span className="ml-auto text-zinc-600 group-hover:text-zinc-400 transition-colors text-xs">
                      →
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6 flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-medium text-white">
                  Available for work
                </span>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Open to full-time roles, freelance projects, and collaborations
                in backend engineering and FinTech development.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <SuccessAnimation show={emailSent} />

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Message sent!"
        message="Thank you for reaching out. I'll get back to you as soon as possible."
      />
    </section>
  );
}
