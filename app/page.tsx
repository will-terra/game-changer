import type { Metadata } from "next";

export default function IndexPage() {
  return <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>;
}

export const metadata: Metadata = {
  title: "Game Changer",
};
