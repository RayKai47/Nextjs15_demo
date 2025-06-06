import Link from 'next/link';

const MealsNotFound = () => {
  return (
    <div className="">
      <div className="mt-20 mx-auto w-full md:w-3/4 text-cetner flex flex-col justify-center items-center gap-8">
        <div className="flex flex-col justify-center items-center gap-2">
          <h2 className="text-3xl text-stone-100 font-bold">Meal is not found</h2>
          <p className="text-stone-300">Please find another meal.</p>
        </div>
        <Link
          href="/meals"
          className="px-4 py-2 text-stone-400 bg-stone-700 rounded-md
          hover:bg-stone-600 hover:text-stone-100 transition-all duration-300"
        >
          Go to meals page
        </Link>
      </div>
    </div>
  )
}

export default MealsNotFound;