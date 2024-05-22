import Image from "next/image";
import { FocusItems, FocusItemsProps } from "./FocusItems";
import { Anchor } from "../Anchor";
 


export function Focus({focusItems}: FocusItemsProps) {
    return (
        <div className="bg-sky-600 p-4 sm:p-6 flex flex-col gap-4 max-w-7xl mx-auto">
            <div className=" text-white w-full flex items-center justify-center flex-wrap gap-4">
                <div className="flex flex-col ">
                    <h2 className="text-5xl">Diarley</h2>
                    <h2 className="text-2xl">Na Câmara</h2>
                </div>
                <div className="w-fit min-w-80 flex flex-col gap-2 p-3 text-2xl sm:text-3xl">
                    <h2>Oque esperar de mim?</h2>
                    <p>Na Câmara dos vereadores irei atuar pela reconstrução, e acreditamos que isso só será possível se ninguém ficar para trás. Por isso, trabalhamos por leis que tenham como horizonte o combate às desigualdades.</p>
                    <p>Confira as principais iniciativas do mandato:</p>
                </div>
            </div>
            <div>
                <FocusItems focusItems={focusItems} />
            </div>
                <Anchor id="" >
                    Formulario
                </Anchor>
        </div>
    );
}
