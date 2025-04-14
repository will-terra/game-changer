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
    </div>
  );
}

export const metadata: Metadata = {
  title: "Game Changer",
};
