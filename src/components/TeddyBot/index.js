import React from 'react'
import TeddyBot from '../../Visuals/Portfolio/TeddyBot/TeddyBot.pdf'
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
    YoutubeEmbed
} from './TeddyBotElements'

const TeddyBotComponent = () => {

  return (
    <HeroContainer id="portfolio">
      <HeroBg>
        <RightWhiteBg>
          <Row>
            <Column1>
              <Heading>teddybot</Heading>
              <Text>Mathematics is often considered to be the most boring subject 
                for young children. The lack of interactivity means that they are 
                frequently disengaged and do not enjoy the essential subject. 
              </Text>
              <Text>
              TeddyBot is a robotic game that will help children to practice their 
              addition and subtraction skills.
              </Text>
            </Column1>
            <Column2>
              <Img1 src={require("../../Visuals/Portfolio/TeddyBot/TeddyBot.png")}/>
            </Column2>
          </Row>
        </RightWhiteBg>
        <LeftWhiteBg>
          <Row>
            <SingleCol>
              <Img2 src={require("../../Visuals/Portfolio/TeddyBot/Manufacture.png")}/>
              <Heading>prototyping</Heading>
              <Text>
              Part of the project was to create a prototype of the design. Due to prototyping 
              limitations, the outer casing was made using plywood. Manufacture involved laser 
              cutting and electronics.
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
        <LeftWhiteBg>
          <Row>
            <VideoCol>
                <YoutubeEmbed/>
            </VideoCol>
          </Row>
        </LeftWhiteBg>
        <BtnRow>
          <Btn>
            <BtnLink to={TeddyBot} download="Portfolio" target="_blank" rel="noreferrer">Download Portfolio</BtnLink>
          </Btn>
        </BtnRow>
      </HeroBg>
    </HeroContainer>
  )
}

export default TeddyBotComponent
