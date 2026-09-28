import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ChapterTwo() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const imageBoxRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=1600",
          scrub: 1,
          pin: true,
        },
      });

      tl.fromTo(
        imageBoxRef.current,
        {
          clipPath: "inset(100% 0% 0% 0%)",
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.2,
          ease: "power3.inOut",
        }
      )

        .fromTo(
          imageRef.current,
          {
            scale: 1.3,
          },
          {
            scale: 1,
            duration: 1.2,
          },
          "<"
        )

        .fromTo(
          textRef.current,
          {
            x: -100,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
          },
          "-=0.5"
        )

        .to(
          textRef.current,
          {
            x: 100,
            opacity: 0,
            duration: 0.8,
          },
          "+=0.5"
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-[#090909]"
    >

      {/* Background */}
      <div className="absolute inset-0 bg-[#090909]" />

      {/* Image */}
      <div
        ref={imageBoxRef}
        className="absolute right-0 top-0 h-full w-full md:w-[60%]"
      >
        <img
          ref={imageRef}
          src="/images/chapter2.jpg"
          alt="Chapter 2"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Left Gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-[#090909] via-[#090909]/80 to-transparent" />

      {/* Text */}
      <div
        ref={textRef}
        className="relative z-10 flex h-full items-center px-8 md:px-20"
      >
        <div className="max-w-xl">

          <p className="mb-5 text-sm uppercase tracking-[0.5em] text-white/40">
            Chapter 02
          </p>

          <h2 className="text-6xl font-bold leading-[0.9] md:text-8xl">
            INTO THE
            <br />
            UNKNOWN
          </h2>

          <div className="mt-8 h-px w-24 bg-white/30" />

          <p className="mt-8 text-lg leading-relaxed text-white/60">
            The path ahead was unfamiliar.
            Every step revealed something new,
            and there was no turning back.
          </p>

          <p className="mt-6 text-sm uppercase tracking-[0.3em] text-white/30">
            The journey continues
          </p>

        </div>
      </div>

      {/* Chapter Number */}
      <div className="absolute bottom-8 right-8 z-10 text-[8rem] font-bold leading-none text-white/10 md:right-16 md:text-[14rem]">
        02
      </div>

    </section>
  );
}

export default ChapterTwo;