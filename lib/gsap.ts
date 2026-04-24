'use client';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // ScrollSmoother requires ScrollTrigger
// import { ScrollSmoother } from 'gsap/ScrollSmoother';
// import { TextPlugin } from 'gsap/TextPlugin';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(useGSAP);
}

export { useGSAP, gsap };
