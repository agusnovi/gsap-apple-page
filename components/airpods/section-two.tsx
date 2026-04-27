import Image from 'next/image';
import Link from 'next/link';
import airpodsMax from '@/public/images/banners/airpods-max.png';

export default function SectionTwo() {
  return (
    <section
      id="next-section"
      className="h-screen bg-white text-black flex items-center justify-center"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 z-1 flex items-center justify-center pointer-events-none">
          <Image
            src={airpodsMax}
            alt="airpods"
            priority
            className="airpods-max-img w-[30vw] max-w-none object-contain will-change-transform"
          />
        </div>
        <div className="relative z-0 mt-[200px] flex flex-col items-center text-center">
          <h1 className="airpods-max-title text-[90px] md:text-[100px] lg:text-[170px] font-bold text-[#1d1d1f]">
            AirPods Max
          </h1>
          <p className="airpods-description text-[22px] mt-[-30px] text-[#1d1d1f]">
            &#8377;19900.00*
          </p>
          <div className="airpods-max-actions flex mt-[170px] items-center gap-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white w-[78px] h-[48px] text-[18px] rounded-full transition">
              Buy
            </button>

            <Link
              href="#"
              className="text-blue-600 text-[18px] flex items-center gap-1 hover:underline"
            >
              Learn more
              <span className="text-lg">›</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
