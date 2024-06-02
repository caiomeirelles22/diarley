import { FocusItemsIcons } from "../FocusItemsIcons"

export interface focusItemProps {
    title: string
}

export function FocusItem({title}:focusItemProps) {
    return (
        <div className="flex bg-[#113859] w-full max-w-[500px] py-2 px-4 gap-2 rounded-md sm:">
            <div className="flex justify-center items-center bg-[#011640] w-14 h-14 sm:size-20 rounded-full">
                <FocusItemsIcons icon={title}/>
            </div>
            <p className="text-base sm:text-xl text-[#F2F2F2] self-center mx-auto">{title}</p>
        </div>
    )
}
