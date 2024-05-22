import Image from "next/image";
import { Anchor } from "../Anchor";

interface AboutMeProps {
    fotoRetrato: string
    paragrafos: string[]
}

export function AboutMe({ fotoRetrato, paragrafos }: AboutMeProps) {
    return (
        <div className="bg-blue-500 p-4 sm:p-6 text-white w-full flex items-center gap-4 flex-wrap justify-between max-w-7xl mx-auto -mt-4">
            <div className="flex justify-center min-w-80 w-full sm:w-auto max-h-[703px] border-b-4 border-white border-solid pb-4 sm:border-b-0 sm:border-r-2 sm:pr-6 mx-auto ">
                <Image
                    src={fotoRetrato}
                    className="h-full rounded-md sm:rounded-full"
                    width={527.14}
                    height={700}
                    quality={100}
                    alt="hero"
                />  
            </div>
            <div className="w-fit min-w-80 flex flex-col gap-4 max-w-xl text-lg sm:text-3xl mx-auto">
                <h2>Sobre mim!</h2>
                {paragrafos.map((paragrafo, key) => (
                    <p key={key}>{paragrafo}</p>
                ))}
                <Anchor id="" className="text-base" >
                    Formulario
                </Anchor>
            </div>
        </div>
    );
}