import React, { useState } from "react";
import './Modal.css';
// import { RxCross1 } from "react-icons/rx";
import { MdOpenInNew } from "react-icons/md";
import { ImCross } from "react-icons/im";
// import { RxCross1 } from "react-icons/rx";
// import { Rx } from 'react-icons/ri';

import {useEffect} from 'react'; 

// import { cleanup } from '@testing-library/react';
const MyModal = ({ closeModal }) => {
    useEffect(()=> {
        document.body.style.overflowY = "hidden";
        return() => {
            document.body.style.overflowY = "scroll";
        };
    },[]);
    return (
            <div className="modal-container">
                
                <div className="top"><h2 className="underline">Stay tuned</h2><span className="cross-icon" onClick={closeModal}><ImCross /></span></div>
                <ul>
                    <li>Pict announces "TechFiesta - An International Hackathon" </li>
                    <li>Phonepe marks the second highest placement with <span className="package">35</span> <span className="lpa">lpa</span>
                    <br />
                    <span className="click">For details <MdOpenInNew /></span></li>
                    <li>PabAlto marks the highest on campus placement with <span className="package">40 </span> <span className="lpa">lpa</span>
                    <br />
                    <span className="click">For details <MdOpenInNew /></span></li>
                    
                </ul>
                </div>
    );
};

const Modal = () => {
    const [showModal, setShowModal] = useState(true);

    const closeModal = () => setShowModal(false);

    return (
        <div>
            {/* <button className="modal-btn" onClick={() => setShowModal(true)}>Open Modal</button> */}
            {showModal && <MyModal closeModal={closeModal} />}
        </div>
    );
};

export default Modal;
