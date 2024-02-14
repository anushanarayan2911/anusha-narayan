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
                <Img2 src={require("../../Visuals/Portfolio/Pulmo-2/App Design.png")}/>
                <Heading>app design</Heading>
                <Text>
                The app will be paired with each user’s Pulmo. It will keep the user 
                informed on their lung status, capitalising on the trend of self-monitoring 
                health. It will also help to ensure proper usage of the device, and reminds 
                the user to keep it well-maintained. In the event that inconsistencies are 
                detected, the app will generate a preliminary diagnosis that the user can 
                then share with their doctor, who can then validate it.
                </Text>
            </SingleCol>
          </Row>
        </RightWhiteBg>
        <LeftWhiteBg>
          <Row>
            <SingleCol>
                <Img2 src={require("../../Visuals/Portfolio/Pulmo-2/Pulmo and IoT.png")}/>
                <Heading>IoT system</Heading>
                <Text>
                As home IOT systems become more common, Pulmo will integrate fully with other 
                smart devices in the home. By connecting with other devices linked to air quality, 
                the air that the user breathes in will be optimised, improving the user's lung 
                health, and subsequently, quality of life.
                </Text>
            </SingleCol>
          </Row>
        </LeftWhiteBg>
        <RightWhiteBg>
            <Row>
                <VideoCol>
                    <YoutubeEmbed/>
                </VideoCol>
            </Row>
        </RightWhiteBg>
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
