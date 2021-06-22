import React, { useState, useEffect } from 'react';
import firebase from '../firebase.js';
import './Bot.css';

const Bot = (props) => {
    const [projects, setProjects] = useState(false);
    const refProjects = firebase.firestore().collection("projects");
    const items = [];

    function getProjects() {
        refProjects.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setProjects(items);
        });
    }

    useEffect(() => {
        getProjects();
    }, []);

    return (
        <div className="botContainer">
            {
                projects !== false ? projects.map((prog, indexProj) => (
                    <button className="button" onClick={() => {
                        props.callback(prog.Video)
                        }}>
                        <img src={prog.Icon} />
                        <p>{prog.Title}</p>
                    </button>
                )) : null
            }
        </div>
    );
}

export default Bot;