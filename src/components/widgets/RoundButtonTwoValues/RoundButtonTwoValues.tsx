import { RoundButtonTwoValuesProps } from "./RoundButtonTwoValuesModel";
import './RoundButtonTwoValues.css'

const RoundButtonTwoValues: React.FC<RoundButtonTwoValuesProps> = ({ roundButtonTwoValuesModel }: RoundButtonTwoValuesProps) => {
    return (
        <div className='custom-round-button-two-vaules' data-testid="round-button-two-values"
            style={{ borderColor: roundButtonTwoValuesModel.selected ? roundButtonTwoValuesModel.borderColorSelected : roundButtonTwoValuesModel.borderColor }}
            onClick={roundButtonTwoValuesModel.onClickFunction}>
            <label className='value1-btn'>{roundButtonTwoValuesModel.value1}</label>
            <label className='value2-btn'>{roundButtonTwoValuesModel.value2}</label>
        </div>
    )
}

export default RoundButtonTwoValues;