"use client";

import { ReactNode } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { FaTimes } from 'react-icons/fa';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
    return (
        <Dialog.Root open={isOpen} onOpenChange={onClose}>
            <Dialog.Portal>
                <Dialog.Overlay
                    className="fixed inset-0 bg-black bg-opacity-50 z-50"
                    onClick={onClose}
                />
                <Dialog.Content
                    className="fixed inset-0 flex items-center justify-center z-50 p-4"
                    onInteractOutside={onClose}
                    onPointerDownOutside={onClose}
                >
                    <div className="relative bg-[#113859] py-4 rounded-lg shadow-lg w-full h-[70vh] overflow-hidden">
                        <Dialog.Close>
                            <button
                                onClick={onClose}
                                className="text-[#F2F2F2] bg-[#113859] hover:bg-[#011640] p-2 text-base focus:shadow-[#113859] absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                            >
                                <h1 className='text-2xl'>X</h1>
                            </button>
                        </Dialog.Close>
                        {children}
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
