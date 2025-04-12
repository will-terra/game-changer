import { Product } from "@/lib/features/products/api/productsAPI";
import Image from "next/image";

interface NewsCardProps extends Product {}

export function NewsCard({ name, images, price }: NewsCardProps) {
  return (
    <div className="bg-primary-midBlue border-primary-lightBlue/55 flex w-56 flex-col items-center justify-center border pb-6">
      <div className="flex grow items-center">
        <Image src={images[0]} alt={name} width={160} height={88} />
      </div>
      <h2 className="mx-2 mb-2 text-white">{name}</h2>
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
