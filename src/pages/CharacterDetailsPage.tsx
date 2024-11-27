import { useNavigate, useParams } from 'react-router-dom'
import useCharacters from '../hooks/useCharacter'
import { motion } from 'framer-motion'
import Loader from '../components/Loader/Loader'
import { FaArrowLeft } from 'react-icons/fa'
import { FilterContext } from '../context/FilterContext.tsx'
import { useContext } from 'react'

function CharacterDetailsPage() {
  const navigate = useNavigate()
  const { characterId } = useParams<{ characterId: string }>()
  const { filter, orderBy, page } = useContext(FilterContext)
  const { getCharacterDetails } = useCharacters(filter, orderBy, page)
  const { characterDetail, isCharacterDetailLoading, error } =
    getCharacterDetails(characterId!)

  if (isCharacterDetailLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#121212]">
        <Loader size={120} color="red" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#121212]">
        <p className="text-red-500 text-xl">{error}</p>
      </div>
    )
  }

  return (
    <motion.section
      className="min-h-screen bg-[#121212] p-4 sm:p-6 md:p-10 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Character Header */}
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-start md:space-x-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {/* Character Image */}
          <motion.img
            src={`${characterDetail?.thumbnail.path}.${characterDetail?.thumbnail.extension}`}
            alt={characterDetail?.name}
            className="w-64 h-64 object-cover rounded-lg shadow-lg mb-6 md:mb-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />

          {/* Character Info */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4">{characterDetail?.name}</h1>
            <p className="text-lg leading-relaxed">
              {characterDetail?.description
                ? characterDetail?.description
                : 'No description available.'}
            </p>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-700"></div>

        {/* Comics and Series */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Comics */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Comics</h2>
            {characterDetail?.comics.available > 0 ? (
              <ul className="space-y-2 max-h-80 overflow-y-auto">
                {characterDetail?.comics.items.map((comic, index) => (
                  <li
                    key={index}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    <a
                      href={comic.resourceURI}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {comic.name}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400">No comics available.</p>
            )}
          </motion.div>

          {/* Series/Films */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Series & Films</h2>
            {characterDetail?.series.available > 0 ? (
              <ul className="space-y-2 max-h-80 overflow-y-auto">
                {characterDetail?.series.items.map((series, index) => (
                  <li
                    key={index}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    <a
                      href={series.resourceURI}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {series.name}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400">No series or films available.</p>
            )}
          </motion.div>
        </div>

        {/* Additional URLs */}
        {characterDetail?.urls.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">More Information</h2>
            <div className="flex flex-wrap space-x-4">
              {characterDetail?.urls.map((url, index) => (
                <a
                  key={index}
                  href={url.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  {url.type.charAt(0).toUpperCase() + url.type.slice(1)}
                </a>
              ))}
            </div>
          </div>
        )}
        <div className="flex justify-end mt-8 sm:mt-4">
          {/* Added margin-top adjustments for small screens */}
          <motion.button
            className="group relative overflow-hidden bg-[#121212] hover:bg-gray-900 p-4 rounded-xl mb-4
                            flex items-center gap-2 transition-all duration-300 hover:shadow-lg"
            onClick={() => navigate('/characters')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaArrowLeft className="text-white group-hover:translate-x-1 transition-transform duration-300" />
            <span className="relative z-10 font-semibold text-white">
              Go Back
            </span>
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent
                            translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"
            />
          </motion.button>
        </div>
      </div>
    </motion.section>
  )
}

export default CharacterDetailsPage
