import React from "react";
import './avatar.css'

interface AvatarProps {
    size?: 'small' | 'normal' | 'big' | 'omg';
    format?: 'square' | 'round';
    img?: string;
    name?: string;
}

export const Avatar = ({
    name,
    img,
    format,
    size = 'small',
    ...props }: AvatarProps) => {
    const formats = format ? 'component-avatar--square' : 'component-avatar--round'
    return (
        <img 
        className={['component-avatar', `component-avatar--${size}`,`component-avatar--${format}`, formats].join(' ')}
        src={`${img}`}
        alt={`${name + 'avatar'}`}
        {...props}
        />
    )
}

