"use client";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import Image from "next/image";

interface CTABannerProps {
  title: string;
  subTitle: string;
  description: string;
  futureDate: Date;
}

export function CTABanner(props: CTABannerProps) {
  const { title, subTitle, description, futureDate } = props;

  return (
    <div className="bg-primary-midBlue flex h-[48rem] w-screen items-center justify-center">
      <div className="flex w-full justify-center">
        <div className="flex h-full max-w-[27.25rem] flex-col items-start justify-center gap-8">
          <h2 className="text-[40px] font-bold text-white uppercase">
            {title}
          </h2>
          <p className="bg-secondary-blue px-12 py-4 text-xl font-bold text-white uppercase">
            {subTitle}{" "}
          </p>

          <p className="text-white">{description}</p>
          {futureDate && (
            <FlipClockCountdown
              to={futureDate}
              labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
              showSeparators={false}
              labelStyle={{
                fontSize: 10,
                fontWeight: 500,
                textTransform: "uppercase",
                color: "#fff",
              }}
              digitBlockStyle={{ width: 40, height: 60, fontSize: 30 }}
              duration={0.5}
            />
          )}

          <Image
            src="/CTAButton.svg"
            alt="Acessar Jogo"
            width={232}
            height={48}
            className="mt-2 hover:fill-amber-300"
          />
        </div>
      </div>
      <div className="relative h-full w-full">
        <Image
          src="/CTABanner.png"
          alt="Five M Nite"
          width={1058}
          height={768}
          className="absolute right-0 ml-auto max-w-[66rem]"
        />
      </div>
    </div>
  );
}
