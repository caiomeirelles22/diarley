import Image from "next/image";

export interface focusItemProps {
    foto: string
    title: string
    intro: string
    propostals: string []
}

export function FocusItemModal({foto, title, intro, propostals}:focusItemProps) {
    return (
        <div className="relative max-w-[1024px] h-full mx-auto overflow-y-auto bg-[#113859]">
            <div className="relative h-full ">
                <div className="flex justify-center gap-6 flex-wrap items-center">
                    <Image src={foto} alt="teste" width={300} height={300} className="rounded-lg" />
                    <div className="flex flex-col text-justify py-6 px-4 sm:text-lg text-[#F2F2F2]">
                        <h2 className="text-lg font-bold text-center text-[#F2F2F2]">{title}</h2>
                        <p>{intro}</p>
                        <h3>Minhas propostas incluem:</h3>
                        <ul className="list-disc px-7">
                            {propostals.map((propostal, key)=> (
                                <li key={key}>{propostal}</li>
                            ))}
                            <li>Criação de programas de distribuição de alimentos para famílias carentes.</li>
                            <li>Incentivo à agricultura urbana para aumentar a produção local de alimentos.</li>
                            <li>Parcerias com empresas e ONGs para garantir que todos tenham acesso a uma alimentação digna e saudável.</li>
                        </ul>
                        <p>Juntos, podemos construir uma cidade onde ninguém passe fome. Vamos trabalhar unidos para cuidar de nossa gente!</p>
                        <p>Conto com seu apoio nesta luta!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
