import Link from "next/link";
import Image from "next/image";
import { NavItem } from "@/lib/types/entities/header";

export default function Navbar({ menus }: { menus: NavItem[] }) {
  return (
    <nav className="mt-2.5 relative">
      <ul className="mx-auto flex h-11 max-w-[998px] items-center justify-between">
        {menus.map((item: NavItem, key: number) => (
          <li key={key}>
            <Link
              href={item.href}
              className="outline-none flex h-11 px-2.25 items-center justify-center relative"
            >
              {item.image && (
                <Image
                  src={`/assets${item.image.src}`}
                  alt={item.image.alt}
                  priority
                  width={item.image.src === '/apple-logo.png' ? 14 : 15}
                  height={44}
                />
              )}
              {item.label && (
                <span className="max-h-11 text-xs">{item.label}</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
