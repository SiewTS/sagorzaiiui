import styled from "styled-components";
import { globalCSSVariables } from "../../styles/variables";

interface MenuItemCSSProps {
    isDisabled: boolean | undefined;
}

export const MenuWrapper = styled.div`
    width: 30%;
    max-width: 450px;
    height: 100vh;
    margin: 0;
    padding: 5px;
    background-color: ${globalCSSVariables.bgColor};
`;

export const MenuContainer = styled.ul`
    list-style-type: none;
    padding: 0px;
    margin: 0px;
`;

export const MenuItem = styled.li<MenuItemCSSProps>`
    margin: 0px;
    padding: 10px 8px;
    transition: ease-in-out 0.1s;

    & > a {
        display: block;
        text-decoration: none;
        color: ${globalCSSVariables.black};
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    &:hover {
        cursor: pointer;
        background-color: ${globalCSSVariables.primaryColor};
        color: ${globalCSSVariables.white};
    }

    &:hover > a {
        text-decoration: none;
        color: ${globalCSSVariables.white};
    }

    /* disabled */
    opacity: ${props => props.isDisabled === true && "0.5"};
    cursor: ${props => props.isDisabled === true && "not-allowed"};
    pointer-events: ${props => props.isDisabled === true && "none"};
`;
