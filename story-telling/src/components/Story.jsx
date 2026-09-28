import { motion } from "framer-motion";
import story from "../data/story";

function Story() {
  return (
    <section className="bg-black">
      {story.map((item, index) => (
        <section
          key={item.chapter}
          className="relative flex min-h-screen items-center overflow-hidden"
        >
          {/* IMAGE */}
          <motion.div
            initial={{ scale: 1.15 }}
            whileInView={{ scale: 1 }}
            transition={{
              duration: 2,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="absolute inset-0"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/45" />

          <div className="absolute inset-0 bg-linear-to-r from-black via-black/55 to-transparent" />

          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/20" />

          {/* CONTENT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            className="relative z-10 max-w-4xl px-7 md:px-16 lg:px-24"
          >
            {/* CHAPTER */}
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-12 bg-white/50" />

              <p className="text-[9px] uppercase tracking-[0.6em] text-white/45">
                {item.chapter}
              </p>
            </div>

            {/* TITLE */}
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
                {item.title}
              </motion.h2>
            </div>

            {/* LINE */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 100 }}
              transition={{
                delay: 0.4,
                duration: 0.8,
              }}
              viewport={{ once: true }}
              className="mt-8 h-px bg-white/40"
            />

            {/* DESCRIPTION */}
            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
                duration: 0.8,
              }}
              viewport={{ once: true }}
              className="mt-7 max-w-md text-sm leading-7 text-white/55 md:text-base"
            >
              {item.description}
            </motion.p>
          </motion.div>

          {/* HUGE NUMBER */}
          <div className="pointer-events-none absolute bottom-[-3vw] right-[-1vw]">
            <span className="text-[30vw] font-bold leading-none tracking-[-0.12em] text-white/6">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* SIDE NUMBER */}
          <div className="absolute right-7 top-1/2 z-20 hidden -translate-y-1/2 md:block">
            <div className="flex flex-col items-center gap-4">
              <span className="text-[9px] uppercase tracking-[0.5em] text-white/30 [writing-mode:vertical-rl]">
                The Journey
              </span>

              <div className="h-20 w-px bg-white/20" />

              <span className="text-[9px] text-white/30">
                {String(index + 1).padStart(2, "0")} / 04
              </span>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="absolute bottom-7 left-7 right-7 z-20 flex justify-between md:left-16 md:right-16">
            <span className="text-[8px] uppercase tracking-[0.5em] text-white/25">
              Keep moving
            </span>

            <span className="text-[8px] uppercase tracking-[0.5em] text-white/25">
              2026
            </span>
          </div>
        </section>
      ))}
    </section>
  );
}

export default Story;