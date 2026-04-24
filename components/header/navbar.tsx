import Link from "next/link";
import Image from "next/image";
import bag from "@/public/assets/bag.png";
import apple from "@/public/assets/apple.png";
import search from "@/public/assets/search.png";

export default function Navbar() {
  return (
    <nav className="top-2.5 relative">
      <ul className="mx-auto flex h-11 max-w-[998px] items-center justify-between">
        <li>
          <Link
            href="/"
            className="flex h-11 px-2.25 items-center justify-center relative"
          >
            <Image src={apple} alt="logo" priority />
          </Link>
        </li>
        <li>
          <Link
            href="/store"
            className="flex h-11 px-2.25 items-center justify-center"
          >
            <span className="max-h-11 w-7.5 text-xs">Store</span>
          </Link>
        </li>
        <li>
          <Link
            href="/mac"
            className="flex h-11 px-2.25 items-center justify-center"
          >
            <span className="max-h-11 w-5.75 text-xs">Mac</span>
          </Link>
        </li>
        <li>
          <Link
            href="/ipad"
            className="flex h-11 px-2.25 items-center justify-center"
          >
            <span className="max-h-11 w-6 text-xs">iPad</span>
          </Link>
        </li>
        <li>
          <Link
            href="/iphone"
            className="flex h-11 px-2.25 items-center justify-center"
          >
            <span className="max-h-11 w-9.5 text-xs">iPhone</span>
          </Link>
        </li>

        <li>
          <Link
            href="/watch"
            className="flex h-11 px-2.25 items-center justify-center"
          >
            <span className="max-h-11 w-8.75 text-xs">Watch</span>
          </Link>
        </li>
        <li>
          <Link
            href="/airpods"
            className="flex h-11 px-2.25 items-center justify-center"
          >
            <span className="max-h-11 w-10.75 text-xs">AirPods</span>
          </Link>
        </li>
        <li>
          <Link
            href="/tv"
            className="flex h-11 px-2.25 items-center justify-center"
          >
            <span className="max-h-11 w-16.25 text-xs">Tv & Home</span>
          </Link>
        </li>

        <li>
          <Link
            href="/entertainment"
            className="flex h-11 px-2.25 items-center justify-center"
          >
            <span className="max-h-11 w-19.25 text-xs">Entertainment</span>
          </Link>
        </li>
        <li>
          <Link
            href="/accessories"
            className="flex h-11 px-2.25 items-center justify-center"
          >
            <span className="max-h-11 w-16.75 text-xs">Accessories</span>
          </Link>
        </li>
        <li>
          <Link
            href="/support"
            className="flex h-11 px-2.25 items-center justify-center"
          >
            <span className="max-h-11 w-11 text-xs">Support</span>
          </Link>
        </li>

        <li>
          <Link
            href="/search"
            className="flex h-11 px-2.25 items-center justify-center"
          >
            <Image src={search} alt="logo" priority />
          </Link>
        </li>
        <li>
          <Link
            href="/cart"
            className="flex h-11 px-2.25 items-center justify-center"
          >
            <Image src={bag} alt="logo" priority />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
