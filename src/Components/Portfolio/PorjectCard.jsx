import React from 'react';
import './card.css'; // Import your CSS file for styling

const PorjectCard = ({ image, title, description, additionalInfo }) => {
    return (
        <div className="card">
            <div className="image-container">
                <img src={image} alt={title} />
            </div>
            <div className="overlay">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="additional-info">{additionalInfo}</div>
            </div>
        </div>
    );
}

export default PorjectCard;
