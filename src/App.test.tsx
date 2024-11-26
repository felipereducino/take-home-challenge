import App from './App'
import { render, screen } from '@testing-library/react'

describe('App component', () => {
    beforeEach(() => {
        render(<App />)
    })

    it('should render App component properly', () => {
        render(<App />)
    })

    it('should render hello World text correctly', () => {
        expect(screen.getByText('Hello world!')).toBeInTheDocument()
    })
})
