import { motion } from "framer-motion";
import hostData from "../data/host.json";

interface Stat {
  icon: string;
  value: string;
  label: string;
}

interface HostData {
  label: string;
  title: { line1: string; line2: string };
  host: {
    image: string;
    role: string;
    name: string;
    description: string;
    stats: Stat[];
    followLabel: string;
    links: { label: string; url: string }[];
  };
}

function StatIcon({ icon }: { icon: string }) {
  const size = 20;
  switch (icon) {
    case "people":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "mic":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <line x1="12" y1="19" x2="12" y2="23" />
          <line x1="8" y1="23" x2="16" y2="23" />
        </svg>
      );
    case "book":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          <path d="M8 7h8" />
          <path d="M8 11h8" />
        </svg>
      );
    case "award":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7" />
          <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
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

export default function HostSection() {
  const data = hostData as HostData;

  return (
    <motion.section
      className="py-12 md:py-16 px-6 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div className="text-center mb-10" variants={fadeInUp}>
          <div className="inline-block px-4 py-1.5 rounded-lg bg-white border-2 border-brand/60 text-[#2a2520] text-xs font-semibold tracking-widest mb-6">
            {data.label}
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2a2520] leading-tight">
            {data.title.line1} <span className="text-brand">{data.title.line2}</span>
          </h2>
        </motion.div>

        {/* Host card */}
        <motion.article
          variants={fadeInUp}
          className="flex flex-col md:flex-row overflow-hidden rounded-2xl bg-white shadow-md border border-[#f0eeeb]"
        >
          {/* Image */}
          <div className="md:w-2/5 min-h-[300px] md:min-h-[400px] bg-[#f5f3f0]">
            {data.host.image ? (
              <img
                src={data.host.image}
                alt={data.host.name}
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#f5f3f0] to-[#e8e6e3]">
                <svg
                  className="w-24 h-24 text-[#c4c0b8]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
            <p className="text-brand text-xs font-bold tracking-widest mb-2">
              {data.host.role}
            </p>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#2a2520] mb-4">
              {data.host.name}
            </h3>
            <p className="text-[#4a4540] leading-relaxed mb-8">
              {data.host.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {data.host.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center p-4 rounded-xl border-2 border-brand/30 text-center"
                >
                  <div className="text-brand mb-2">
                    <StatIcon icon={stat.icon} />
                  </div>
                  <span className="font-bold text-[#2a2520] text-lg">{stat.value}</span>
                  <span className="text-sm text-[#5a5550]">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Follow links */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-[#5a5550]">{data.host.followLabel}</span>
              {data.host.links.map((link, i) => (
                <span key={link.label}>
                  <a
                    href={link.url}
                    className="text-sm font-medium text-[#2a2520] underline hover:text-brand transition-colors"
                  >
                    {link.label}
                  </a>
                  {i < data.host.links.length - 1 && (
                    <span className="mx-2 text-[#c4c0b8]">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </motion.article>
      </div>
    </motion.section>
  );
}
