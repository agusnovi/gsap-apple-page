import Image, { StaticImageData } from 'next/image';
import airpods2 from '@/public/images/products/airpods2.png';
import airpods3 from '@/public/images/products/airpods3.png';
import airpodsPro from '@/public/images/products/airpods-pro.png';
import airpodsMax from '@/public/images/products/airpods-max.png';
import noice from "@/public/images/products/noice.png";


type ProductItem = {
  name: string;
  gen: string;
  price: string;
  img: StaticImageData;
};

const products: ProductItem[] = [
  {
    name: 'AirPods',
    gen: '2nd generation',
    price: '₹14900.00*',
    img: airpods2,
  },
  {
    name: 'AirPods',
    gen: '3rd generation',
    price: 'From ₹19900.00*',
    img: airpods3,
  },
  {
    name: 'AirPods Pro',
    gen: '2nd generation',
    price: '₹26900.00*',
    img: airpodsPro,
  },
  {
    name: 'AirPods Max',
    gen: '-',
    price: '₹59900.00*',
    img: airpodsMax,
  },
];

const features: (string | StaticImageData)[][] = [
  ['—', ''],
  [noice, 'Personalised Spatial Audio with dynamic head tracking'],
  [noice, 'Personalised Spatial Audio with dynamic head tracking'],
  [noice, 'Personalised Spatial Audio with dynamic head tracking'],
];


export default function AirpodsComparation() {
    
  return (
    <section
      id="comparation-section"
      className="h-screen bg-[#f8f8f8] text-black flex items-center justify-center"
    >
      <div className="text-gray-900 min-h-screen">
        {/* Title */}
        <section className="text-center py-16">
          <h1 className="text-4xl md:text-5xl font-semibold">
            Which AirPods are <br className="hidden md:block" /> right for you?
          </h1>
        </section>

        {products.length > 0 && (
          <section className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-4 gap-x-12 gap-y-16 text-center">
              {products.map((item, index) => (
                <ProductCard key={index} product={item} />
              ))}
            </div>
          </section>
        )}

        <section className="max-w-6xl mx-auto px-6 mt-16">
          <FeatureRow />
        </section>
      </div>
    </section>
  );
}

const ProductCard = ({ product }: { product: ProductItem }) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={product.img}
        alt={product.name}
        className="h-[180px] object-contain"
      />

      <h2 className="mt-6 text-xl font-semibold">{product.name}</h2>
      {product.gen === '-' ? (
        <>&nbsp;</>
      ) : (
        <p className="text-sm text-gray-500">{product.gen}</p>
      )}
      <p className="mt-2 text-xl">{product.price}</p>

      <button className="mt-3 px-4 py-1 bg-blue-600 text-white rounded-full text-sm">
        Buy
      </button>
      <a className="mt-2 text-blue-600 text-sm">Learn more &gt;</a>
    </div>
  );
}

const FeatureRow = () => {
  return (
      <div className="grid grid-cols-4 gap-x-12 gap-y-16 text-center">
        {features.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center text-center px-4 py-10 min-h-[140px]"
          >
            <div className="text-3xl mb-3">
              {typeof item[0] === 'string' ? (
                <span className="text-gray-400">—</span>
              ) : (
                <Image src={item[0]} alt="feature" width={40} height={40} />
              )}
            </div>
            {typeof item[1] === 'string' && (
              <p className="text-sm text-gray-700 leading-snug max-w-[160px]">
                {item[1]}
              </p>
            )}
          </div>
        ))}
      </div>
  );
};