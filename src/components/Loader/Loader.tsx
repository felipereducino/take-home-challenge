import { GiSpiderMask } from 'react-icons/gi'
import { motion } from 'framer-motion'

function Loader({ size = 34, color = 'white' }) {
  const isWhite = color === 'white'

  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        className="absolute rounded-full"
        style={{ width: size * 2, height: size * 2 }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: {
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          },
          scale: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      >
        <GiSpiderMask
          size={size}
          className={`${isWhite ? 'text-white' : 'text-red-600'} drop-shadow-lg`}
        />
      </motion.div>
    </div>
  )
}

export default Loader
