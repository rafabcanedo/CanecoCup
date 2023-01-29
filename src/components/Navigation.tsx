'use client'
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../assets/CanecoLogo.jpg';

import { Button } from './Button';

const Navigation = () => {
 return(
  <div>
    <nav className="flex items-center justify-between h-20 bg-navbar px-8 py-4">
    <div>
      <Image src={Logo} alt="Logo CanecoCup" className="rounded-full w-16 h-16 cursor-pointer" />
    </div>
    <ul className="flex min-w-fit p-5">
      <li className="text-xl font-semibold text-test hover:underline decoration-primary mr-6">
        <Link href="/">
         Home
        </Link>
      </li>

      <li className="text-xl font-semibold text-test hover:underline decoration-primary mr-6">
        <Link href="sobre">
         Sobre
        </Link>
      </li>

      <li className="text-xl font-semibold text-test hover:underline decoration-primary mr-6">
        <Link href="cadastro">
         Inscrição
        </Link>
      </li>
    </ul>
    <div>
     <Button title="Contato" />
    </div>
   </nav>
  </div>
 )
}

export default Navigation;