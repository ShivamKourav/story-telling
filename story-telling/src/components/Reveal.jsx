import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

function Reveal() {
  const imageRef = useRef(null);

  useEffect(() => {
    const moveImage = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 8;
      const y = (e.clientY / window.innerHeight - 0.5) * 8;

      if (imageRef.current) {
        imageRef.current.style.transform = `
          scale(1.08)
          translate(${x}px, ${y}px)
        `;
      }
    };

    window.addEventListener("mousemove", moveImage);

    return () => {
      window.removeEventListener("mousemove", moveImage);
    };
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={imageRef}
          src="/images/scene2.jpg"
          alt="The Choice"
          className="h-full w-full object-cover transition-transform duration-700 ease-out"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-linear-to-r from-black via-black/55 to-transparent" />

        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/20" />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 max-w-5xl px-7 md:px-16 lg:px-24"
      >
        {/* Chapter */}
        <div className="mb-7 flex items-center gap-4">
          <span className="h-px w-12 bg-white/50" />

          <p className="text-[9px] uppercase tracking-[0.6em] text-white/45">
            Chapter 04
          </p>
        </div>

        {/* Heading */}
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: 120 }}
            whileInView={{ y: 0 }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true }}
            className="text-[16vw] font-bold uppercase leading-[0.78] tracking-[-0.07em] md:text-[10vw]"
          >
            The
            <br />
            Choice
          </motion.h2>
        </div>

        {/* Line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 100 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 h-px bg-white/40"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-7 max-w-md text-sm leading-7 text-white/55 md:text-base"
        >
          At the edge of everything familiar, there was only one question
          left — keep going, or turn back.
        </motion.p>
      </motion.div>

      {/* Background Number */}
      <div className="pointer-events-none absolute bottom-[-3vw] right-[-1vw]">
        <span className="text-[30vw] font-bold leading-none tracking-[-0.12em] text-white/6">
          04
        </span>
      </div>

      {/* Right Side */}
      <div className="absolute right-7 top-1/2 z-20 hidden -translate-y-1/2 md:block">
        <div className="flex flex-col items-center gap-4">
          <span className="text-[9px] uppercase tracking-[0.5em] text-white/30 [writing-mode:vertical-rl]">
            The moment before everything changes
          </span>

          <div className="h-20 w-px bg-white/20" />

          <span className="text-[9px] text-white/30">
            04 / 05
          </span>
        </div>
      </div>

      {/* Bottom */}
      <div className="absolute bottom-7 left-7 right-7 z-20 flex justify-between md:left-16 md:right-16">
        <span className="text-[8px] uppercase tracking-[0.5em] text-white/25">
          Keep moving
        </span>

        <span className="text-[8px] uppercase tracking-[0.5em] text-white/25">
          2026
        </span>
      </div>
    </section>
  );
}

export default Reveal;