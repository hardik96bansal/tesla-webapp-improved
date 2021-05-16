import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Logo from "../../widgets/Logo/Logo"
import { CarConfiguration } from "./OrderConfidModel";
import CarImageRed from '../../../assets/images/model-s-red.png'
import CarImageWhite from '../../../assets/images/model-s-white.png'
import ThreeRowData from "../../widgets/ThreeRowData/ThreeRowData";
import { RoundButtonTwoValuesModel } from "../../widgets/RoundButtonTwoValues/RoundButtonTwoValuesModel";
import RoundButtonTwoValues from "../../widgets/RoundButtonTwoValues/RoundButtonTwoValues";
import './OrderConfig.css'
import RoundButton from "../../widgets/RoundButton/RoundButton";
import { RoundButtonModel } from "../../widgets/RoundButton/RoundButtonModel";

const OrderConfigPage = () => {
    const [carConfig, setCarConfig] = useState<CarConfiguration>();
    const { modelId } = useParams<{ modelId: string }>();
    const [variantIndex, setVariantIndex] = useState(1);
    const [paintIndex, setPaintIndex] = useState(0);
    const [wheelIndex, setWheelIndex] = useState(0);
    const [autopilot, setAutopilot] = useState(false)

    useEffect(() => {
        const getCarConfiguration = async () => {
            let response = await fetch('https://tesla-app-server.herokuapp.com/models/' + modelId + '/configure');
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            setCarConfig(await response.json());
        }
        getCarConfiguration();
    }, [modelId]);

    console.log(carConfig)

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

    const carImage = [CarImageWhite, CarImageRed];

    const addSelfDriveButton: RoundButtonModel = {
        backgroundColor: '#097BE4',
        text: autopilot ? 'Remove' : 'Add',
        textColor: '#FFF',
        border: '0',
        onClickFunction: () => setAutopilot(!autopilot)
    }

    const orderButton: RoundButtonModel = {
        backgroundColor: '#097BE4',
        text: 'Order',
        textColor: '#FFF',
        border: '0',
        onClickFunction: () => { }
    }

    return (
        <div className="order-config-main">
            <div className="order-config-header">
                <Logo></Logo>
            </div>

            <div className="order-config-content" style={{ flexDirection: desktopMode ? 'row' : 'column' }}>
                <div className="order-config-car-image-wrapper"
                    style={{
                        width: desktopMode ? '50vw' : '100vw',
                        marginLeft: desktopMode ? '80px' : '20px',
                        marginRight: desktopMode ? '80px' : '20px'
                    }}>
                    <img className="order-config-car-image"
                        src={carImage[paintIndex]}
                    ></img>
                </div>

                <div className="order-config-info"
                    style={{
                        width: desktopMode ? '50vw' : '100vw'
                    }}>
                    <div className="order-config-car-name">{carConfig?.displayName}</div>

                    <div className="order-config-three-row-wrapper">
                        <ThreeRowData
                            estimatedRange={carConfig?.variants[variantIndex].range + ' mi'}
                            topSpeed={carConfig?.variants[variantIndex].topSpeed + ' mph'}
                            accelerationTime={carConfig?.variants[variantIndex].acceleration.time + ' sec'} />
                    </div>

                    <div className="order-confid-variant-container">
                        {
                            carConfig?.variants.map((variant, index) => {
                                const roundTwoButton: RoundButtonTwoValuesModel = {
                                    value1: variant.variantName,
                                    value2: '$ ' + variant.price,
                                    borderColor: '#787878',
                                    borderColorSelected: '#097BE4',
                                    selected: variantIndex == index,
                                    onClickFunction: () => setVariantIndex(index)
                                }
                                return <RoundButtonTwoValues roundButtonTwoValuesModel={roundTwoButton}></RoundButtonTwoValues>
                            })
                        }
                    </div>

                    <div className="order-config-property-static">Paint</div>
                    <div className='order-config-property-list'>
                        {carConfig?.paints.map((paint, index) => {
                            return (
                                <div>
                                    <input type="image" className='circle-small'
                                        style={{ border: index == paintIndex ? '3px solid #097BE4' : '0' }}
                                        src={paint.src} onClick={() => setPaintIndex(index)} />
                                </div>
                            )
                        })}
                    </div>
                    <div className='order-config-property-selection'>
                        <div className="property-selected-name">{carConfig?.paints[paintIndex].name} Multi-Coat</div>
                        <div className="property-selected-price">{carConfig?.paints[paintIndex].default ? 'Included' : '$' + carConfig?.paints[paintIndex].price}</div>
                    </div>


                    <div className='order-config-property-static'>Wheels</div>
                    <div className='order-config-property-list'>
                        {carConfig?.wheels.map((wheel, index) => {
                            return (
                                <div>
                                    <input type="image" src={wheel.src} className='circle-big'
                                        style={{ border: index == wheelIndex ? '3px solid #097BE4' : '0' }}
                                        onClick={() => setWheelIndex(index)} />
                                </div>
                            )
                        })}
                    </div>
                    <div className='order-config-property-selection'>
                        <div className="property-selected-name">{carConfig?.wheels[wheelIndex].name}</div>
                        <div className="property-selected-price">{carConfig?.wheels[wheelIndex].default ? 'Included' : '$' + carConfig?.wheels[wheelIndex].price}</div>
                    </div>

                    {carConfig?.selfDriving.available ?
                        <div className='order-config-self-drive'>
                            <div className="order-config-property-static">Full Self Driving Capabilities</div>
                            <div className="order-config-self-drive-value-container">
                                <label className="order-config-self-drive-value">Navigate on Autopilot</label>
                                <label className="order-config-self-drive-value">Auto-lane Change</label>
                                <label className="order-config-self-drive-value">Autopark</label>
                                <label className="order-config-self-drive-value">Summon</label>
                                <label className="order-config-self-drive-value">Full Self Driving Computer</label>
                            </div>

                            <div className="order-config-add-button-container">
                                <RoundButton roundButtonModel={addSelfDriveButton}></RoundButton>
                                {/* <button onClick={() => setAutopilot(!autopilot)}> {autopilot ? 'Remove' : 'Add'}</button> */}

                                {autopilot && <div className='order-config-self-drive-selection'>
                                    <div className="property-selected-name">Self Drive</div>
                                    <div className="property-selected-price">{'$' + carConfig.selfDriving.price}</div>
                                </div>}
                            </div>
                        </div>
                        :
                        ''}

                    <div className="order-config-order-static">
                        <div className="order-config-property-static">Order your {carConfig?.displayName}</div>
                        <div className="property-selected-price">Estimated Deliver: 6-8 weeks</div>
                    </div>

                    <div className="order-config-order-button-container">
                        <RoundButton roundButtonModel={orderButton}></RoundButton>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default OrderConfigPage;