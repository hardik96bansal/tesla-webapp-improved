import ErrorTriangle from '../../../assets/images/error-triangle.png'
import './ErrorState.css'

const ErrorState = () => {
    return (
        <div className="error-state-container">
            <img className="error-state-image" src={ErrorTriangle} />
            <div className="error-state-text">Please refresh or try again later</div>

        </div>
    )
}

export default ErrorState;