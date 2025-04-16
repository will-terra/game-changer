import { useSpringCarousel } from "react-spring-carousel";
import { useGetProductsQuery } from "../api/productsAPI";
import Image from "next/image";
import { useEffect, useState } from "react";

const PLACEHOLDER_IMAGE = "/PlaceholderPed.webp";

export function Carousel() {
  const { data: items } = useGetProductsQuery("peds");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const getImageSrc = (item: { images?: string[] }) => {
    if (!item || !item.images || !item.images[0] || item.images[0] === "") {
      return PLACEHOLDER_IMAGE;
    }
    return item.images[0];
  };

  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      withLoop: true,
      initialActiveItem: 1,

      items: [
        {
          id: "item-1",
          renderItem: (
            <div>
              {isClient && items && (
                <Image
                  src={getImageSrc(items[0])}
                  alt={items?.[0]?.name || "Produto 1"}
                  width={422}
                  height={564}
                  priority
                />
              )}
            </div>
          ),
        },
        {
          id: "item-2",
          renderItem: (
            <div>
              {isClient && items && (
                <Image
                  src={getImageSrc(items[1])}
                  alt={items?.[1]?.name || "Produto 2"}
                  width={422}
                  height={564}
                />
              )}
            </div>
          ),
        },
        {
          id: "item-3",
          renderItem: (
            <div>
              {isClient && items && (
                <Image
                  src={getImageSrc(items[2])}
                  alt={items?.[2]?.name || "Produto 3"}
                  width={422}
                  height={564}
                />
              )}
            </div>
          ),
        },
        {
          id: "item-4",
          renderItem: (
            <div>
              {isClient && items && (
                <Image
                  src={getImageSrc(items[3])}
                  alt={items?.[3]?.name || "Produto 4"}
                  width={422}
                  height={564}
                />
              )}
            </div>
          ),
        },
      ],
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
      <div className="z-0 w-[80rem] overflow-hidden">
        <div className="z-10 mx-auto max-w-96 justify-center">
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
    </div>
  );
}
