import { StaticImageData } from "next/image";

export type ProductItem = {
  name: string;
  gen: string;
  price: string;
  img: StaticImageData;
};
