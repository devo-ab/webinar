import { useState } from "react";
import { motion } from "framer-motion";
import heroData from "../data/hero.json";
import registerData from "../data/register.json";
import bannerBg from "../assets/banner-bg.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const containerVariants = {
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

interface HeroData {
  tag: { text: string; highlight: string };
  headline: { line1: string; line2: string };
  subheadline: string;
  description: string;
  event: { date: string; time: string };
  cta: { text: string; url: string };
  footer: string;
  backgroundImage: string;
}

interface RegisterFormData {
  form: {
    title: string;
    fields: Record<string, { label: string; placeholder: string; required: boolean }>;
    roles: string[];
    submitText: string;
    securityNote: string;
  };
}

export default function Hero() {
  const data = heroData as HeroData;
  const register = (registerData as RegisterFormData).form;
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    business: "",
    role: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="register" className="hero relative min-h-screen flex items-center justify-center overflow-hidden py-12">
      {/* Theatrical stage background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f0a] via-[#2d1810] to-[#0d0806]" />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bannerBg})` }}
      />
      <div className="absolute inset-0 bg-black/40" aria-hidden />
      {/* Curtain layers */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(30,15,10,0.9)_0%,transparent_20%,transparent_80%,rgba(30,15,10,0.9)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,10,8,0.6)_0%,transparent_30%,transparent_70%,rgba(10,5,5,0.8)_100%)]" />
      {/* Audience silhouette (bottom) */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {/* Left: Hero content */}
        <div className="text-center lg:text-left">
        {/* Tag */}
        <motion.div
          className="inline-block px-4 py-1.5 rounded-lg bg-white border-2 border-brand/60 text-[#2a2520] text-sm font-semibold tracking-widest mb-8"
          variants={fadeInUp}
        >
          {data.tag.text}
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-4 text-white"
          variants={fadeInUp}
        >
          {data.headline.line1}
          <br />
          {data.headline.line2}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-xl md:text-2xl text-slate-200 font-medium max-w-2xl mx-auto lg:mx-0 mb-6"
          variants={fadeInUp}
        >
          {data.subheadline}
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-white text-sm md:text-base max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
          variants={fadeInUp}
        >
          {data.description}
        </motion.p>

        {/* Event details */}
        <motion.div
          className="flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-10 text-white text-sm mb-8 px-6 py-4 rounded-xl bg-black/60 backdrop-blur-sm inline-flex"
          variants={fadeInUp}
        >
          <span className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-white flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {data.event.date}
          </span>
          <span className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-white flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {data.event.time}
          </span>
        </motion.div>

        {/* Footer */}
        <motion.p
          className="text-slate-500 text-sm"
          variants={fadeInUp}
        >
          {data.footer}
        </motion.p>
        </div>

        {/* Right: Registration form */}
        <motion.div
          variants={fadeInUp}
          className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl"
        >
          <h3 className="font-serif text-xl md:text-2xl font-bold text-[#2a2520] text-center mb-6">
            {register.title}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="hero-firstName" className="block text-xs font-medium text-[#2a2520] mb-1">
                  {register.fields.firstName.label} {register.fields.firstName.required && "*"}
                </label>
                <input
                  type="text"
                  id="hero-firstName"
                  name="firstName"
                  placeholder={register.fields.firstName.placeholder}
                  required
                  value={formState.firstName}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-lg bg-[#f5f3f0] text-[#2a2520] placeholder:text-[#8a8580] text-sm focus:outline-none focus:ring-2 focus:ring-brand/50"
                />
              </div>
              <div>
                <label htmlFor="hero-lastName" className="block text-xs font-medium text-[#2a2520] mb-1">
                  {register.fields.lastName.label} {register.fields.lastName.required && "*"}
                </label>
                <input
                  type="text"
                  id="hero-lastName"
                  name="lastName"
                  placeholder={register.fields.lastName.placeholder}
                  required
                  value={formState.lastName}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-lg bg-[#f5f3f0] text-[#2a2520] placeholder:text-[#8a8580] text-sm focus:outline-none focus:ring-2 focus:ring-brand/50"
                />
              </div>
            </div>
            <div>
              <label htmlFor="hero-email" className="block text-xs font-medium text-[#2a2520] mb-1">
                {register.fields.email.label} *
              </label>
              <input
                type="email"
                id="hero-email"
                name="email"
                placeholder={register.fields.email.placeholder}
                required
                value={formState.email}
                onChange={handleChange}
                className="w-full px-3 py-2.5 rounded-lg bg-[#f5f3f0] text-[#2a2520] placeholder:text-[#8a8580] text-sm focus:outline-none focus:ring-2 focus:ring-brand/50"
              />
            </div>
            <div>
              <label htmlFor="hero-business" className="block text-xs font-medium text-[#2a2520] mb-1">
                {register.fields.business.label}
              </label>
              <input
                type="text"
                id="hero-business"
                name="business"
                placeholder={register.fields.business.placeholder}
                value={formState.business}
                onChange={handleChange}
                className="w-full px-3 py-2.5 rounded-lg bg-[#f5f3f0] text-[#2a2520] placeholder:text-[#8a8580] text-sm focus:outline-none focus:ring-2 focus:ring-brand/50"
              />
            </div>
            <div>
              <label htmlFor="hero-role" className="block text-xs font-medium text-[#2a2520] mb-1">
                {register.fields.role.label} *
              </label>
              <select
                id="hero-role"
                name="role"
                required
                value={formState.role}
                onChange={handleChange}
                className="w-full px-3 py-2.5 rounded-lg bg-[#f5f3f0] text-[#2a2520] text-sm focus:outline-none focus:ring-2 focus:ring-brand/50 appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%235a5550'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 0.5rem center",
                  backgroundSize: "1rem",
                  paddingRight: "2rem",
                }}
              >
                <option value="">{register.fields.role.placeholder}</option>
                {register.roles.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-lg bg-brand hover:bg-[#9a0e14] text-white font-semibold text-base transition-colors flex items-center justify-center gap-2"
            >
              {register.submitText}
              <span aria-hidden>→</span>
            </button>
            <p className="text-center text-xs text-[#5a5550] flex items-center justify-center gap-1">
              <span aria-hidden>🔒</span>
              {register.securityNote}
            </p>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
