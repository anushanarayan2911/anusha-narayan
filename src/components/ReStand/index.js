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
