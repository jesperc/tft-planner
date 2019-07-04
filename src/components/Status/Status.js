import React from 'react';
import * as filters from '../../misc/filters';
import * as colors from '../../misc/colors';
import './Status.css';

export const Status = ({count, name, item, color}) => {
    const { interval } = item;
    const style = { color: 'red' };
    const textStyle = { fontSize: '14px' };
    if (color === 'grey') {
        style.border = `1px solid grey`;
        style.opacity = '0.3';
        textStyle.opacity = '0.5';
    } else {
        style.border = `1px solid ${color}`;
        style.filter = color === colors.bronze 
            ? filters.bronze
            : color === colors.silver 
                ? filters.silver
                : filters.gold;
    }

    return (
        <li className='status-li'>
            <p>
                <img width='20px' className='status-image' alt='status' style={style} src={item.image} />
                <span style={textStyle} className='status-text'>{`${count} ${name} (${interval.join(', ')})`}</span>
            </p>
        </li>
    );
};

export default Status;
