"use client"

import { motion } from 'framer-motion'
import { Tulpen_One } from 'next/font/google'
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";


const navItems = [
  {
    name: 'murcielago',
    link: '/'
  },
  {
    name: 'urus',
    link: '/urus'
  },{
    name: 'huracan',
    link: '/huracan'
  },{
    name: 'aventador',
    link: '/spider'
  },
]
const font = Tulpen_One({ weight: ["400"], subsets: ["latin"]})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const path = usePathname()

  return (
    <html lang="en">
      <body
        className={font.className}
      >
        <div className='top-nav'>
           { navItems.map(
            (car, id) => <Link key = {id} href={car.link}><motion.div className={car.link === path ? 'top-nav-item-active' : 'top-nav-item'}>{car.name}</motion.div></Link>)
           }
        </div>
        {children}
      </body>
    </html>
  );
}
