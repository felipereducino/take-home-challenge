import { motion } from 'framer-motion'
import useCharacters from '../../hooks/useCharacter'
import { Character } from '../../services/interfaces'
import Loader from '../Loader/Loader'
import AnimatedSection from '../AnimatedSection/AnimatedSection'
import {
  containerVariants,
  cardVariants,
} from '../../constants/character-list-variants'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ITEMS_PER_REQUEST } from '../../services/characters'
import CharacterComicsGraph from '../CharacterComicsGraph/CharacterComicsGraph'
import Pagination from '../Pagination/Pagination'
import { FilterContext } from '../../context/FilterContext'
import { useTranslation } from 'react-i18next'

function CharacterList() {
  const { filter, orderBy, page } = useContext(FilterContext)
  const { characters, total, isCharactersLoading, error } = useCharacters(
    filter,
    orderBy,
    page
  )

  const { t } = useTranslation()

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
          {t('an_error_occurred', { message: (error as Error).message })}
        </div>
      </div>
    )
  }

  return (
    <section className="flex flex-col items-center justify-center p-4 bg-[#121212] min-h-screen">
      {characters && characters.length > 0 ? (
        <>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
              {t('comics_per_character')}
            </h2>
            <CharacterComicsGraph characters={characters} />
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8"
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
                  <Link to={`/characters/${character.id}`} className="block">
                    <motion.div className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                      <div className="relative overflow-hidden">
                        <img
                          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                          alt={character.name}
                          className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 flex flex-col justify-end items-center pb-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-out border border-white/20">
                            View Details →
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
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
          </AnimatedSection>
          <Pagination total={total} itemsPerPage={ITEMS_PER_REQUEST} />
        </>
      ) : (
        <div className="flex items-center justify-center text-gray-300 text-lg min-h-[400px]">
          No characters found.
        </div>
      )}
    </section>
  )
}

export default CharacterList
