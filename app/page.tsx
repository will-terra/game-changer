import { CarouselContainer } from "@/lib/features/products/components/CarouselContainer";
import { CTABanner } from "@/lib/features/products/components/CTABanner";
import { HighlightedItems } from "@/lib/features/products/components/HighlightedItems";
import { ItemsDisplay } from "@/lib/features/products/components/ItemsDisplay";
import { News } from "@/lib/features/products/components/News";
import type { Metadata } from "next";

export default function IndexPage() {
  return (
    <div className="flex flex-col">
      <News />
      <ItemsDisplay />
      <HighlightedItems />
      <CTABanner
        title="Five M Nite"
        subTitle="50% de desconto"
        description="Lorem ipsum dolor sit amet consectetur. Aliquet ac massa metus faucibus viverra laoreet varius. Sit ut."
      />
      <CarouselContainer />
    </div>
  );
}

export const metadata: Metadata = {
  title: "Game Changer",
};
