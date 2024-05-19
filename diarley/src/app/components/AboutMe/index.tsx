import Image from "next/image";

export function AboutMe() {
    return (
        <div className="bg-amber-700 p-4 text-white w-full flex items-center justify-center flex-wrap gap-4">
            <div className="min-w-80">
                <Image
                    className="w-full"
                    src='/hero-img.jpg'
                    width={200}
                    height={100}
                    quality={100}
                    alt="hero"
                />
            </div>
            <div className="w-fit min-w-80 flex flex-col gap-2  ">
                <h2>Sobre mim!</h2>
                <p>Sou Diarley, instrutor Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi saepe laudantium veritatis inventore ab totam, velit, hic aut iure perferendis blanditiis obcaecati? Voluptas quaerat quisquam animi dolore explicabo consequuntur deleniti!</p>
                <p>Pai da Laura e da Sofia e companheiro da Natália.</p>
                <p>Minha vida toda sempre me dediquei a ajudar o proximo e decidi esse ano concorrer a Vereador na nossa cidade Campos dos Goytacazes!</p>
            </div>
            <a href="#" className="border border-solid border-gray-800 rounded-md p-2 bg-slate-400 text-black font-bold">
                Saiba Mais
            </a>
        </div>
    );
}
