import React from 'react';
import './Champion.css';

export const Champion = ({champion, selected, onClick, markAsSelected}) => {
    return (
        <div 
            className={`champion ${markAsSelected ? 'selected' : ''}`} 
            onClick={() => onClick(champion.id, selected)}>
            {champion.name}
        </div>
    );
};

export default Champion;