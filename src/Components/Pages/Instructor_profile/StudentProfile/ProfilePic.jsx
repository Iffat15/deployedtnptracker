import React, { useState, useRef } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import img from "../../../../Assets/profile.webp";
// npm i react-avatar-edit
import Avatar from 'react-avatar-edit'
import './ProfilePic.css'
const ProfilePic = () => {
    const [dialogs, setdialogs] = useState(false);
    const [imgCrop, setimgCrop] = useState(false)
    const [storeImage, setstoreImage] = useState([])

    const onCrop = (view) => {
        setimgCrop(view)
    }
    const onClose = () => {
        setimgCrop(null)
    }
    const saveImage = () => {
        setstoreImage([...storeImage, { imgCrop }])
        setdialogs(false)
    }

    const profileImageShow = storeImage.map(item => item.imgCrop)
    return (

        <div>
            <div className="profile_img text-center p-4">
                <div className="div">
                    <img
                        style={{
                            marginLeft: "70px",
                            width: "200px",
                            height: "200px",
                            borderRadius: "50%",
                            objectFit: "cover",
                        }}
                        src={profileImageShow.length ? profileImageShow : img}
                        alt=""
                        onClick={() => setdialogs(true)}
                    />
                    <div className="di">
                        <Dialog

                            visible={dialogs}
                            header={() => (
                                <p htmlFor="" className="text-2xl font-semibold textColor">
                                    Update Profile
                                </p>
                            )}
                            onHide={() => setdialogs(false)}

                        >

                            <div className="confirmation-content flex flex-column align-items-center">

                                <div className="flex flex-column align-items-center mt-5 w-12">

                                    <div className="flex flex-column justify-content-around w-12 mt-4 ">

                                        <Avatar width={400} height={300} onClose={onClose} onCrop={onCrop} />
                                        <Button onClick={saveImage} label="Save" icon="pi pi-check" />
                                    </div>
                                </div>
                            </div>
                        </Dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePic;