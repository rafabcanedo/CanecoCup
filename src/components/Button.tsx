import Link from "next/link";

type ButtonProps = {
 title: string;
}

export function Button({ title }:ButtonProps) {
 return (
  <div>
  <Link href="https://www.instagram.com/canedodev/" target="_blank">
  <button className="bg-primary hover:bg-blue-700 text-navbar font-semibold py-2 px-4 rounded-lg">
    {title}
  </button>
  </Link>
  </div>
 );
}