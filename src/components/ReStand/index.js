import React from 'react'
import ReStand from '../../Visuals/Portfolio/ReStand/ReStand.pdf'
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
} from './ReStandElements'

const ReStandComponent = () => {

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
            <Column1>
              <Heading>ideation</Heading>
              <Text>Instead of choosing one opportunity, ideation consisted of iterating on 
                one idea, incorporating multiple opportunities to come up with a complete 
                design that could address many of the problems currently affecting the lives 
                of autistic children.
              </Text>
            </Column1>
            <Column2>
              <Img3 src={require("../../Visuals/Portfolio/Arama/Concept Development.png")}/>
            </Column2>
          </Row>
        </RightWhiteBg>
        <LeftWhiteBg>
          <Row>
            <SingleCol>
              <Img2 src={require("../../Visuals/Portfolio/Arama/Prototyping.png")}/>
              <Heading>lo-fi prototyping</Heading>
              <Text>
              Lo-fi prototyping was done to determine form and ergonomics of the device, 
              and was also shown to field experts to get their feedback.
              </Text>
            </SingleCol>
          </Row>
        </LeftWhiteBg>
        <BtnRow>
          <Btn>
            <BtnLink to={ReStand} download="Portfolio" target="_blank" rel="noreferrer">Download Portfolio</BtnLink>
          </Btn>
        </BtnRow>
      </HeroBg>
    </HeroContainer>
  )
}

export default ReStandComponent
