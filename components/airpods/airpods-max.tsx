'use client';

import { useRef, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import airpodsMax from "@/public/images/banners/airpods-max.png";

export default function AipodsMax() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const playedRef = useRef(false);
  const readyForNextRef = useRef(false);

  useEffect(() => {
    const elements = sectionRef.current;
    const nextSection = document.getElementById('comparation-section');

    if (!elements) return;

    // initial timeline animation, starting with pause state
    const tl = gsap.timeline({ paused: true });

    // inital first condition for hero image
    gsap.set('.airpods-max-img', {
      transformOrigin: 'center center',
      scale: 1,
    });

    // scale image
    tl.to('.airpods-max-img', {
      scaleX: 1.9,
      scaleY: 1.9,
      y: -500,
      duration: 1,
    });

    // scale title
    tl.to(
      '.airpods-max-title',
      {
        scale: 0.8,
        y: -20,
        duration: 1,
      },
      '<0.02', // starting time animation same as before
    );

    tl.to(
      '.airpods-max-price',
      {
        scale: 1,
        y: -20,
        duration: 1,
      },
      '<0.02',
    );

    tl.to(
      '.airpods-max-actions',
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
    <section
      id="next-section"
      ref={sectionRef}
      className="h-screen bg-white text-black flex items-center justify-center"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 z-1 flex items-center justify-center pointer-events-none">
          <Image
            src={airpodsMax}
            alt="airpods"
            priority
            className="airpods-max-img w-[30vw] max-w-none object-contain will-change-transform"
          />
        </div>
        <div className="relative z-0 mt-[200px] flex flex-col items-center text-center">
          <h1 className="airpods-max-title text-[90px] md:text-[100px] lg:text-[170px] font-bold text-[#1d1d1f]">
            AirPods Max
          </h1>
          <p className="airpods-description text-[22px] mt-[-30px] text-[#1d1d1f]">
            &#8377;19900.00*
          </p>
          <div className="airpods-max-actions flex mt-[170px] items-center gap-6">
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
