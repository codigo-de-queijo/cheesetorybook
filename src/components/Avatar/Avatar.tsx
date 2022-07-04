import { any } from "prop-types";
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
    ...props }) => {
    const formats = format ? 'component-avatar--square' : 'component-avatar--round'
    return (
        <div>
            <img
                className={['component-avatar', `component-avatar--${size}`, `component-avatar--${format}`, formats].join(' ')}
                src={img}
                {...props}
            />
        </div>

    )
}

