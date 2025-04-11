import type { Metadata } from "next";
import News from "./components/News";

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
