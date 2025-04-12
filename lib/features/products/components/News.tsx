"use client";
import { useGetBackgroundImageQuery } from "@/lib/features/shared/api/backgroundAPI";
import { useGetProductsQuery } from "@/lib/features/products/api/productsAPI";
import Image from "next/image";
import NewsCard from "./NewsCard";

export default function News() {
  const { data, isLoading } = useGetBackgroundImageQuery(
    "https://s3-alpha-sig.figma.com/img/cbc7/6430/10302b4a0bdffe2ed3f74708e153567b?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eQSo-r76-6C0JhyTjhalVN8vbxZUZjDw69P1nqv~tSN9-kyckK69ANdaeiwtytEAL7vTiHALxaOVXOnDILCEwT8SegRKsRJ7oF6e48vTDJDQiCKAC0y-79tWoIOAH6DyMsZN0HvPNcRHXx3L9aZLMVRuUz0LEcq6LhY54HLTXuAtRqg3FKtDVgijig8Wn1xGx2b30u0nPg~2DQz9irV3nf~JyXYhfoEKhUlngPVkzZk0y--84163zFva7CEA2EDtr01geSNARx9vmiKYMRi46WpuoVnTEgoW2vJ3ct2Z~-QKJPuguxsM1-4NwpYxqgb6qz6AZtFvr7a81SzTczn-iw__",
  );
  const backgroundImage = data?.url;

  const { data: weapons } = useGetProductsQuery("weapons");

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
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />
      ) : (
        <></>
      )}
      <div className="backgroundShadow absolute inset-0 z-[1]"></div>
      <div className="relative z-10 mt-60 flex flex-col justify-center">
        <h1 className="mb-5 text-center text-[4rem] leading-none font-bold text-white uppercase">
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

          <div className="mb-40 flex gap-4">
            {weapons
              ?.slice(0, 5)
              .map((weapon) => <NewsCard key={weapon.name} {...weapon} />)}
          </div>

          <Image
            src="/BarraRosa.png"
            alt="Barra Rosa"
            width={1920}
            height={16}
            className="mb-10"
          />
        </section>
      </div>
    </section>
  );
}
