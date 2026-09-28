import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ChapterThree() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),

        ease: "none",

        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-[#080808]"
    >
      <div
        ref={trackRef}
        className="flex h-full w-max items-center"
      >

        {/* Intro */}
        <div className="flex h-full w-screen shrink-0 items-center px-10 md:px-24">
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.5em] text-white/40">
              Chapter 03
            </p>

            <h2 className="text-6xl font-bold leading-none md:text-9xl">
              THE
              <br />
              JOURNEY
            </h2>

            <p className="mt-8 max-w-lg text-lg text-white/50">
              Some paths are meant to be discovered one step at a time.
            </p>
          </div>
        </div>

        {/* Scene 1 */}
        <div className="relative h-[70vh] w-[75vw] shrink-0 overflow-hidden md:w-[60vw]">
          <img
            src="/images/scene1.jpg"
            alt="Story scene"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute bottom-8 left-8">
            <p className="text-sm uppercase tracking-[0.4em] text-white/60">
              Scene 01
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              THE FIRST STEP
            </h3>
          </div>
        </div>

        {/* Scene 2 */}
        <div className="relative ml-10 h-[70vh] w-[75vw] shrink-0 overflow-hidden md:w-[60vw]">
          <img
            src="/images/scene2.jpg"
            alt="Story scene"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute bottom-8 left-8">
            <p className="text-sm uppercase tracking-[0.4em] text-white/60">
              Scene 02
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              DEEPER INTO THE UNKNOWN
            </h3>
          </div>
        </div>

        {/* Ending */}
        <div className="flex h-full w-screen shrink-0 items-center justify-center px-10 text-center">
          <div>
            <p className="text-sm uppercase tracking-[0.5em] text-white/40">
              To be continued
            </p>

            <h2 className="mt-6 text-6xl font-bold md:text-9xl">
              WHAT'S NEXT?
            </h2>
          </div>
        </div>

      </div>

      {/* Progress text */}
      <div className="absolute bottom-8 left-8 text-xs uppercase tracking-[0.4em] text-white/30">
        Scroll →
      </div>

    </section>
  );
}

export default ChapterThree;