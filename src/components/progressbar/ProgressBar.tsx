import React from "react";
import './progressbar.css';

interface Props {
    type?: 'info' | 'success' | 'danger' | 'warning'
    current?: number
    total: number
    showPercentage?: boolean
}

export const Progress: React.FC<Props> = ({
    type,
    current,
    total,
    showPercentage = false


}) => {

    let percentageText = '';
    let percentage = 0;

    if (current) {
        let tempPercentage = Math.round((100 * current) / total);
        percentage = tempPercentage >= 100? 100 : tempPercentage;
        percentageText = showPercentage ? percentage + '%': ''; 
    } else {
        percentageText = '0%';
    }

    return (
        <div className="bar">
            <div style={{ width: `${current ? percentage : 0}%`}}className={`${type} progressBar`}>
                {showPercentage && <span>
                    {percentageText}
                </span>}
            </div>
        </div>
    )
}
