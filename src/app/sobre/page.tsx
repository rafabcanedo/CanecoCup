import React from "react";
import Image from "next/image";
import Card from "../../components/Card";

import Tabela from '../../assets/tabela.png';

import Campeao from '../../assets/1Lugar.jpg';
import Segundo from '../../assets/2Lugar.jpg';
import Terceiro from '../../assets/3Lugar.jpg';

import Pix from '../../assets/iconPix.png';
import Colorado from '../../assets/colorado.jpg';
import Rods from '../../assets/Rods.jpeg';

function Sobre() {
 return(
 <div id="sobre">
 <h1 className="text-center font-bold mb-8 text-3xl text-test underline decoration-primary mt-6">
  Sobre os Jogos
 </h1>

 <div className="text-center gap-8">
 <span className="text-test font-semibold text-xl">
  Serão 30 jogadores em quadra, dividido em 6 times.<br />
  Para a fase inicial teremos 2 grupos de 3 times. A ideia <br />
  para esse início é ser pontos corridos, 2 rodadas para cada grupo. <br />
 </span>

 <span className="text-test font-semibold text-xl">
  Após essa fase inicial, os dois últimos colocados serão <br />
  desclasificados indo assim para a Semi Final com os 4 times <br />
  restantes. Após acabar a Semi Final, vamos para a disputa de <br />
  Terceiro e Quarto lugar e por fim a grande Final, sendo um time <span className="text-primary">Campeão</span>.
 </span>
 </div>

 <div className="flex text-center justify-center mt-8">
  <Image src={Tabela} alt="Tabela" />
 </div>

 <h1 className="text-center font-semibold mb-8 text-3xl text-test underline decoration-primary mt-8">
  Premios
 </h1>

 <div className=" flex justify-center gap-16">
  <span className="text-test font-semibold mb-8 text-2xl underline decoration-primary mt-6">1º Lugar</span>
  <span className="text-test font-semibold mb-8 text-2xl underline decoration-primary mt-6">2º Lugar</span>
  <span className="text-test font-semibold mb-8 text-2xl underline decoration-primary mt-6">3º Lugar</span>
 </div>

 <div className="flex justify-center gap-10">
 <Card img={Campeao} title="Chopp Haineken" description="O time campeão vai levar um Chopp Haineken 5 Litros" />
 <Card img={Segundo} title="2 Fardos de Budweiser" description="O segundo colocado vai levar dois fardos de Budweiser contendo 6 latas cada" />
 <Card img={Terceiro} title="Fardinho Puro Malte" description="O terceiro colocado vai levar um fardo de Brahma Puro Malte" />
 </div>

 <h1 className="text-center font-semibold mb-8 text-2xl text-test underline decoration-primary mt-8">
  Sorteios
 </h1>
 <div className="flex justify-center gap-10">
 <Card img={Rods} title="Rod's" description="Sorteio de um Combo Lanche, batata, coca entre os jogadores" />
 <Card img={Pix} title="Pix de R$50,00" description="Sorteio de um Pix de R$50,00 entre os jogadores" />
 <Card img={Colorado} title="1 Garrafa Colorado" description="Sorteio de um Pix de R$50,00 entre os jogadores" />
 </div>

 </div>
 );
}

export default Sobre;