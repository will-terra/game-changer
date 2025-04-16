"use client";
import { useAppSelector } from "@/lib/hooks";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const FlipClockCountdown = dynamic(
  () => import("@leenguyen/react-flip-clock-countdown"),
  { ssr: false },
);

interface CTABannerProps {
  title: string;
  subTitle: string;
  description: string;
}

export function CTABanner(props: CTABannerProps) {
  const { title, subTitle, description } = props;
  const { isMobile } = useAppSelector((state) => state.products);
  const futureDate = "2025-04-27T12:00:00.000Z";

  return (
    <div className="bg-primary-midBlue flex h-full w-screen flex-col place-self-center overflow-hidden px-4 pt-32 pb-96 lg:h-[48rem] lg:flex-row lg:px-0 lg:pt-0 lg:pb-0">
      <div className="ml-4 flex w-full justify-center">
        <div className="flex h-full max-w-96 flex-col items-start justify-center gap-8 lg:max-w-[27.25rem]">
          <h2 className="text-[40px] font-bold text-white uppercase">
            {title}
          </h2>
          <p className="bg-secondary-blue px-12 py-4 text-xl font-bold text-white uppercase">
            {subTitle}
          </p>

          <p className="text-white">{description}</p>
          {futureDate && (
            <FlipClockCountdown
              to={futureDate}
              labels={["DIAS", "HORAS", "MINUTOS", "SEGUNDOS"]}
              showSeparators={false}
              labelStyle={{
                fontSize: 10,
                fontWeight: 500,
                textTransform: "uppercase",
                color: "#fff",
              }}
              digitBlockStyle={{
                width: isMobile ? 30 : 40,
                height: isMobile ? 50 : 60,
                fontSize: isMobile ? 25 : 30,
              }}
              duration={0.5}
            />
          )}
          <Link href="#">
            <Image
              src="/CTAButton.svg"
              alt="Acessar Jogo"
              width={232}
              height={48}
              className="mt-2 mb-12"
            />
          </Link>
        </div>
      </div>
      <div className="relative h-full w-full">
        <Image
          src="/CTABanner.png"
          alt="Five M Nite"
          width={1058}
          height={768}
          className="absolute -right-4 ml-auto max-w-[66rem] lg:-right-60 2xl:right-0"
        />
      </div>
    </div>
  );
}
