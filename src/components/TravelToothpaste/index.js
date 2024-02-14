import React from 'react'
import TravelToothpaste from '../../Visuals/Portfolio/Travel Toothpaste/TravelToothpaste.pdf'
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
    VideoCol
} from './TravelToothpasteElements'

const TravelToothpasteComponent = () => {

  return (
    <HeroContainer id="portfolio">
      <HeroBg>
        <RightWhiteBg>
          <Row>
            <Column1>
              <Heading>restand</Heading>
              <Text>In 2015, there were 2200 camping chairs left at the Glastonbury festival. 
                There are few product service systems in place to remove the waste left 
                behind and the materials used add to energy wastage and carbon footprint.
              </Text>
              <Text>
              ReStand is a product service system to recycling camping chairs following 
              festivals, to prevent them from going to waste.
              </Text>
            </Column1>
            <Column2>
              <Img1 src={require("../../Visuals/Portfolio/ReStand/ReStand.png")}/>
            </Column2>
          </Row>
        </RightWhiteBg>
        <LeftWhiteBg>
          <Row>
            <SingleCol>
              <Img2 src={require("../../Visuals/Portfolio/ReStand/System Design.png")}/>
              <Heading>system design</Heading>
              <Text>
              When designing the system, all possible scenarios were considered - the 
              idealised journey taking centre place, but mitigations were put in place 
              for other scenarios.
              </Text>
            </SingleCol>
          </Row>
        </LeftWhiteBg>
        <RightWhiteBg>
          <Row>
            
          </Row>
        </RightWhiteBg>
        <BtnRow>
          <Btn>
            <BtnLink to={TravelToothpaste} download="Portfolio" target="_blank" rel="noreferrer">Download Portfolio</BtnLink>
          </Btn>
        </BtnRow>
      </HeroBg>
    </HeroContainer>
  )
}

export default TravelToothpasteComponent
