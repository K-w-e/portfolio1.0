import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import './Desktop.css';
import firebase from "../firebase.js";
import Content from '../Content/Content.js';
import red from '../assets/red.jpg';
import yellow from '../assets/yellow.jpg';
import green from '../assets/green.jpg';
import Draggable from 'react-draggable';
import Modal from './Modal';
import { render } from '@testing-library/react';

const DesktopLayout = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [projects, setProjects] = useState(false);
    const [others, setOthers] = useState(false);
    const [indexProj, setindexProj] = useState(false);
    const [indexInfo, setIndexInfo] = useState(false);

    const refProjects = firebase.firestore().collection("projects");
    const refOthers = firebase.firestore().collection("Info");
    const items = [];
    const info = [];
    const shownProjects = [];
    const initialModal = <Draggable
        handle=".navbar"
        defaultPosition={{ x: 300, y: 580 }}
    >
        <div className="draggableInfo">
            <div className="navbar">
                <img src={red} />
                <img src={yellow} />
                <img src={green} />
                <span className="tooltip"> Click or Drag me! :)</span>
                <hr />
            </div>
            <div id="name">Alessandro Guerra</div>
            <div id="info">Web/Frontend Developer</div>
        </div>
    </Draggable>

    function getProjects() {
        refProjects.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setProjects(items);
        });
    }

    function getOthers() {
        refOthers.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                info.push(doc.data());
            });
            setOthers(info);
        });
    }

    useEffect(() => {
        getProjects();
        getOthers();

        /*shownProjects.push(initialModal);
        renderModals();*/
    }, []);

    function close(e) {
        shownProjects[e.target.parentNode.parentNode.id] = null

        renderModals();
    }

    function open(progetto) {
        shownProjects.push(progetto)

        renderModals();
    }

    function renderModals() {
        console.log(shownProjects)
        ReactDom.render(
            shownProjects.map((item, index) =>
            (
                item !== null ?
                    <Modal key={index} data={item} close={close} id={index} />
                    : null
            )), document.getElementById("box"))
    }

    return (
        <div className="container">
            <div className="grid">
                {
                    others != false ? others.map(info => (
                        <button key={info.Title} className="bigButtonDesktop" onClick={() => {
                            open(info)
                        }}>
                            <img src={info.Icon} />
                            <p className="progTitle">{info.Title}</p>
                        </button>
                    )) : null
                }
                {
                    projects != false ? projects.map(prog => (
                        <button key={prog.Title} className="buttonDesktop" onClick={() => {
                            open(prog)
                        }}>
                            <img src={prog.Icon} />
                            <p className="progTitle">{prog.Title}</p>
                        </button>
                    )) : null
                }
            </div>
            <Draggable
                handle=".navbar"
                defaultPosition={{ x: 300, y: 580 }}
            >
                <div className="draggableInfo">
                    <div className="navbar">
                        <img src={red} />
                        <img src={yellow} />
                        <img src={green} />
                        <span className="tooltip"> Drag me! :)</span>
                        <hr />
                    </div>
                    <div id="name">Alessandro Guerra</div>
                    <div id="info">Web/Frontend Developer</div>
                </div>
            </Draggable>

            <div id="box"></div>
        </div >
    );
}

export default DesktopLayout;