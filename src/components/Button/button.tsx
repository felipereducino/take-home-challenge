import React from 'react'
import { motion } from 'framer-motion'
import { ButtonProps } from './button.types'
import { sizeClasses, variantClasses, baseClasses } from './button.styles'
import { motionVariants } from './button.variants'

const Button: React.FC<ButtonProps> = ({
  size = 'md',
  variant = 'primary',
  icon,
  gradient = false,
  children,
  className = '',
  ...props
}) => {
  const sizeClass = sizeClasses[size]
  const variantClass = variantClasses[variant]
  const gradientClass = gradient ? 'relative overflow-hidden group' : ''

  return (
    <motion.button
      className={`${baseClasses} ${sizeClass} ${variantClass} ${gradientClass} ${className}`}
      {...motionVariants}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && (
          <span className="text-white group-hover:translate-x-1 transition-transform duration-300">
            {icon}
          </span>
        )}
      </span>
      {gradient && (
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent
            translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"
        />
      )}
    </motion.button>
  )
}

export default Button
