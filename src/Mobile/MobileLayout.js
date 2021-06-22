import React, { useState, useEffect } from 'react';
import './MobileLayout.css'
import wip from '../assets/settings.svg';
import Top from './Top'
import Bot from './Bot'

const MobileLayout = () => {
    const [prog, setClickedProj] = useState("");

    function botClick(srcVideo) {
        setClickedProj(srcVideo)
    }

    return (
        <>
            {/*<Top src={prog} />
            <Bot callback={botClick} />*/}
            <img src={wip} className="wip" />
            <div className="divWip">
                Il sito è ancora in fase di costruzione!
                <br />
                Visualizzalo da un dispositivo desktop :)
            </div>
        </>
    );
}

export default MobileLayout;