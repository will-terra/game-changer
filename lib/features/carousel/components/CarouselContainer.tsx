"use client";
import { Suspense, useEffect, useState } from "react";
import { useGetBackgroundImageQuery } from "../../shared/api/backgroundAPI";

import { Carousel } from "./Carousel";

export function CarouselContainer() {
  const {
    data: bgImage,
    isLoading,
    isError,
  } = useGetBackgroundImageQuery(
    "https://www.figma.com/2b97c9f5-8dba-4c9e-b7ca-2275e9df6317",
  );

  return (
    <div className="bg-primary-midBlue flex h-[61.25rem] w-full justify-center">
      <Carousel />
    </div>
  );
}
