'use client';

import { useRef } from 'react';
import Image from 'next/image';
import airpodsMax from '@/public/images/banners/airpods-max.png';

export default function AipodsMax() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      id="next-section"
      ref={ref}
      className="h-screen bg-white text-black flex items-center justify-center"
    >
      <div className="text-center">
        <Image
          src={airpodsMax}
          alt="airpods max"
          className="max-img w-[50vw] mx-auto"
        />

        <h2 className="max-title text-[80px] font-bold mt-10">AirPods Max</h2>

        <p className="max-title text-xl mt-2">High-fidelity audio.</p>
      </div>
    </section>
  );
}
