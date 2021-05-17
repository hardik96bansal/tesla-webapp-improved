import { render, screen, cleanup } from '@testing-library/react'
import RoundButton from '../RoundButton/RoundButton';
import { RoundButtonModel } from '../RoundButton/RoundButtonModel';

const roundButtonModel: RoundButtonModel = {
    backgroundColor: '#FFF',
    border: '0',
    onClickFunction: undefined,
    text: 'Click Me',
    textColor: '#000'
}

afterEach(() => {
    cleanup()
})

test('Check if Round Button renders', () => {
    render(<RoundButton roundButtonModel={roundButtonModel}></RoundButton>)
    const roundButtonElement = screen.getByTestId('round-button')
    expect(roundButtonElement).toBeInTheDocument()
})

test('Check if Round Button has correct properties', () => {
    render(<RoundButton roundButtonModel={roundButtonModel}></RoundButton>)
    const roundButtonElement = screen.getByTestId('round-button')
    expect(roundButtonElement).toHaveTextContent('Click Me')
    expect(roundButtonElement).toHaveStyle('border: 0')
})

export { }