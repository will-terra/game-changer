"use client";
import Image from "next/image";
import { useGetProductsQuery } from "../api/productsAPI";
import { ItemCard } from "./ItemCard";
import { ItemsSelector } from "./ItemsSelector";
import { useAppSelector } from "@/lib/hooks";

export function ItemsDisplay() {
  const selectedCategory = useAppSelector(
    (state) => state.products.selectedCategory,
  );

  const { data } = useGetProductsQuery(selectedCategory);

  const items = data?.map((item, index) => ({
    ...item,
    imageIndex: String(index % 5) as "0" | "1" | "2" | "3" | "4",
  }));

  return (
    <section className="bg-primary-lightGray relative flex flex-col items-center justify-center">
      <Image
        src="/ItemsRectangle.png"
        alt="items display background image"
        width={1920}
        height={1280}
        className="absolute inset-0 z-0 min-h-full w-full object-cover"
        aria-hidden
      />
      <ItemsSelector />

      <div className="relative z-10 mt-40 flex min-h-[83rem] flex-col justify-start">
        <section className="mb-6 flex justify-between">
          <p className="mb-2 text-4xl font-bold text-white/91 uppercase">
            Uniformes
          </p>
          <Image src="/Filtros.svg" alt="filtros" width={140} height={32} />
        </section>

        <div className="mb-40 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {items
            ?.slice(0, 15)
            .map((item) => <ItemCard key={item.name} {...item} />)}
        </div>
      </div>
    </section>
  );
}
