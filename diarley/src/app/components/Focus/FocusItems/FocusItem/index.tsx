import Image from "next/image"

export interface FocusItemProps {
    imagem: string
    title: string
}

export function FocusItem({imagem, title}:FocusItemProps) {
    return (
        <div className="flex bg-amber-300 w-fit pb-4 px-4 gap-2 rounded-md">
            <div className="flex justify-center items-center bg-purple-500 w-14 h-14 rounded-full -mt-5">
                <Image alt={title} src={imagem} width={50} height={20}/>
            </div>
            <p>{title}</p>
        </div>
    )
}
