import { render, screen, cleanup } from '@testing-library/react'
import ThreeRowData from '../ThreeRowData/ThreeRowData'

afterEach(() => {
    cleanup()
})

test('Check if Round Button Two Values renders', () => {
    render(<ThreeRowData estimatedRange="200" topSpeed="300" accelerationTime="400"></ThreeRowData >)
    const threeRowDataElement = screen.getByTestId('three-row-data')
    expect(threeRowDataElement).toBeInTheDocument()
})

test('Check if Round Button Two values has correct text', () => {
    render(<ThreeRowData estimatedRange="200" topSpeed="300" accelerationTime="400"></ThreeRowData >)
    const threeRowDataElement = screen.getByTestId('three-row-data')

    expect(threeRowDataElement).toHaveTextContent('200')
    expect(threeRowDataElement).toHaveTextContent('300')
    expect(threeRowDataElement).toHaveTextContent('400')
})

export { }