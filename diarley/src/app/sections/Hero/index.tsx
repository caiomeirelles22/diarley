import Image from "next/image";

export function Hero() {
  return ( 
      <div className="w-full -mt-4 ">
        <Image
        className="w-full"
        src='/hero-horizontal.webp'
        width={3840}
        height={2160}
        quality={100}
        alt="hero" />
        
      </div>
  );
}
