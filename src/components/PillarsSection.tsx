import { motion } from "framer-motion";
import pillarsData from "../data/pillars.json";

interface Pillar {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
}

interface PillarsData {
  label: string;
  title: { line1: string; line2: string };
  subtitle: string;
  pillars: Pillar[];
}

function PillarIcon({ icon }: { icon: string }) {
  const size = 24;
  switch (icon) {
    case "dollar":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z" />
        </svg>
      );
    case "share":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <path d="m8.59 13.51 6.83 3.98" />
          <path d="m15.41 6.51-6.82 3.98" />
        </svg>
      );
    case "monitor":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <path d="M8 21h8" />
          <path d="M12 17v4" />
        </svg>
      );
    case "lightning":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 2v11h3v9l7-12h-4l4-8z" />
        </svg>
      );
    default:
      return null;
  }
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export default function PillarsSection() {
  const data = pillarsData as PillarsData;

  return (
    <motion.section
      className="py-12 md:py-16 px-6 bg-[#fafaf9]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div className="text-center mb-10" variants={fadeInUp}>
          <div className="inline-block px-4 py-1.5 rounded-lg bg-white border-2 border-brand/60 text-[#2a2520] text-xs font-semibold tracking-widest mb-6">
            {data.label}
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2a2520] leading-tight mb-4">
            {data.title.line1}
            <br />
            <span className="text-brand">{data.title.line2}</span>
          </h2>
          <p className="text-[#4a4540] text-lg max-w-2xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>
        </motion.div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.pillars.map((pillar) => (
            <motion.article
              key={pillar.id}
              variants={fadeInUp}
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-brand/20 flex items-center justify-center text-brand">
                  <PillarIcon icon={pillar.icon} />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-bold text-[#2a2520] mb-2">
                {pillar.title}
              </h3>
              <p className="text-brand font-medium text-sm mb-2">{pillar.tagline}</p>
              <p className="text-[#4a4540] text-sm leading-relaxed">
                {pillar.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
