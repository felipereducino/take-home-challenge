import { motion } from 'framer-motion'
import useCharacters from '../hooks/useCharacter'
import { FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection/AnimatedSection'

function HomePage() {
  const navigate = useNavigate()
  const { characters } = useCharacters()

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <AnimatedSection delay={0.2}>
        <section className="h-screen flex flex-col items-center justify-center bg-cover bg-center relative">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <motion.div
            className="relative z-10 text-center px-4 sm:px-6" // Added padding for small screens
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight bg-[#ED1D24] border-2 border-white rounded-sm p-2"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <span className="text-white">MARVEL</span>
            </motion.h1>
            <motion.p
              className="mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              Discover the Universe of Marvel
            </motion.p>
          </motion.div>
        </section>
      </AnimatedSection>

      {/* About Marvel Section */}
      <AnimatedSection delay={0.2}>
        <section className="py-20 px-5 sm:px-6 md:px-20 bg-gray-800">
          {/* Added sm:px-6 for better padding on small screens */}
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              About Marvel
            </h2>
            {/* Increased font size on small screens */}
            <p className="text-lg sm:text-xl leading-relaxed">
              Marvel Comics is one of the most prominent and influential comic
              book publishers, known for creating iconic superheroes like
              Spider-Man, Iron Man, and the Avengers. Since its inception in
              1939, Marvel has expanded its universe through movies, TV shows,
              and a vast array of merchandise, captivating audiences worldwide
              with its rich storytelling and dynamic characters.
            </p>
          </motion.div>
        </section>
      </AnimatedSection>

      {/* Marvel Curiosities Section */}
      <AnimatedSection delay={0.2}>
        <section className="py-20 px-5 sm:px-6 md:px-20 bg-gray-900">
          {/* Added sm:px-6 for better padding on small screens */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
              Marvel Curiosities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Changed md:grid-cols to sm:grid-cols to ensure two columns on small screens */}
              {/* Curiosity Card 1 */}
              <motion.div
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <h3 className="text-2xl sm:text-2xl font-semibold mb-4">
                  Stan Lee Cameos
                </h3>
                <p className="text-base sm:text-lg">
                  Stan Lee, the legendary co-creator of many Marvel superheroes,
                  made cameo appearances in nearly every Marvel movie until his
                  passing in 2018, delighting fans with his unexpected and
                  humorous roles.
                </p>
              </motion.div>
              {/* Curiosity Card 2 */}
              <motion.div
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <h3 className="text-2xl sm:text-2xl font-semibold mb-4">
                  Marvel Cinematic Universe (MCU)
                </h3>
                <p className="text-base sm:text-lg">
                  The MCU is an expansive media franchise that interconnects
                  movies and TV shows, creating a shared universe where
                  characters and storylines intersect, offering a cohesive and
                  immersive experience for fans.
                </p>
              </motion.div>
              {/* Curiosity Card 3 */}
              <motion.div
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <h3 className="text-2xl sm:text-2xl font-semibold mb-4">
                  Secret Identities
                </h3>
                <p className="text-base sm:text-lg">
                  Many Marvel superheroes maintain secret identities to protect
                  their loved ones and preserve their personal lives, adding
                  depth and complexity to their characters and storylines.
                </p>
              </motion.div>
              {/* Add more cards as needed */}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Featured Characters Section */}
      <AnimatedSection delay={0.2}>
        <section className="py-8 px-5 sm:px-6 md:px-20 bg-gray-800">
          {/* Added sm:px-6 for better padding on small screens */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
              Featured Characters
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-12">
              {/* Changed to flex-col on small screens */}
              {characters?.slice(0, 2).map((character) => (
                <div
                  key={character.id}
                  className="flex flex-wrap justify-center gap-8"
                >
                  {/* Character */}
                  <motion.div
                    className="w-full sm:w-60 bg-gray-700 rounded-lg overflow-hidden shadow-lg border-2 border-white"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <img
                      src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                      alt={character.name}
                      width={240}
                      height={360}
                      className="w-full h-60 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-2xl sm:text-2xl font-semibold">
                        {character.name}
                      </h3>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
            <div className="flex justify-end mt-8 sm:mt-4">
              {/* Added margin-top adjustments for small screens */}
              <motion.button
                className="group relative overflow-hidden bg-gray-800 hover:bg-gray-900 p-4 rounded-xl mb-4
                            flex items-center gap-2 transition-all duration-300 hover:shadow-lg"
                onClick={() => navigate('/characters')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 font-semibold text-white">
                  See All
                </span>
                <FaArrowRight className="text-white group-hover:translate-x-1 transition-transform duration-300" />
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent
                            translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"
                />
              </motion.button>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Footer Section */}
      <footer className="py-10 bg-gray-900 text-center">
        <p className="text-gray-500 text-sm sm:text-base">
          &copy; {new Date().getFullYear()} Marvel Universe. All rights
          reserved.
        </p>
        {/* Adjusted text size for small screens */}
      </footer>
    </div>
  )
}

export default HomePage
