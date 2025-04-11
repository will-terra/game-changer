"use client";
import { useGetBackgroundImageQuery } from "@/lib/features/content/backgroundAPI";
import Image from "next/image";

export default function News() {
  const { data, error, isLoading } = useGetBackgroundImageQuery(
    "https://s3-alpha-sig.figma.com/img/cbc7/6430/10302b4a0bdffe2ed3f74708e153567b?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eQSo-r76-6C0JhyTjhalVN8vbxZUZjDw69P1nqv~tSN9-kyckK69ANdaeiwtytEAL7vTiHALxaOVXOnDILCEwT8SegRKsRJ7oF6e48vTDJDQiCKAC0y-79tWoIOAH6DyMsZN0HvPNcRHXx3L9aZLMVRuUz0LEcq6LhY54HLTXuAtRqg3FKtDVgijig8Wn1xGx2b30u0nPg~2DQz9irV3nf~JyXYhfoEKhUlngPVkzZk0y--84163zFva7CEA2EDtr01geSNARx9vmiKYMRi46WpuoVnTEgoW2vJ3ct2Z~-QKJPuguxsM1-4NwpYxqgb6qz6AZtFvr7a81SzTczn-iw__",
  );

  return (
    <section className="bg-primary-darkBlue relative flex min-h-screen min-w-screen items-center justify-center">
      {isLoading ? (
        <></>
      ) : data?.url ? (
        <Image
          src={data.url}
          alt="news background image"
          width={1920}
          height={1030}
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />
      ) : (
        <div>Imagem não disponível</div>
      )}
      <div className="relative z-10">Hello world</div>
    </section>
  );
}
