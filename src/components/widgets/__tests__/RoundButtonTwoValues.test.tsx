import { render, screen, cleanup } from '@testing-library/react'
import RoundButton from '../RoundButton/RoundButton';
import RoundButtonTwoValues from '../RoundButtonTwoValues/RoundButtonTwoValues';
import { RoundButtonTwoValuesModel } from '../RoundButtonTwoValues/RoundButtonTwoValuesModel';

const roundButtonTwoValues1: RoundButtonTwoValuesModel = {
    borderColor: 'black',
    borderColorSelected: "blue",
    onClickFunction: undefined,
    selected: false,
    value1: 'Plaid',
    value2: '$10000'
}

const roundButtonTwoValues2: RoundButtonTwoValuesModel = {
    borderColor: 'black',
    borderColorSelected: "blue",
    onClickFunction: undefined,
    selected: false,
    value1: 'Plaid',
    value2: '$10000'
}

afterEach(() => {
    cleanup()
})

test('Check if Round Button Two Values renders', () => {
    render(<RoundButtonTwoValues roundButtonTwoValuesModel={roundButtonTwoValues1}></RoundButtonTwoValues >)
    const roundButtonTwoValuesElement = screen.getByTestId('round-button-two-values')
    expect(roundButtonTwoValuesElement).toBeInTheDocument()
})

test('Check if Round Button Two values has correct text', () => {
    render(<RoundButtonTwoValues roundButtonTwoValuesModel={roundButtonTwoValues1}></RoundButtonTwoValues >)
    const roundButtonTwoValuesElement = screen.getByTestId('round-button-two-values')

    expect(roundButtonTwoValuesElement).toHaveTextContent('Plaid')
    expect(roundButtonTwoValuesElement).toHaveTextContent('$1000')
})

test('Check if Round Button Two values has correct border selected', () => {
    render(<RoundButtonTwoValues roundButtonTwoValuesModel={roundButtonTwoValues1}></RoundButtonTwoValues >)
    const roundButtonTwoValuesElement = screen.getByTestId('round-button-two-values')

    expect(roundButtonTwoValuesElement).toHaveTextContent('Plaid')
    expect(roundButtonTwoValuesElement).toHaveTextContent('$1000')
})

test('Check if Round Button Two values has correct border not selected', () => {
    render(<RoundButtonTwoValues roundButtonTwoValuesModel={roundButtonTwoValues1}></RoundButtonTwoValues >)
    const roundButtonTwoValuesElement = screen.getByTestId('round-button-two-values')

    expect(roundButtonTwoValuesElement).toHaveStyle("borderColor: 'black'")
})

test('Check if Round Button Two values has correct border not selected', () => {
    render(<RoundButtonTwoValues roundButtonTwoValuesModel={roundButtonTwoValues2}></RoundButtonTwoValues >)
    const roundButtonTwoValuesElement = screen.getByTestId('round-button-two-values')

    expect(roundButtonTwoValuesElement).toHaveStyle("borderColor: 'blue'")
})
export { }