import CheckMark from '../../../assets/images/check-mark.png'
import './AllItemsCard.css'
import { AllItemsCardProps } from './AllItemsCardModel'
import React from 'react'

const AllItemCard: React.FC<AllItemsCardProps> = ({ allItemsCardModel }: AllItemsCardProps) => {

    return (
        <div className="main-card">
            <div className="image-div-card">
                <img
                    className="car-image-card"
                    src={allItemsCardModel.img}
                    alt="card car image" />
            </div>

            <div className="below-image-main-div-card">
                <div className="car-main-info-card">
                    <span className="car-name-card">{allItemsCardModel.displayName}</span>
                    <span className="car-range-card">{allItemsCardModel.range} mi</span>
                </div>

                <div className="car-details-card">
                    <div className="car-details-info-card">
                        <label className="car-details-info-value-card">{allItemsCardModel?.acceleration?.time || 'NA'}</label>
                        <label className="car-deails-info-title-card">{allItemsCardModel?.acceleration?.speed || '0-60'}</label>
                    </div>

                    <div className="car-details-info-card">
                        <label className="car-details-info-value-card">{allItemsCardModel.topSpeed || 'NA'}</label>
                        <label className="car-deails-info-title-card">Top Speed</label>
                    </div>

                    <div className="car-details-info-card">
                        <label className="car-details-info-value-card">{allItemsCardModel.peakPower || 'NA'}</label>
                        <label className="car-deails-info-title-card">Peak Power</label>
                    </div>

                    <div className="car-details-info-card">
                        <label className="car-details-info-value-card">$78490</label>
                        <label className="car-deails-info-title-card">Starts</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllItemCard;