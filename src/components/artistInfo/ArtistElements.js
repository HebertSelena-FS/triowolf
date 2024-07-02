import styled from "styled-components";
import { FaArrowAltCircleDown, FaBusAlt } from "react-icons/fa";
import { media_queries } from "../../utils/media_queries";

export const ArtistInfoContainer = styled.div`
  color: ${({ dark }) => (dark ? "#010606" : "#e1affd")};
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#010606")};

  @media screen and (max-width: 768) {
    padding: 100px 0;
  }
`;

export const ArtistInfoWrapper = styled.div`
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

export const ArtistInfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-self: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};
  justify-content: center;

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  padding-bottom: 30px;
  grid-area: col1;
  flex: 1;
`;

export const Column2 = styled.div`
  margin-top: 15px;
  padding: 0 15px;
  grid-area: col2;
  flex: 1;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
`;

export const TopLine = styled.p`
  font-size: 35px;
  line-height: 1.3;
  font-weight: 600;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  margin-right: 15px;
  color: ${({ lightText }) => (lightText ? "#fff" : "#010606")};
`;

export const Heading = styled.h1`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  margin-top: 24px;
  color: #4b0180;
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
  font-size: 15px;
  line-height: 23px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  text-decoration: none;

  ${media_queries.largeDesktop`
visibility: hidden;
  `}

  ${media_queries.desktop`
visibility: hidden;
  `}

  ${media_queries.largeTablet`
visibility: hidden;
  `}

  ${media_queries.tablet`
visibility: hidden;
  `}
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

export const ArrowFilled = styled(FaBusAlt)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowCircle = styled(FaArrowAltCircleDown)`
  margin-left: 8px;
  font-size: 20px;
`;
