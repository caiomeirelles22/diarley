import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface AnchorProps {
  children: ReactNode;
  id: string; 
  className?: string; 
}

export const Anchor: React.FC<AnchorProps> = ({ children, id, className }) => (
  <a
    href={`#${id}`} 
    className={twMerge('border border-solid border-gray-800 rounded-md p-2 bg-slate-400 text-black w-fit mx-auto', className)}
  >
    {children}
  </a>
);