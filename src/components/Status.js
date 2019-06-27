import React from 'react';

export const Status = (count, name, interval) => {
    return (
        <li>
            {`${count} ${name} (${interval.join(', ')})`}
        </li>
    );
};

export default Status;