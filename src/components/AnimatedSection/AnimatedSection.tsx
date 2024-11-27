import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  delay?: number
}

function AnimatedSection({ children, delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
        filter: 'blur(10px)',
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
      }}
      viewport={{
        margin: '-100px',
        once: false,
      }}
      transition={{
        duration: 1.2,
        delay,
        ease: 'easeOut',
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection
