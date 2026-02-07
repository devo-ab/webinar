import { motion } from "framer-motion";
import heroData from "../data/hero.json";
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

export default function Hero() {
  const data = heroData as HeroData;

  return (
    <section className="hero relative h-screen flex items-center justify-center overflow-hidden">
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
        className="relative z-10 w-full max-w-3xl mx-auto px-6 py-24 text-center"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
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
          className="text-lg md:text-xl text-slate-200 font-light max-w-2xl mx-auto mb-6"
          variants={fadeInUp}
        >
          {data.subheadline}
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-slate-400 text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed"
          variants={fadeInUp}
        >
          {data.description}
        </motion.p>

        {/* Event details */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-white text-sm mb-10 px-6 py-4 rounded-xl bg-black/60 backdrop-blur-sm"
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

        {/* CTA Button */}
        <motion.div variants={fadeInUp} className="inline-block">
          <a
            href={data.cta.url}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-brand text-white font-semibold text-lg shadow-lg shadow-brand/30 hover:bg-[#9a0e14] transition-colors duration-200 hover:scale-105"
          >
            {data.cta.text}
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>

        {/* Footer */}
        <motion.p
          className="mt-12 text-slate-500 text-sm"
          variants={fadeInUp}
        >
          {data.footer}
        </motion.p>
      </motion.div>
    </section>
  );
}
