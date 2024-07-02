import styled from "styled-components";
import { FaBus } from 'react-icons/fa'
import { FaArrowAltCircleDown } from 'react-icons/fa';
import { media_queries } from "../../utils/media_queries";

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    height: 1000px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }

    ${media_queries.desktop`

  `}

    ${media_queries.largeTablet`
    height: 1366px;
  `}

${media_queries.phone`
    
  `}

`;

export const HeroBg =styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    overflow: hidden;

    ${media_queries.desktop`
    top: 125px;
  `}

    ${media_queries.phone`
    top: 160px;
  `}

`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 500px;

    ${media_queries.desktop`
    margin-top: 700px;
  `}

    ${media_queries.phone`
    height: 932px;
  `}
`;

export const HeroH1 = styled.h1`
    color: #a149a2;
    font-size: 44px;
    text-align: center;

    @media screen and (max-width: 768) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const HeroP = styled.p`
    margin-top: 16px;
    color: #fff;
    font-size: 22px;
    letter-spacing: .1rem;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 22px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ArrowFilled = styled(FaBus)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowCircle = styled(FaArrowAltCircleDown)`
    margin-left: 8px;
    font-size: 20px;
`;