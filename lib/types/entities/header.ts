export type ImageItem = {
  src: string;
  alt: string;
};

export type NavItem = {
  label?: string;
  type?: string;
  image?: ImageItem;
  href: string;
  children?: NavItem[];
};
