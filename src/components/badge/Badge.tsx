import React from "react";
import './badge.css';

interface Props {
    type: 'badgePrimary' | 'badgeSecondary' | 'badgeSuccess' | 'badgeDanger' | 'badgeWarning' | 'badgeInfo' | 'badgeLight' | 'badgeDark'
}

export const Badge: React.FC<Props> = ({
    type,
}) => {
    return (
        <span className={`${type}`}>
            Hello World!
        </span>
    )
}

