import React from 'react'
import UMe from '../../Visuals/Portfolio/U Me/UMe.pdf'
import { 
    HeroContainer,  
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
  BtnRow,
  Btn,
  BtnLink
} from './UMeElements'

const UMeComponent = () => {

  return (
    <HeroContainer id="portfolio">
      <HeroBg>
        <RightWhiteBg>
          <Row>
            <Column1>
              <Heading>period product steriliser</Heading>
              <Text>There are 500 million girls and women
                around the world living in period poverty. 
                They are frequently forced to resort to 
                unhealthy alternatives in order to pay for 
                period products.
              </Text>
              <Text>
                I designed a steriliser which can clean 
                period products, allowing them to be reused.
                This creates a long-lasting, hygienic supply
                of period products.
              </Text>
            </Column1>
            <Column2>
              <Img1 src={require("../../Visuals/Portfolio/The Period Steriliser/The Period Product Steriliser.png")}/>
            </Column2>
          </Row>
        </RightWhiteBg>
        <LeftWhiteBg>
          <Row>
            <SingleCol>
              <Img2 src={require("../../Visuals/Portfolio/The Period Steriliser/development process.png")}/>
              <Heading>development process</Heading>
              <Text>
              The development process included sketching and lo-fi prototyping. 15 ideas were first generated, 
              before being evaluated on an ideation matrix. This was narrowed down to 3 concepts, and a survey 
              was conducted to see which one people would most prefer. The idea of a period product steriliser 
              was most preferred. Lo-fi prototyping was then done to develop each part of the steriliser.
              </Text>
            </SingleCol>
          </Row>
        </LeftWhiteBg>
        <RightWhiteBg>
          <Row>
            <Column1>
              <Heading>how it works</Heading>
              <Text>The user opens the top latch and places the product in. It is first soaked in cold water to remove 
                the stain. The product is then washed in hot water to remove bacteria. Finally, steam is injected to 
                kill microorganisms. The products can then be removed and reused. 
              </Text>
            </Column1>
            <Column2>
              <Img1 src={require("../../Visuals/Portfolio/The Period Steriliser/Internal.png")}/>
            </Column2>
          </Row>
        </RightWhiteBg>
        <BtnRow>
          <Btn>
            <BtnLink to={UMe} download="Portfolio" target="_blank" rel="noreferrer">Download Portfolio</BtnLink>
          </Btn>
        </BtnRow>
      </HeroBg>
    </HeroContainer>
  )
}

export default UMeComponent
