import { RoundButtonTwoValuesProps } from "./RoundButtonTwoValuesModel";
import './RoundButtonTwoValues.css'

const RoundButtonTwoValues: React.FC<RoundButtonTwoValuesProps> = ({ roundButtonTwoValuesModel }: RoundButtonTwoValuesProps) => {
    return (
        <div className='custom-round-button-two-vaules'>
            <label className='value1-btn'>{roundButtonTwoValuesModel.value1}</label>
            <label className='value2-btn'>{roundButtonTwoValuesModel.value2}</label>
        </div>
    )
}

export default RoundButtonTwoValues;