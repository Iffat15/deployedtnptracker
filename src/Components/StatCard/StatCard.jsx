import React from 'react';
import './StatCard.css'
const Card = ({ title, value }) => {
    return (
        <div className="stat-card">
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-value">{value}</p>
            </div>
        </div>
    );
};

export default Card;
