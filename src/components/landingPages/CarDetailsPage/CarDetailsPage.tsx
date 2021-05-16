import InfoPair from "../../widgets/InfoPair/InfoPair";
import HomePage from "../HomePage/HomePage";
import { HomePageModel } from "../HomePage/HomePageModel";
import BgCarDetailsDesktop from '../../../assets/images/details-s-desktop.png'
import BgCarDetailsMobile from '../../../assets/images/details-s-mobile.png'
import BlackCar from '../../../assets/images/black-car.png'
import './CarDetails.css'
import { useEffect, useState } from "react";
import { CarSpecification } from "./CarDetailsModel";
import { useParams } from "react-router";
import { RoundButtonModel } from '../../widgets/RoundButton/RoundButtonModel'
import RoundButton from "../../widgets/RoundButton/RoundButton";

const CarDetailsPage = () => {

    const { modelId } = useParams<{ modelId: string }>();
    const [carSpecification, setCarSpecification] = useState<CarSpecification>();
    const [variantIndex, setVariantIndex] = useState(0);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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

    useEffect(() => {
        const getCarDetails = async () => {
            let response = await fetch('https://tesla-app-server.herokuapp.com/models/' + modelId);
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            setCarSpecification(await response.json());
        }
        getCarDetails();
    }, [modelId]);

    console.log(carSpecification);

    const homePageModel: HomePageModel = {
        backgroundImageDesktop: BgCarDetailsDesktop,
        backgroundImageMobile: BgCarDetailsMobile,
        buttonBackgroundColor: 'rgba(0,0,0,0.1)',
        buttonBorder: '2px solid #FFF',
        buttonTextColor: '#FFF',
        buttonText: 'Order',
        centerText: carSpecification?.displayName || '',
        buttonOnClickFunction: '/models/' + modelId + '/order'
    }

    return (
        <div>
            <HomePage homePageModel={homePageModel}></HomePage>

            <div className='car-details-second-half' style={{ flexDirection: desktopMode ? 'row' : 'column' }}>
                <img className='car-details-black-image'
                    src={BlackCar}
                    style={{
                        width: desktopMode ? '60vw' : '100vw'
                    }}
                />
                <div className='car-details-info'
                    style={{
                        width: desktopMode ? '40vw' : '100vw'
                    }}>
                    <div className="car-details-info-display-name">{carSpecification?.displayName}</div>

                    <div className="car-details-variant-container" style={{ flexDirection: desktopMode ? 'row' : 'column' }}>
                        {carSpecification?.variants.map((variant, index) => {
                            const roundButtonModel: RoundButtonModel = {
                                text: variant.variantName,
                                textColor: '#FFF',
                                border: variantIndex == index ? '2px solid #097BE4' : '2px solid #787878',
                                backgroundColor: variantIndex == index ? '#464646' : '#000',
                                onClickFunction: () => setVariantIndex(index)
                            }
                            return <RoundButton roundButtonModel={roundButtonModel} />
                        })}
                    </div>

                    <div className="car-details-info-columns">
                        <div className="car-details-info-col1">
                            <InfoPair value1="Range" value2={carSpecification?.variants[variantIndex].range + " mi"} textColor="#FFF" />
                            <InfoPair value1="Peak Power" value2={carSpecification?.variants[variantIndex].peakPower} textColor="#FFF" />
                            <InfoPair value1="Top Speed" value2={carSpecification?.variants[variantIndex].topSpeed} textColor="#FFF" />
                            <InfoPair value1="Weight" value2={carSpecification?.variants[variantIndex].weight} textColor="#FFF" />
                            <InfoPair value1="Cargo Capacity" value2={carSpecification?.variants[variantIndex].cargo} textColor="#FFF" />
                        </div>

                        <div className="car-details-info-col1">
                            <InfoPair value1="Power Train" value2={carSpecification?.variants[variantIndex].powertrain + " mi"} textColor="#FFF" />
                            <InfoPair value1="Acceleration" value2={carSpecification?.variants[variantIndex].acceleration.time} textColor="#FFF" />
                            <InfoPair value1="Drag Coefficient" value2={carSpecification?.variants[variantIndex].dragCoefficient} textColor="#FFF" />
                            <InfoPair value1="Wheels" value2={carSpecification?.variants[variantIndex].wheels} textColor="#FFF" />
                            <InfoPair value1="Charging" value2={carSpecification?.variants[variantIndex].onboardChargerMax} textColor="#FFF" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarDetailsPage;