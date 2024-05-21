import Image from "next/image"

export interface focusItemProps {
    imagem: string
    title: string
}

export function FocusItem({imagem, title}:focusItemProps) {
    return (
        <div className="flex bg-amber-300 w-fit pb-4 px-4 gap-2 rounded-md sm:">
            <div className="flex justify-center items-center bg-blue-300 w-14 h-14 sm:size-24 rounded-full -mt-5">
                <Image alt={title} src={imagem} width={50} height={20}/>
            </div>
            <p className="text-xl sm:text-4xl">{title}</p>
        </div>
    )
}
