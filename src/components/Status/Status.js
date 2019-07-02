import React from 'react';

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