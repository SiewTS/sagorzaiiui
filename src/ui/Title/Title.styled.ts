import styled from "styled-components";

interface TitleCSSProps {
    align: "left" | "center" | "right";
}

export const Wrapper = styled.header<TitleCSSProps>`
    width: 100%;
    max-width: 90%;
    margin: auto;
    padding: 0 5px;
    text-align: left;
    color: #000;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    text-align: ${props => props.align === "center" && "center"};
    text-align: ${props => props.align === "right" && "right"};
`;

export const MainTitle = styled(Wrapper)`
    font-weight: bold;
    font-size: 67px;
    text-transform: uppercase;
`;

export const SubTitle = styled(Wrapper)`
    font-weight: 500;
    font-size: 51px;
    text-transform: uppercase;
`;

export const HOne = styled(Wrapper)`
    font-weight: bold;
    font-size: 38px;
`;

export const HTwo = styled(Wrapper)`
    font-weight: 500;
    font-size: 28px;
`;

export const HThree = styled(Wrapper)`
    font-weight: 500;
    font-size: 21px;
`;

export const ButtonTitle = styled(Wrapper)`
    font-weight: bold;
    font-size: 12px;
    text-transform: uppercase;
`;
