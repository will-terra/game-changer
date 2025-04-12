import Image from "next/image";
import { Product } from "../api/productsAPI";

interface ItemCard extends Product {
  imageIndex: "0" | "1" | "2" | "3" | "4";
}

export function ItemCard({ name, images, price, imageIndex }: ItemCard) {
  return (
    <div className="bg-primary-midBlue relative flex min-h-[19.75rem] min-w-60 flex-col items-center justify-center pb-6">
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
          className="mt-6 self-center"
        />
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
