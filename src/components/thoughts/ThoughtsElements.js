import styled from "styled-components";
import { FaArrowAltCircleUp } from 'react-icons/fa';
import { MdFrontHand } from 'react-icons/md';

export const ThoughtsContainer = styled.div`
    color: #010606;
    background: #fff;

    @media screen and (max-width: 768) {
        padding: 100px 0;
    }
`;

export const ThoughtsWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const ThoughtsRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    justify-items: center;

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding-bottom: 30px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-top: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    margin-top: 32px;
`;

export const TopLine = styled.p`
    color: #010606;
    font-size: 18px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
     margin-bottom: 24px;
     color: #e1affd;
     font-size: 35px;
     line-height: 1.1;
     font-weight: 600;

     @media screen and (max-width: 768) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 24px;
    font-size: 22px;
    line-height: 24px;
    color: #010606;
`;

export const ThoughtsP = styled.p`
    margin-top: 12px;
    margin-bottom: 24px;
    color: #010606;
    font-size: 20px;
    text-align: left;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 14px;
    }

    @media screen and (max-width: 480px) {
        font-size: 12px;
    }
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 455px;
`;

export const Img = styled.img` 
    max-width: 100%; 
    height: auto;   
    margin: 0 0 10px 0;
    padding-right: 0;
    border-radius: 10px;
    border: 2px solid #e1affd; 
`;

export const ArrowFilled = styled(MdFrontHand)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowCircle = styled(FaArrowAltCircleUp)`
    margin-left: 8px;
    font-size: 20px;
`;