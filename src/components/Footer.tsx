import { motion } from "framer-motion";
import footerData from "../data/footer.json";
import footerLogo from "../assets/footer-logo.webp";

interface FooterData {
  tagline: string;
  copyright: string;
}

export default function Footer() {
  const data = footerData as FooterData;

  return (
    <motion.footer
      className="py-10 px-6 bg-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-2xl mx-auto text-center">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src={footerLogo}
            alt="MediaZilla"
            className="h-12 w-auto object-contain"
          />
        </div>

        {/* Tagline */}
        <p className="text-slate-300 leading-relaxed mb-8">
          {data.tagline}
        </p>

        {/* Separator */}
        <div className="w-20 h-0.5 bg-brand mx-auto mb-8" />

        {/* Copyright */}
        <p className="text-slate-500 text-sm">{data.copyright}</p>
      </div>
    </motion.footer>
  );
}
