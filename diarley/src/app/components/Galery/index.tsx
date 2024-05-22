import { Carousel } from "./Carousel";
import candidatos from '@/app/cadidatos.json'


export function Galery() {
    return (
        <div className="bg-sky-600 p-4 sm:p-6 text-white w-full flex items-center gap-4 flex-wrap justify-center max-w-7xl mx-auto">
            <h1 className="text-3xl">Veja minha galeria de fotos</h1>
            <Carousel images={candidatos[0].galeria}/>
        </div>
    )
}
