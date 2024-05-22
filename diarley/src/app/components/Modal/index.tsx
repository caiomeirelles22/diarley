"use client";

import { ReactNode } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { FaSearchPlus, FaSearchMinus, FaTimes } from 'react-icons/fa';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  children: ReactNode;
}

export function Modal({ isOpen, onClose, onZoomIn, onZoomOut, children }: ModalProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 z-50" />
        <Dialog.Content className="fixed inset-0 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg shadow-lg p-4">
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              <FaTimes size={20} />
            </button>
            <div className="flex justify-center items-center space-x-4 mb-4">
              <button onClick={onZoomIn} className="text-gray-500 hover:text-gray-800">
                <FaSearchPlus size={20} />
              </button>
              <button onClick={onZoomOut} className="text-gray-500 hover:text-gray-800">
                <FaSearchMinus size={20} />
              </button>
            </div>
            <div className="p-4">{children}</div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
