"use client"

import { useState } from "react";
import { FocusItemsIcons } from "../FocusItemsIcons"
import { Modal } from "@/app/components/Modal";
import { FocusItemModal, focusItemProps } from "../FocusItemModal";

export function FocusItem({ title, foto, intro, propostals }: focusItemProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
            <div className="flex bg-[#113859] w-full max-w-[500px] py-2 px-4 gap-2 rounded-md hover:bg-[#011640] cursor-pointer transition-all duration-100 ease-linear" onClick={openModal}>
                <div className="flex justify-center items-center bg-[#011640] w-14 h-14 sm:size-20 rounded-full">
                    <FocusItemsIcons icon={title} />
                </div>
                <p className="text-base sm:text-xl text-[#F2F2F2] self-center mx-auto">{title}</p>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <FocusItemModal foto={foto} intro={intro} propostals={propostals} title={title}/>
            </Modal>
        </div>
    )
}
