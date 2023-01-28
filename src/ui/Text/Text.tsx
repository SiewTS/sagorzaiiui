import React from "react";
import { textSpanOverlapsWith } from "typescript";
import { CodeText, KeyboardText, Link, Paragraph } from "./Text.styled";

export interface TextProps {
    content: string;
    category?: "text" | "keyboard" | "code" | "link";
    type?: "primary" | "secondary" | "success" | "warning" | "error";
    isHighlighted?: boolean;
    textDecoration?: "strike" | "underline";
    isBold?: boolean;
    isItalic?: boolean;
    linkURL: never;
}

interface TextPropsWithURL {
    content: string;
    category?: "link";
    type?: "primary" | "secondary" | "success" | "warning" | "error";
    isHighlighted?: boolean;
    textDecoration?: "strike" | "underline";
    isBold?: boolean;
    isItalic?: boolean;
    linkURL: string;
}

const Text = (props: TextProps | TextPropsWithURL) => {
    const {
        content,
        category = "text",
        type = "primary",
        isHighlighted = false,
        textDecoration,
        isBold = false,
        isItalic = false,
        linkURL,
    } = props;

    const textFinder = () => {
        if (category === "keyboard") {
            return <KeyboardText>{content}</KeyboardText>;
        }
        if (category === "code") {
            return <CodeText>{content}</CodeText>;
        }
        if (category === "link") {
            return <Link href={linkURL}>{content}</Link>;
        } else {
            return (
                <Paragraph
                    type={type}
                    isHighlighted={isHighlighted}
                    textDecoration={textDecoration}
                    isBold={isBold}
                    isItalic={isItalic}
                >
                    {content}
                </Paragraph>
            );
        }
    };

    return textFinder();
};

export default Text;