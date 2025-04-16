import Image from "next/image";

interface HighlightedItemCardProps {
  backgroundImage: string;
  image: string;
  name: string;
  origin: string;
  size: "small" | "large";
}
export function HighlightedItemCard(props: HighlightedItemCardProps) {
  const { backgroundImage, image, name, origin, size } = props;
  return size === "large" ? (
    <div className="relative flex h-[30rem] w-80 flex-col items-center justify-center gap-4 bg-white shadow-2xl shadow-gray-400 lg:w-96">
      <Image
        src={backgroundImage}
        alt="Highlighted item background image"
        width={224}
        height={340}
        className="absolute inset-0 z-0 mx-auto"
        aria-hidden
      />
      <div className="mt-20 flex flex-col items-center justify-around">
        <Image
          src={image}
          alt={name}
          width={216}
          height={216}
          className="z-10 flex"
        />
        <h2 className="text-primary-gray mx-1 mt-14 text-2xl">{name}</h2>
        <div className="relative flex w-fit justify-center px-12 py-8">
          <Image
            src="/HighlightedRectangle.svg"
            alt="price flag"
            fill
            className="absolute inset-0 z-0 h-full w-full"
            aria-hidden
          />
          <p className="z-10 text-white uppercase">{origin}</p>
        </div>
      </div>
    </div>
  ) : (
    <div className="relative flex h-[9.25rem] w-88 items-center justify-center gap-4 bg-white shadow-2xl shadow-gray-400 lg:w-[27rem]">
      <Image
        src={backgroundImage}
        alt="Highlighted item background image"
        width={110}
        height={124}
        className="absolute inset-0 z-0 mx-8 mt-4"
        aria-hidden
      />
      <div className="mt-4 flex">
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="z-10"
        />
      </div>
      <div className="flex flex-col justify-center bg-white">
        <h2 className="text-primary-gray mx-1 text-xl">{name}</h2>
        <div className="relative flex w-fit justify-center px-6 py-6 lg:px-12">
          <Image
            src="/HighlightedRectangle.svg"
            alt="price flag"
            fill
            className="absolute inset-0 z-0 h-full w-full"
            aria-hidden
          />
          <p className="z-10 text-white uppercase">{origin}</p>
        </div>
      </div>
    </div>
  );
}
