import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

function Footer() {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black text-white">
      <div className="px-7 py-16 md:px-16 md:py-20 lg:px-24">

        {/* Top */}
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-start">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-white" />

              <span className="text-xs font-bold uppercase tracking-[0.5em]">
                Story
              </span>
            </div>

            <p className="mt-5 max-w-xs text-sm leading-6 text-white/35">
              A journey through the unknown.
              <br />
              Every moment becomes a part of the story.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <span className="mb-2 text-[8px] uppercase tracking-[0.5em] text-white/25">
              Explore
            </span>

            <button
              onClick={() =>
                document.getElementById("home")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="w-fit text-xs uppercase tracking-[0.25em] text-white/55 transition-colors hover:text-white"
            >
              Home
            </button>

            <button
              onClick={() =>
                document.getElementById("story")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="w-fit text-xs uppercase tracking-[0.25em] text-white/55 transition-colors hover:text-white"
            >
              The Story
            </button>

            <button
              onClick={() =>
                document.getElementById("ending")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="w-fit text-xs uppercase tracking-[0.25em] text-white/55 transition-colors hover:text-white"
            >
              Beyond
            </button>
          </div>

          {/* Back To Top */}
          <div className="md:text-right">
            <span className="text-[8px] uppercase tracking-[0.5em] text-white/25">
              Return to the beginning
            </span>

            <motion.button
              onClick={backToTop}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="mt-5 flex items-center gap-4 md:ml-auto"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-white/60">
                Back to top
              </span>

              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:border-white hover:bg-white hover:text-black">
                <ArrowUp size={16} strokeWidth={1.5} />
              </span>
            </motion.button>
          </div>
        </div>

        {/* Divider */}
        <div className="my-14 h-px w-full bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <p className="text-[8px] uppercase tracking-[0.45em] text-white/20">
            Some stories never really end
          </p>

          <div className="flex items-center gap-6">
            <span className="text-[8px] uppercase tracking-[0.45em] text-white/20">
              Chapter 05
            </span>

            <span className="h-px w-8 bg-white/20" />

            <span className="text-[8px] uppercase tracking-[0.45em] text-white/20">
              2026
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;