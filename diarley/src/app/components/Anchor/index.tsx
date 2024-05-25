'use client';

import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface AnchorProps {
  children: ReactNode;
  href: string; 
  className?: string; 
}

export const Anchor: React.FC<AnchorProps> = ({ children, href, className }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      href={`#${href}`} 
      className={twMerge('border border-solid border-gray-800 rounded-md p-2 bg-blue-900 text-white w-fit mx-auto hover:bg-blue-700 transition-colors', className)}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};
