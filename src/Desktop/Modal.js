import React from 'react';
import Draggable from 'react-draggable';
import red from '.././assets/red.jpg';
import yellow from '.././assets/yellow.jpg';
import green from '.././assets/green.jpg';
import './Modal.css';
import Content from '../Content/Content';

const Modal = (props) => {
    return (
        <Draggable
            handle=".navbar"
            position={null}
        //defaultPosition={{ x: 0, y: 0 }}
        >
            <div className="draggable" id={props.id}>
                <div className="navbar">
                    <img src={red} onClick={props.close} />
                    <img src={yellow} />
                    <img src={green} />
                    <span className="tooltip"> Click or Drag me! :)</span>
                    <hr />
                </div>

                <Content data={props.data} />
            </div>
        </Draggable>
    );
}

export default Modal;