import React, { useState } from "react";  
import './Edit_pic.css'; // Corrected import statement
import axios from "axios";
import CryptoJS from "crypto-js";

const Resume=() => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [error, setError] = useState(null);
  
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file && file.type === 'application/pdf') {
        setSelectedFile(file);
      } else {
        setSelectedFile(null);
        alert('Please select a PDF file.');
      }
    };
  
    const handleSubmit1 = async () => {
      if (selectedFile) {
        try{
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

                const response = await axios.request(config);

                console.log(response.data);
             
        }
        catch(error){
            console.error('Error uploading file:', error);
                setError('Failed to save file. Please try again.');
        }
        // You can perform file upload logic here, like sending the file to a server
        console.log('Selected file:', selectedFile);
        alert('File uploaded successfully.');
      } else {
        alert('Please select a file before submitting.');
      }
    };
  
    return (
      <div className="file-upload-container1">
        {/* <p>Upload Offer letter</p> */}
        <div className="input-container1">
          <input id="file-input" className="file-input" type="file" accept=".pdf" onChange={handleFileChange} />
          <label htmlFor="file-input" className="file-upload-button"> <i className="fas fa-file"></i>  upload Resume</label>
        </div>
        <button className="file_upload-button1" onClick={handleSubmit1}>Upload</button>
      </div>
    );
}

export default Resume;
