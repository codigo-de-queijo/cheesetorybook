import { type } from "os";
import React, { Children } from "react";
import './button.css';

interface ButtonProps {
    primary?: boolean
    size?: 'small' | 'medium' | 'large'
    children?: React.ReactNode
    label?: string
    type?: 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' 
    backgroundColor?: string
    click?: () => void

}



export const Button: React.FC<ButtonProps> = ({ 
    primary = false,
    size = 'medium',
    type,
    children,
    label,
    backgroundColor,
    click,
    ...props
}) => {
    const mode = primary ? 'component-button--primary' : 'component-button--secondary';
    return (
        <button type="button" className={['component-button', `storybook-button--${size}`, `storybook-button--${type}`, mode].join(' ')} style={{ backgroundColor }} onClick = {click}>
            {children}{label}
        </button>
    )
}

