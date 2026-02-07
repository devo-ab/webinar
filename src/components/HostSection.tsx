import { motion } from "framer-motion";
import hostData from "../data/host.json";
import authorImage from "../assets/author.jpg";

interface HostData {
  label: string;
  title: { line1: string; line2: string };
  host: {
    image: string;
    role: string;
    name: string;
    description: string;
    stats: { icon: string; value: string; label: string }[];
    followLabel: string;
    links: { label: string; url: string }[];
  };
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
            <img
              src={authorImage}
              alt={data.host.name}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Content */}
          <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
            <p className="text-brand text-xs font-bold tracking-widest mb-2">
              {data.host.role}
            </p>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#2a2520] mb-4">
              {data.host.name}
            </h3>
            <p className="text-[#4a4540] leading-relaxed mb-6">
              {data.host.description}
            </p>

          </div>
        </motion.article>
      </div>
    </motion.section>
  );
}
