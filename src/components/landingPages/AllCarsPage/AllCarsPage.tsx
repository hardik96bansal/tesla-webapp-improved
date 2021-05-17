import { useEffect, useState } from "react"
import { AllItemsCardModel } from "../../widgets/AllItemsCard/AllItemsCardModel"
import Logo from "../../widgets/Logo/Logo"
import AllItemCard from "../../widgets/AllItemsCard/AllItemsCard"
import './AllCarsPage.css'
import { Link } from 'react-router-dom'

import ModelSCard from '../../../assets/images/model-s-card.png'
import Model3Card from '../../../assets/images/model-3-card.png'
import ModelXCard from '../../../assets/images/model-x-card.png'
import ModelYCard from '../../../assets/images/model-y-card.png'
import Loading from '../../../assets/images/loading.gif'
import LoadingState from "../../widgets/LoadingState/LoadingState"
import ErrorState from "../../widgets/ErrorState/ErrorState"


const AllCarsPage = () => {

    const [carList, setCarList] = useState<AllItemsCardModel[]>([]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [desktopMode, setDesktopMode] = useState(true)
    const [errored, setErrorred] = useState(false)

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
            console.log(window.innerWidth)
            setDesktopMode(window.innerWidth >= 650)
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, [])

    const fetchCarList = async () => {
        let response = await fetch("https://tesla-app-server.herokuapp.com/models/all");
        if (!response.ok) {
            setErrorred(true)
            return;
        }
        await setCarList(await response.json().then(resp => resp.elements))
    }

    useEffect(() => {
        setTimeout(fetchCarList, 2500);

    }, [])

    let imageMap = new Map();
    imageMap.set("modelS", ModelSCard);
    imageMap.set("model3", Model3Card);
    imageMap.set("modelX", ModelXCard);
    imageMap.set("modelY", ModelYCard);

    return (
        <div className="all-cars-main">
            <div className="all-cars-header">
                <Logo></Logo>
            </div>

            <div className="all-cars-title">
                <label>ALL MODELS</label>
            </div>

            <div className="all-cars-list"
                style={{
                    flexDirection: desktopMode ? 'row' : 'column'
                }}>
                {carList.length == 0 && !errored && <LoadingState />}
                {errored && < ErrorState />}
                {
                    carList.map((carDetail, index) => {
                        carDetail.img = imageMap.get(carDetail.model);
                        return (
                            <Link to={'/models/' + carDetail.model} style={{ textDecoration: 'none' }}>
                                <AllItemCard allItemsCardModel={carDetail}></AllItemCard>
                            </Link>
                        )
                    })
                }
            </div>
        </div >
    )
}

export default AllCarsPage