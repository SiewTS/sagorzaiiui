import React from 'react'
import { ButtonWrapper } from './Button.styled'

export interface ButtonProps {
    label: string,
    type: 'primary' | 'success' | 'danger' | 'warning'
    size?: 'sm' | 'md' | 'bg',
    border?: 'curvy' | 'rounded',
    icon?: any,
    isDisabled: boolean,
    onClick?: () => void,
}

const Button = (props: ButtonProps) => {
    const { label, type, size = 'sm', border = 'curvy', icon, isDisabled = false } = props;

    return (
        <ButtonWrapper buttonType={type} size={size} isDisabled={isDisabled} aria-disabled={isDisabled} border={border}>{label.toUpperCase()}</ButtonWrapper>
    )
}


export default Button