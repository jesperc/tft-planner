import React from 'react';
import * as filters from '../../misc/filters';
import * as colors from '../../misc/colors';
import './Status.css';

export const Status = ({count, name, item}) => {
    const { interval } = item;
    let color = 'grey';
    if (interval.length === 1 && count >= interval[0]) color = colors.gold;
    if (interval.length === 2 && count >= interval[0]) color = colors.silver;
    if (interval.length === 2 && count >= interval[1]) color = colors.gold;
    if (interval.length === 3 && count >= interval[0]) color = colors.bronze;
    if (interval.length === 3 && count >= interval[1]) color = colors.silver;
    if (interval.length === 3 && count >= interval[2]) color = colors.gold;

    const style = { color: 'red' };
    if (color === 'grey') {
        style.border = `1px solid grey`;
        style.opacity = '0.3';
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
                <img className='status-image' alt='status' style={style} src={item.image} />
                <span className='status-text'>{`${count} ${name} (${interval.join(', ')})`}</span>
            </p>
        </li>
    );
};

export default Status;

/*import React from 'react';

const WHITE = '#FFFFFF';
const GOLD = '#FFD700';
const SILVER = '#C0C0C0';
const BRONZE = '#CD7F32';

export const Status = ({count, name, interval}) => {
    let color = WHITE;
    if (interval.length === 1 && count >= interval[0]) color = GOLD;
    if (interval.length === 2 && count >= interval[0]) color = SILVER;
    if (interval.length === 2 && count >= interval[1]) color = GOLD;
    if (interval.length === 3 && count >= interval[0]) color = BRONZE;
    if (interval.length === 3 && count >= interval[1]) color = SILVER;
    if (interval.length === 3 && count >= interval[2]) color = GOLD;

    return (
        <li style={{ backgroundColor: color }}>
            {`${count} ${name} (${interval.join(', ')})`}
        </li>
    );
};

export default Status;

*/