import styled from "styled-components";

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
    font-size: 16px;
    font-weight: 300;
    color: #000;

    /* color */
    color: ${props => props.type === "secondary" && "grey"};
    color: ${props => props.type === "success" && "#059669"};
    color: ${props => props.type === "warning" && "#FCD34D"};
    color: ${props => props.type === "error" && "#DC2626"};

    /* highlight color */
    background-color: ${props => props.isHighlighted && "yellow"};

    /* text deco */
    text-decoration: ${props =>
        props.textDecoration === "underline" && "underline"};
    text-decoration: ${props =>
        props.textDecoration === "strike" && "line-through"};

    /* font */
    font-style: ${props => props.isItalic && "italic"};
    font-weight: ${props => props.isBold && "bold"};
`;

export const KeyboardText = styled.kbd`
    width: fit-content;
    font-size: 16px;
    font-weight: 300;
    color: #000;
    border-radius: 3px;
    border: 1px solid black;
    padding: 1px 2px 0;
`;

export const CodeText = styled.code`
    width: fit-content;
    font-size: 14px;
    font-weight: 300;
    font-family: courier, monospace;
    color: #000;
    background-color: #eee;
    border-radius: 3px;
    padding: 0 3px;
`;

export const Link = styled.a`
    color: grey;

    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;
