import { useState } from "react";
import { motion } from "framer-motion";
import registerData from "../data/register.json";

interface RegisterData {
  headline: string;
  title: { line1: string; line2: string };
  description: string;
  benefits: string[];
  event: { date: string; time: string };
  form: {
    title: string;
    fields: Record<
      string,
      { label: string; placeholder: string; required: boolean }
    >;
    roles: string[];
    submitText: string;
    securityNote: string;
  };
}

export default function RegisterSection() {
  const data = registerData as RegisterData;
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    business: "",
    role: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., send to API)
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <motion.section
      id="register"
      className="py-12 md:py-16 px-6 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column - Webinar details */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-lg bg-white border-2 border-brand/60 text-[#2a2520] text-xs font-semibold tracking-widest mb-6">
              {data.headline}
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2a2520] leading-tight mb-6">
              {data.title.line1}
              <br />
              <span className="text-brand italic">{data.title.line2}</span>
            </h2>
            <p className="text-[#4a4540] text-lg leading-relaxed mb-8">
              {data.description}
            </p>

            {/* Benefits list */}
            <ul className="space-y-4 mb-10">
              {data.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-brand mt-2 flex-shrink-0" />
                  <span className="text-[#2a2520]">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Date/time block */}
            <div className="inline-flex items-start gap-3 p-4 rounded-xl bg-[#f5f3f0]">
              <svg
                className="w-5 h-5 text-brand flex-shrink-0 mt-0.5"
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
              <div>
                <div className="font-bold text-[#2a2520]">{data.event.date}</div>
                <div className="text-sm text-[#5a5550]">{data.event.time}</div>
              </div>
            </div>
          </motion.div>

          {/* Right column - Registration form */}
          <motion.div
            className="bg-[#f5f3f0] rounded-2xl p-8 shadow-sm"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-serif text-2xl font-bold text-[#2a2520] text-center mb-8">
              {data.form.title}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-[#2a2520] mb-1.5"
                  >
                    {data.form.fields.firstName.label}{" "}
                    {data.form.fields.firstName.required && "*"}
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder={data.form.fields.firstName.placeholder}
                    required={data.form.fields.firstName.required}
                    value={formState.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/80 text-[#2a2520] placeholder:text-[#8a8580] focus:outline-none focus:ring-2 focus:ring-brand/50"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-[#2a2520] mb-1.5"
                  >
                    {data.form.fields.lastName.label}{" "}
                    {data.form.fields.lastName.required && "*"}
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder={data.form.fields.lastName.placeholder}
                    required={data.form.fields.lastName.required}
                    value={formState.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/80 text-[#2a2520] placeholder:text-[#8a8580] focus:outline-none focus:ring-2 focus:ring-brand/50"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#2a2520] mb-1.5"
                >
                  {data.form.fields.email.label}{" "}
                  {data.form.fields.email.required && "*"}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={data.form.fields.email.placeholder}
                  required={data.form.fields.email.required}
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/80 text-[#2a2520] placeholder:text-[#8a8580] focus:outline-none focus:ring-2 focus:ring-brand/50"
                />
              </div>

              <div>
                <label
                  htmlFor="business"
                  className="block text-sm font-medium text-[#2a2520] mb-1.5"
                >
                  {data.form.fields.business.label}
                </label>
                <input
                  type="text"
                  id="business"
                  name="business"
                  placeholder={data.form.fields.business.placeholder}
                  value={formState.business}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/80 text-[#2a2520] placeholder:text-[#8a8580] focus:outline-none focus:ring-2 focus:ring-brand/50"
                />
              </div>

              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-[#2a2520] mb-1.5"
                >
                  {data.form.fields.role.label}{" "}
                  {data.form.fields.role.required && "*"}
                </label>
                <select
                  id="role"
                  name="role"
                  required={data.form.fields.role.required}
                  value={formState.role}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/80 text-[#2a2520] placeholder:text-[#8a8580] focus:outline-none focus:ring-2 focus:ring-brand/50 appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%235a5550'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 0.75rem center",
                    backgroundSize: "1.25rem",
                    paddingRight: "2.5rem",
                  }}
                >
                  <option value="">
                    {data.form.fields.role.placeholder}
                  </option>
                  {data.form.roles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-lg bg-brand hover:bg-[#9a0e14] text-white font-semibold text-lg transition-colors flex items-center justify-center gap-2"
              >
                {data.form.submitText}
                <span aria-hidden>→</span>
              </button>

              <p className="text-center text-sm text-[#5a5550] flex items-center justify-center gap-2">
                <span aria-hidden>🔒</span>
                {data.form.securityNote}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
