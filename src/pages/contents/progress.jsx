import React from 'react';

const Progress = ({ value, max }) => {
    const progress = (value / max) * 100;

    return (
        <div className="progress">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
    );
};

export default Progress;