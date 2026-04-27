import Image from 'next/image';
import Link from 'next/link';
import arrow from '@/public/assets/arrow.png';
import airpodsleft from '@/public/images/banners/airpods-3rd-left.png';
import airpodsright from '@/public/images/banners/airpods-3rd-right.png';

export default function SectionOne() {
  return (
    <section className="h-screen bg-[#f9f9f9] overflow-hidden">
      <div className="relative w-full h-full flex items-end justify-center pb-[150px]">
        <div className="airpods-img absolute inset-0 z-1 flex gap-4 items-center justify-center">
          <div className="relative">
            <Image
              src={airpodsleft}
              alt="airpods-left"
              priority
              className="mt-[200px] ml-[60px] w-[350px] max-w-none object-contain will-change-transform"
            />
          </div>
          <div className="relative">
            <Image
              src={airpodsright}
              alt="airpods-right"
              priority
              className="w-[350px] mt-[450px] ml-[270px] max-w-none object-contain will-change-transform"
            />
          </div>
        </div>
        <div className="relative z-0 flex flex-col gap-0 items-center text-center">
          <h1 className="name text-[72px] md:text-[100px] lg:text-[124px] font-bold text-[#1d1d1f] leading-none">
            AirPods
          </h1>
          <div className="flex flex-col gap-40">
            <div className="flex flex-col gap-0">
              <p className="type text-[22px] font-bold text-[#1d1d1f]">
                3rd generation
              </p>
              <p className="price text-[22px] font-normal text-[#1d1d1f]">
                From &#8377;19900.00*
              </p>
            </div>
            <div className="airpods-actions flex items-center gap-6">
              <button className="bg-blue-600 hover:bg-blue-700 text-white w-[78px] h-[48px] text-[18px] rounded-full transition">
                Buy
              </button>

              <Link
                href="#"
                className="text-blue-600 text-[18px] flex items-center gap-1 hover:underline"
              >
                Learn more
                <Image
                  src={arrow}
                  alt="arrow"
                  priority
                  width={10}
                  height={22}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
