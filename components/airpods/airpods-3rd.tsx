'use client'
import { useEffect, useRef } from 'react';
import Image from "next/image";
import { gsap } from '@/lib/gsap';
import airpods from '@/public/images/banners/airpods-3rd.png';

export default function Airpods3rd() {
      const sectionRef = useRef<HTMLDivElement>(null);
      const playedRef = useRef(false);
      const readyForNextRef = useRef(false);

      useEffect(() => {
        const elements = sectionRef.current;
        const nextSection = document.getElementById('next-section');

        if (!elements) return;

        const tl = gsap.timeline({ paused: true });
        gsap.set('.airpods-img', {
          transformOrigin: 'center center',
          scale: 0.98,
        });

        tl.to('.airpods-img', {
          scaleX: 2.45,
          scaleY: 2.35,
          y: 20,
          duration: 1,
          ease: 'power4.out',
        });

        tl.to(
          '.airpods-title',
          {
            scale: 0.8,
            y: -30,
            duration: 1,
            ease: 'power4.out',
          },
          '<0.02',
        );

        const triggerIntro = () => {
          if (playedRef.current) return;
          playedRef.current = true;

          document.body.style.overflow = 'hidden';

          tl.play();
          removeIntroListeners();
        };

        tl.eventCallback('onComplete', () => {
          document.body.style.overflow = 'auto';

          readyForNextRef.current = true;
        });

        const goNext = () => {
          if (!readyForNextRef.current) return;

          nextSection?.scrollIntoView({
            behavior: 'smooth',
          });

          removeNextListeners();
        };

        const onWheelIntro = (e: WheelEvent) => {
          if (Math.abs(e.deltaY) > 2) triggerIntro();
        };

        const onWheelNext = (e: WheelEvent) => {
          if (Math.abs(e.deltaY) > 2) goNext();
        };

        let touchStartY = 0;

        const onTouchStart = (e: TouchEvent) => {
          touchStartY = e.touches[0].clientY;
        };

        const onTouchMoveIntro = (e: TouchEvent) => {
          const delta = touchStartY - e.touches[0].clientY;
          if (Math.abs(delta) > 5) triggerIntro();
        };

        const onTouchMoveNext = (e: TouchEvent) => {
          const delta = touchStartY - e.touches[0].clientY;
          if (Math.abs(delta) > 5) goNext();
        };
          
        const removeIntroListeners = () => {
          elements.removeEventListener('wheel', onWheelIntro);
          elements.removeEventListener('touchstart', onTouchStart);
          elements.removeEventListener('touchmove', onTouchMoveIntro);

          window.addEventListener('wheel', onWheelNext, { passive: true });
          window.addEventListener('touchstart', onTouchStart, {
            passive: true,
          });
          window.addEventListener('touchmove', onTouchMoveNext, {
            passive: true,
          });
        };

        const removeNextListeners = () => {
          window.removeEventListener('wheel', onWheelNext);
          window.removeEventListener('touchstart', onTouchStart);
          window.removeEventListener('touchmove', onTouchMoveNext);
        };

        elements.addEventListener('wheel', onWheelIntro, { passive: true });
        elements.addEventListener('touchstart', onTouchStart, {
          passive: true,
        });
        elements.addEventListener('touchmove', onTouchMoveIntro, {
          passive: true,
        });

        return () => {
          removeIntroListeners();
          removeNextListeners();
          tl.kill();
          document.body.style.overflow = 'auto';
        };
      }, []);
    
    return (
      <section
        ref={sectionRef}
        className="h-screen bg-[#f8f8f8] overflow-hidden"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Image
              src={airpods}
              alt="airpods"
              priority
              className="airpods-img w-[65vw] max-w-none object-contain will-change-transform"
            />
          </div>
          <div className="relative z-10 flex flex-col items-center text-center">
            <h1 className="airpods-title text-[72px] md:text-[110px] lg:text-[140px] font-bold text-[#1d1d1f]">
              AirPods
            </h1>
            <p className="mt-2 text-[22px] font-semibold text-[#1d1d1f]">
              3rd generation
            </p>
            <p className="text-[22px] font-semibold text-[#1d1d1f]">
              From $199.000.00*
            </p>
          </div>
        </div>
      </section>
    );
}