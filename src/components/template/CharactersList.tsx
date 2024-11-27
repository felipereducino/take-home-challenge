import { motion } from 'framer-motion'
import useCharacters from '../../hooks/useCharacter'
import { Character } from '../../services/interfaces'
import Loader from '../Loader/Loader'
import { ReactNode } from 'react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

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

function CharacterList() {
  const { characters, isCharactersLoading, error } = useCharacters()

  if (isCharactersLoading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <Loader size={150} color="red" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-[400px] flex items-center justify-center bg-gray-900">
        <div className="text-red-500 text-lg">
          An error occurred: {(error as Error).message}
        </div>
      </div>
    )
  }

  return (
    <section className="p-4 bg-[#121212] min-h-screen">
      <AnimatedSection delay={0.15}>
        {characters && characters.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {characters.map((character: Character) => (
              <motion.div
                key={character.id}
                className="bg-black/95 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg cursor-pointer
                                              transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                      alt={character.name}
                      className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                      className="absolute inset-0 flex flex-col justify-end items-center pb-6
                                                  bg-gradient-to-t from-black/80 via-black/50 to-transparent 
                                                  opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <span
                        className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm
                                                      text-white text-sm font-medium
                                                      transform translate-y-4 group-hover:translate-y-0
                                                      transition-all duration-300 ease-out
                                                      border border-white/20"
                      >
                        View Details →
                      </span>
                    </div>
                  </div>
                </motion.div>
                <div className="p-4">
                  <h2 className="text-xl font-bold text-white mb-2">
                    {character.name}
                  </h2>
                  {character.description ? (
                    <p className="text-gray-300 text-sm">
                      {character.description}
                    </p>
                  ) : (
                    <p className="italic text-gray-500 text-sm">
                      No description available.
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="flex items-center justify-center text-gray-300 text-lg">
            No characters found.
          </div>
        )}
      </AnimatedSection>
    </section>
  )
}

export default CharacterList
