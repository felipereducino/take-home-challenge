import { useContext } from 'react'
import { motion } from 'framer-motion'
import { FilterContext } from '../../context/FilterContext.tsx'

interface PaginationProps {
  total: number
  itemsPerPage: number
}

const Pagination = ({ total, itemsPerPage }: PaginationProps) => {
  const { page, setPage } = useContext(FilterContext)

  const totalPages = Math.ceil(total / itemsPerPage)

  if (totalPages <= 1) {
    return null
  }

  const generatePageNumbers = () => {
    const pages = []
    const maxPageNumbersToShow = 5
    const halfRange = Math.floor(maxPageNumbersToShow / 2)

    let startPage = Math.max(1, page - halfRange)
    let endPage = Math.min(totalPages, page + halfRange)

    if (endPage - startPage + 1 < maxPageNumbersToShow) {
      if (page <= halfRange) {
        endPage = Math.min(totalPages, startPage + maxPageNumbersToShow - 1)
      } else if (page + halfRange >= totalPages) {
        startPage = Math.max(1, endPage - maxPageNumbersToShow + 1)
      }
    }

    // Handle ... in pagination
    const showLeftDots = startPage > 2
    const showRightDots = endPage < totalPages - 1

    const pagesToDisplay = []

    if (showLeftDots) {
      pagesToDisplay.push(1)
      pagesToDisplay.push('leftDots')
    } else {
      for (let i = 1; i < startPage; i++) {
        pagesToDisplay.push(i)
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pagesToDisplay.push(i)
    }

    if (showRightDots) {
      pagesToDisplay.push('rightDots')
      pagesToDisplay.push(totalPages)
    } else {
      for (let i = endPage + 1; i <= totalPages; i++) {
        pagesToDisplay.push(i)
      }
    }

    return pagesToDisplay
  }

  const pages = generatePageNumbers()

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1)
    }
  }

  return (
    <div className="flex items-center justify-center mt-8">
      <motion.button
        onClick={handlePrevPage}
        disabled={page === 1}
        className="px-3 py-1 mx-1 rounded-md bg-gray-800 text-white hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={{ scale: page === 1 ? 1 : 1.1 }}
        whileTap={{ scale: page === 1 ? 1 : 0.9 }}
      >
        &lt;
      </motion.button>
      {pages.map((pageNumber, index) => {
        if (pageNumber === 'leftDots' || pageNumber === 'rightDots') {
          return (
            <span key={index} className="text-white mx-1">
              ...
            </span>
          )
        } else {
          return (
            <motion.button
              key={pageNumber}
              onClick={() => setPage(Number(pageNumber))}
              className={`px-3 py-1 mx-1 rounded-md ${
                pageNumber === page
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {pageNumber}
            </motion.button>
          )
        }
      })}
      <motion.button
        onClick={handleNextPage}
        disabled={page === totalPages}
        className="px-3 py-1 mx-1 rounded-md bg-gray-800 text-white hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={{ scale: page === totalPages ? 1 : 1.1 }}
        whileTap={{ scale: page === totalPages ? 1 : 0.9 }}
      >
        &gt;
      </motion.button>
    </div>
  )
}

export default Pagination
