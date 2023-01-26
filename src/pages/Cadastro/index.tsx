import { Button } from "../../components/Button";
import React from "react";

function Cadastro() {
 return(
 <div>
  <h1 className="text-center font-bold mb-8 text-3xl text-test underline decoration-primary">Inscrição</h1>

   <div className="flex justify-center text-test font-medium text-lg py-2">
    <span>1- Clique no botão “Cadastrar” para abrir a aba de Cadastro</span>
   </div>
   <div className="flex justify-center text-test font-medium text-lg py-2">
    <span>2- Preencha o formulário com seu Nome, Email e Telefone</span>
   </div>
   <div className="flex justify-center text-test font-medium text-lg py-2">
    <span>3- Realize o Pix de R$ 10 reais para confirmar o seu cadastro</span>
   </div>


  <div className="text-center justify-center p-10">
    <span className="text-test font-semibold text-lg">
     Após o cadastro seus dados vão para o email do <span className="text-primary">Caneco Cup</span>, <br />
     Lá automaticamente vai renderizar uma lista de todos os jogadores que fizeram <br />
     o cadastro e o pagamento <span className="text-primary">via Pix.</span> <br />
     Quando fechar <span className="text-primary">25 jogadores</span> cadastrados, vai rolar uma lista de espera, <br />
     caso um jogador desistir entraremos <span className="text-primary">em contato com a lista de espera</span>. <br />
    </span>
  </div>

  <div className="text-center justify-center p-16">
    <span className="text-test font-medium text-base">
     <span className="text-primary">OBS:</span> Seus dados esto 100% seguros, pedimos seus dados apenas para cadastrar no campeonato
    </span>
  </div>

  <div className="text-center justify-center p-14">
    <Button title="Inscrever-se" />
  </div>
 </div>
 );
}

export default Cadastro;