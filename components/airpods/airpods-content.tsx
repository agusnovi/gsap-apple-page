'use client';

import { useEffect, useRef } from 'react';
import { gsap, useGSAP } from '@/lib/gsap';
import { createScrollHandler } from '@/hooks/useScrollController';

import SectionOne from './section-one';
import SectionTwo from './section-two';
import SectionThree from './section-three';

export default function AirpodsContent() {
  const scope = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useGSAP(
    () => {
      const el = scope.current;
      if (!el) return;

      const q = gsap.utils.selector(scope);

      // timeline 1
      const s1 = gsap.timeline({ paused: true });

      s1.to(q('.airpods-img'), {
        scale: 2.4,
        y: 20,
        duration: 1,
      });

      s1.to(q('.name'), { y: -30, scale: 0.9 }, '<');
      s1.to(q('.price, .type'), { y: -30 }, '<');

      // timeline 2
      const s2 = gsap.timeline({ paused: true });

      s2.fromTo(
        q('.airpods-max-img'),
        { scale: 0.8, y: 100 },
        { scale: 1.4, y: -120, duration: 1 },
      );

      s2.fromTo(
        q('.airpods-max-title'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0 },
        '<',
      );

      // timeline 3
      gsap.set(q('.s3-item'), { y: 80, opacity: 0 });

      const s3 = gsap.timeline({ paused: true });

      s3.to(q('.s3-item'), {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
      });

      // scroll controller
      const handler = createScrollHandler({
        timelines: { s1, s2, s3 },
        refs: {
          first: el.children[0] as HTMLElement,
          second: el.children[1] as HTMLElement,
          third: el.children[2] as HTMLElement,
        },
      });

      el.addEventListener('wheel', handler, { passive: false });

      return () => {
        el.removeEventListener('wheel', handler);
      };
    },
    { scope },
  );

  return (
    <div ref={scope}>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
}
