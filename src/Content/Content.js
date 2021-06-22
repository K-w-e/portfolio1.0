import React from 'react';
import Iframe from 'react-iframe';
import ReactPlayer from 'react-player';
import './Content.css';
import Loading from './Loading.js';

const Content = (props) => {

    return (
        < div className="content">
            <span className="data">
                {
                    props.data.Video !== undefined ?
                        <ReactPlayer
                            url={props.data.Video}
                            playing={true}
                            loop={true}
                            className="video"
                            fallback={Loading}
                            playsInline={true}
                            autoPlay
                            muted
                        />
                        : null
                }
                {props.data.Title ? <h2 className="title">{props.data.Title}</h2> : null}
                {props.data.Technologies ? <p className="technologies">Technologies:</p> : null}
                {
                    props.data.Technologies ?
                        props.data.Technologies.map(function (name, index) {
                            return <img src={name} width="50px" className="imgTech" key={name} />
                        })
                        : null
                }

                <div className="description">
                    {props.data.Info ? props.data.Info.split("\\n").map((str, index) =>
                        <p key={index} className="desP">{str}</p>
                    ) : null}
                </div>
            </span>


        </div >
    );
}

export default Content;