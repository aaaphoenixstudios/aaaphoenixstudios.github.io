import { motion } from "motion/react";

export default function TrustBar() {
  const platforms = [
    { name: "Netflix", logo: "NETFLIX" },
    { name: "Prime Video", logo: "PRIME" },
    { name: "Hotstar", logo: "HOTSTAR" },
    { name: "Apple TV+", logo: "APPLE" },
    { name: "Disney+", logo: "DISNEY" },
    { name: "Zee5", logo: "ZEE5" }
  ];

  return (
    <section className="bg-white border-y border-[#ECE7DF] py-8 md:py-12 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-center text-[10px] font-mono text-[#666666] uppercase tracking-widest mb-8 font-bold">
          TRUSTED PLATFORM PARTNERS
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {platforms.map((platform, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0.6 }}
              whileHover={{ opacity: 1 }}
              className="text-[11px] font-bold text-[#999999] uppercase tracking-widest hover:text-[#FC8019] transition-colors cursor-default"
            >
              {platform.logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
