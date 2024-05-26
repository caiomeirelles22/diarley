import { Anchor } from "@/app/components/Anchor";
import { FocusItems, FocusItemsProps } from "@/app/components/Focus/FocusItems";



export function Focus({focusItems}: FocusItemsProps) {
    return (
        <div id="focus" className="bg-blue-100 p-4 sm:p-6 flex flex-col gap-4 max-w-7xl mx-auto rounded-md">
            <div className=" text-white w-full flex items-center justify-center flex-wrap gap-4">
                <div className="flex flex-col text-blue-900 italic font-bold">
                    <h2 className="text-5xl">Diarley</h2>
                    <h2 className="text-2xl">Na Câmara</h2>
                </div>
                <div className="w-fit min-w-80 flex flex-col gap-2 text-2xl sm:text-3xl">
                    <h2 className="text-blue-900">Oque esperar de mim?</h2>
                    <p className="text-gray-900">Na Câmara dos vereadores irei atuar pela reconstrução, e acreditamos que isso só será possível se ninguém ficar para trás. Por isso, trabalhamos por leis que tenham como horizonte o combate às desigualdades.</p>
                    <p className="text-gray-900">Confira as principais iniciativas do mandato:</p>
                </div>
            </div>
            <div>
                <FocusItems focusItems={focusItems} />
            </div>
                <Anchor href="form-section" >
                    Saiba Mais!
                </Anchor>
        </div>
    );
}
