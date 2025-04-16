"use client";
import { useGetBackgroundImageQuery } from "@/lib/features/shared/api/backgroundAPI";
import { useGetProductsQuery } from "@/lib/features/products/api/productsAPI";
import Image from "next/image";
import { NewsCard } from "./NewsCard";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setMobileStatus } from "../productsSlice";

export function News() {
  const isMobile = useAppSelector((state) => state.products.isMobile);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleResize = () => {
      dispatch(setMobileStatus(window.innerWidth < 768));
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  const { data, isLoading } = useGetBackgroundImageQuery(
    "https://s3-alpha-sig.figma.com/img/cbc7/6430/10302b4a0bdffe2ed3f74708e153567b?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eQSo-r76-6C0JhyTjhalVN8vbxZUZjDw69P1nqv~tSN9-kyckK69ANdaeiwtytEAL7vTiHALxaOVXOnDILCEwT8SegRKsRJ7oF6e48vTDJDQiCKAC0y-79tWoIOAH6DyMsZN0HvPNcRHXx3L9aZLMVRuUz0LEcq6LhY54HLTXuAtRqg3FKtDVgijig8Wn1xGx2b30u0nPg~2DQz9irV3nf~JyXYhfoEKhUlngPVkzZk0y--84163zFva7CEA2EDtr01geSNARx9vmiKYMRi46WpuoVnTEgoW2vJ3ct2Z~-QKJPuguxsM1-4NwpYxqgb6qz6AZtFvr7a81SzTczn-iw__",
  );
  const backgroundImage = data?.url;

  const { data: items } = useGetProductsQuery("weapons");
  const NewsItems = items?.map((item, index) => ({
    ...item,
    imageIndex: String(index % 5) as "0" | "1" | "2" | "3" | "4",
  }));

  const itemsToShow = isMobile ? 3 : 5;

  return (
    <section className="bg-primary-darkBlue relative flex min-h-screen min-w-screen items-center justify-center">
      {isLoading ? (
        <></>
      ) : backgroundImage ? (
        <Image
          src={backgroundImage}
          alt="news background image"
          width={1920}
          height={1030}
          className="absolute inset-0 z-0 min-h-full w-full object-cover"
          priority
        />
      ) : (
        <></>
      )}
      <div className="backgroundShadow absolute inset-0 z-[1]"></div>
      <div className="relative z-10 mt-20 flex flex-col justify-center lg:mt-60">
        <h1 className="mb-5 text-center text-4xl leading-none font-bold text-white uppercase md:text-[4rem]">
          Explore as <br />
          skins especiais
        </h1>
        <p className="mb-2 text-center text-white/91">
          Veja todos os produtos que você pode adquirir com <br /> Quantions em
          nosso jogo
        </p>
        <section className="flex flex-col items-center">
          <Image
            src="/ArmasSoltasDivisorio.png"
            alt="Armas Soltas"
            width={836}
            height={40}
            className="mx-auto mb-4"
          />

          <div className="mb-40 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {NewsItems?.slice(0, itemsToShow).map((item) => (
              <NewsCard key={item.name} {...item} />
            ))}
          </div>

          <Image
            src="/BarraRosa.png"
            alt="Barra Rosa"
            width={1920}
            height={16}
            className="min-w-screen"
          />
        </section>
      </div>
    </section>
  );
}
