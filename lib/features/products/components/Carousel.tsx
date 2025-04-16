import { useSpringCarousel } from "react-spring-carousel";
import { useGetProductsQuery } from "../api/productsAPI";
import Image from "next/image";

const PLACEHOLDER_IMAGE = "/PlaceholderPed.webp";

export function Carousel() {
  const { data: items } = useGetProductsQuery("peds");

  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      withLoop: true,
      initialActiveItem: 1,

      items: items && items.length > 0
        ? items.slice(0, 5).map((item, index) => ({
          id: `item-${index + 1}`,
          renderItem: (
            <Image
              src={item?.images?.[0] || PLACEHOLDER_IMAGE}
              alt={item?.name || `Carousel Item ${index + 1}`}
              width={422}
              height={564}
            />
          ),
        }))
        : Array(4).fill(0).map((_, index) => ({
          id: `item-${index + 1}`,
          renderItem: (
            <Image
              src={PLACEHOLDER_IMAGE}
              alt={`Carousel Item ${index + 1}`}
              width={422}
              height={564}
            />
          ),
        })),
    });

  return (
    <div className="mt-20 flex h-fit max-h-[40rem] w-4/5 items-center justify-center">
      <Image
        src="/slideToNextItem.png"
        alt="Next Item"
        width={40}
        height={40}
        className="hover:bg-secondary-blue z-10 h-10 w-10 scale-x-[-1]"
        onClick={slideToPrevItem}
      />
      <div className="z-0  w-[80rem] overflow-hidden ">
        <div className="z-10 mx-auto  max-w-96 justify-center ">
          {carouselFragment}
        </div>
      </div>
      <Image
        src="/slideToNextItem.png"
        alt="Next Item"
        width={40}
        height={40}
        className="hover:bg-secondary-blue z-10 h-10 w-10"
        onClick={slideToNextItem}
      />
    </div >
  );
}