import { Anchor } from "@/app/components/Anchor";
import Image from "next/image";

interface AboutMeProps {
    fotoRetrato: string
    paragrafos: string[]
}

export function AboutMe({ fotoRetrato, paragrafos }: AboutMeProps) {
    return (
        <div id="about-me" className="bg-[#f4f4f2] p-4 sm:p-6 w-full flex items-center gap-4 flex-wrap justify-between max-w-7xl mx-auto rounded-md">
            <div className="flex justify-center min-w-80 w-full sm:w-auto max-h-[703px] border-b-4 border-[#243a69] border-solid pb-4 sm:border-b-0 sm:border-r-2 sm:pr-6 mx-auto ">
                <Image
                    src={fotoRetrato}
                    className="h-full rounded-md sm:rounded-full"
                    width={527.14}
                    height={700}
                    quality={100}
                    alt="hero"
                />  
            </div>
            <div className="w-fit min-w-80 flex flex-col gap-4 max-w-xl text-base sm:text-xl mx-auto h-auto">
                <h2 className="text-[#243a69] font-bold">Sobre mim!</h2>
                {paragrafos.map((paragrafo, key) => (
                    <p key={key} className="text-[#191013]">{paragrafo}</p>
                ))}
                <Anchor href="form-section" className="text-base text-[#f4f4f2] mt-auto">
                    Saiba Mais!
                </Anchor>
            </div>
        </div>
    );
}
