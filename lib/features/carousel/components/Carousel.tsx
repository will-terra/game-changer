"use client";
import { useCallback } from "react";
import { useGetProductsQuery } from "../../products/api/productsAPI";
import { CarouselItem } from "./CarouselItem";
import { CarouselControls } from "./CarouselControls";
import { useCarousel } from "../hooks/useCarousel";

export function Carousel() {
  const { data: items } = useGetProductsQuery("peds");

  const prepareCarouselItems = useCallback(() => {
    if (!items || items.length === 0) {
      return Array(4)
        .fill(0)
        .map((_, index) => ({
          render: (isActive: boolean) => (
            <CarouselItem isActive={isActive} index={index} item={undefined} />
          ),
        }));
    }

    return items.slice(0, 5).map((item, index) => ({
      render: (isActive: boolean) => (
        <CarouselItem item={item} isActive={isActive} index={index} />
      ),
    }));
  }, [items]);

  const { carouselFragment, handleNavigate } = useCarousel(
    prepareCarouselItems(),
  );

  return (
    <div
      className="mt-20 flex h-full w-4/5 flex-col items-center justify-center"
      aria-label="Carrossel de produtos"
    >
      <div className="flex w-full items-center justify-center">
        <CarouselControls onNavigate={handleNavigate} side="left" />
        <div className="z-0 w-[80rem] overflow-hidden">
          <div className="z-10 mx-auto max-w-96 justify-center">
            {carouselFragment}
          </div>
        </div>
        <CarouselControls onNavigate={handleNavigate} side="right" />
      </div>
    </div>
  );
}
