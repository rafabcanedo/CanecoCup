import Image from "next/image";
import React from "react";

import Logo from '../assets/CanecoHome.jpg';

function Page() {
 return(
 <div id="page">
 <div className="justify-center pt-20 p-20 md:px-20 lg:px-40">
 <div className="p-10">
 <h2 className="text-test text-center font-semibold text-5xl py-2 md:text-6xl">Seja bem vindo ao</h2>
 <h3 className="text-test text-center font-semibold text-3xl py-10 md:text-4xl">
  campeonato mais disputado <br />
  de todos os tempos
 </h3>
 <h1 className="text-test text-center font-bold text-6xl py-6 md:text-7xl"><span className="text-primary">Caneco</span> Cup</h1>
 </div>
 

 <div className="relative mx-auto w-80 h-80 mt-4 md:items-center md:h-96 md:w-96">
  <Image src={Logo} alt="Logo Caneco Cup Home" className="rounded-full" />
 </div>
 </div>

 <h1 className="text-center font-bold mb-8 text-3xl text-test underline decoration-primary">
  Sobre o Campeonato
 </h1>

 <div className="text-center gap-8">
 <span className="text-test font-semibold text-xl">
  Desde sempre há eventuais jogos com jogadores experientes 
  e que leva consigo o espirito competitivo do futebol. <br />
  
  A verdade que ninguém conta é que todos esses jogadores experientes, <br />
  na verdade são extremamentes ruims e jogam  mesmo pela diversão de estar com os <br />
  amigos de infancia. Conforme a fama dos jogos foram crescendo, exigiu ter mais <br />
  jogadores “experientes”.
  
  Então foi necessário convocar outros jogadores para comparecer 
  aos jogos amistosos. <br />
 </span>

 <span className="text-test font-semibold text-xl">
  Hoje em dia, os jogos contém mais de 15 jogadores de várias gerações dividindo-os <br />
  em 3 times equilibrados. E no final quem sempre reina é a Diversão. <br />
  O campeonato originou-se a partir de uma ideia de juntar <br />
  velhos amigos e preservar a diversão do futebol entre nós. <br />
  Mas é claro, pensamos em trazer diversos prêmios para incentivar <br />
  os jogadores a presenciar o campeonato mais disputado <br />
  de todos os tempos.
 </span>
 </div>
 </div>
 );
}

export default Page;