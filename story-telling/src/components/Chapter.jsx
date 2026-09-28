import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Chapter() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const numberRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=1800",
          scrub: 1,
          pin: true,
        },
      });

      tl.to(imageRef.current, {
        scale: 1.25,
        duration: 1,
      })
        .to(
          contentRef.current,
          {
            x: -150,
            opacity: 0,
            duration: 1,
          },
          "<"
        )
        .to(
          numberRef.current,
          {
            scale: 2,
            opacity: 0,
            duration: 1,
          },
          "<"
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Image */}
      <div
        ref={imageRef}
        className="absolute inset-0 scale-100"
      >
        <img
          src="/images/chapter1.jpg"
          alt="Chapter 1"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/50 to-transparent" />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 flex h-full items-center px-8 md:px-20"
      >
        <div className="max-w-3xl">

          <p className="mb-5 text-sm uppercase tracking-[0.5em] text-white/50">
            Chapter 01
          </p>

          <h2 className="text-6xl font-bold leading-[0.9] md:text-9xl">
            THE
            <br />
            BEGINNING
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/60">
            Before the journey, there was a moment.
            A quiet moment that changed everything.
            This is where our story begins.
          </p>

        </div>
      </div>

      {/* Chapter Number */}
      <div
        ref={numberRef}
        className="absolute bottom-5 right-8 text-[10rem] font-bold leading-none text-white/10 md:right-16 md:text-[18rem]"
      >
        01
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-xs uppercase tracking-[0.5em] text-white/40">
        Keep Scrolling
      </div>
    </section>
  );
}

export default Chapter;