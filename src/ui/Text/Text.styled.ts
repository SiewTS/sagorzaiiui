import styled from "styled-components";
import { globalCSSVariables } from "../../styles/variables";

interface TextCSSProps {
    type?: "primary" | "secondary" | "success" | "warning" | "error";
    isHighlighted?: boolean;
    textDecoration?: "strike" | "underline";
    isBold?: boolean;
    isItalic?: boolean;
}

export const Paragraph = styled.p<TextCSSProps>`
    width: fit-content;
    text-align: left;
    font-family: ${globalCSSVariables.primaryFf};
    font-size: ${globalCSSVariables.bodyFs};
    font-weight: ${globalCSSVariables.lightFw};
    color: ${globalCSSVariables.black};

    /* color */
    color: ${props =>
        props.type === "secondary" && globalCSSVariables.secondaryColor};
    color: ${props =>
        props.type === "success" && globalCSSVariables.successColor};
    color: ${props =>
        props.type === "warning" && globalCSSVariables.warningColor};
    color: ${props =>
        props.type === "error" && globalCSSVariables.errorColor};

    /* highlight color */
    background-color: ${props =>
        props.isHighlighted && globalCSSVariables.highlight};

    /* text deco */
    text-decoration: ${props =>
        props.textDecoration === "underline" && "underline"};
    text-decoration: ${props =>
        props.textDecoration === "strike" && "line-through"};

    /* font */
    font-style: ${props => props.isItalic && "italic"};
    font-weight: ${props => props.isBold && globalCSSVariables.boldFw};
`;

export const KeyboardText = styled.kbd`
    width: fit-content;
    font-size: ${globalCSSVariables.bodyFs};
    font-weight: ${globalCSSVariables.lightFw};
    font-family: ${globalCSSVariables.codeFf};
    color: ${globalCSSVariables.black};
    border-radius: 3px;
    border: 1px solid black;
    padding: 1px 2px 0;
`;

export const CodeText = styled.code`
    width: fit-content;
    font-size: ${globalCSSVariables.bodyFs};
    font-weight: ${globalCSSVariables.lightFw};
    font-family: ${globalCSSVariables.codeFf};
    color: ${globalCSSVariables.black};
    background-color: ${globalCSSVariables.lightGrey};
    border-radius: 3px;
    padding: 0 3px;
`;

export const Link = styled.a`
    color: ${globalCSSVariables.secondaryColor};
    font-family: ${globalCSSVariables.primaryFf};

    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;
