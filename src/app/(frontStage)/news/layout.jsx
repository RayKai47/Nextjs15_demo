import Image from 'next/image'

import NewsAside from './components/NewsAside'

const NewsLayout = ({ children }) => {

  return (
    <>
      <div className="w-full relative h-[400px]">
        {/* <Image src="/news/news_banner.jpg" alt="News Banner" fill /> */}
        <Image src="/meals/meals_banner.jpg" alt="News Banner" fill />
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 bg-blend-multiply">
          <div className="
            absolute top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            flex flex-col items-center justify-center gap-2
          ">
            <h1 className="text-4xl font-bold italic text-slate-200">News</h1>
            <p className="text-sm text-stone-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[calc(100vh-200px)]">
        <div className="mx-auto mt-20 px-4 md:px-6 w-full lg:w-4/5 grid grid-cols-12 gap-4">
          
          <div className="col-span-12 md:col-span-3">
            <NewsAside />
          </div>
          <div className="col-span-12 md:col-span-9">
              {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsLayout