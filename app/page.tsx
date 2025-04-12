import News from "@/lib/features/products/components/News";
import type { Metadata } from "next";

export default function IndexPage() {
  return (
    <div className="flex flex-col">
      <News />
    </div>
  );
}

export const metadata: Metadata = {
  title: "Game Changer",
};
