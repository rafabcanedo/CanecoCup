'use client'
import React from "react";
import * as Dialog from '@radix-ui/react-dialog';

import { FiX } from "react-icons/fi";
import { Form } from "../../components/Form";

function Cadastro() {
 return(
 <div id="cadastro">
  <h1 className="text-center font-bold mb-8 text-3xl text-test underline decoration-primary mt-28">Inscrição</h1>

   <div className="flex justify-center text-test font-medium text-lg py-2">
    <span>1- Clique no botão “Cadastrar” para abrir a aba de Cadastro</span>
   </div>
   <div className="flex justify-center text-test font-medium text-lg py-2">
    <span>2- Preencha o formulário com seu Nome, Email e Telefone</span>
   </div>
   <div className="flex justify-center text-test font-medium text-lg py-2">
    <span>3- Realize o Pix de R$ 10 reais para confirmar o seu cadastro</span>
   </div>
   <span className="text-test items-center justify-center flex text-lg gap-2">(Pagamento da Inscrição <span className="text-primary font-bold text-xl">apenas</span> via Pix)</span>


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

  <Dialog.Root>
        <Dialog.Trigger
         className="bg-primary hover:bg-blue-700 text-navbar font-semibold py-2 px-16 rounded-lg"
         >
         Inscrever-se
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="w-screen h-screen bg-focus fixed inset-0"/>

          <Dialog.Content className="absolute p-10 bg-transparent rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

         <Dialog.Close className="absolute right-6 top-6 text-test hover:text-white">
          <FiX size={24} arial-label="Fechar" />
         </Dialog.Close>

         <Dialog.Title className="text-3xl leading-tight font-extrabold text-test">
          Sua Inscrição
         </Dialog.Title>

         <Form />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

  </div>
 </div>
 );
}

export default Cadastro;