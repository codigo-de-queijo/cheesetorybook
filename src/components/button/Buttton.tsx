import React from "react";
import './button.css';

interface ButtonProps {
    size?: 'small' | 'medium' | 'large'
    label?: string
    type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light'
    click?: () => void

}



export const Button: React.FC<ButtonProps> = ({ 
    size = 'medium',
    type,
    label,
    click,
    

}) => {
    return (
        <button 
        type="button"
        className={`${size} ${type}`}
        onClick = {click}>
        {label}</button>
    )
}
