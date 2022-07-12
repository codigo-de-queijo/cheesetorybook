import React, { Children } from "react";
import './button.css';

interface ButtonProps {
    primary?: boolean
    size?: 'small' | 'medium' | 'large'
    children?: React.ReactNode
    label?: string
    type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light'
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
    return (
        <button 
        type="button" 
        className={`${size} ${type}`}
        onClick = {click}>
            {children}{label}
        </button>
    )
}

