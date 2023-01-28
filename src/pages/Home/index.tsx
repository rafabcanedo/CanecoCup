import Image from "next/image";
import React from "react";

import Logo from '../../assets/CanecoHome.jpg';

function Home() {
 return(
 <div id="home">
 <div className="justify-center pt-20 p-20">
 <div className="p-10">
 <h2 className="text-test text-center font-semibold text-5xl py-2">Seja bem vindo ao</h2>
 <h3 className="text-test text-center font-semibold text-3xl py-10">
  campeonato mais disputado <br />
  de todos os tempos
 </h3>
 <h1 className="text-test text-center font-bold text-6xl py-6"><span className="text-primary">Caneco</span> Cup</h1>
 </div>
 

 <div className="relative mx-auto w-80 h-80 mt-4">
  <Image src={Logo} alt="Logo Caneco Cup Home" className="rounded-full" />
 </div>
 </div>
 </div>
 );
}

export default Home;