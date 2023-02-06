import { useState } from 'react';
import { Container, Heading, FormControl } from '@chakra-ui/react';
import { FcApproval } from "react-icons/fc";

export function Form(){
 const [values, setValues] = useState({
  nome: "",
  email: "",
  phone: "",
 });

 const {nome, email, phone} = values
 const [loading, setLoading] = useState(false);
 
 async function handleOnSubmit(e: any) {
  e.preventDefault();
  const formData = {}
  Array.from(e.currentTarget.elements).forEach(field => {
   if ( !field.name ) return;
   formData[field.name] = field.value;
  });
   fetch('/api/contact', {
    method: 'post',
    body: JSON.stringify(formData)
   })
   console.log(formData);
 }

 return(
 <Container>

  
 <form onSubmit={handleOnSubmit} className="w-full flex flex-col mt-6">
   <label htmlFor="title" className="font-semibold leading-tight text-test">
     Preencha com seus dados
   </label>

   <input 
    type="text"
    name="nome"
    placeholder="Nome Completo"
    className="p-4 rounded-lg mt-8 bg-input text-test placeholder:text-zinc-400 focus:outline-none"
    autoFocus
   />

   <input 
    type="email"
    name="email"
    placeholder="Seu melhor email"
    className="p-4 rounded-lg mt-3 bg-input text-test placeholder:text-zinc-400 focus:outline-none"
    autoFocus
   />

   <input 
    type="tel"
    name="telefone"
    placeholder="Número de telefone com DDD"
    className="p-4 rounded-lg mt-3 bg-input text-test placeholder:text-zinc-400 focus:outline-none"
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
   
   <button
    type="submit" 
    disabled={loading}
    className="bg-primary hover:bg-blue-700 text-navbar font-semibold py-2 px-16 rounded-lg mt-10"
   >
     Vestir a Camisa
   </button>
  </form>
 </Container>
 );
}