import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    setOpen(false);

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 400);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed left-0 top-0 z-50 flex w-full items-center justify-between px-6 py-6 md:px-12"
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          className="group flex items-center gap-3"
        >
          <span className="h-2 w-2 rounded-full bg-white transition-transform duration-300 group-hover:scale-150" />

          <span className="text-xs font-bold uppercase tracking-[0.45em]">
            Story
          </span>
        </button>

        {/* Center text */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 md:block">
          <span className="text-[9px] uppercase tracking-[0.5em] text-white/30">
            A journey through the unknown
          </span>
        </div>

        {/* MENU BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className="group flex items-center gap-3"
        >
          <span className="text-[9px] uppercase tracking-[0.4em] text-white/40 transition group-hover:text-white">
            Menu
          </span>

          <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/20 backdrop-blur-md transition-all duration-500 group-hover:border-white group-hover:bg-white">
            <span className="flex flex-col gap-1.5">
              <span className="h-px w-4 bg-white transition-all duration-300 group-hover:w-3 group-hover:bg-black" />
              <span className="h-px w-4 bg-white transition-all duration-300 group-hover:w-4 group-hover:bg-black" />
            </span>
          </span>
        </button>
      </motion.nav>

      {/* ================= FULLSCREEN MENU ================= */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 95% 5%)" }}
            animate={{ clipPath: "circle(150% at 95% 5%)" }}
            exit={{ clipPath: "circle(0% at 95% 5%)" }}
            transition={{
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="fixed inset-0 z-50 bg-[#080808]"
          >
            {/* Top */}
            <div className="absolute left-6 right-6 top-6 flex items-center justify-between md:left-12 md:right-12">
              <span className="text-xs font-bold uppercase tracking-[0.45em]">
                Story
              </span>

              <button
                onClick={() => setOpen(false)}
                className="group flex items-center gap-3"
              >
                <span className="text-[9px] uppercase tracking-[0.4em] text-white/40">
                  Close
                </span>

                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition group-hover:bg-white group-hover:text-black">
                  <X size={17} />
                </span>
              </button>
            </div>

            {/* Navigation */}
            <div className="flex h-full items-center px-8 md:px-20 lg:px-32">
              <div className="w-full">

                <p className="mb-10 text-[9px] uppercase tracking-[0.6em] text-white/25">
                  Navigate the story
                </p>

                <NavItem
                  number="01"
                  title="Home"
                  onClick={() => scrollTo("home")}
                />

                <NavItem
                  number="02"
                  title="The Story"
                  onClick={() => scrollTo("story")}
                />

                <NavItem
                  number="03"
                  title="The End"
                  onClick={() => scrollTo("ending")}
                />

              </div>
            </div>

            {/* Bottom */}
            <div className="absolute bottom-7 left-8 right-8 flex justify-between md:left-20 md:right-20">
              <span className="text-[8px] uppercase tracking-[0.45em] text-white/20">
                Every story has a beginning
              </span>

              <span className="text-[8px] uppercase tracking-[0.45em] text-white/20">
                2026
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


/* ================= MENU ITEM ================= */

function NavItem({ number, title, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      initial="rest"
      whileHover="hover"
      className="group flex w-full items-center border-b border-white/10 py-5 text-left md:py-7"
    >
      {/* Number */}
      <span className="mr-7 w-8 text-[10px] text-white/25">
        {number}
      </span>

      {/* Title */}
      <motion.span
        variants={{
          rest: { x: 0 },
          hover: { x: 15 },
        }}
        className="text-4xl font-bold uppercase tracking-[-0.03em] text-white/80 transition-colors duration-300 group-hover:text-white md:text-7xl lg:text-8xl"
      >
        {title}
      </motion.span>

      {/* Arrow */}
      <motion.span
        variants={{
          rest: {
            opacity: 0,
            x: -15,
            rotate: 0,
          },
          hover: {
            opacity: 1,
            x: 0,
            rotate: 45,
          },
        }}
        className="ml-auto"
      >
        <ArrowUpRight size={30} strokeWidth={1.5} />
      </motion.span>
    </motion.button>
  );
}

export default Navbar;