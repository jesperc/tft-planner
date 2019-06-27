import React from 'react';

export const Champion = (champion, selected) => {
    return (
        <div>
            {`${selected ? '(S)' : ''}${champion.name}`}
        </div>
    );
};

export default Status;