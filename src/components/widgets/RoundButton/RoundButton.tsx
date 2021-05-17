import React from "react";
import { RoundButtonProps } from "./RoundButtonModel";
import './RoundButton.css'

const RoundButton: React.FC<RoundButtonProps> = ({ roundButtonModel }: RoundButtonProps) => {
    return (
        <button data-testid="round-button" className='custom-button-round'
            onClick={roundButtonModel.onClickFunction}
            style={{
                backgroundColor: roundButtonModel.backgroundColor,
                color: roundButtonModel.textColor,
                border: roundButtonModel.border
            }}>{roundButtonModel.text}</button>
    )
}

export default RoundButton;