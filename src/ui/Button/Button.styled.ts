import styled from "styled-components";
const style = getComputedStyle(document.body);

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
    background-color: var(--by-color);
    border: 1px solid var(--primary-color);
    border-radius: 5px;
    padding: 10px 30px;
    margin: 10px;
    box-shadow: 1px 2px 2px var(--shadow-color);
    transition: ease-in-out 150ms;
    cursor: pointer;

    & > header {
        max-width: 80%;
        text-align: center;
        text-shadow: 0.8px 0.5px var(--shadow-color);
        font-weight: var(--bold-fw);
        font-size: var(--button-fs);
        color: var(--primary-color);

        /* color */
        color: ${props =>
            props.buttonType === "danger" &&
            style.getPropertyValue("--error-color")};
        color: ${props =>
            props.buttonType === "warning" &&
            style.getPropertyValue("--warning-color")};
        color: ${props =>
            props.buttonType === "success" &&
            style.getPropertyValue("--success-color")};
    }

    /* border color */
    border-color: ${props =>
        props.buttonType === "danger" &&
        style.getPropertyValue("--error-color")};
    border-color: ${props =>
        props.buttonType === "warning" &&
        style.getPropertyValue("--warning-color")};
    border-color: ${props =>
        props.buttonType === "success" &&
        style.getPropertyValue("--success-color")};

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
        color: var(--white);
    }

    &:hover {
        background-color: var(--primary-color);
        background-color: ${props =>
            props.buttonType === "danger" &&
            style.getPropertyValue("--error-color")};
        background-color: ${props =>
            props.buttonType === "warning" &&
            style.getPropertyValue("--warning-color")};
        background-color: ${props =>
            props.buttonType === "success" &&
            style.getPropertyValue("--success-color")};
    }
`;
