import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
    return (
        <div className={isDanger ? 'countdown danger' : 'countdown'}>
            <p className='bold font-size-3'>{value}</p>
            <span className='bold font-size-1'>{type}</span>
        </div>
    );
};

export default DateTimeDisplay;
