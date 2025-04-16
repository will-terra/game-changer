import Image from "next/image";

type CarouselControlsProps = {
  onNavigate: (direction: "next" | "prev") => void;
  side: "left" | "right";
};

export function CarouselControls({ onNavigate, side }: CarouselControlsProps) {
  return (
    <>
      {side === "left" ? (
        <button
          className="hover:bg-secondary-blue z-10 h-10 w-10 scale-x-[-1]"
          onClick={() => onNavigate("prev")}
          aria-label="Item anterior"
        >
          <Image src="/slideToNextItem.png" alt="" width={40} height={40} />
        </button>
      ) : (
        <button
          className="hover:bg-secondary-blue z-10 h-10 w-10"
          onClick={() => onNavigate("next")}
          aria-label="Próximo item"
        >
          <Image src="/slideToNextItem.png" alt="" width={40} height={40} />
        </button>
      )}
    </>
  );
}
