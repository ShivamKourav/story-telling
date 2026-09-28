import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

function Hero() {
  const imageRef = useRef(null);

  useEffect(() => {
    const moveImage = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * 12;

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
    <section className="relative h-screen w-full overflow-hidden bg-black">

      {/* IMAGE */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={imageRef}
          src="/images/hero.jpg"
          alt="Story"
          className="h-full w-full object-cover transition-transform duration-700 ease-out"
        />

        {/* dark cinematic overlay */}
        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 bg-linear-to-r from-black via-black/20 to-transparent" />

        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/30" />
      </div>

      {/* LEFT CONTENT */}
      <div className="absolute bottom-[16%] left-6 z-10 md:left-16 lg:left-24">

        <motion.p
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mb-6 text-[10px] uppercase tracking-[0.7em] text-white/50"
        >
          A cinematic story
        </motion.p>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 140 }}
            animate={{ y: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-[18vw] font-bold uppercase leading-[0.75] tracking-[-0.06em] md:text-[12vw]"
          >
            YOUR
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 140 }}
            animate={{ y: 0 }}
            transition={{
              delay: 0.12,
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-[18vw] font-bold uppercase leading-[0.75] tracking-[-0.06em] text-white/90 md:text-[12vw]"
          >
            STORY
          </motion.h1>
        </div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-8 h-px bg-white/50"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-5 max-w-sm text-sm leading-relaxed text-white/50"
        >
          Every journey begins somewhere.
          <br />
          Maybe this is where yours begins.
        </motion.p>

        <motion.button
          onClick={() =>
            document.getElementById("story")?.scrollIntoView({
              behavior: "smooth",
            })
          }
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          whileHover={{ x: 8 }}
          className="mt-8 flex items-center gap-4 text-xs uppercase tracking-[0.35em] text-white/70"
        >
          Enter Story

          <span className="h-px w-12 bg-white/40" />
        </motion.button>
      </div>

      {/* RIGHT SIDE NUMBER */}
      <div className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 md:block">
        <div className="flex flex-col items-center gap-5">

          <span className="text-[10px] uppercase tracking-[0.4em] text-white/30">
            Chapter
          </span>

          <span className="text-4xl font-light text-white/70">
            01
          </span>

          <div className="h-24 w-px bg-white/20" />

          <span className="text-[10px] text-white/30">
            04
          </span>

        </div>
      </div>

      {/* BOTTOM LEFT */}
      <div className="absolute bottom-8 left-6 z-10 hidden text-[9px] uppercase tracking-[0.45em] text-white/30 md:left-16 md:block">
        Scroll to explore
      </div>

      {/* BOTTOM RIGHT */}
      <div className="absolute bottom-8 right-6 z-10 hidden text-[9px] uppercase tracking-[0.45em] text-white/30 md:block">
        2026
      </div>

      {/* SCROLL LINE */}
      <motion.div
        animate={{ height: [20, 45, 20] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-7 left-1/2 z-10 w-px -translate-x-1/2 bg-white/40"
      />
    </section>
  );
}

export default Hero;