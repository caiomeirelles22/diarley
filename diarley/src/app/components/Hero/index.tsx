import Image from "next/image";

export function Hero() {
  return ( 
      <div className="w-full">
        <Image
        className="w-full"
        src='/perfil-paisagem.jpg'
        width={3840}
        height={2160}
        quality={100}
        alt="hero" />
        
      </div>
  );
}
