import { ButtonHTMLAttributes, ReactNode } from 'react'
import { MotionProps } from 'framer-motion'

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    MotionProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary'
  icon?: ReactNode
  gradient?: boolean
  children: ReactNode
  className?: string
}
