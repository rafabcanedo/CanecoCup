import { FcApproval } from "react-icons/fc";

export function Form(){
 return(
 <form className="w-full flex flex-col mt-6">
   <label htmlFor="title" className="font-semibold leading-tight text-test">
     Preencha com seus dados
   </label>

   <input 
    type="text"
    id="nome"
    placeholder="Nome Completo"
    className="p-4 rounded-lg mt-8 bg-input text-test placeholder:text-zinc-400 focus:outline-none"
    autoFocus
   />

   <input 
    type="email"
    id="email"
    placeholder="Seu melhor email"
    className="p-4 rounded-lg mt-3 bg-input text-test placeholder:text-zinc-400 focus:outline-none"
    autoFocus
   />

   <input 
    type="tel"
    id="telefone"
    placeholder="Número de telefone com DDD"
    className="p-4 rounded-lg mt-3 bg-input text-background placeholder:text-zinc-400 focus:outline-none"
    autoFocus
   />

   <div className="mt-10">
   <div className="flex gap-6 items-center">
    <div>
     <FcApproval size={35} />
    </div>
    <div>
     <p className="text-test">
      Seus dados estão <br />
      100% protegidos
     </p>
    </div>
   </div>
   </div>
   
   <button className="bg-primary hover:bg-blue-700 text-navbar font-semibold py-2 px-16 rounded-lg mt-10">
     Vestir a Camisa
   </button>
 </form>
 );
}