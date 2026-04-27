import { gsap } from '@/lib/gsap';

export const createAnimations = (q: gsap.utils.SelectorFunc) => {
  // timeline for section 1
  const s1 = gsap.timeline({ paused: true });

  s1.to(q('.airpods-img'), {
    scale: 2.4,
    y: 20,
  });

  s1.to(q('.name'), { scale: 0.9, y: -30 }, '<');
  s1.to(q('.price, .type'), { y: -30 }, '<');
  s1.to(q('.airpods-actions'), { y: -30 }, '<');

  // timeline for section 2
  const s2 = gsap.timeline({ paused: true });

  s2.fromTo(
    q('.airpods-max-img'),
    { scale: 0.8, y: 100 },
    { scale: 1.4, y: -120 },
  );

  s2.fromTo(
    q('.airpods-max-title'),
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1 },
    '<',
  );

  s2.fromTo(
    q('.airpods-max-actions'),
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1 },
    '<',
  );

  // timeline for section 3
  const s3 = gsap.timeline({ paused: true });

  gsap.set(q('.s3-item'), { y: 80, opacity: 0 });

  s3.to(q('.s3-item'), {
    y: 0,
    opacity: 1,
    stagger: 0.1,
  });

  return { s1, s2, s3 };
};
