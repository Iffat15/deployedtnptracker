import React, { useState } from "react";
import { Button } from "primereact/button";
import img from "../../../../Assets/profile.webp";
import './Edit_pic.css';
import axios from 'axios';
import CryptoJS from "crypto-js";
import Edit_resume from './Edit_resume'

const ProfilePic = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [error, setError] = useState(null);

    const onClose = () => {
        setSelectedFile(null);
        setShowModal(false);
    }

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    }

    const handleImageSave = async () => {
        if (selectedFile) {
            try {
                const cookies = document.cookie;
                const secretKey = "oEVzobgA9irHZdNvi5IjEzRotYno6X7h";
                const decryptedBytes = CryptoJS.AES.decrypt(cookies, secretKey);
                const decryptedPrn = decryptedBytes.toString(CryptoJS.enc.Utf8);
    
                const formData = new FormData();
                formData.append('image', selectedFile);
                console.log('Selected File:', selectedFile);

                let config = {
                    method: 'patch',
                    url: `https://dp1d9vc7-5000.inc1.devtunnels.ms/api/students/image?prnNo=72278496B`,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    data: formData
                }

                console.log(config)

                const response = await axios.request(config);

                console.log(response.data);
                setShowModal(false);
            } catch (error) {
                console.error('Error uploading image:', error);
                setError('Failed to save image. Please try again.');
            }
        } else {
            alert('Please select an image before saving.');
        }
    };

    return (
        <div>
            <div className="profile_img text-center p-4">
                <div className="div">
                    <img
                        style={{
                            margin: "40px 0px 0px 50px ",
                            width: "200px",
                            height: "200px",
                            borderRadius: "50%",
                            objectFit: "cover",
                        }}
                        src={img}
                        alt=""
                        onClick={() => setShowModal(true)}
                    />
                </div>
            </div>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={onClose}>&times;</span>
                        <h2 className="modal-header">Update Profile</h2>
                        <div className="modal-body">
                            <input type="file" onChange={handleFileChange} accept="image/*" />
                            <Button className="save-button" onClick={handleImageSave} label="Save & Upload" icon="pi pi-check" />
                            {error && <div className="error-message">{error}</div>}
                        </div>
                    </div>
                </div>
            )}
            <Edit_resume/>

        </div>
    );
};

export default ProfilePic;
