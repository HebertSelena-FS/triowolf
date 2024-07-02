import styled from "styled-components";
import { Link } from 'react-scroll';

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({ primary }) => (primary ? '#3F48CA' : '#010606')};
    border: ${({ dark }) => (dark ? '#010606' : '#4B0180')}; /* Added missing semicolon */
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#010606' : '#e1affd')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ dark }) => (dark ? '#010606' : '#e1affd')};
        color: ${({ primary }) => (primary ? '#e1affd' : '#010606')};
        outline: 1px solid #010606;
        border: 1px solid #e1affd;
    }
`;