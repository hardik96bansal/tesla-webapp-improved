import LoadingGif from '../../../assets/images/loading.gif'

import './LoadingState.css'
const LoadingState = () => {
    return (
        <div className="loading-spinner-container">
            <img className="loading-spinner-image" src={LoadingGif} />
            <div className="loading-spinner-text">Loading....</div>

        </div>
    )
}

export default LoadingState;