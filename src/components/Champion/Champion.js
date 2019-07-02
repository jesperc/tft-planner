import React from 'react';
import './Champion.css';

export const Champion = ({champion, selected, onClick, markAsSelected}) => {
    return (
        <span 
            className={`champion ${markAsSelected ? 'selected' : ''}`} 
            onClick={() => onClick(champion.id, selected)}>
            {champion.name}
        </span>
    );
};

export default Champion;