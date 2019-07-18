import React from 'react';
import * as filters from '../../misc/filters';
import * as colors from '../../misc/colors';

export const Status = ({count, name, item, color}) => {
    const { interval, image } = item;
    
    const imageStyle = { 
        color: 'red',
        transform: 'translateY(6px)'
    };
    const textStyle = { 
        fontSize: '14px',
        color: 'white',
        margin: '10px'
    };

    if (color === 'grey') {
        imageStyle.border = `1px solid grey`;
        imageStyle.opacity = '0.3';
        textStyle.opacity = '0.5';
    } else {
        imageStyle.border = `1px solid ${color}`;
        imageStyle.filter = color === colors.bronze 
            ? filters.bronze
            : color === colors.silver 
                ? filters.silver
                : filters.gold;
    }

    return (
        <li>
            <p>
                <img 
                    width='20px' 
                    alt='status' 
                    style={imageStyle} 
                    src={image}
                />
                <span 
                    style={textStyle} 
                    className='status-text'
                >
                    {`${count} ${name} (${interval.join(', ')})`}
                </span>
            </p>
        </li>
    );
};

export default Status;
