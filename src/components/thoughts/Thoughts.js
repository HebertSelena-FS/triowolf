import { Button } from '../ButtonElements';
import successfailueimage from '../../images/success-failure.jpg'
import { 
    ThoughtsContainer, 
    ThoughtsWrapper, 
    ThoughtsRow, 
    Column1,
    Column2, 
    BtnWrap,
    ImgWrap, 
    Img,
    ArrowFilled, 
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ThoughtsP 
} from './ThoughtsElements';

const Thoughts = ({
    id,
    imgStart,
    img,
}) => {
  return (
    <ThoughtsContainer imgStart={imgStart} id={id}>
        <ThoughtsWrapper>
            <ThoughtsRow imgStart={imgStart}>
            <Column1>
            <TextWrapper>
            <TopLine>TrioWolf Quote</TopLine>
            <Heading>How to be successfull </Heading>        
            <Subtitle>'To be successfull, it is mostly the fight in your head and the determination to succeed. Self doubt is the main cause of failure. Trust and faith in yourself will make or break the ambitions you have.'</Subtitle>
            <ThoughtsP>~Selena Hebert</ThoughtsP>
                <BtnWrap>
                    {/* <Button to="home"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80} 
                        textDecoration="none"
                        >
                    {"Home"}&nbsp;&nbsp;{<ArrowFilled size={20} />}
                </Button> */}
            </BtnWrap>
            </TextWrapper>
            </Column1>
            <Column2>
                <ImgWrap>
                    <Img src={successfailueimage} alt="image of success and failure" />    
                </ImgWrap>
            </Column2>
            </ThoughtsRow>
        </ThoughtsWrapper>
    </ThoughtsContainer>        
  );
};

export default Thoughts;