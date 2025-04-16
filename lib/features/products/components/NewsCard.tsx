import { Product } from "@/lib/features/products/api/productsAPI";
import Image from "next/image";

interface NewsCardProps extends Product {
  imageIndex: "0" | "1" | "2" | "3" | "4";
}

export function NewsCard({ name, images, price, imageIndex }: NewsCardProps) {
  return (
    <div className="bg-primary-midBlue border-primary-lightBlue/55 relative flex min-h-52 w-52 flex-col items-center justify-center border pb-6">
      <Image
        src={`/NewsShape-${imageIndex}.png`}
        alt="items background image"
        width={80}
        height={112}
        className="absolute inset-0 z-0 mx-auto"
        aria-hidden
      />
      <div className="z-10 -mt-2 flex grow items-center">
        <Image src={images[0]} alt={name} width={152} height={88} />
      </div>
      <h2 className="mx-1 -mt-4 mb-2 text-white">{name}</h2>
      <div className="relative flex w-fit justify-center px-4 py-0.5">
        <Image
          src="/PriceRectangle.png"
          alt="price flag"
          fill
          className="absolute inset-0 z-0 h-full w-full"
          aria-hidden
        />
        <p className="z-10 text-white"> {price} Quantions</p>
      </div>
    </div>
  );
}
