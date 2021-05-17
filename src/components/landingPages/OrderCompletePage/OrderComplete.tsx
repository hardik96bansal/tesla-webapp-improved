import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { OrderCompleteProps } from "./OrderCompleteModel";
import CarImageRed from '../../../assets/images/model-s-red.png'
import CarImageWhite from '../../../assets/images/model-s-white.png'
import { CarConfiguration } from "../OrderConfigPage/OrderConfidModel";
import CheckMark from '../../../assets/images/check-mark.png'
import Pet from '../../../assets/images/ordercomp.png'
import ThreeRowData from "../../widgets/ThreeRowData/ThreeRowData";
import RoundButtonTwoValues from "../../widgets/RoundButtonTwoValues/RoundButtonTwoValues";
import { RoundButtonTwoValuesModel } from "../../widgets/RoundButtonTwoValues/RoundButtonTwoValuesModel";
import InfoPair from "../../widgets/InfoPair/InfoPair";
import RoundButton from "../../widgets/RoundButton/RoundButton";
import { RoundButtonModel } from "../../widgets/RoundButton/RoundButtonModel";
import './OrderComplete.css'
import Logo from "../../widgets/Logo/Logo";
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { useLocation, Link } from 'react-router-dom'
import LoadingState from "../../widgets/LoadingState/LoadingState";

const OrderComplete: React.FC<OrderCompleteProps> = (orderCompleteModel: any) => {
    console.log('uuuu', useLocation(), this, orderCompleteModel)

    const [carConfig, setCarConfig] = useState<CarConfiguration>();
    const [variantIndex, setVariantIndex] = useState(orderCompleteModel?.variantIndex || 0);
    const [paintIndex, setPaintIndex] = useState(orderCompleteModel?.paintIndex || 0);
    const [wheelIndex, setWheelIndex] = useState(orderCompleteModel?.wheelIndex || 0);
    const [autopilot, setAutopilot] = useState(orderCompleteModel?.autopilot || 0)
    const modelId = orderCompleteModel?.modelId || 'modelS'
    const [printing, setPrinting] = useState(false);

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

    console.log('aa', carConfig)

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

    const roundButtonTwoValuesModel: RoundButtonTwoValuesModel = {
        value1: carConfig?.variants[variantIndex].variantName || 'Variant',
        value2: '$' + carConfig?.variants[variantIndex].price || '$1000',
        borderColor: '#787878',
        borderColorSelected: '#097BE4',
        selected: true,
        onClickFunction: () => { }
    }

    const calculatePrice = () => {
        return carConfig?.variants[variantIndex].price || 0
            + (carConfig?.paints[paintIndex].price || 0)
            + (carConfig?.wheels[wheelIndex]?.price || 0)
            + (autopilot ? carConfig?.selfDriving.price || 0 : 0)
    }

    const priceButtonModel: RoundButtonModel = {
        text: '$' + calculatePrice(),
        backgroundColor: '#787878',
        border: '0',
        onClickFunction: undefined,
        textColor: '#000'
    }

    console.log(priceButtonModel.text)

    const exploreButtonModel: RoundButtonModel = {
        text: 'Explore ' + carConfig?.displayName || '',
        backgroundColor: '#464646',
        border: '0',
        onClickFunction: (undefined),
        textColor: '#FFF'
    }

    const downloadButtonModel: RoundButtonModel = {
        text: 'Download Invoice',
        backgroundColor: '#097BE4',
        border: '0',
        onClickFunction: () => printDocument(),
        textColor: '#FFF'
    }

    const printDocument = () => {
        setPrinting(true);
        const input = document.getElementById('order-complete-main')!;
        html2canvas(input, { scrollY: -window.scrollY })
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF({
                    orientation: 'portrait',
                });
                const imgProps = pdf.getImageProperties(imgData);
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
                pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                pdf.save('order-invoice.pdf');
                setPrinting(false)
            });
    }

    return (
        <div className="order-complete-main" id="order-complete-main">
            <div className="order-complete-logo-container" style={{ opacity: printing ? '20%' : '100%' }}>
                <Logo></Logo>
            </div>
            <div className="order-complete-content" style={{ opacity: printing ? '20%' : '100%' }}>
                <div className="order-complete-top-heading">
                    <img className="order-complete-check-mark" src={CheckMark}></img>
                    <label className="order-complete-top-text">Your Order is Complete</label>
                </div>

                <div className="order-complete-pet-container">
                    <img className="order-complete-pet-image" src={Pet} />
                </div>

                <div className="order-complete-display-name">{carConfig?.displayName}</div>

                <div className="order-complete-three-row-container">
                    <ThreeRowData
                        estimatedRange={carConfig?.variants[variantIndex].range + ' mi'}
                        topSpeed={carConfig?.variants[variantIndex].topSpeed + ' mph'}
                        accelerationTime={carConfig?.variants[variantIndex].acceleration.time}
                    ></ThreeRowData>
                </div>

                <div className="order-complete-car-image-container">
                    <img className="order-complete-car-image" src={carImage[paintIndex]} />
                </div>

                <div className="order-complete-two-button-wrapper">
                    <RoundButtonTwoValues roundButtonTwoValuesModel={roundButtonTwoValuesModel}></RoundButtonTwoValues>
                </div>
                <div className="order-complete-property">
                    <InfoPair value1={carConfig?.paints[paintIndex].name} value2={'$' + carConfig?.paints[paintIndex].price}></InfoPair>
                    <img className="circle-small" src={carConfig?.paints[paintIndex].src} style={{ border: '0' }}></img>
                </div>

                <div className="order-complete-property">
                    <InfoPair value1={carConfig?.wheels[wheelIndex].name} value2={'$' + carConfig?.wheels[wheelIndex].price}></InfoPair>
                    <img className="circle-big" src={carConfig?.wheels[wheelIndex].src} style={{ border: '0' }}></img>
                </div>

                <div className="order-complete-property">
                    <InfoPair value1="Full self-driving capabilities" value2={autopilot ? '$' + carConfig?.selfDriving.price : 'Not Included'}></InfoPair>
                </div>

                <div className="order-complete-price-container">
                    <RoundButton roundButtonModel={priceButtonModel}></RoundButton>
                </div>

                <div className="order-complete-footer-container">
                    <Link to={"/models/" + modelId}>
                        <RoundButton roundButtonModel={exploreButtonModel}></RoundButton>
                    </Link>
                    <RoundButton roundButtonModel={downloadButtonModel}></RoundButton>
                </div>
            </div>

            {printing && <div className="order-complete-loading-container">
                <LoadingState />
            </div>}
        </div >
    )
}

export default OrderComplete