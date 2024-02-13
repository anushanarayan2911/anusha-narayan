import React from 'react'
import Pulmo1 from '../../Visuals/Portfolio/Pulmo-1/Pulmo1.pdf'
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
} from './Pulmo-1-Elements'

const Pulmo1Component = () => {

  return (
    <HeroContainer id="portfolio">
      <HeroBg>
        <RightWhiteBg>
          <Row>
            <Column1>
              <Heading>pulmo - part I</Heading>
              <Text>Respiratory diseases are on the rise, due to an increase 
                in smokers and air pollution. It is likely that by 2042, they 
                will be putting a significant strain on the NHS. 
              </Text>
              <Text>
                I designed a product service system that would detect respiratory 
                disease early, preventing it from becoming too advanced
              </Text>
            </Column1>
            <Column2>
              <Img1 src={require("../../Visuals/Portfolio/Pulmo-1/Pulmo - 1.png")}/>
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
              <Heading>UX/UI design</Heading>
              <Text>The app is for the carer's use. They can use it to send instructions to 
                the child's device, where an alert will appear on the screen, letting them 
                know what to do. Additionally, if the child presses a button on their device 
                to let their carer know that they need help, a notification will appear on 
                the adult's app. Carers can also add instructions to their library, so that 
                they can easily access instructions that they frequently use.
              </Text>
            </Column1>
            <Column2>
              <Img3 src={require("../../Visuals/Portfolio/U Me/App Design.png")}/>
            </Column2>
          </Row>
        </RightWhiteBg>
        <LeftWhiteBg>
          <Row>
            
          </Row>
        </LeftWhiteBg>
        <BtnRow>
          <Btn>
            <BtnLink to={Pulmo1} download="Portfolio" target="_blank" rel="noreferrer">Download Portfolio</BtnLink>
          </Btn>
        </BtnRow>
      </HeroBg>
    </HeroContainer>
  )
}

export default Pulmo1Component
