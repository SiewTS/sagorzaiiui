import styled from "styled-components";
import { globalCSSVariables } from "../../styles/variables";

interface ButtonCSSProps {
    buttonType: "primary" | "success" | "danger" | "warning";
    size?: "sm" | "md" | "bg";
    border?: "squared" | "curved" | "rounded";
    isDisabled?: boolean;
}

export const ButtonWrapper = styled.button<ButtonCSSProps>`
    display: block;
    width: 100%;
    max-width: 150px;
    height: 38px;
    background-color: ${globalCSSVariables.bgColor};
    border: 1px solid ${globalCSSVariables.primaryColor};
    border-radius: 5px;
    padding: 10px 30px;
    margin: 10px;
    box-shadow: 1px 2px 2px ${globalCSSVariables.shadowColor};
    transition: ease-in-out 150ms;
    cursor: pointer;

    & > header {
        max-width: 80%;
        text-align: center;
        text-shadow: 0.8px 0.5px ${globalCSSVariables.shadowColor};
        font-weight: ${globalCSSVariables.boldFw};
        font-size: ${globalCSSVariables.buttonFs};
        color: ${globalCSSVariables.primaryColor};

        /* color */
        color: ${props =>
            props.buttonType === "danger" &&
            globalCSSVariables.errorColor};
        color: ${props =>
            props.buttonType === "warning" &&
            globalCSSVariables.warningColor};
        color: ${props =>
            props.buttonType === "success" &&
            globalCSSVariables.successColor};
    }

    /* border color */
    border-color: ${props =>
        props.buttonType === "danger" && globalCSSVariables.errorColor};
    border-color: ${props =>
        props.buttonType === "warning" && globalCSSVariables.warningColor};
    border-color: ${props =>
        props.buttonType === "success" && globalCSSVariables.successColor};

    /* size */
    max-width: ${props => props.size === "md" && "350px"};
    max-width: ${props => props.size === "bg" && "550px"};

    /* disabled */
    opacity: ${props => props.isDisabled === true && "0.5"};
    cursor: ${props => props.isDisabled === true && "not-allowed"};
    pointer-events: ${props => props.isDisabled === true && "none"};

    /* border radius */
    border-radius: ${props => props.border === "rounded" && "50px"};
    border-radius: ${props => props.border === "squared" && "unset"};

    &:hover header {
        color: ${globalCSSVariables.white};
    }

    &:hover {
        background-color: ${globalCSSVariables.primaryColor};
        background-color: ${props =>
            props.buttonType === "danger" &&
            globalCSSVariables.errorColor};
        background-color: ${props =>
            props.buttonType === "warning" &&
            globalCSSVariables.warningColor};
        background-color: ${props =>
            props.buttonType === "success" &&
            globalCSSVariables.successColor};
    }
`;
