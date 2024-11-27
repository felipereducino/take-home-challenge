import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { FilterContext, FilterProvider } from './FilterContext'

const TestComponent = () => {
  const { filter, setFilter, orderBy, setOrderBy, page, setPage } =
    React.useContext(FilterContext)

  return (
    <div>
      <div data-testid="filter">{filter}</div>
      <div data-testid="orderBy">{orderBy}</div>
      <div data-testid="page">{page}</div>
      <button onClick={() => setFilter('testFilter')}>Set Filter</button>
      <button onClick={() => setOrderBy('testOrderBy')}>Set OrderBy</button>
      <button onClick={() => setPage(2)}>Set Page</button>
    </div>
  )
}

describe('FilterContext', () => {
  it('provides default values', () => {
    const { getByTestId } = render(
      <FilterProvider>
        <TestComponent />
      </FilterProvider>
    )

    expect(getByTestId('filter').textContent).toBe('')
    expect(getByTestId('orderBy').textContent).toBe('')
    expect(getByTestId('page').textContent).toBe('1')
  })

  it('updates filter value when setFilter is called', () => {
    const { getByTestId, getByText } = render(
      <FilterProvider>
        <TestComponent />
      </FilterProvider>
    )

    fireEvent.click(getByText('Set Filter'))
    expect(getByTestId('filter').textContent).toBe('testFilter')
  })

  it('updates orderBy value when setOrderBy is called', () => {
    const { getByTestId, getByText } = render(
      <FilterProvider>
        <TestComponent />
      </FilterProvider>
    )

    fireEvent.click(getByText('Set OrderBy'))
    expect(getByTestId('orderBy').textContent).toBe('testOrderBy')
  })

  it('updates page value when setPage is called', () => {
    const { getByTestId, getByText } = render(
      <FilterProvider>
        <TestComponent />
      </FilterProvider>
    )

    fireEvent.click(getByText('Set Page'))
    expect(getByTestId('page').textContent).toBe('2')
  })
})
