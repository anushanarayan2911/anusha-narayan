import React from 'react'
import Arama from '../../Visuals/Portfolio/Arama/Arama.pdf'
import { HeroContainer,  
    HeroBg, 
    LeftWhiteBg,
    RightWhiteBg,
    Row,
    Column1,
    Column2,
    SingleCol,
    Heading,
    Text,
    Img1,
    Img2,
    Img3,
    BtnRow,
    Btn,
    BtnLink,
    VideoCol,
} from './AramaElements'

const AramaComponent = () => {

  return (
    <HeroContainer id="portfolio">
      <HeroBg>
        <RightWhiteBg>
          <Row>
            <Column1>
              <Heading>arama</Heading>
              <Text>Children with severe autism have trouble communicating, 
                even with those closest to them, such as their parents. They 
                struggle to understand spoken instructions, and often cannot 
                ask for help when they need it, even for simple tasks.
              </Text>
              <Text>
              I designed Arama, a speech recognition device which turns instructions 
              given by a parent into a visual that the child can understand.
              </Text>
            </Column1>
            <Column2>
              <Img1 src={require("../../Visuals/Portfolio/Arama/Arama.png")}/>
            </Column2>
          </Row>
        </RightWhiteBg>
        <LeftWhiteBg>
          <Row>
            <SingleCol>
              <Img2 src={require("../../Visuals/Portfolio/Arama/User Research.png")}/>
              <Heading>user research</Heading>
              <Text>
              It was not possible to speak directly to autistic children, so we instead spoke 
              to a variety of adults who could provide different perspectives on the lives of 
              the children. This was done through user interviews and observation.
              </Text>
            </SingleCol>
          </Row>
        </LeftWhiteBg>
        <RightWhiteBg>
          <Row>
            <SingleCol>
                <Img2 src={require("../../Visuals/Portfolio/TeddyBot/Robot Circuit.png")}/>
                <Heading>electronics prototyping</Heading>
                <Text>
                The electronic circuit for the robot consisted of Arduino boards, an LCD screen, 
                9 LEDs, 2 servo motors, a buzzer and a keypad. All of these components were used 
                to make the robot of the game work.
                </Text>
            </SingleCol>
          </Row>
        </RightWhiteBg>
        <BtnRow>
          <Btn>
            <BtnLink to={Arama} download="Portfolio" target="_blank" rel="noreferrer">Download Portfolio</BtnLink>
          </Btn>
        </BtnRow>
      </HeroBg>
    </HeroContainer>
  )
}

export default AramaComponent
