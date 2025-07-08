'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

const Pages = () => {
  const pathname = usePathname()

  return (
    <div>
      <div className="px-4 py-6 min-h-[calc(90vh-200px)] bg-slate-700">
        <h2 className="text-2xl font-bold text-slate-200">News Category</h2>
        <p className="mt-1 text-sm text-slate-400">Subtitle</p>
        <p className="mt-3 text-sm font-bold text-slate-400">動態路徑：<span className="italic text-slate-200">{pathname}</span></p>
      </div>
      <div className="mt-5 text-center">
        <Link
          href="/news"
          className="
            px-6 py-4
            text-center text-slate-300
            bg-linear-to-br from-slate-800 from-5% via-slate-700 via-30% to-slate-600 to-95%
            rounded
            inline-block
            hover:text-slate-50
            transition-all duration-500
          "
        >
          回新聞主頁
        </Link>
      </div>
    </div>
  )
}

export default Pages