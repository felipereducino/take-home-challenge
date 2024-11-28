import { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { debounce } from 'lodash'
import CharacterList from '../components/template/CharactersList'
import { FilterContext } from '../context/FilterContext'

function CharactersPage() {
  const { filter, setFilter, orderBy, setOrderBy, setPage } =
    useContext(FilterContext)
  const [inputValue, setInputValue] = useState(filter)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    debouncedSetFilter(e.target.value)
  }

  const handleOrderByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOrderBy(e.target.value)
    setPage(1)
  }

  const debouncedSetFilter = debounce((value: string) => {
    setFilter(value)
    setPage(1)
  }, 500)

  useEffect(() => {
    return () => {
      debouncedSetFilter.cancel()
    }
  }, [])

  return (
    <div className="bg-[#121212] min-h-screen p-4">
      <motion.div
        className="flex flex-col items-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">
          Marvel Characters
        </h1>
        <input
          type="text"
          placeholder="Search characters..."
          value={inputValue}
          onChange={handleInputChange}
          className="w-full max-w-md p-3 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 mb-4"
        />
        <select
          value={orderBy}
          onChange={handleOrderByChange}
          className="w-full max-w-md p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <option value="">Order By</option>
          <option value="name">Name (A - Z)</option>
          <option value="-name">Name (Z - A)</option>
          <option value="modified">Modified (Oldest First)</option>
          <option value="-modified">Modified (Newest First)</option>
        </select>
      </motion.div>
      <CharacterList />
    </div>
  )
}

export default CharactersPage
