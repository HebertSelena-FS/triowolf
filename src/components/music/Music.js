import React from "react";
import { Button } from "../ButtonElements";
import { FaArrowAltCircleDown } from "react-icons/fa";
import {
  MusicContainer,
  MusicWrapper,
  MusicRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./MusicElements.js";

import {} from "../data/musicData.js";

const MusicSection = ({
  lightBg,
  Bamdescription,
  GWdescription,
  GWTitle,
  BamTitle,
  imgStart,
  darkText,
  primary,
  dark,
  dark2,
  img,
    alt,
    id,
}) => {
  return (
    <>
      <MusicContainer lightBg={lightBg} id={id}>
        <MusicWrapper>
          <MusicRow imgStart={imgStart}>
            {/* <Column1>
              <TextWrapper>
                <TopLine darkText={darkText}>{BamTitle}</TopLine>
                {/* <Heading>{headline}</Heading> 
                <Subtitle darkText={darkText}>{Bamdescription}</Subtitle>
                <BtnWrap>
                  <Button
                    to="new"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {"Continue"}&nbsp;&nbsp;{<FaArrowAltCircleDown size={20} />}
                  </Button>
                </BtnWrap>
                <ImgWrap>
                  <Img src={img} alt={alt} />
                </ImgWrap>
              </TextWrapper>
            </Column1> */}
            <Column2>
              <TextWrapper>
                <TopLine darkText={darkText}>{GWTitle}</TopLine>
                {/* <Heading>{headline}</Heading> */}
                <Subtitle darkText={darkText}>{GWdescription}</Subtitle>
                <BtnWrap>
                  <Button
                    to="new"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {"Continue"}&nbsp;&nbsp;{<FaArrowAltCircleDown size={20} />}
                  </Button>
                </BtnWrap>
                <ImgWrap>
                  <Img src={img} alt={alt} />
                </ImgWrap>
              </TextWrapper>
            </Column2>
          </MusicRow>
        </MusicWrapper>
      </MusicContainer>
    </>
  );
};

export default MusicSection;
