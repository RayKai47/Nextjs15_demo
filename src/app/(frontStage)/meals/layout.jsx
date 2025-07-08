'use client'

import Image from "next/image";
import { usePathname } from "next/navigation";

import foodList from "./data/foodList";

const MealsLayout = ({ children }) => {
  const pathname = usePathname();
  const isMealsDetail = pathname !== "/meals";

  const currentSlug = isMealsDetail
    ? pathname.split("/").pop()
    : null;

  const currentFood = isMealsDetail
    ? foodList.find((food) => food.slug === currentSlug)
    : null;

  console.log(currentFood);

  return (
    <div>
      <div className="h-[400px] relative">
        <Image className="brightness-30" src="/meals/meals_banner.jpg" alt="Meal" fill />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-4xl font-bold italic text-stone-300">
            {isMealsDetail
              ? (currentFood?.title || "Meal Is Not Found")
              : "Meals"}
          </h1>
          <p className="mt-4 text-sm text-stone-400">
            {isMealsDetail
              ? (currentFood?.subtitle || "Meal does not exist, please find another meal.")
              : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."}
          </p>
        </div>
      </div>
      {children}
    </div>
  )
}

export default MealsLayout