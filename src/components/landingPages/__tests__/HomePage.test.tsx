import { render, screen, cleanup } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import { HomePageModel } from '../HomePage/HomePageModel'

afterEach(() => {
    cleanup()
})

const homePageModel: HomePageModel = {
    backgroundImageDesktop: '',
    backgroundImageMobile: '',
    buttonBackgroundColor: 'rgba(0,0,0,0.1)',
    buttonBorder: '2px solid #FFF',
    buttonTextColor: '#FFF',
    buttonText: 'Order',
    centerText: 'Model S',
    buttonOnClickFunction: '/models/modelS/order'
}

test('Check if Home Page renders', () => {
    render(<BrowserRouter>
        <HomePage homePageModel={homePageModel}></HomePage >
    </BrowserRouter>)
    const homePageElement = screen.getByTestId('home-page')
    expect(homePageElement).toBeInTheDocument()
})

test('Check if Home Page has correct styling', () => {
    render(<BrowserRouter>
        <HomePage homePageModel={homePageModel}></HomePage >
    </BrowserRouter>)
    const homePageElement = screen.getByTestId('home-page')
    expect(homePageElement).toHaveStyle("border:'2px solid #FFF'")
})

test('Check if Home Page has correct text', () => {
    render(<BrowserRouter>
        <HomePage homePageModel={homePageModel}></HomePage >
    </BrowserRouter>)
    const homePageElement = screen.getByTestId('home-page')
    expect(homePageElement).toHaveTextContent('Order')
    expect(homePageElement).toHaveTextContent('Model S')
})

export { }