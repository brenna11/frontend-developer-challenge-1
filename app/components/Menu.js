'use client';

import { useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
// icons
import { FaTh, FaRegComment, FaStar, FaClipboardCheck, FaUserGraduate, FaThList } from 'react-icons/fa';
import { IoMdNotificationsOutline, IoIosHelpCircleOutline, IoIosBookmarks, IoMdPeople } from "react-icons/io";
import { HiPuzzle } from "react-icons/hi";
import { ImLab, ImTrophy, ImCool } from "react-icons/im";
import { SiCodeproject } from "react-icons/si";
import { MdLeaderboard } from "react-icons/md";

import Human from '../../public/human.svg';
import { ThemeSwitcher } from './ThemeSwitcher';
import { useTheme } from "next-themes";
import classNames from 'classnames';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

const links = [
  { label: 'Explore', href: '/explore' },
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Challenges', href: '/challenges' },
  { label: 'Labs', href: '/labs' },
  { label: 'Projects', href: '/projects' },
  { label: 'Career Explorer', href: '/career' },
]

const listLinks = [
  { label: 'Labs', icon: <ImLab />, href: '/labs' },
  { label: 'Lab Programs', icon: <FaStar />, href: '/labs' },
  { label: 'Projects', icon: <SiCodeproject />, href: '/projects' },
  { label: 'Challenges', icon: <HiPuzzle />, href: '/challenges' },
  { label: 'Assessment', icon: <FaClipboardCheck />, href: '/assessment' },
  { label: 'Resource', icon: <IoIosBookmarks />, href: '/resource' },
  { label: 'Career Explorer', icon: <FaUserGraduate />, href: '/career' },
  { label: 'Achievements', icon: <ImTrophy />, href: '/achievement' },
  { label: 'Organizations', icon: <IoMdPeople />, href: '/organizations' },
  { label: 'Team Matching', icon: <ImCool />, href: '/team' },
  { label: 'Leaderboard', icon: <MdLeaderboard />, href: '/leaderboard' },
]

const Menu = () => {
  const { theme } = useTheme();
  const currentPath = usePathname();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1000);
    };

    handleResize(); // Check initial screen size
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
<nav className={`py-2 px-4 text-white fixed w-full ${theme === 'dark' ? 'bg-black' : 'bg-primary'}`}>
  <div className="container mx-auto flex items-center justify-between">
    {/* Logo */}
    <div>
      <Link legacyBehavior href="/">
        <a className="text-2xl font-edutas font-extrabold">Preprlabs</a>
      </Link>
    </div>

    {/* Navigation Links (Desktop) */}
    <ul className="hidden md:flex items-center justify-center flex-grow space-x-9">
      {links.map(link => (
        <Link
          key={link.href}
          href={link.href}
          className={classNames({
            'text-secondary line-through': link.href === currentPath,
            'text-neutral': link.href !== currentPath,
            'hover:text-secondary transition duration-500 dark:text-beige dark:hover:text-secondary': true,
          })}
        >
          {link.label}
        </Link>
      ))}
    </ul>

    {/* Search and other components (Desktop) */}
    <div className="hidden md:flex items-center justify-end gap-4">
      <IoMdNotificationsOutline className="text-2xl cursor-pointer" />
      <FaRegComment className="text-xl cursor-pointer" />
      <IoIosHelpCircleOutline className="text-2xl cursor-pointer" />

      <input
        type="text"
        placeholder="Search..."
        className="p-2 rounded-full"
        onChange={(e) => handleSearch(e.target.value)}
      />

      <ThemeSwitcher />
      <div className='w-8 rounded-full'>
        <Image src={Human} />
      </div>

      {/* Popover (Desktop) */}
      <Popover>
        <PopoverTrigger>
          <FaTh className="text-xl cursor-pointer" />
        </PopoverTrigger>
        <PopoverContent className={`w-52 absolute right-0 top-2 leading-loose ${theme === 'dark' ? 'bg-black' : 'bg-primary'}`}>
          <ul>
            {listLinks.map(link => (
              <li key={link.href}>
                <Link legacyBehavior href={link.href}>
                  <a className={classNames({
                    'text-secondary dark:text-secondary line-through': link.href === currentPath,
                    'text-neutral': link.href !== currentPath,
                    'hover:text-secondary transition duration-500 dark:text-beige dark:hover:text-secondary': true,
                  })}>
                    <div className='flex items-center ml-3'>
                      {link.icon}<span className="ml-2">{link.label}</span>
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </PopoverContent>
      </Popover>
    </div>

    {/* FaThList (Small Screen) */}
    {isSmallScreen && (
      <Sheet>
        <SheetTrigger asChild>
          <FaThList className="text-xl cursor-pointer"/>
        </SheetTrigger>
        <SheetContent side="left" className={`w-screen-lg ${theme === 'dark' ? 'bg-black' : 'bg-primary'}`}>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 rounded-full w-full"
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          <ul className="flex flex-col items-start justify-center">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={classNames({
                  'text-secondary line-through': link.href === currentPath,
                  'text-neutral': link.href !== currentPath,
                  'hover:text-secondary transition duration-500 dark:text-beige dark:hover:text-secondary py-3': true,
                })}
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    )}
  </div>
</nav>

  );
};

export default Menu;
