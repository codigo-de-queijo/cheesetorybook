import React from "react";
import './avatar.css';


interface AvatarProps {
    size?: 'small' | 'normal' | 'big' | 'omg';
    format?: 'square' | 'round';
    name?: string;
    src?: string;
}

const initials = (fullName: string | undefined): string | undefined => {
    if (!fullName) return;

    const sliceName = fullName.trim().toUpperCase().split(" ");
    const firstName = sliceName[0];
    const lastName = sliceName[sliceName.length - 1];

    if (firstName === lastName) {
        return `${firstName[0]}.`;
    }
    return `${firstName[0]}${lastName[0]}`
}


export const Avatar: React.FC<AvatarProps> = ({
    name,
    src,
    format = "square",
    size,
}) => {
    return (
            <img
                className={`avatar ${size} ${format}`}
                src={src}
                alt={initials(name)}
            />
    )
}

