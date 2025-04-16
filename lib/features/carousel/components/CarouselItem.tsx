import Image from "next/image";

const PLACEHOLDER_IMAGE = "/PlaceholderPed.webp";

type CarouselItemProps = {
  item?: {
    name?: string;
    images?: string[];
  };
  isActive: boolean;
  index: number;
};

export function CarouselItem({ item, isActive, index }: CarouselItemProps) {
  return (
    <div
      className={`transform transition-all duration-300 ${
        isActive ? "scale-105 opacity-100" : "opacity-70 blur"
      }`}
    >
      <Image
        src={item?.images?.[0] || PLACEHOLDER_IMAGE}
        alt={item?.name || `Item do carrossel ${index + 1}`}
        width={422}
        height={564}
        className="rounded-lg shadow-md"
      />
      {isActive && item?.name && (
        <div className="bg-opacity-60 absolute right-0 bottom-4 left-0 rounded-b-lg bg-black p-2 text-center text-white">
          {item.name}
        </div>
      )}
    </div>
  );
}
