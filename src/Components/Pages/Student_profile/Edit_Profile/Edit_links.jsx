import react,{ useState } from "react";
import './Edit_links.css';

function Edit_links() {
    return(
        <div className="Contaner">
        <Description/>
        <hr />
        <Linkedin/>
        <hr />
        <Github/>
        <hr />
        <Leetcode/>
        <hr />
        <Codechef/>
        <hr />
        <Codeforces/>
     </div>
    );
}

function Description() {
    // State to store the text input value
    const [text, setText] = useState('');
  
    // Function to handle input change
    const handleInputChange = (event) => {
      setText(event.target.value);
    };
  
    return (
      <div className="descrption">
         <p>Description:&nbsp;&nbsp;&nbsp;&nbsp; {text}</p>
        <input
        className="input"
          type="text"
          value={text}
          onChange={handleInputChange}
          placeholder="Enter description"
        />       
      </div>
    );
  }

  function Linkedin() {
    // State to store the text input value
    const [text, setText] = useState('');
  
    // Function to handle input change
    const handleInputChange = (event) => {
      setText(event.target.value);
    };
  
    return (
      <div className="linkedin">
         <p>Linkedin:&nbsp;&nbsp;&nbsp;&nbsp; {text}</p>
        {/* Input field for text */}
        <input
        className="input"
          type="text"
          value={text}
          onChange={handleInputChange}
          placeholder="Enter linkedin"
        />       
      </div>
    );
  }

  function Github() {
    // State to store the text input value
    const [text, setText] = useState('');
  
    // Function to handle input change
    const handleInputChange = (event) => {
      setText(event.target.value);
    };
  
    return (
      <div className="github">
         <p>Github:&nbsp;&nbsp;&nbsp;&nbsp; {text}</p>
        {/* Input field for text */}
        <input
        className="input"
          type="text"
          value={text}
          onChange={handleInputChange}
          placeholder="Enter github"
        />       
      </div>
    );
  }

  function Leetcode() {
    // State to store the text input value
    const [text, setText] = useState('');
  
    // Function to handle input change
    const handleInputChange = (event) => {
      setText(event.target.value);
    };
  
    return (
      <div className="leetcode">
         <p>Leetcode:&nbsp;&nbsp;&nbsp;&nbsp; {text}</p>
        {/* Input field for text */}
        <input
        className="input"
          type="text"
          value={text}
          onChange={handleInputChange}
          placeholder="Enter leetcode"
        />       
      </div>
    );
  }

  function Codechef() {
    // State to store the text input value
    const [text, setText] = useState('');
  
    // Function to handle input change
    const handleInputChange = (event) => {
      setText(event.target.value);
    };
  
    return (
      <div className="codechef">
         <p>Codechef:&nbsp;&nbsp;&nbsp;&nbsp; {text}</p>
        {/* Input field for text */}
        <input
        className="input"
          type="text"
          value={text}
          onChange={handleInputChange}
          placeholder="Enter codechef"
        />       
      </div>
    );
  }

  function Codeforces() {
    // State to store the text input value
    const [text, setText] = useState('');
  
    // Function to handle input change
    const handleInputChange = (event) => {
      setText(event.target.value);
    };
  
    return (
      <div className="codeforces">
         <p>Codeforces:&nbsp;&nbsp;&nbsp;&nbsp; {text}</p>
        {/* Input field for text */}
        <input
        className="input"
          type="text"
          value={text}
          onChange={handleInputChange}
          placeholder="Enter codeforces"
        />       
      </div>
    );
  }
  export default Edit_links;