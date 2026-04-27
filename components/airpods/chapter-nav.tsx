'use client'
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap, useGSAP } from '@/lib/gsap';
import { ChapterNavItem } from '@/lib/types/entities/chapter-nav';

export default function ChapterNav({ data }: { data: ChapterNavItem[] }) {
  const scope = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.from('.items', {
        x: 100,
        opacity: 0,
        duration: 0.9,
        ease: 'power4'
      });
    },
    { scope },
  );

  if (data.length === 0) return null;

  return (
    <nav
      ref={scope}
      className="fixed top-15.5 z-2 flex h-27 w-full items-start justify-center overflow-hidden bg-white"
    >
      <ul className="items flex items-start gap-[30.4px]">
        {data.map((item: ChapterNavItem, key: number) => (
          <li key={key}>
            <Link
              href={item.href}
              className="outline-none flex h-23.25 w-[85.59px] flex-col items-center gap-1.75 relative"
            >
              {item.image && (
                <Image
                  src={`/images/chapter-nav${item.image.src}`}
                  alt={item.image.alt}
                  priority
                  width={item.image.width}
                  height={item.image.height}
                />
              )}
              <div className="text-center text-xs flex flex-col gap-0">
                <p>{item.label}</p>
                <p className="text-nowrap">{item.type}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
