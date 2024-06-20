import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome CSS

function YourComponent({ imageSrc, name, jobTitle, email, phone, facebookLink, twitterLink, instagramLink }) {
    return (
        <div className="relative flex flex-row text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border h-48 w-48">
                <img src={imageSrc} alt="profile-picture" />
                <div className="flex justify-center p-2 gap-2 m-4">
                    <a href={facebookLink} className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400">
                        <i className="fab fa-facebook-f" aria-hidden="true"></i> {/* FontAwesome Facebook icon */}
                    </a>
                    <a href={twitterLink} className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400">
                        <i className="fab fa-twitter" aria-hidden="true"></i> {/* FontAwesome Twitter icon */}
                    </a>
                    <a href={instagramLink} className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-purple-600 to-purple-400">
                        <i className="fab fa-instagram" aria-hidden="true"></i> {/* FontAwesome Instagram icon */}
                    </a>
                </div>
            </div>
            <div className="p-6 text-center flex-grow">
                <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {name}
                </h4>
                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400">
                    {jobTitle}
                </p>
                <p className="block mt-4 font-sans text-base antialiased font-normal leading-relaxed ">
                    <div className="font-bold">Email : </div>{email} <br/>
                    <div className="font-bold">Phone : </div>{phone}
                </p>
            </div>
        </div>
    );
}

export default YourComponent;
