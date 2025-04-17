import Image from "next/image";
import { Product } from "../../products/api/productsAPI";
import { BlueButton } from "../../products/components/BlueButton";

const PLACEHOLDER_IMAGE = "/PlaceholderPed.webp";

type CarouselItemProps = {
  item?: Product;
  isActive: boolean;
  index: number;
};

export function CarouselItem({ item, isActive, index }: CarouselItemProps) {
  return (
    <div
      className={`relative flex h-[39rem] transform flex-col justify-between pt-40 pb-10 transition-all duration-300 ${
        isActive ? "scale-105 opacity-100" : "opacity-70 blur"
      } `}
    >
      <Image
        src={item?.images?.[0] || PLACEHOLDER_IMAGE}
        alt={item?.name || `Item do carrossel ${index + 1}`}
        width={482}
        height={664}
        className={
          isActive
            ? "z-10 scale-110 transition-transform duration-300 hover:scale-135"
            : "-mt-20 scale-90 transition-all duration-300"
        }
      />
      {isActive && item?.name && (
        <div className="absolute top-8 right-0 left-0 flex flex-col">
          <p className="text-center text-lg text-white uppercase">
            {item.name}
          </p>
          <div className="relative mx-auto flex w-fit justify-center px-12 py-4">
            <Image
              src="/BlueRectangle.svg"
              alt="price flag"
              fill
              className="absolute inset-0 z-0 h-full w-full"
              aria-hidden
            />
            <p className="z-10 text-white">
              {item.price}
              {item.price === 0 || item.price === 1
                ? " Quantion"
                : " Quantions"}
            </p>
          </div>
        </div>
      )}
      {isActive && (
        <div className="3xl:-ml-[26rem] mt-20 ml-8 flex max-w-72 flex-col gap-2 lg:-mt-[26rem] lg:-ml-[16rem] lg:max-w-[24rem] xl:-ml-[18rem] 2xl:-ml-[22rem]">
          <h1 className="text-[40px] font-bold text-white uppercase">
            Peddings
          </h1>
          <p className="text-white">
            {item?.description
              ? item.description.substring(0, 150) + "..."
              : ""}
          </p>
          <BlueButton href="#">Acessar Jogo </BlueButton>
        </div>
      )}
      {isActive && (
        <Image
          src="/CarouselShadow.svg"
          fill
          alt=""
          aria-hidden
          className="bottom-0 mt-64 hidden md:flex"
        />
      )}
    </div>
  );
}
