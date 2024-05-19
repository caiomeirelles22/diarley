import Image from "next/image";

export function Header() {
  return ( 
      <header className="bg-gray-900 w-full p-4 text-white flex">
      <Image
          className="bg-slate-200 p-4"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        </header>
  );
}
