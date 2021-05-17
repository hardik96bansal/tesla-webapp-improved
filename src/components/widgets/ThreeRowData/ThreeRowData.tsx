import { ThreeRowDataProps } from "./ThreeRowDataModel";
import './ThreeRowData.css'

const ThreeRowData = ({ estimatedRange, topSpeed, accelerationTime }: any) => {
    return (
        <div className="three-row-main" data-testid="three-row-data">
            <div className="three-row-item">
                <span className="three-row-item-value">{estimatedRange}</span>
                <span className="three-row-item-title">Est Range</span>
            </div>

            <div className="three-row-item">
                <span className="three-row-item-value">{topSpeed}</span>
                <span className="three-row-item-title">Top Speed</span>
            </div>

            <div className="three-row-item">
                <span className="three-row-item-value">{accelerationTime}</span>
                <span className="three-row-item-title">0-60 mph</span>
            </div>
        </div>
    )
}

export default ThreeRowData

