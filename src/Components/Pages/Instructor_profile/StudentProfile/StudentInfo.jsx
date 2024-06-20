import { useState } from 'react';
import './StudentInfo.css';

import ProfilePic from './ProfilePic';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function StudentInfo() {

    return (
        <div className="Student_container">
            <div className="Student_App">

                <ProfilePic />
                <div className='Permanent_Info'>
                    <h1 className='registration_Id'>Registration ID</h1>
                    <h3 className='gmail_Id'>GmailID@gmail.com</h3>
                    <h1 className='phone_no'>9307052699</h1>
                    </div>
            </div>

        </div>

// import React from "react";


// function StudentInfo(){
//     return(
//        <h1>HII Student Info</h1>
    );
}

export default StudentInfo;