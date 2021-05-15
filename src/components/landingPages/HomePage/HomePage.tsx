import Logo from "../../widgets/Logo/Logo"
import TeslaBrand from '../../../assets/images/brand.png'
import { RoundButtonModel } from "../../widgets/RoundButton/RoundButtonModel";
import RoundButton from "../../widgets/RoundButton/RoundButton";
import './HomePage.css'
import { HomePageProps } from "./HomePageModel";
import backgroundDesktop from '../../../assets/images/home-desktop.png'
import backgroundMobile from '../../../assets/images/home-mobile.png'
import { useEffect, useState } from "react";

const HomePage: React.FC<HomePageProps> = ({ homePageModel }: HomePageProps) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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
        backgroundColor: '#464646',
        text: 'ALL CARS',
        textColor: '#FFF'
    }

    return (
        <div className="home-page-main" style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className='home-page-header'>
                <div className='home-page-header-image'>
                    <Logo></Logo>
                </div>

                {desktopMode ? <label className='home-page-header-range'>Range Calculator</label> : ''}

            </div>

            <div className='home-page-middle'>
                <label className='home-page-middle-main-text'>Electric Cars, Solar and Clean Energy</label>
            </div>

            <div className='home-page-footer'>
                <RoundButton roundButtonModel={roundButton}></RoundButton>
            </div>

        </div>
    )
}

export default HomePage;