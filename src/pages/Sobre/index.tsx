import Card from "../../components/Card";
import React from "react";

import Campeao from '../../assets/1Lugar.jpg';
import Segundo from '../../assets/2Lugar.jpg';
import Terceiro from '../../assets/3Lugar.jpg';

import Rods from '../../assets/Rods.jpeg';

function Sobre() {
 return(
 <div id="sobre">
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

 <h1 className="text-center font-semibold mb-8 text-2xl text-test underline decoration-primary mt-8">
  Premios
 </h1>

 <div className="flex">
 <Card img={Campeao} title="Chopp Haineken" description="O time campeão vai levar um Chopp Haineken 5 Litros" />
 <Card img={Segundo} title="2 Fardos de Budweiser" description="O segundo colocado vai levar dois fardos de Budweiser contendo 6 latas cada" />
 <Card img={Terceiro} title="Fardinho Puro Malte" description="O terceiro colocado vai levar um fardo de Brahma Puro Malte" />
 </div>

 <h1 className="text-center font-semibold mb-8 text-2xl text-test underline decoration-primary mt-8">
  Sorteios
 </h1>
 <div>
 <Card img={Rods} title="Rod's" description="Sorteio de um Combo Lanche, batata, coca entre os jogadores" />
 </div>

 </div>
 );
}

export default Sobre;