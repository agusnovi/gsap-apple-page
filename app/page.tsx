'use client'
import { useRef } from 'react';
import Airpods3rd from "@/components/airpods/airpods-3rd";
import AipodsMax from '@/components/airpods/airpods-max';

export default function Home() {
  const container = useRef<HTMLElement | null>(null);

  // useGSAP(() => {
  //   gsap.to("img", { rotation: "+360", duration: 3 })
  // }, { scope: container });

  return (
    <main ref={container} className="container">
      <Airpods3rd />
      <AipodsMax />
    </main>
  );
}
