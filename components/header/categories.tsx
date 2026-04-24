import Link from "next/link";
import Image from "next/image";
import second from "@/public/assets/figure.chapternav-icon.png";
import third from "@/public/assets/figure.chapternav-icon-2.png";
import secondPro from "@/public/assets/figure.chapternav-icon-2-pro.png";
import airpods from "@/public/assets/airpods_max.png";
import compare from "@/public/assets/compare.png";
import applemusic from "@/public/assets/applemusic.png";

export default function Categories() {
  return (
    <nav className="flex mt-2 h-31.5 items-start justify-center overflow-hidden bg-white">
      <ul className="flex items-start gap-[30.4px]">
        <li>
          <Link
            href="/airpods/2nd"
            className="flex h-23.25 w-[85.59px] flex-col items-center gap-1.75 relative"
          >
            <Image src={second} alt="airpods-2nd" priority />
            <span className="text-center font-normal">
              AirPods <br /> 2nd Generation
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/airpods/3nd"
            className="flex h-23.25 w-[85.59px] flex-col items-center gap-1.75 relative"
          >
            <Image src={third} alt="airpods-3nd" priority />
            <span className="text-center font-normal">
              AirPods <br /> 3rd Generation
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/airpods/2ndpro"
            className="flex h-23.25 w-[85.59px] flex-col items-center gap-1.75 relative"
          >
            <Image src={secondPro} alt="airpods-2nd-pro" priority />
            <span className="text-center font-normal">
              AirPods Pro <br />
              2nd Generation
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/airpods/airpodsmax"
            className="flex h-23.25 w-[85.59px] flex-col items-center gap-1.75 relative"
          >
            <Image src={airpods} alt="air-pods" priority />
            <span className="text-center font-normal">AirPods Max</span>
          </Link>
        </li>
        <li>
          <Link
            href="/airpods/compare"
            className="flex h-23.25 w-[85.59px] flex-col items-center gap-1.75 relative"
          >
            <Image src={compare} alt="compare" priority />
            <span className="text-center font-normal">Compare</span>
          </Link>
        </li>
        <li>
          <Link
            href="/airpods/applemusic"
            className="flex h-23.25 w-[85.59px] flex-col items-center gap-1.75 relative"
          >
            <Image src={applemusic} alt="apple-music" priority />
            <span className="text-center font-normal">Apple Music</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}