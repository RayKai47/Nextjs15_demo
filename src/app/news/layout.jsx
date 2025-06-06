'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaAlignJustify, FaAlignRight } from "react-icons/fa6";

const NewsLayout = ({ children }) => {
  const [toggleAside, setToggleAside] = useState(false)

  return (
    <div className="container grid grid-cols-12 gap-4 mx-auto">
      <div className="col-span-12 md:col-span-3">
        <aside className="
          px-4 py-6
          text-sky-950
          bg-linear-to-br/hsl from-sky-500 from-5% via-blue-500 via-50% to-sky-500 to-95%
          hidden md:flex flex-col gap-4
          rounded-lg
        ">
          <h2 className="text-2xl font-bold">Categories</h2>
          <ul className="flex flex-col gap-2">
              <li>
                  <Link href="/news/category/1">Category 1</Link>
              </li>
              <li>
                  <Link href="/news/category/2">Category 2</Link>
              </li>
              <li>
                  <Link href="/news/category/3">Category 3</Link>
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
                  <Link href="/news/category/1">Category 1</Link>
              </li>
              <li>
                  <Link href="/news/category/2">Category 2</Link>
              </li>
              <li>
                  <Link href="/news/category/3">Category 3</Link>
              </li>
          </ul>
        </div>
      </div>
      <div className="col-span-12 md:col-span-9">
          {children}
      </div>
    </div>
  )
}

export default NewsLayout