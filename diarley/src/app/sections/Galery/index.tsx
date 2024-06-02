import { Carousel, CarouselProps } from '@/app/components/Carousel'

export function Galery({images}:CarouselProps) {
    return (
        <div id='galery' className="bg-[#F2F2F2] p-4 sm:p-6 text-white w-full flex items-center gap-4 flex-wrap justify-center max-w-7xl mx-auto rounded-md">
            <h1 className="text-2xl sm:text-3xl text-[#011640] font-bold">Veja minha galeria de fotos</h1>
            <Carousel images={images}/>
        </div>
    )
}
