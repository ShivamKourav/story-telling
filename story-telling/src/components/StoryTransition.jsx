import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function StoryTransition() {
  const sectionRef = useRef(null);

  const imageOneRef = useRef(null);
  const imageTwoRef = useRef(null);
  const imageThreeRef = useRef(null);

  const numberRef = useRef(null);
  const lineRef = useRef(null);
  const flashRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1800",
          scrub: 1.2,
          pin: true,
        },
      });

      // -----------------------------
      // INITIAL STATE
      // -----------------------------

      gsap.set(imageOneRef.current, {
        scale: 1.3,
        rotation: -4,
        filter: "blur(8px)",
      });

      gsap.set(imageTwoRef.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        scale: 1.2,
      });

      gsap.set(imageThreeRef.current, {
        clipPath: "inset(0% 100% 0% 0%)",
        scale: 1.3,
      });

      gsap.set(numberRef.current, {
        xPercent: -100,
        opacity: 0,
      });

      gsap.set(lineRef.current, {
        scaleX: 0,
      });

      // -----------------------------
      // FIRST IMAGE
      // -----------------------------

      tl.to(imageOneRef.current, {
        scale: 1,
        rotation: 0,
        filter: "blur(0px)",
        duration: 1.5,
        ease: "power3.out",
      })

        // -----------------------------
        // HUGE NUMBER
        // -----------------------------

        .to(
          numberRef.current,
          {
            xPercent: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power4.out",
          },
          "-=0.8"
        )

        // -----------------------------
        // HORIZONTAL LINE
        // -----------------------------

        .to(
          lineRef.current,
          {
            scaleX: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )

        // -----------------------------
        // IMAGE TWO REVEAL
        // -----------------------------

        .to(
          imageTwoRef.current,
          {
            clipPath: "inset(0% 0% 0% 0%)",
            scale: 1,
            duration: 1.4,
            ease: "power4.inOut",
          },
          "+=0.2"
        )

        // -----------------------------
        // FIRST IMAGE MOVES AWAY
        // -----------------------------

        .to(
          imageOneRef.current,
          {
            scale: 1.25,
            xPercent: -15,
            rotation: 3,
            filter: "blur(6px)",
            opacity: 0.3,
            duration: 1,
          },
          "<"
        )

        // -----------------------------
        // NUMBER MOVES
        // -----------------------------

        .to(
          numberRef.current,
          {
            xPercent: 60,
            opacity: 0.15,
            scale: 1.5,
            duration: 1,
          },
          "<"
        )

        // -----------------------------
        // THIRD IMAGE
        // -----------------------------

        .to(
          imageThreeRef.current,
          {
            clipPath: "inset(0% 0% 0% 0%)",
            scale: 1,
            duration: 1.5,
            ease: "power4.inOut",
          },
          "+=0.1"
        )

        // -----------------------------
        // SECOND IMAGE PUSHES AWAY
        // -----------------------------

        .to(
          imageTwoRef.current,
          {
            scale: 1.2,
            xPercent: 10,
            filter: "blur(5px)",
            opacity: 0.25,
            duration: 1,
          },
          "<"
        )

        // -----------------------------
        // BLACK FLASH
        // -----------------------------

        .to(
          flashRef.current,
          {
            opacity: 1,
            duration: 0.12,
          },
          "+=0.1"
        )

        .to(
          flashRef.current,
          {
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
          }
        )

        // -----------------------------
        // FINAL IMAGE
        // -----------------------------

        .to(
          imageThreeRef.current,
          {
            scale: 1.12,
            duration: 1.5,
            ease: "power2.out",
          },
          "-=0.2"
        )

        .to(
          numberRef.current,
          {
            xPercent: 120,
            opacity: 0,
            duration: 0.8,
          },
          "<"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* IMAGE 1 */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={imageOneRef}
          src="/images/chapter2.jpg"
          alt=""
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* IMAGE 2 */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={imageTwoRef}
          src="/images/scene1.jpg"
          alt=""
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* IMAGE 3 */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={imageThreeRef}
          src="/images/scene2.jpg"
          alt=""
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* CINEMATIC DARK GRADIENT */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/70" />

      {/* HUGE NUMBER */}
      <div
        ref={numberRef}
        className="pointer-events-none absolute left-0 top-1/2 z-20 -translate-y-1/2"
      >
        <span className="block text-[30vw] font-bold leading-none tracking-[-0.12em] text-white/15">
          02
        </span>
      </div>

      {/* HORIZONTAL LIGHT */}
      <div className="absolute left-0 top-1/2 z-30 w-full -translate-y-1/2">
        <div
          ref={lineRef}
          className="h-px w-full origin-left bg-white/40"
        />
      </div>

      {/* SMALL CORNER INFO */}
      <div className="absolute left-7 top-7 z-40">
        <span className="text-[9px] uppercase tracking-[0.6em] text-white/40">
          02
        </span>
      </div>

      <div className="absolute bottom-7 right-7 z-40">
        <span className="text-[8px] uppercase tracking-[0.5em] text-white/30">
          Transition
        </span>
      </div>

      {/* BLACK FLASH */}
      <div
        ref={flashRef}
        className="pointer-events-none absolute inset-0 z-50 bg-black opacity-0"
      />
    </section>
  );
}

export default StoryTransition;