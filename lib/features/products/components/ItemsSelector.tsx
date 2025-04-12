import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Image from "next/image";
import { setSelectedCategory } from "../productsSlice";

export function ItemsSelector() {
  const dispatch = useAppDispatch();

  return (
    <div className="bg-secondary-lightBlue z-10 mt-40 flex h-20 w-[37.5rem] items-center justify-between">
      <Image
        src="/SelectorBorder.svg"
        alt="selector border"
        width={12}
        height={56}
        aria-hidden
      />
      <div className="flex w-[19.75rem] flex-wrap justify-around gap-4 p-4 text-white">
        <div
          className="flex flex-col items-center"
          onClick={() => dispatch(setSelectedCategory("weapons"))}
        >
          <p>Armas</p>
        </div>
        <div
          className="flex flex-col items-center"
          onClick={() => dispatch(setSelectedCategory("uniforms"))}
        >
          <p>Uniformes</p>
        </div>
        <div
          className="flex flex-col items-center"
          onClick={() => dispatch(setSelectedCategory("peds"))}
        >
          <p>Peds</p>
        </div>
      </div>
      <Image
        src="/SelectorBorder.svg"
        alt="selector border"
        width={12}
        height={56}
        className="scale-x-[-1]"
        aria-hidden
      />
    </div>
  );
}
