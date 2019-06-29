import React from 'react';
import './Champion.css';

export const Champion = ({champion, selected, onClick}) => {
    return (
        <div class='champion' onClick={() => onClick(champion.id, selected)}>
            {`${selected ? '(S)' : ''}${champion.name}`}
        </div>
    );
};

export default Champion;