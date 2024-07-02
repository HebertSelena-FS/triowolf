import styled from "styled-components";

export const MusicContainer = styled.div`
    color: #010606;
    background: ${({ lightBg }) => (lightBg ? '#fff' : '#010606')};

    @media screen and (max-width: 768) {
        padding: 100px 0;
    }
`;

export const MusicWrapper = styled.div`
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

export const MusicRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

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

export const TopLine = styled.p`
    font-size: 18px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
     margin-bottom: 24px;
     font-size: 44px;
     line-height: 1.1;
     font-weight: 600;
     color: ${({ lightText }) => (lightText ? '#e1affd' : '#e1affd')
    };

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
    color: ${({ darkText }) => (darkText ? '#010606' : '#010606')};
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    text-decoration: none;
`;

export const ImgWrap = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 455px;

`;

export const Img = styled.img` 
    max-width: 100%; 
    height: auto;
    margin: 0 0 10px 0;
    padding-right: 0;
    border-radius: 10px;
    border: 1px solid #e1affd; 
    box-shadow {
         -webkit-box-shadow: 100px 45px 30px -25px #e1affd;
            -moz-box-shadow: 10px 35px 30px -25px #e1affd;
                 box-shadow: 10px 35px 30px -25px #e1affd;
      }
`;

export const MusicDiv = styled.div`
    max-width: 100%;
    width: 455px;
    height: auto;
`;

export const Music = styled.div` 
    max-width: 100%;   
    height: auto; 
    margin: 0 0 10px 0;
    padding-right: 0;
    border-radius: 10px;
    border: 2px solid #e1affd; 
    box-shadow {
             -webkit-box-shadow: 10px 45px 30px -25px #e1affd;
                -moz-box-shadow: 10px 35px 30px -25px #e1affd;
                     box-shadow: 10px 35px 30px -25px #e1affd;
          }
`;