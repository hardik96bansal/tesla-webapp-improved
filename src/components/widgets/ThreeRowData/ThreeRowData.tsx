import { ThreeRowDataProps } from "./ThreeRowDataModel";
import './ThreeRowData.css'

const ThreeRowData: React.FC<ThreeRowDataProps> = ({ threeRowDataModel }: ThreeRowDataProps) => {
    return (
        <div className="three-row-main">
            <div className="three-row-item">
                <span className="three-row-item-value">{threeRowDataModel.estimatedRange}</span>
                <span className="three-row-item-title">Est Range</span>
            </div>

            <div className="three-row-item">
                <span className="three-row-item-value">{threeRowDataModel.topSpeed}</span>
                <span className="three-row-item-title">Top Speed</span>
            </div>

            <div className="three-row-item">
                <span className="three-row-item-value">{threeRowDataModel.accelerationTime}</span>
                <span className="three-row-item-title">0-60 mph</span>
            </div>
        </div>
    )
}

export default ThreeRowData

