'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { MdMenu } from "react-icons/md";
import ThemesSwitch from "#/components/(frontStageCompo)/ThemesSwitch";

import routes from '#/infra/routes/routes'

const Header = () => {  

  const path = usePathname();

  return (
    <header className="
      bg-linear-to-br from-stone-500 to-stone-600/30 to-90%
      dark:bg-linear-to-br dark:from-stone-900 dark:to-stone-700/10 dark:to-90%
      header
    ">
      <Link href="/">
        <Image
          className="header_logo drop-shadow-xl/35"
          src="/next.svg"
          alt="Brand Logo"
          height={24}
          width={100}
          priority
        />
      </Link>
      <nav className="nav">
        <ul className="md:nav_list">
          {routes.map((route) => (
            <li key={route.path} className={path.startsWith(route.path) ? 'active' : undefined}>
              <Link href={route.path} >{route.name}</Link>
            </li>
        ))}
        </ul>
      </nav>
      <div className="w-25 flex justify-end">
        <div className="
          w-8 h-8
          relative
          hidden md:block
          transition-all duration-300
        ">
          <ThemesSwitch />
        </div>
      </div>
      <div className="md:nav_menu">
        <MdMenu size={24} />
      </div>
    </header>
  )
}

export default Header;