'use client'

import { Suspense } from "react";

import Image from "next/image";
import { usePathname, notFound } from "next/navigation";

import foodList from "../data/foodList";

const MealDetailPage = () => {
  const pathname = usePathname();
  const mealSlug = pathname.split("/").pop();
  const details = foodList.find((food) => food.slug === mealSlug);

  console.log(mealSlug);

  if (!details) {
    return notFound();
  }

  return (
    <Suspense fallback={
      <p className="loading_flashing mt-20 w-full text-center">
        <svg className="mr-3 size-5 animate-spin"></svg>
        Fetching meal details...
      </p>
    }>
      <div className="mt-12.5 mb-5 mx-auto px-0 md:px-6 w-full lg:w-3/4 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image src={details.image} alt={details.alt} fill />
        </div>
        <div className="meal_content">
          <div>
            <div className="meal_content_block">
              <h2 className="text-3xl font-bold text-stone-200">
                {details.title}
                <span className="ml-2 text-base font-normal text-stone-300/70 italic"> by {details.author}</span>
              </h2>
              <p className="text-stone-300/80">{details.subtitle}</p>
            </div>
            <div className="meal_content_block">
              <h2 className="text-2xl font-bold text-stone-200">Description</h2>
              <p className="text-stone-300/80">{details.description}</p>
            </div>
          </div>
          <p className="text-stone-200 font-semibold text-2xl">Price: {details.price} TWD</p> 
        </div>
      </div>
    </Suspense>
  )
}

export default MealDetailPage