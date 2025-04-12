import { Product } from "@/lib/features/services/productsAPI";
import Image from "next/image";

interface NewsCardProps extends Product {}

export default function NewsCard({ name, images, price }: NewsCardProps) {
  return (
    <div className="bg-primary-midBlue border-primary-lightBlue/55 flex w-56 flex-col items-center justify-center border pb-4">
      <div className="flex grow items-center">
        <Image src={images[0]} alt={name} width={160} height={88} />
      </div>
      <h2 className="mx-1 text-white">{name}</h2>
      <p className="bg-secondary-midBlue mt-2 px-4 py-1 text-white">
        {price} Quantions
      </p>
    </div>
  );
}
