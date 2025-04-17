import Image from "next/image";
import { Product } from "../api/productsAPI";

interface ItemCard extends Product {
  imageIndex: "0" | "1" | "2" | "3" | "4";
}

export function ItemCard({ name, images, price, imageIndex }: ItemCard) {
  return (
    <div className="bg-primary-midBlue group relative flex min-h-[19.75rem] min-w-60 flex-col items-center justify-center pb-6 transition-all duration-300 group-hover:shadow-[inset_0_0_30px_8px_rgba(120,190,255,0.4)]">
      <Image
        src={`/ItemShape-${imageIndex}.png`}
        alt="items background image"
        width={140}
        height={208}
        className="absolute inset-0 z-0 mx-auto"
        aria-hidden
      />
      <div className="relative flex grow items-center">
        <Image
          src={images[0]}
          alt={name}
          width={94}
          height={180}
          className="mt-6 cursor-pointer self-center transition-transform duration-300 group-hover:scale-125"
        />
      </div>
      <h2 className="mx-2 mb-2 text-white">{name}</h2>
      <div className="relative flex w-fit min-w-40 justify-center px-6 py-0.5">
        <Image
          src="/PriceRectangle.png"
          alt="price flag"
          fill
          className="absolute inset-0 z-0 h-full w-full"
          aria-hidden
        />
        <p className="z-10 text-white">
          {price} {price === 0 || price === 1 ? " Quantion" : " Quantions"}
        </p>
      </div>
    </div>
  );
}
