import Logo from "../../widgets/Logo/Logo"
import TeslaBrand from '../../../assets/images/brand.png'
import { RoundButtonModel } from "../../widgets/RoundButton/RoundButtonModel";
import RoundButton from "../../widgets/RoundButton/RoundButton";
import './HomePage.css'
import { HomePageProps } from "./HomePageModel";
import backgroundDesktopDefault from '../../../assets/images/home-desktop.png'
import backgroundMobileDefault from '../../../assets/images/home-mobile.png'
import { useEffect, useState } from "react";

const HomePage: React.FC<HomePageProps> = ({ homePageModel }: HomePageProps) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const backgroundDesktop = homePageModel ? homePageModel.backgroundImageDesktop : backgroundDesktopDefault
    const backgroundMobile = homePageModel ? homePageModel.backgroundImageMobile : backgroundMobileDefault
    const imageUrl = windowWidth >= 650 ? backgroundDesktop : backgroundMobile;
    const desktopMode = windowWidth >= 650;

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, [])

    const roundButton: RoundButtonModel = {
        backgroundColor: homePageModel ? homePageModel.buttonBackgroundColor : '#464646',
        text: homePageModel ? homePageModel.buttonText : 'ALL CARS',
        textColor: homePageModel ? homePageModel.buttonTextColor : '#FFF',
        border: homePageModel ? homePageModel.buttonBorder : '0',
        onClickFunction: homePageModel ? homePageModel.buttonOnClickFunction : undefined
    }

    return (
        <div className="home-page-main" style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className='home-page-header'>
                <div className='home-page-header-image'>
                    <Logo></Logo>
                </div>
                {(!homePageModel && desktopMode) ? <label className='home-page-header-range'>Range Calculator</label> : ''}

            </div>

            <div className='home-page-middle'>
                <label className='home-page-middle-main-text'> {homePageModel ? homePageModel.centerText : 'Electric Cars, Solar and Clean Energy'}</label>
            </div>

            <div className='home-page-footer'>
                <RoundButton roundButtonModel={roundButton}></RoundButton>
            </div>

        </div>
    )
}

export default HomePage;