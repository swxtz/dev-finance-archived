import { ButtonHTMLAttributes, ReactNode } from 'react'

import './styles.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: ReactNode;
  icon?: ReactNode
}

export function Button({ text, icon: Icon, ...rest }: ButtonProps) {
  return (
    <button {...rest} className="button">
      {text}
      {Icon }
    </button>
  )
}