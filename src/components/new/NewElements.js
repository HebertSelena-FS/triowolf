import styled from 'styled-components';
// import ReactPlayer from "react-player";

export const NewContainer = styled.div`
    color: #010606;
    background: ${({ lightBg }) => (lightBg ? '#fff' : '#010606')};

    @media screen and (max-width: 768) {
        padding: 100px 0;
    }
`;

export const NewWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const NewRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    // column-gap: 2%;

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
`;

export const TopLine = styled.span`
    font-size: 18px;
    line-height: 48px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    color: ${({ lightText }) => (lightText ? '#fff' : '#fff')}       
`;

export const Heading = styled.h1`
     margin-bottom: 24px;
     color: #e1affd;
     font-size: 44px;
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
    margin-bottom: 35px;
    font-size: 22px;
    line-height: 24px;
    color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    `

export const NewDiv = styled.div`
    max-width: 455px;
    height: 100%;
`;

/* export const StyledReactPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border: 1px solid #ac94f4;
`; */

export const New = styled.div` 
    color: #010606;
    max-width: 100%;  
    height: auto;  
    margin: 0 0 10px 0;
    padding-right: 0;
    border-radius: 10px;
    border: 1px solid #e1affd; 
`;