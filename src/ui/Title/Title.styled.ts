import styled from "styled-components";
import { globalCSSVariables } from "../../styles/variables";

interface TitleCSSProps {
    align: "left" | "center" | "right";
}

export const Wrapper = styled.header<TitleCSSProps>`
    width: 100%;
    max-width: 90%;
    margin: auto;
    padding: 0 5px;
    text-align: left;
    color: ${globalCSSVariables.black};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-family: ${globalCSSVariables.primaryFf};

    text-align: ${props => props.align === "center" && "center"};
    text-align: ${props => props.align === "right" && "right"};
`;

export const MainTitle = styled(Wrapper)`
    font-family: ${globalCSSVariables.secondaryFf};
    font-weight: ${globalCSSVariables.boldFw};
    font-size: ${globalCSSVariables.titleFs};
    text-transform: uppercase;
`;

export const SubTitle = styled(Wrapper)`
    font-family: ${globalCSSVariables.secondaryFf};
    font-weight: ${globalCSSVariables.semiBoldFw};
    font-size: ${globalCSSVariables.subTitleFs};
    text-transform: uppercase;
`;

export const HOne = styled(Wrapper)`
    font-weight: ${globalCSSVariables.boldFw};
    font-size: ${globalCSSVariables.hOneFs};
`;

export const HTwo = styled(Wrapper)`
    font-weight: ${globalCSSVariables.semiBoldFw};
    font-size: ${globalCSSVariables.hTwoFs};
`;

export const HThree = styled(Wrapper)`
    font-weight: ${globalCSSVariables.mediumFw};
    font-size: ${globalCSSVariables.hThreeFs};
`;

export const ButtonTitle = styled(Wrapper)`
    font-weight: ${globalCSSVariables.boldFw};
    font-size: ${globalCSSVariables.buttonFs};
    text-transform: uppercase;
`;
