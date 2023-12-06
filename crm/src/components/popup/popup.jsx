import React, { useState } from 'react';
import "./popup.css";

const Popup = () => {
    const [showPopup, setShowPopup] = useState(true);
    const [showMostrar, setShowMostrar] = useState(true);

    const fechar = () => {
        setShowPopup(false);
        setShowMostrar(false);
    }

    return (
        <>
            {showPopup && 
            <div id="popup" className="popup position-fixed top-50 start-50 translate-middle">
                <button type="button" className="btn-close" aria-label="Close" onClick={fechar}></button>
            </div>
            }
            {showMostrar && 
            <div id="mostrar" style={{display: 'none'}}></div>
            }
        </>
    );
}

export default Popup;
