import React from "react"
import './InfoPair.css'

const InfoPair = ({ value1, value2, textColor }: any) => {
    return (
        <div className="info-pair-main" style={{ color: textColor }}>
            <label className="info-pair-value1">{value1}</label>
            <label className="info-pair-value2">{value2}</label>
        </div>
    )
}

export default InfoPair