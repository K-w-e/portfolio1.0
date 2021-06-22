import './Top.css'
import ReactPlayer from 'react-player/lazy';

const Top = (props) => {

    return (
        <div className="topContainer" onClick={console.log(props)}>
            {
                props.data !== "undefined" ?
                    <ReactPlayer
                        url={props.src}
                        playing="true"
                        loop="true"
                        className="video"
                        height="200px"
                        style={{ height: '200px' }}
                    />
                    :
                    null
            }

        </div>
    );
}

export default Top;