import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import { CheckboxProps, Indicator, Root, } from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons';

export interface ICheckBoxProps
   extends Omit<
         InputHTMLAttributes<HTMLInputElement>,
         'checked' | 'defaultChecked'
      >,
      Pick<CheckboxProps, 'checked' | 'defaultChecked' | 'onCheckedChange'> {
   label?: string
   errorMessage?: string
   highlightOnFocus?: 'none' | 'brandB' | 'error'

   children?: ReactNode
}

export const CheckBox = forwardRef<HTMLInputElement, ICheckBoxProps>(
   (
      {
         label,
         errorMessage,
         highlightOnFocus,
         children,
         checked,
         defaultChecked,
         onCheckedChange,
         ...props
      },
      ref,
   ) => {
      return (
         <div className="flex flex-col items-start p-0 m-0 ">
            <div className="flex items-center gap-2">
               <Root
                  className={`w-[1.125rem] h-[1.125rem] rounded-md cursor-pointer overflow-hidden box-border flex items-center content-center border border-solid border-grayaux hover:border-2 hover:border-successDark data-[state=checked]:bg-successDark`}
                  {...{ checked, defaultChecked, onCheckedChange }}
               >
                  <input
                     className="absolute opacity-0 cursor-pointer h-6 w-6 z-[100]"
                     type="checkbox"
                     ref={ref}
                     {...props}
                     defaultChecked={defaultChecked === true}
                  />
                  <Indicator className="p-px" asChild>
                     <CheckIcon />
                  </Indicator>
               </Root>
               {label && <p>{label}</p>}
               {children}
            </div>
            {errorMessage && (
               <div className="pl-2 pt-0.5">
                  <p className="text-xs text-errorDark">{errorMessage}</p>
               </div>
            )}
         </div>
      )
   },
)

CheckBox.displayName = 'CheckBox'