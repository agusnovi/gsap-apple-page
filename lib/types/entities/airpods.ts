import { StaticImageData } from 'next/image';

export type ProductItem = {
  name: string;
  gen: string;
  price: string;
  img: StaticImageData;
};

export type Timelines = {
  s1: GSAPTimeline;
  s2: GSAPTimeline;
  s3: GSAPTimeline;
};

export type Refs = {
  first: HTMLElement;
  second: HTMLElement;
  third: HTMLElement;
};

export type SectionState = 'S1' | 'S2' | 'S3';