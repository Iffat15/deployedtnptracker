import React, { useState } from 'react';
import './Contri_ques.css'; 
import '@fortawesome/fontawesome-free/css/all.css';
import Studnav from '../../../Navbar/Studnav';

function Oq() {
  return (
    <>
      <div className="nav"><Studnav/></div>
      <div className='headcontri'>
        <h1 className='contri_heading'>Placement Pathways</h1>
        <p className='contri_text'>Beyond the Interview Room: Unveiling Placement Drive Experiences</p>
        {/* <div class="shape-outer ellipse">
          <div class="shape-inner ellipse"></div>
        </div>
        <div class="shape-outer circle1">
          <div class="shape-inner circle1"></div>
        </div>
        <div class="shape-outer circle2">
          <div class="shape-inner circle2"></div>
        </div>
        <div class="shape-outer circle3">
          <div class="shape-inner circle3"></div>
        </div>
        <div class="shape-outer circle4">
          <div class="shape-inner circle4"></div>
        </div> */}
      </div>
      <div className="contri_container">
        <Online_q />
      </div>
    </>
  );
}

function Online_q() {
  const [showInputOQ, setShowInputOQ] = useState(false);
  const [inputsOQ, setInputsOQ] = useState(['']);
  const [submittedInputsOQ, setSubmittedInputsOQ] = useState([]);

  const [showInputPQ, setShowInputPQ] = useState(false);
  const [inputsPQ, setInputsPQ] = useState(['']);
  const [submittedInputsPQ, setSubmittedInputsPQ] = useState([]);

  const [showInputIE, setShowInputIE] = useState(false);
  const [inputsIE, setInputsIE] = useState(['']);
  const [submittedInputsIE, setSubmittedInputsIE] = useState([]);

  const handleChange = (section, index, value) => {
    switch (section) {
      case 'OQ':
        const newInputsOQ = [...inputsOQ];
        newInputsOQ[index] = value;
        setInputsOQ(newInputsOQ);
        break;
      case 'PQ':
        const newInputsPQ = [...inputsPQ];
        newInputsPQ[index] = value;
        setInputsPQ(newInputsPQ);
        break;
      case 'IE':
        const newInputsIE = [...inputsIE];
        newInputsIE[index] = value;
        setInputsIE(newInputsIE);
        break;
      default:
        break;
    }
  };

  const handleToggleInput = (section) => {
    switch (section) {
      case 'OQ':
        setShowInputOQ(!showInputOQ);
        break;
      case 'PQ':
        setShowInputPQ(!showInputPQ);
        break;
      case 'IE':
        setShowInputIE(!showInputIE);
        break;
      default:
        break;
    }
  };

  const addInput = (section) => {
    switch (section) {
      case 'OQ':
        setInputsOQ([...inputsOQ, '']);
        break;
      case 'PQ':
        setInputsPQ([...inputsPQ, '']);
        break;
      case 'IE':
        setInputsIE([...inputsIE, '']);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (section) => {
    switch (section) {
      case 'OQ':
        setSubmittedInputsOQ([...submittedInputsOQ, ...inputsOQ]);
        setInputsOQ(['']); // Clear inputs after submission
        setShowInputOQ(false); // Hide input fields after submission
        break;
      case 'PQ':
        setSubmittedInputsPQ([...submittedInputsPQ, ...inputsPQ]);
        setInputsPQ(['']); // Clear inputs after submission
        setShowInputPQ(false); // Hide input fields after submission
        break;
      case 'IE':
        setSubmittedInputsIE([...submittedInputsIE, ...inputsIE]);
        setInputsIE(['']); // Clear inputs after submission
        setShowInputIE(false); // Hide input fields after submission
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="input_button_container">
        <button className='contri_btn' onClick={() => handleToggleInput('OQ')} id='OQ'>Online questions</button>
        {showInputOQ && (
          <div className="component">
            {inputsOQ.map((input, index) => (
              <input
                key={index}
                type="text"
                value={input}
                onChange={(e) => handleChange('OQ', index, e.target.value)}
                className="input-field"
                placeholder={`Question ${index + 1}`}
              />
            ))}
            <button onClick={() => addInput('OQ')} id='AI'> <i className='fas fa-pencil-alt'></i> Add Input</button>
          </div>
        )}
      </div>
      <div className="input_button_container">
        <button onClick={() => handleToggleInput('PQ')} id='PQ'>Puzzle questions</button>
        {showInputPQ && (
          <div className="component">
            {inputsPQ.map((input, index) => (
              <input
                key={index}
                type="text"
                value={input}
                onChange={(e) => handleChange('PQ', index, e.target.value)}
                className="input-field"
                placeholder={`Question ${index + 1}`}
              />
            ))}
            <button onClick={() => addInput('PQ')} id='AI'> <i className='fas fa-pencil-alt'></i> Add Input</button>
          </div>
        )}
      </div>
      <div className="input_button_container">
        <button onClick={() => handleToggleInput('IE')} id='IE'>Interview experience</button>
        {showInputIE && (
          <div className="component">
            {inputsIE.map((input, index) => (
              <input
                key={index}
                type="text"
                value={input}
                onChange={(e) => handleChange('IE', index, e.target.value)}
                className="input-field"
                placeholder={`Share your interview experience and something important that can help others`}
              />
            ))}
          </div>
        )}
      </div>
      <button onClick={() => handleSubmit('OQ')} id='SB'><i className="fas fa-thumbs-up"></i>  Submit</button>
    </>
  );
}

export default Oq;
