import React,{useState} from "react";
import "./Edit_place.css";
import '@fortawesome/fontawesome-free/css/all.css';
import axios from "axios";
import CryptoJS from "crypto-js";

function Fun_place(){
    return(
        <div className="placement">
            <Company_name/>
            <Position/>
            <hr />
            <h2>Experience: </h2>
            <ICompany_name/>
        </div>
    );
}

function Company_name() {
    // State to store the text input value
    const [text, setText] = useState('');
   
    // Function to handle input change
    const handleInputChange = (event) => {
      setText(event.target.value);
    };
  
    return (
      <div className="company_name">
         <p>Company name:&nbsp;&nbsp;&nbsp;&nbsp; {text}</p>
        <input
        className="input"
          type="text"
          value={text}
          onChange={handleInputChange}
          placeholder="Enter company name"
        />       
      </div>
    );
  }

  function Position() {
    // State to store the text input value
    const [text, setText] = useState('');
  
    // Function to handle input change
    const handleInputChange = (event) => {
      setText(event.target.value);
    };
  
    return (
      <div className="position">
         <p>Role:&nbsp;&nbsp;&nbsp;&nbsp; {text}</p>
        {/* Input field for text */}
        <input
        className="input"
          type="text"
          value={text}
          onChange={handleInputChange}
          placeholder="Enter position"
        />   
        <FileUpload/>    
      </div>
    );
  }

//  function FileUpload() {
//     const [selectedFile, setSelectedFile] = useState(null);
  
//     const handleFileChange = (event) => {
//       const file = event.target.files[0];
//       if (file && file.type === 'application/pdf') {
//         setSelectedFile(file);
//       } else {
//         setSelectedFile(null);
//         alert('Please select a PDF file.');
//       }
//     };
  
//     const handleSubmit1 = () => {
//       if (selectedFile) {
//         // You can perform file upload logic here, like sending the file to a server
//         console.log('Selected file:', selectedFile);
//         alert('File uploaded successfully.');
//       } else {
//         alert('Please select a file before submitting.');
//       }
//     };
  
//     return (
//       <div className="file-upload-container">
//         {/* <p>Upload Offer letter</p> */}
//         <div className="input-container1">
//           <input id="file-input" className="file-input" type="file" accept=".pdf" onChange={handleFileChange} />
//           <label htmlFor="file-input" className="file-upload-button"> <i className="fas fa-file"></i>  upload offer letter</label>
//         </div>
//         <button className="file_upload-button" onClick={handleSubmit1}>Upload</button>
//       </div>
//     );
//   }

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState(null);
//   const onClose = () => {
//     setSelectedFile(null);
//     // setShowModal(false);
// }

  const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
  };

  const handleFileSave = async () => {
      if (selectedFile) {
          try {
              // Perform file upload logic here
              const cookies = document.cookie;
                const secretKey = "oEVzobgA9irHZdNvi5IjEzRotYno6X7h";
                const decryptedBytes = CryptoJS.AES.decrypt(cookies, secretKey);
                const decryptedPrn = decryptedBytes.toString(CryptoJS.enc.Utf8);
              const formData = new FormData();
              formData.append('image', selectedFile);
              console.log('Selected File:', selectedFile);

              let config = {
                  method: 'patch',
                  url: `YOUR_UPLOAD_URL`,
                  headers: {
                      'Content-Type': 'multipart/form-data'
                  },
                  data: formData
              }
              console.log(config)

              const response = await axios.request(config);
              console.log(response.data);
              // setShowModal(false);
          } catch (error) {
              console.error('Error uploading image:', error);
              setError('Failed to save image. Please try again.');
          }
      } else {
          alert('Please select an image before saving.');
      }
  };

  return (
      <div className="file-upload-container">
          <div className="input-container1">
              <input id="file-input" className="file-input" type="file" accept="image/*" onChange={handleFileChange} />
              <label htmlFor="file-input" className="file-upload-button"> <i className="fas fa-file"></i>  Upload Image</label>
          </div>
          <button className="file_upload-button" onClick={handleFileSave}>Upload</button>
          {error && <div className="error-message">{error}</div>}
      </div>
  );
}

  
function ICompany_name() {
  const [showInput, setShowInput] = useState(false);
  const [inputs, setInputs] = useState(['']);
  const [submittedInputs, setSubmittedInputs] = useState([]);

  const handleChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const handleToggleInput = () => {
    setShowInput(!showInput);
  };

  const addInput = () => {
    setInputs([...inputs, '']);
  };

  const handleSubmit = () => {
    setSubmittedInputs([...submittedInputs, ...inputs]);
    setInputs(['']); // Clear inputs after submission
    setShowInput(false); // Hide input fields after submission
  };

  return (
    <div className="input-button-container">

      <button onClick={handleToggleInput} id='Is'> Click&nbsp;for&nbsp;Internship</button>
      {showInput && (
        <div className="component">
          
          {inputs.map((input, index) => (
            <input
              key={index}
              type="text"
              value={input}
              onChange={(e) => handleChange(index, e.target.value)}
              className="input-field"
              placeholder={`Internship ${index + 1}`}
            />
            
          ))}
          
          <button onClick={addInput} id='AI'><i class='fas fa-pencil-alt'></i> Add Intershipe</button>
          <button onClick={handleSubmit} id='SB'><i className="fas fa-thumbs-up"></i>  Submit</button>
        </div>
      )}
      <Completion_letter/>
    </div>
  );
}

function Completion_letter() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
      alert('Please select a PDF file.');
    }
  };

  const handleSubmit1 = () => {
    if (selectedFile) {
      // You can perform file upload logic here, like sending the file to a server
      console.log('Selected file:', selectedFile);
      alert('File uploaded successfully.');
    } else {
      alert('Please select a file before submitting.');
    }
  };

  return (
    <div className="file-upload-container">
      {/* <p>Upload Offer letter</p> */}
      <div className="input-container1">
        <input id="file-input" className="file-input" type="file" accept=".pdf" onChange={handleFileChange} />
        <label htmlFor="file-input" className="file-upload-button"> <i className="fas fa-file"></i>  upload all completion letter</label>
      </div>
      <button className="file_upload-button" onClick={handleSubmit1}>Upload</button>
    </div>
  );
}
export default Fun_place;