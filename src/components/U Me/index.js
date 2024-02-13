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
              <Heading>u me</Heading>
              <Text>40% of children who are diagnosed with autistic spectrum disorder 
                are non-verbal. Not being able to communicate their wants and needs is 
                a daily struggle for children with severe autism. This causes frustration, 
                as they struggle to communicate to even the people closest to them, such as 
                parents or carers.
              </Text>
              <Text>
                I designed the U Me, a two way communication device.
              </Text>
            </Column1>
            <Column2>
              <Img1 src={require("../../Visuals/Portfolio/U Me/U Me.png")}/>
            </Column2>
          </Row>
        </RightWhiteBg>
        <LeftWhiteBg>
          <Row>
            <SingleCol>
              <Img2 src={require("../../Visuals/Portfolio/U Me/Empathy Mapping.png")}/>
              <Heading>empathy mapping</Heading>
              <Text>
              In order to accurately identify pain points, an empathy map was constructed, 
              looking at a typical interaction between a parent and a child. Points of high 
              stress to both the parent and child were identified, and used as a basis for 
              ideation and concept development.
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
