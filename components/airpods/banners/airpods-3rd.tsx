"use client";

import { useEffect, useRef } from "react";
import { gsap, useGSAP } from '@/lib/gsap';
import Image from "next/image";
import Link from "next/link";
import arrow from "@/public/assets/arrow.png";
import airpodsMax from '@/public/images/banners/airpods-max.png';
import airpodsleft from "@/public/images/banners/airpods-3rd-left.png";
import airpodsright from "@/public/images/banners/airpods-3rd-right.png";

export default function Airpods3rd() {
  const sectionRef = useRef<HTMLDivElement>(null);
    const playedRef = useRef(false);
  const readyForNextRef = useRef(false);
  const isScrollingToNextRef = useRef(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useGSAP(
    () => {
      const el = sectionRef.current;
      const nextSection = document.getElementById('next-section');

      if (!el) return;

      let isAnimating = false;
      let lastScrollTime = 0;

      gsap.set('.airpods-img', {
        transformOrigin: 'center center',
        scale: 0.98,
      });

      const tl = gsap.timeline({
        paused: true,
        onStart: () => {
          isAnimating = true;
          document.body.style.overflow = 'hidden';
        },
        onComplete: () => {
          isAnimating = false;
          readyForNextRef.current = true;
          document.body.style.overflow = 'auto';
        },
        onReverseComplete: () => {
          isAnimating = false;
          playedRef.current = false;
          readyForNextRef.current = false;
          document.body.style.overflow = 'auto';
        },
      });

      tl.to('.airpods-img', {
        scaleX: 2.45,
        scaleY: 2.35,
        y: 20,
        duration: 1,
        ease: 'power2.out',
      });

      tl.to('.airpods-title', { scale: 0.9, y: -30, duration: 1 }, '<');
      tl.to('.airpods-description', { scale: 1.1, y: -30, duration: 1 }, '<');
      tl.to('.airpods-actions', { y: -30, duration: 1 }, '<');

      const handleWheel = (e: WheelEvent) => {
        const now = Date.now();

        // ⛔ throttle scroll (biar gak spam)
        if (now - lastScrollTime < 800) return;
        lastScrollTime = now;

        if (isAnimating) return;

        e.preventDefault(); // ⛔ penting

        // ⬇️ SCROLL DOWN
        if (e.deltaY > 0) {
          if (!playedRef.current) {
            playedRef.current = true;
            tl.play();
            return;
          }

          if (readyForNextRef.current && !isScrollingToNextRef.current) {
            isScrollingToNextRef.current = true;

            nextSection?.scrollIntoView({
              behavior: 'smooth',
            });

            setTimeout(() => {
              isScrollingToNextRef.current = false;
            }, 1000);
          }
        }

        // ⬆️ SCROLL UP
        if (e.deltaY < 0) {
          if (playedRef.current) {
            tl.reverse();
          }
        }
      };

      el.addEventListener('wheel', handleWheel, { passive: false });

      return () => {
        el.removeEventListener('wheel', handleWheel);
        tl.kill();
        document.body.style.overflow = 'auto';
      };
    },
    { scope: sectionRef },
  );
  
  return (
    <div ref={sectionRef}>
      <SectionOne />
      <SectionTwo />
    </div>
  );
}

const SectionOne = () => {
  return (
    <section
      className="h-screen bg-[#f9f9f9] overflow-hidden"
    >
      <div className="relative w-full h-full flex items-end justify-center pb-[150px]">
        <div className="airpods-img absolute inset-0 z-1 flex gap-4 items-center justify-center">
          <div className="relative">
            <Image
              src={airpodsleft}
              alt="airpods-left"
              priority
              className="mt-[200px] ml-[60px] w-[350px] max-w-none object-contain will-change-transform"
            />
          </div>
          <div className="relative">
            <Image
              src={airpodsright}
              alt="airpods-right"
              priority
              className="w-[350px] mt-[450px] ml-[270px] max-w-none object-contain will-change-transform"
            />
          </div>
        </div>
        <div className="relative z-0 flex flex-col gap-0 items-center text-center">
          <h1 className="name text-[72px] md:text-[100px] lg:text-[124px] font-bold text-[#1d1d1f] leading-none">
            AirPods
          </h1>
          <div className="flex flex-col gap-40">
            <div className="flex flex-col gap-0">
              <p className="type text-[22px] font-bold text-[#1d1d1f]">
                3rd generation
              </p>
              <p className="price text-[22px] font-normal text-[#1d1d1f]">
                From &#8377;19900.00*
              </p>
            </div>
            <div className="airpods-actions flex items-center gap-6">
              <button className="bg-blue-600 hover:bg-blue-700 text-white w-[78px] h-[48px] text-[18px] rounded-full transition">
                Buy
              </button>

              <Link
                href="#"
                className="text-blue-600 text-[18px] flex items-center gap-1 hover:underline"
              >
                Learn more
                <Image
                  src={arrow}
                  alt="arrow"
                  priority
                  width={10}
                  height={22}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SectionTwo = () => {
  return (
    <section
      id="next-section"
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
};
