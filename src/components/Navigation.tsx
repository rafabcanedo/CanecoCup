'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../assets/CanecoLogo.jpg';
import { FiMenu, FiX } from "react-icons/fi";

import { Button } from './Button';

const Navigation = () => {
 const [navbar, setNavbar] = useState(false);
 return (
  <div>
      <nav className="w-full bg-navbar fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Image src={Logo} alt="Logo CanecoCup" className="rounded-full w-16 h-16 cursor-pointer" />
            
              <div className="md:hidden">
                <button
                  className="p-2 text-cinza rounded-md outline-none focus:border-cinza focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <FiX size={30} />
                    ): (
                    <FiMenu 
                     size={30}
                     className="focus:border-none active:border-none" 
                    />
                  )}
                </button>
              </div>
            </div>
          </div>

    <div>
     <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
        navbar ? 'p-12 md:p-0 block' : 'hidden'
      }`}>

     <ul className="h-screen md:h-auto items-center justify-center md:flex">

     <li className="text-xl font-semibold text-test hover:underline decoration-primary mr-6 md:my-0 my-7">
      <Link href="/">
        Home
      </Link>
      </li>

      <li className="text-xl font-semibold text-test hover:underline decoration-primary mr-6 md:my-0 my-7">
      <Link href="/sobre">
        Sobre
      </Link>
      </li>

      <li className="text-xl font-semibold text-test hover:underline decoration-primary mr-6 md:my-0 my-7">
      <Link href="/cadastro">
        Inscrição
      </Link>
      </li>
     </ul>
     </div>
     </div>

     <div>
     <Button title="Contato" />
    </div>

    
    </div>

   </nav>
  </div>
 )
}

export default Navigation;