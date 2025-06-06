import Image from "next/image";

const Footer = () => {
  return (
    // For light mode
    // bg-linear-to-br from-orange-300 from-10% via-orange-500 via-40% to-amber-600 to-90%
    <footer className="mt-30 pt-8 pb-10
      min-h-[200px] text-stone-300
      bg-linear-to-br from-stone-300/55 from-5% via-stone-700 via-30% to-stone-600/30 to-90%
    ">
      <div className="mx-auto
        px-5
        w-[full-calc(100vw-40px)] md:w-3/4
        grid grid-cols-1 md:grid-cols-3
        justify-center
        items-start
        gap-x-3
        gap-y-10
      ">
        <div className="relative col-span-1 md:col-span-3">
          <Image
            className="invert-100 drop-shadow-xl/35"
            src="/next.svg"
            alt="Logo"
            width={200}
            height={42}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl text-stone-50 font-bold drop-shadow-xl/20">服務項目</h2>
          <div className="flex flex-col gap-1">
            <p>早餐</p>
            <p>午餐</p>
            <p>晚餐</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl text-stone-50 font-bold drop-shadow-xl/20">餐點資訊</h2>
          <div className="grid grid-cols-2 gap-1">
            <p className="transition-all transition-ease-in-out transition-duration-300 hover:text-stone-50">中式</p>
            <p className="transition-all transition-ease-in-out transition-duration-300 hover:text-stone-50">西式</p>
            <p className="transition-all transition-ease-in-out transition-duration-300 hover:text-stone-50">日式</p>
            <p className="transition-all transition-ease-in-out transition-duration-300 hover:text-stone-50">韓式</p>
            <p className="transition-all transition-ease-in-out transition-duration-300 hover:text-stone-50">泰式</p>
            <p className="transition-all transition-ease-in-out transition-duration-300 hover:text-stone-50">越式</p>
            <p className="transition-all transition-ease-in-out transition-duration-300 hover:text-stone-50">港式</p>
            <p className="transition-all transition-ease-in-out transition-duration-300 hover:text-stone-50">台式</p>
            <p className="transition-all transition-ease-in-out transition-duration-300 hover:text-stone-50">其他</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl text-stone-50 font-bold drop-shadow-xl/20">聯絡資訊</h2>
          <div className="flex flex-col gap-1">
            <p>Email: info@example.com</p>
            <p>電話: 0912345678</p>
            <p>地址: 123 台北市</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer