import Link from "next/link";
import Image from "next/image";

import foodList from "./data/foodList";

const MealsPage = () => {

  return (
    <div className="mt-20 min-h-screen">
      <div className="p-4 mx-auto w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {foodList.map((food) => (
          <Link href={`/meals/${food.slug}`} className="rounded-lg overflow-hidden hover:scale-105 transition-all duration-300" key={food.id}>
            <Image className="aspect-3/2" src={food.image} alt={food.alt} width={500} height={500} />
            <div className="p-4 bg-stone-700 text-stone-300">
              <div>
                <h3>{food.title}</h3>
                <p className="text-sm text-stone-400">{food.subtitle}</p>
              </div>

              <p className="mt-2 text-sm text-stone-400">{food.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MealsPage