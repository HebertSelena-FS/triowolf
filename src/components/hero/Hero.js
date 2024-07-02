import React, { useState } from 'react';
import heroImg from "../../images/pexels-danny-meneses-340146-943096.jpg";
import { Button } from '../ButtonElements';
import { 
    HeroContainer, 
    HeroBg, 
    // VideoBg,
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper, 
    ArrowFilled, 
    ArrowCircle 
} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
  return (
    <HeroContainer id='home'>
        <HeroBg>
          <img src={heroImg} alt="coding" width="100%" height="auto" />
        </HeroBg>
        <HeroContent>
            <HeroH1>TrioWolf</HeroH1>
            <HeroP>
                'Where there is a will, there is a way.'
            </HeroP>
            <HeroP>
                ~George Herbert
            </HeroP>
            <HeroBtnWrapper>
                <Button to="bio" 
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                primary="true"
                dark="true"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80} 
                >
                    Take a Tour {hover ? <ArrowFilled /> : <ArrowCircle />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
        
  );
};

export default HeroSection;