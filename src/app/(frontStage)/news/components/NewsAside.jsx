'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaAlignJustify, FaAlignRight } from "react-icons/fa6";

const NewsAside = () => {
  const [toggleAside, setToggleAside] = useState(false)

  return (
    <>
      <aside className="
        px-4 py-6
        text-slate-200
        bg-linear-to-br/hsl from-slate-500/80 from-5% via-slate-700/90 via-50% to-slate-800/70 to-95%
        box-shadow-[0_0_10px_rgba(255,255,255,.8)]
        sticky top-20
        hidden md:flex flex-col gap-4
        rounded-lg
      ">
        <h2 className="text-2xl font-bold">Categories</h2>
        <ul className="flex flex-col gap-2 text-slate-400">
            <li>
                <Link href="/news/category_1" className="hover:text-slate-50 transition-all duration-400">Category 1</Link>
            </li>
            <li>
                <Link href="/news/category_2" className="hover:text-slate-50 transition-all duration-400">Category 2</Link>
            </li>
            <li>
                <Link href="/news/category_3" className="hover:text-slate-50 transition-all duration-400">Category 3</Link>
            </li>
            <li>
                <Link href="/news/category_4" className="hover:text-slate-50 transition-all duration-400">Category 4</Link>
            </li>
            <li>
                <Link href="/news/category_5" className="hover:text-slate-50 transition-all duration-400">Category 5</Link>
            </li>
        </ul>
      </aside>
      <div className={`
        sticky top-0
        px-4 py-6
        text-white
        md:hidden
        flex flex-col gap-4
        items-start
        transition-all duration-400
        overflow-hidden
        ${toggleAside ? 'h-full bg-blue-500' : 'h-0 bg-white/25'}
      `}>
        <div className="flex items-center justify-between w-full">
          <h2 className="
            pr-3
            text-lg font-bold
            border-b border-white
            inline-block
          ">
            Categories
          </h2>
          <div className="cursor-pointer" onClick={() => setToggleAside(!toggleAside)}>
            <span className={`text-white ${toggleAside ? 'hidden' : 'inline'}`}>
              <FaAlignJustify size={16} />
            </span>
            <span className={`text-white ${toggleAside ? 'inline' : 'hidden'}`}>
              <FaAlignRight size={16} />
            </span>
          </div>
        </div>
        <ul className="flex flex-col gap-2">
            <li>
                <Link href="/news/category_1">Category 1</Link>
            </li>
            <li>
                <Link href="/news/category_2">Category 2</Link>
            </li>
            <li>
                <Link href="/news/category_3">Category 3</Link>
            </li>
        </ul>
      </div>
    </>
  )
}

export default NewsAside