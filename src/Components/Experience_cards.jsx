import React from 'react';
import './Experience_cards.css';

const ExpCards = () => {
    const handleSolveClick = () => {
        window.open('/questions', '_blank'); // Open a new window for the Questions page
    };

    return (
        <div>
            <div className="ex-box">
                <div className="box-head">
                    <h3> Pranjali Dharmadhikari - </h3>
                    <br />
                    <a className='linkedin' href="linkedin"> https://linkedin.com </a>
                </div>
                <hr />
                <div className="ex-body">
                    <p>"Statement Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis quibusdam dolorem fugit eveniet fugiat, temporibus quasi natus placeat doloremque  ..."</p>
                </div>
            </div>
        </div>
    );
};

export default ExpCards;