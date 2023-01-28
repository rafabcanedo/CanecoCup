import './globals.css';
import Image from 'next/image';
import Navigation from '@/components/Navigtion';
import { AnimatePresence } from 'framer-motion';

import Logo from '../assets/CanecoLogo.jpg';
import Footer from '../assets/LogoFooter.jpg';

import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-background">
      
      <Navigation />
        
        {children}

       <footer className="mt-16 p-16 bg-navbar relative text-test left-0 w-full">
         <div className="w-3/4 m-8 flex justify-between items-center">
          <div className="flex flex-col justify-center items-center">
            <Image src={Footer} alt="Logo Footer" className="cursor-pointer" />
            <div className="flex items-center m-8 gap-3">
             <a href="https://github.com/rafabcanedo"  target='_blank'>
             <FiGithub size={20} />
             </a>
             <a href="https://www.instagram.com/canedodev/"  target='_blank'>
              <FiInstagram size={20} />
             </a>
             <a href="https://www.linkedin.com/in/rafael-canedo-4abaa8197/"  target='_blank'>
              <FiLinkedin size={20} />
             </a>
            </div>
          </div>

          <div className="list-none w-1/2 grid grid-cols-2 grid-rows-3 gap-4">
            <a className="text-lg cursor-pointer w-fit text-test semibold hover:underline decoration-primary">
              Home
            </a>
            <a className="text-lg cursor-pointer w-fit text-test semibold hover:underline decoration-primary">
              Sobre
            </a>
            <a className="text-lg cursor-pointer w-fit text-test semibold hover:underline decoration-primary">
              Inscrição
            </a>
          </div>
         </div>
         <div>
          <span>
          &copy; {new Date().getFullYear()} Canedo. All rights reserved.
          </span>
         </div>
        </footer>
      </body>
    </html> 
  )
}
