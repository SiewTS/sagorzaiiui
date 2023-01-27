import styled from "styled-components"

interface ButtonCSSProps {
    buttonType: "primary" | "success" | "danger" | "warning"
    size?: "sm" | "md" | "bg"
    border?: "curvy" | "rounded"
    isDisabled?: boolean
}

export const ButtonWrapper = styled.button<ButtonCSSProps>`
    display: block;
    width: 100%;
    max-width: 127px;
    height: 38px;
    color: #1e3a8a;
    background-color: #f8fafc;
    border: 1px solid #1e3a8a;
    border-radius: 5px;
    padding: 10px 30px;
    margin: 10px;
    font-weight: bold;
    font-size: 12px;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.25);
    transition: ease-in-out 150ms;
    cursor: pointer;

    max-width: ${props => props.size === "md" && "135px"};
    max-width: ${props => props.size === "bg" && "150px"};

    color: ${props => props.buttonType === "danger" && "#DC2626"};
    color: ${props => props.buttonType === "warning" && "#FCD34D"};
    color: ${props => props.buttonType === "success" && "#059669"};
    border-color: ${props => props.buttonType === "danger" && "#DC2626"};
    border-color: ${props => props.buttonType === "warning" && "#FCD34D"};
    border-color: ${props => props.buttonType === "success" && "#059669"};

    opacity: ${props => props.isDisabled === true && "0.5"};
    cursor: ${props => props.isDisabled === true && "not-allowed"};
    pointer-events: ${props => props.isDisabled === true && "none"};

    border-radius: ${props => props.border === "rounded" && "50px"};

    &:hover {
        color: #fff;
        background-color: #1e3a8a;
        background-color: ${props => props.buttonType === "danger" && "#DC2626"};
        background-color: ${props =>
            props.buttonType === "warning" && "#FCD34D"};
        background-color: ${props =>
            props.buttonType === "success" && "#059669"};
    }
`
