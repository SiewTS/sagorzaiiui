import React from "react";
import Title from "../Title/Title";
import { ButtonWrapper } from "./Button.styled";

export interface ButtonProps {
    label: string;
    type?: "primary" | "success" | "danger" | "warning";
    size?: "sm" | "md" | "bg";
    border?: "squared" | "curved" | "rounded";
    icon?: any;
    isDisabled?: boolean;
    onClick?: () => void;
}

const Button = (props: ButtonProps) => {
    const {
        label,
        type = "primary",
        size = "sm",
        border = "curved",
        icon,
        isDisabled = false,
    } = props;

    return (
        <ButtonWrapper
            buttonType={type}
            size={size}
            isDisabled={isDisabled}
            aria-disabled={isDisabled}
            border={border}
        >
            <Title label={label} type="button" />
        </ButtonWrapper>
    );
};

export default Button;
