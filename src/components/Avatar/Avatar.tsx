import React from "react";
import './avatar.css'

interface AvatarProps {
    size?: 'small' | 'normal' | 'big' | 'omg';
    format?: 'square' | 'round';
    img?: string;
    name?: string;
    backgroundColor: string;
}

export const Avatar = ({
    name,
    img,
    format,
    size = 'small',
    ...props }: AvatarProps) => {
    const formats = format ? 'component-avatar--square' : 'component-avatar--circle'
    return (
        <div
            className={['component-avatar', `component-avatar--${size}`, formats].join(' ')}
            {...props}>
        </div>
    )
}

