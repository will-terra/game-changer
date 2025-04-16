import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Image from "next/image";
import { setSelectedCategory } from "../productsSlice";
import { ProductType } from "../api/productsAPI";

export function ItemsSelector() {
  const dispatch = useAppDispatch();
  const selectedCategory = useAppSelector(
    (state) => state.products.selectedCategory,
  );

  const handleCategoryChange = (category: ProductType) => {
    dispatch(setSelectedCategory(category));
  };

  return (
    <div className="bg-secondary-lightBlue z-10 mt-20 flex h-52 w-[37.5rem] items-center justify-between lg:mt-50 lg:h-20">
      <Image
        src="/SelectorBorder.svg"
        alt="selector border"
        width={12}
        height={56}
        aria-hidden
        className="hidden lg:flex"
      />
      <div className="mt-5 mr-14 ml-10 flex h-full w-[19.75rem] flex-col gap-4 p-4 text-white lg:ml-0 lg:flex-row">
        <div className="relative flex h-full min-w-[6.75rem] flex-col items-center">
          <input
            type="radio"
            id="weapons"
            name="category"
            value="weapons"
            className="sr-only"
            checked={selectedCategory === "weapons"}
            onChange={() => handleCategoryChange("weapons")}
          />
          <label
            htmlFor="weapons"
            className={`flex cursor-pointer flex-col items-center ${selectedCategory === "weapons" && "font-bold"}`}
          >
            Armas
            <Image
              src="/DownRectangle.png"
              alt=""
              width={104}
              height={8}
              className={`mt-4 ${selectedCategory === "weapons" ? "flex" : "hidden"}`}
              aria-hidden
            />
            <Image
              src="/SelectorElipse.png"
              alt=""
              width={250}
              height={57}
              className={`absolute bottom-0 mb-2 ${selectedCategory === "weapons" ? "flex" : "hidden"}`}
              aria-hidden
            />
          </label>
        </div>
        <div className="relative flex h-full min-w-[6.75rem] flex-col items-center">
          <input
            type="radio"
            id="uniforms"
            name="category"
            value="uniforms"
            className="sr-only"
            checked={selectedCategory === "uniforms"}
            onChange={() => handleCategoryChange("uniforms")}
          />
          <label
            htmlFor="uniforms"
            className={`flex cursor-pointer flex-col items-center ${selectedCategory === "uniforms" && "font-bold"}`}
          >
            Uniformes
            <Image
              src="/DownRectangle.png"
              alt=""
              width={104}
              height={8}
              className={`mt-4 ${selectedCategory === "uniforms" ? "flex" : "hidden"}`}
              aria-hidden
            />
            <Image
              src="/SelectorElipse.png"
              alt=""
              width={250}
              height={57}
              className={`absolute bottom-0 mb-2 ${selectedCategory === "uniforms" ? "flex" : "hidden"}`}
              aria-hidden
            />
          </label>
        </div>

        <div className="relative flex h-full min-w-[6.75rem] flex-col items-center">
          <input
            type="radio"
            id="peds"
            name="category"
            value="peds"
            className="sr-only"
            checked={selectedCategory === "peds"}
            onChange={() => handleCategoryChange("peds")}
          />
          <label
            htmlFor="peds"
            className={`flex cursor-pointer flex-col items-center ${selectedCategory === "peds" && "font-bold"}`}
          >
            Peds
            <Image
              src="/DownRectangle.png"
              alt=""
              width={104}
              height={8}
              className={`mt-4 ${selectedCategory === "peds" ? "flex" : "hidden"}`}
              aria-hidden
            />
            <Image
              src="/SelectorElipse.png"
              alt=""
              width={250}
              height={57}
              className={`absolute bottom-0 mb-2 ${selectedCategory === "peds" ? "flex" : "hidden"}`}
              aria-hidden
            />
          </label>
        </div>
      </div>
      <Image
        src="/SelectorBorder.svg"
        alt="selector border"
        width={12}
        height={56}
        className="hidden scale-x-[-1] lg:flex"
        aria-hidden
      />
    </div>
  );
}
