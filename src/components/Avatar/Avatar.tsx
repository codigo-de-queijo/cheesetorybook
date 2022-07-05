import React from "react";
import './avatar.css'

interface AvatarProps {
    size?: 'small' | 'normal' | 'big' | 'omg';
    format?: 'square' | 'round';
    img?: string;
    name?: string;
    src?: any;
}

export const Avatar: React.FC<AvatarProps> = ({
    name,
    src,
    img,
    format = "square",
    size,
    }) => {
    const formats = format == 'square' ? 'component-avatar--square' : 'component-avatar--round'
    return (
        <>
            <img
                className={`component-avatar component-avatar--${size} component-avatar--${format}`}
                src={img}
                alt={name}
            />
        </>

    )
}

