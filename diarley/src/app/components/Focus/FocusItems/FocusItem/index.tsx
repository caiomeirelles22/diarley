import Image from "next/image"
import { FocusItemsIcons } from "../FocusItemsIcons"

export interface focusItemProps {
    title: string
}

export function FocusItem({title}:focusItemProps) {
    return (
        <div className="flex bg-amber-300 w-fit pb-4 px-4 gap-2 rounded-md sm:">
            <div className="flex justify-center items-center bg-blue-300 w-14 h-14 sm:size-24 rounded-full -mt-5">
                <FocusItemsIcons icon={title}/>
            </div>
            <p className="text-xl sm:text-4xl text-gray-900">{title}</p>
        </div>
    )
}
