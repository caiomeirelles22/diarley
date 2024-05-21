import { ReactNode, ButtonHTMLAttributes, MouseEvent } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string
}

export function Button({ children, onClick, className, ...rest }: ButtonProps) {
  return (
    <button {...rest} onClick={onClick} className={twMerge('', className)}>
      {children}
    </button>
  );
}