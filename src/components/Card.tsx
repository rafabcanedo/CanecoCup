import Image from "next/image";

type CardProps = {
 title: string;
 description: string;
 img?: string;
}

function Card({ title, description, img= '' }: CardProps) {
 return(
  <div className="w-56 m-w-[200px] border-2 border-cinza rounded-lg flex flex-col shadow-lg">
   <div className="w-full h-32 m-w-[100%] bg-[#ddd]">
    <Image src={img} alt="fotos premios" className="w-full h-full"/>
   </div>

   <div className="p-6 pt-0">
    <h2 className="text-test font-bold text-xl">{title}</h2>
    <p className="text-cinza">{description}</p>
   </div>
  </div>
 );
}

export default Card;