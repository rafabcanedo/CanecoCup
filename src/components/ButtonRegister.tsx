import Link from "next/link";
import * as Dialog from '@radix-ui/react-dialog';

type IButtonProps = {
 title: string;
}

export function ButtonRegister({ title }:IButtonProps) {
 return (
  <div>
  <button className="bg-primary hover:bg-blue-700 text-navbar font-semibold py-2 px-16 rounded-lg">
    {title}
  </button>
  </div>
 );
}