import Image from "next/image";
// import swiper1 from "swiper1.jpg";
import HomeCategory from "#/components/(frontStageCompo)/home/HomeCategory";
import HomeCommunity from "#/components/(frontStageCompo)/home/HomeCommunity";

const Home = () => {


  
  return (
    <>
      <div className="swiper_container">
        <Image src="/swiper1.jpg" alt="Brand Logo" fill />
      </div>

      <HomeCategory />
      <HomeCommunity />

      <div className="rwd_container mt-5 flex flex-col gap-4"> 
        <h2 className="text-2xl font-bold italic text-stone-700 dark:text-stone-300">從這裡分享</h2>
        <p className="text-stone-500 dark:text-stone-400">分享你的美食，讓更多人看到</p>
        <div>
          <a
            className="
              px-4 py-2
              text-stone-300
              dark:text-stone-700
              bg-stone-700
              dark:bg-stone-300
              inline-block
              rounded-md
              transition-all duration-300 ease-in-out
              hover:bg-stone-500
              dark:hover:bg-stone-400"
            href="/community"
          >
            分享
          </a>
        </div>
      </div>


      
    </>

    // 原生參考格式
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
    //     <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    //       <li className="mb-2 tracking-[-.01em]">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
    //           src/app/page.js
    //         </code>
    //         .
    //       </li>
    //       <li className="tracking-[-.01em]">
    //         Save and see your changes instantly.
    //       </li>
    //     </ol>

    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    // </div>
  );
}

export default Home;