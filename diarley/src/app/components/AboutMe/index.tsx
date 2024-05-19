import Image from "next/image";

export function AboutMe() {
    return (
        <div className="bg-amber-700 p-4 text-white w-full flex items-center gap-4 flex-wrap justify-around ">
            <div className="min-w-80 w-full sm:w-1/2 border-b-4 border-white border-solid pb-4 sm:border-b-0 sm:border-r-2 sm:pb-0 sm:pr-4">
                <Image
                    className="w-full"
                    src='/hero-img.jpg'
                    width={200}
                    height={100}
                    quality={100}
                    alt="hero"
                />
            </div>
            <div className="w-fit min-w-80 flex flex-col gap-2 max-w-2xl">
                <h2>Sobre mim!</h2>
                <p>Sou Diarley, instrutor Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi saepe laudantium veritatis inventore ab totam, velit, hic aut iure perferendis blanditiis obcaecati? Voluptas quaerat quisquam animi dolore explicabo consequuntur deleniti!</p>
                <p>Pai da Laura e da Sofia e companheiro da Natália.</p>
                <p>Minha vida toda sempre me dediquei a ajudar o proximo e decidi esse ano concorrer a Vereador na nossa cidade Campos dos Goytacazes!</p>
                <a href="#" className="border border-solid border-gray-800 rounded-md p-2 bg-slate-400 text-black font-bold w-fit mx-auto">
                    Saiba Mais
                </a>
            </div>
        </div>
    );
}
