import React from "react";
import { RoundButtonProps } from "./RoundButtonModel";
import './RoundButton.css'

const RoundButton: React.FC<RoundButtonProps> = ({ roundButtonModel }: RoundButtonProps) => {
    return (
        <button className='custom-button-round'
            style={{
                backgroundColor: roundButtonModel.backgroundColor,
                color: roundButtonModel.textColor
            }}>{roundButtonModel.text}</button>
    )
}

export default RoundButton;