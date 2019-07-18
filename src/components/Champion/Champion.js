import React from 'react';
import './Champion.css';
import * as colors from '../../misc/colors';

const tierToColor = (tier) => {
    if (tier === 1) return colors.tier1;
    if (tier === 2) return colors.tier2;
    if (tier === 3) return colors.tier3;
    if (tier === 4) return colors.tier4;
    if (tier === 5) return colors.tier5;
}

export const Champion = ({champion, selected, onClick, markAsSelected}) => {
    const style = { 
        border: `1px solid ${tierToColor(champion.tier)}`,
        marginBottom: '3px',
        marginTop: '6px',
        marginLeft: '6px',
        marginRight: '6px'
    };
    
    if (markAsSelected) {
        style.filter = 'grayscale(100%)';
        style.opacity = '0.6';
    }

    return (
        <img 
            alt='champion'
            width='32px'
            className='champion'
            style={style} 
            src={champion.image} 
            onClick={() => onClick(champion.id, selected)}
         />
    );
};

export default Champion;