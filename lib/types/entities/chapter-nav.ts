import { ImageItem, NavItem } from "./header";

export type ChapterNavItem = Omit<NavItem, 'image'> & { image?: ImageItem & { width: number; height: number;  }};