"use client"

import { motion } from 'framer-motion'
import { Tulpen_One } from 'next/font/google'
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";



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
           { ['/', '/huracan', '/spider'].map(
            (car, id) => <Link href={car}><motion.div className={car === path ? 'top-nav-item-active' : 'top-nav-item'}>{car}</motion.div></Link>)
           }
        </div>
        {children}
      </body>
    </html>
  );
}
