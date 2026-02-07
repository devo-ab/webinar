import deepDiveData from "../data/deep-dive.json";

interface DeepDiveItem {
  id: string;
  title: string;
  description: string;
  image: string;
  stat: { value: string; label: string };
  imageLeft: boolean;
}

interface DeepDiveData {
  label: string;
  title: string;
  items: DeepDiveItem[];
  cta: { text: string; url: string };
}

const imagePlaceholders: Record<string, string> = {
  "01": "linear-gradient(135deg, #2d1810 0%, #4a1a1c 50%, #B91118 100%)",
  "02": "linear-gradient(135deg, #1a0f0a 0%, #3d0f11 50%, #B91118 100%)",
  "03": "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
  "04": "linear-gradient(135deg, #0d0d0d 0%, #1a0a0a 50%, #B91118 100%)",
};

export default function DeepDiveSection() {
  const data = deepDiveData as DeepDiveData;

  return (
    <section className="py-12 md:py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-brand/90 text-sm font-semibold tracking-widest mb-3">
            {data.label}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2a2520]">
            {data.title}
          </h2>
        </div>

        {/* Feature cards */}
        <div className="space-y-6">
          {data.items.map((item) => (
            <article
              key={item.id}
              className={`flex flex-col md:flex-row gap-0 overflow-hidden rounded-2xl bg-[#f5f3f0] ${
                item.imageLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Image block */}
              <div className="relative md:w-1/2 min-h-[240px] md:min-h-[280px]">
                {item.image ? (
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className="w-full h-full"
                    style={{
                      background: imagePlaceholders[item.id] || "#2d1810",
                    }}
                  />
                )}
                {/* Stat overlay */}
                <div className="absolute bottom-4 left-4 right-4 md:right-auto md:max-w-[200px] bg-black/70 backdrop-blur-sm rounded-lg px-4 py-3 text-white">
                  <div className="text-2xl font-bold">{item.stat.value}</div>
                  <div className="text-sm text-white/90">{item.stat.label}</div>
                </div>
              </div>

              {/* Text block */}
              <div className="relative md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                <span className="absolute top-8 right-8 text-8xl font-bold text-brand/15 select-none">
                  {item.id}
                </span>
                <div className="relative">
                  <div className="w-12 h-0.5 bg-brand/70 mb-4" />
                  <h3 className="font-serif text-2xl font-bold text-[#2a2520] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#5a5550] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href={data.cta.url}
            className="inline-flex items-center justify-center px-10 py-4 rounded-lg bg-brand text-white font-semibold text-lg hover:bg-[#9a0e14] transition-colors"
          >
            {data.cta.text}
          </a>
        </div>
      </div>
    </section>
  );
}
