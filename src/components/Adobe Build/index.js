import React from 'react'
import AdobeBuild from '../../Visuals/Portfolio/Adobe Build/AdobeBuild.pdf'
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
} from './AdobeBuildElements'

const AdobeBuildComponent = () => {

  return (
    <HeroContainer id="portfolio">
      <HeroBg>
        <RightWhiteBg>
          <Row>
            <Column1>
              <Heading>adobe build</Heading>
              <Text>This project required designing a product within a brand's existing portfolio. Adobe was 
                not engaged in any consultancy or collaborative capacity with this project, and the outcome 
                is in no way endorsed by them. Any publicity is limited to personal and academic use.
              </Text>
              <Text>
              The aim of the project was to develop a business proposal for the company, Adobe. The new product 
              had to fit with Adobe's target market, trends on which they operate but also help the company to 
              expand.
              </Text>
            </Column1>
            <Column2>
              <Img1 src={require("../../Visuals/Portfolio/Adobe Build/Adobe Build.png")}/>
            </Column2>
          </Row>
        </RightWhiteBg>
        <LeftWhiteBg>
          <Row>
            <SingleCol>
              <Img2 src={require("../../Visuals/Portfolio/Adobe Build/User Research.png")}/>
              <Heading>user research</Heading>
              <Text>
              To find a segment of the market that is underserved, user and market research was 
              conducted. This allowed us to choose start-ups who are wishing to establish their 
              online presence as a user group. A user persona was created, and used to identify 
              pain points that our proposal could address.
              </Text>
            </SingleCol>
          </Row>
        </LeftWhiteBg>
        <RightWhiteBg>
          <Row>
          <SingleCol>
              <Img2 src={require("../../Visuals/Portfolio/Adobe Build/Concept.png")}/>
              <Heading>proposal</Heading>
              <Text>
              Our proposal was Adobe Build, a browser-based website design software. An inbuilt 
              AI Tips Editor would provide recommendations, to help the user to create a website 
              with excellent interface design
              </Text>
            </SingleCol>
          </Row>
        </RightWhiteBg>
        <BtnRow>
          <Btn>
            <BtnLink to={AdobeBuild} download="Portfolio" target="_blank" rel="noreferrer">Download Portfolio</BtnLink>
          </Btn>
        </BtnRow>
      </HeroBg>
    </HeroContainer>
  )
}

export default AdobeBuildComponent
