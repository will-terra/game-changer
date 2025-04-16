"use client";
import { useGetBackgroundImageQuery } from "../../shared/api/backgroundAPI";
import { Carousel } from "./Carousel";
import Image from "next/image";

export function CarouselContainer() {
  return (
    <div className="bg-primary-midBlue relative flex w-full min-h-fit lg:min-h-[61.25rem] items-center justify-center">
      <Image
        src="/bg-peddings.png"
        alt="news background image"
        width={1920}
        height={1030}
        className="absolute inset-0 z-0 min-h-full w-full object-cover"
        priority
      />

      <Carousel />
    </div>
  );
}
