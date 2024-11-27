import { createContext, useState, ReactNode } from 'react'

interface FilterContextProps {
  filter: string
  setFilter: (filter: string) => void
  orderBy: string
  setOrderBy: (orderBy: string) => void
  page: number
  setPage: (page: number) => void
}

export const FilterContext = createContext<FilterContextProps>({
  filter: '',
  setFilter: () => {},
  orderBy: '',
  setOrderBy: () => {},
  page: 1,
  setPage: () => {},
})

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filter, setFilter] = useState('')
  const [orderBy, setOrderBy] = useState('')
  const [page, setPage] = useState(1)

  return (
    <FilterContext.Provider
      value={{ filter, setFilter, orderBy, setOrderBy, page, setPage }}
    >
      {children}
    </FilterContext.Provider>
  )
}
