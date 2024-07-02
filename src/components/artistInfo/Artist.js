import React from "react";
import { Button } from "../ButtonElements";
import { FaArrowAltCircleDown } from "react-icons/fa";
import {
  ArtistInfoContainer,
  ArtistInfoWrapper,
  ArtistInfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./ArtistElements";

const ArtistInfo = ({
  lightBg,
  id,
  imgStart,
  topline,
  lightText,
  headline,
  darkText,
  description,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <ArtistInfoContainer lightBg={lightBg} id={id}>
        <ArtistInfoWrapper>
          <ArtistInfoRow imageStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Heading>
                  <TopLine lightText={lightText}>{topline}</TopLine>
                  {headline}
                </Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to="music"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {"See More"}&nbsp;&nbsp;{<FaArrowAltCircleDown size={20} />}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </ArtistInfoRow>
        </ArtistInfoWrapper>
      </ArtistInfoContainer>
    </>
  );
};

export default ArtistInfo;
