'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { MdMenu, MdDarkMode, MdLightMode } from "react-icons/md";

import routes from '#/infra/routes/routes'

const Header = () => {  

  const path = usePathname();
  // const isActive = (path) => path === path;

  return (
    <header className="header bg-linear-to-br from-stone-500 to-stone-600/30 to-90%">
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
      <div className="dark_mode hidden md:block">
        <MdDarkMode className="dark_icon" size={24} />
        <MdLightMode className="light_icon" size={24} />
      </div>
      <div className="md:nav_menu">
        <MdMenu size={24} />
      </div>
    </header>
  )
}

export default Header;