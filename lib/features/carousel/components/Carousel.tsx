"use client";
import { useCallback } from "react";
import { useGetProductsQuery } from "../../products/api/productsAPI";
import { CarouselItem } from "./CarouselItem";
import { CarouselControls } from "./CarouselControls";
import { useCarousel } from "../hooks/useCarousel";
import { useAppSelector } from "@/lib/hooks";

export function Carousel() {
  const { data: items } = useGetProductsQuery("peds");
  const isMobile = useAppSelector((state) => state.products.isMobile);

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
    <div className="z-10 mt-20 flex h-full w-4/5 flex-col items-center justify-center pb-12 lg:pb-40">
      <div className="flex w-full flex-col items-center justify-center lg:flex-row">
        <div className="mb-8 flex gap-40 lg:mb-0 lg:gap-0">
          {isMobile && (
            <CarouselControls onNavigate={handleNavigate} side="left" />
          )}
          <CarouselControls onNavigate={handleNavigate} side="right" />
        </div>
        <div className="z-0 h-[57rem] w-[80rem] overflow-x-hidden overflow-y-visible lg:h-full lg:overflow-y-hidden">
          <div className="z-10 mx-auto max-w-96 justify-center">
            {carouselFragment}
          </div>
        </div>

        {!isMobile && (
          <CarouselControls onNavigate={handleNavigate} side="right" />
        )}
      </div>
    </div>
  );
}
