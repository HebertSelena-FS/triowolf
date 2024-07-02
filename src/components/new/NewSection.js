import { Button } from '../ButtonElements';
import { FaArrowAltCircleDown } from 'react-icons/fa';

import { 
    NewContainer, 
    NewWrapper, 
    NewRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    BtnWrap, 
    NewDiv, 
    New, 
    StyledReactPlayer
 } from './NewElements.js';

const NewSection = ({
    lightBg, 
    id, 
    imgStart, 
    topline, 
    lightText, 
    headline, 
    darkText, 
    description,  
    primary,
    dark,
    dark2 
}) => {
  return (
    <>
        <NewContainer lightBg={lightBg} id={id}>
            <NewWrapper>
                <NewRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine darkText={darkText}>{topline}</TopLine>
                        <Heading>{headline}</Heading>
                        <Subtitle lightText={lightText}>{description}</Subtitle>
                        <BtnWrap>
                        <Button to='thoughts'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            primary={primary ? 1 : 0}
                            dark={dark ? 1 : 0}
                            dark2={dark2 ? 1 : 0}
                            >
                            {'More'}&nbsp;&nbsp;{<FaArrowAltCircleDown size={20} />}
                            </Button>
                        </BtnWrap>
                    </TextWrapper>
                    </Column1>
                    <Column2 >
                        <NewDiv>
                            <New>
                            {/* <StyledReactPlayer
                loading="lazy"
                width="100%"
                height="100%"
                controls={true}
                url="https://youtu.be/Tm6fOYWJD-I?si=k5oso2krZpCpm495"
              /> */}
                            </New>
                        </NewDiv>
                    </Column2>                    
                </NewRow>
            </NewWrapper>
        </NewContainer>
    </>
  )
}


export default NewSection;