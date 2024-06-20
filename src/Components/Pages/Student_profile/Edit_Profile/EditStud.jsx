import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import './EditStud.css';
import EditLink from './Edit_links';
import EditPic from './Edit_pic';
import EditPlace from './Edit_place';
import Studnav from "../../../Navbar/Studnav";

function EditStud() {
    return (
        <div>
            <div className="nav">
                <Studnav />
            </div>
            <div className="editcont">
                <EditPic />
                <EditLink />
                <EditPlace />
            </div>
        </div>
    );
}

export default EditStud;