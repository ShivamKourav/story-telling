import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

function Ending() {
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;

    if (!image) return;

    const animation = image.animate(
      [
        {
          transform: "scale(1.02)",
        },
        {
          transform: "scale(1.12)",
        },
      ],
      {
        duration: 20000,
        easing: "ease-in-out",
        direction: "alternate",
        iterations: Infinity,
      }
    );

    return () => animation.cancel();
  }, []);

  const startAgain = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="ending"
      className="relative h-screen min-h-screen w-full overflow-hidden bg-black text-white"
    >
      {/* IMAGE */}

      <div className="absolute inset-0">
        <img
          ref={imageRef}
          src="/images/final.jpg"
          alt=""
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black" />

        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-transparent to-black/40" />
      </div>

      {/* TOP */}

      <div className="absolute left-7 right-7 top-7 z-20 flex justify-between md:left-12 md:right-12">
        <span className="text-[9px] uppercase tracking-[0.6em] text-white/35">
          Epilogue
        </span>

        <span className="text-[9px] uppercase tracking-[0.5em] text-white/30">
          05
        </span>
      </div>

      {/* CENTER */}

      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-5xl">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-[9px] uppercase tracking-[0.7em] text-white/40"
          >
            And then, silence.
          </motion.p>

          <div className="mt-8 overflow-hidden">
            <motion.h1
              initial={{ y: 150 }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 1.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
              className="text-[18vw] font-bold uppercase leading-[0.72] tracking-[-0.08em] md:text-[12vw]"
            >
              Beyond
            </motion.h1>
          </div>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 90 }}
            transition={{
              delay: 0.5,
              duration: 1,
            }}
            viewport={{ once: true }}
            className="mx-auto mt-8 h-px bg-white/40"
          />

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.7,
              duration: 0.9,
            }}
            viewport={{ once: true }}
            className="mx-auto mt-8 max-w-lg text-sm leading-7 text-white/50 md:text-base"
          >
            The path ends here.
            <br />
            But the feeling doesn't.
            <br />
            Some stories are meant to stay with you.
          </motion.p>

          {/* START AGAIN */}

          <motion.button
            onClick={startAgain}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1,
              duration: 0.8,
            }}
            viewport={{ once: true }}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            className="group mx-auto mt-10 flex items-center gap-4"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/25 transition-all duration-500 group-hover:border-white group-hover:bg-white">
              <motion.span
                variants={{
                  hover: {
                    rotate: 45,
                  },
                }}
                className="text-lg transition-colors duration-500 group-hover:text-black"
              >
                ↗
              </motion.span>
            </span>

            <span className="text-left">
              <span className="block text-[8px] uppercase tracking-[0.5em] text-white/30">
                Return
              </span>

              <span className="mt-2 block text-xs uppercase tracking-[0.3em] text-white/75">
                Start Again
              </span>
            </span>
          </motion.button>
        </div>
      </div>

      {/* HUGE BACK TEXT */}

      <div className="pointer-events-none absolute bottom-[-5vw] left-1/2 -translate-x-1/2">
        <span className="text-[32vw] font-bold leading-none tracking-[-0.12em] text-[rgba(255,255,255,0.025)]">
          END
        </span>
      </div>

      {/* SIDE */}

      <div className="absolute bottom-7 left-7 right-7 z-20 flex justify-between md:left-12 md:right-12">
        <span className="text-[8px] uppercase tracking-[0.5em] text-white/20">
          Some stories never really end
        </span>

        <span className="text-[8px] uppercase tracking-[0.5em] text-white/20">
          05 / 05
        </span>
      </div>
    </section>
  );
}

export default Ending;