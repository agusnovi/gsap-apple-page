"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import Image from "next/image";
import Link from "next/link";
import airpods from "@/public/images/banners/airpods-3rd.png";

export default function Airpods3rd() {
  // initial DOM area gsap will doing
  const sectionRef = useRef<HTMLDivElement>(null);
  // as a flag that animation completed runing
  const playedRef = useRef(false);
  // as a flag to move next section
  const readyForNextRef = useRef(false);

  useEffect(() => {
    const elements = sectionRef.current;
    const nextSection = document.getElementById('next-section');

    if (!elements) return;

    // initial timeline animation, starting with pause state
    const tl = gsap.timeline({ paused: true });

    // inital first condition for hero image
    gsap.set('.airpods-img', {
      transformOrigin: 'center center',
      scale: 0.98,
    });

    // scale image
    tl.to('.airpods-img', {
      scaleX: 2.45,
      scaleY: 2.35,
      y: 20,
      duration: 1,
    });

    // scale title
    tl.to(
      '.airpods-title',
      {
        scale: 0.9,
        y: -30,
        duration: 1,
      },
      '<0.02', // starting time animation same as before
    );

    tl.to(
      '.airpods-description',
      {
        scale: 1.1,
        y: -30,
        duration: 1,
      },
      '<0.02',
    );

    tl.to(
      '.airpods-actions',
      {
        y: -30,
        duration: 1,
      },
      '<0.02',
    );

    // check to triger animation only once
    const triggerIntro = () => {
      if (playedRef.current) return;
      playedRef.current = true;

      document.body.style.overflow = 'hidden'; // lock scroll when animation running

      tl.play();
      removeIntroListeners();
    };

    // open scroll function when animation ended
    tl.eventCallback('onComplete', () => {
      document.body.style.overflow = 'auto'; // unlock scroll

      readyForNextRef.current = true;
    });

    // moving to the next section DOM
    const goNext = () => {
      if (!readyForNextRef.current) return;

      nextSection?.scrollIntoView({
        behavior: 'smooth',
      });

      removeNextListeners();
    };

    // detection scroll event
    const onWheelIntro = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > 2) triggerIntro();
    };

    // detection scroll event
    const onWheelNext = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > 2) goNext();
    };

    const removeIntroListeners = () => {
      elements.removeEventListener('wheel', onWheelIntro);

      window.addEventListener('wheel', onWheelNext, { passive: true });
    };

    const removeNextListeners = () => {
      window.removeEventListener('wheel', onWheelNext);
    };

    elements.addEventListener('wheel', onWheelIntro, { passive: true }); // blocked preventdefault

    return () => {
      removeIntroListeners();
      removeNextListeners();
      tl.kill();
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <section ref={sectionRef} className="h-screen bg-[#f8f8f8] overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 z-1 ml-[-50px] mt-[250px] flex items-center justify-center pointer-events-none">
          <Image
            src={airpods}
            alt="airpods"
            priority
            className="airpods-img w-[55vw] max-w-none object-contain will-change-transform"
          />
        </div>
        <div className="relative z-0 flex mt-[300px] ml-[-100px] flex-col items-center text-center">
          <h1 className="airpods-title text-[72px] md:text-[10px] lg:text-[120px] font-bold text-[#1d1d1f]">
            AirPods
          </h1>
          <p className="airpods-description mt-2 text-[22px] font-semibold text-[#1d1d1f]">
            3rd generation
          </p>
          <p className="airpods-description text-[22px] font-semibold text-[#1d1d1f]">
            From &#8377;19900.00*
          </p>
          <div className="airpods-actions flex mt-[100px] items-center gap-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white w-[78px] h-[48px] text-[18px] rounded-full transition">
              Buy
            </button>

            <Link
              href="#"
              className="text-blue-600 text-[18px] flex items-center gap-1 hover:underline"
            >
              Learn more
              <span className="text-lg">›</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
