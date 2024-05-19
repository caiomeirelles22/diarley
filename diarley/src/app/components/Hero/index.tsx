import Image from "next/image";

export function Hero() {
  return ( 
      <div className="w-full">
        <Image
        className="w-full"
        src='/hero-img.jpg'
        width={200}
        height={100}
        quality={100}
        alt="hero" />
        
      </div>
  );
}
