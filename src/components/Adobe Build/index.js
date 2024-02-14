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
              <Img2 src={require("../../Visuals/Portfolio/Travel Toothpaste/Product Teardown.png")}/>
              <Heading>product teardown</Heading>
              <Text>
              A product teardown was done, looking at the design, material, manufacture and packaging of travel 
              toothpastes, in order to ascertain the environmental impact of them.
              </Text>
            </SingleCol>
          </Row>
        </LeftWhiteBg>
        <RightWhiteBg>
          <Row>
          <SingleCol>
              <Img2 src={require("../../Visuals/Portfolio/Travel Toothpaste/Material and System Analysis.png")}/>
              <Heading>material & system analysis</Heading>
              <Text>
              The materials used in travel toothpastes were analysed, to determine the embodied energy and 
              carbon dioxide footprint that travel toothpastes have on the environment. Furthermore, an 
              existing product service system designed to recycle products which cannot be done through governmental 
              means.
              </Text>
            </SingleCol>
          </Row>
        </RightWhiteBg>
        <LeftWhiteBg>
          <Row>
            <SingleCol>
              <Img2 src={require("../../Visuals/Portfolio/Travel Toothpaste/Specification.png")}/>
              <Heading>specification generation</Heading>
              <Text>
              Based on the flaws identified in the system analysis, the risks and opportunities for 
              sustainable improvement were decided upon. These then became the basis for specification 
              generation, which included systemic points, social points and market related specification.
              </Text>
            </SingleCol>
          </Row>
        </LeftWhiteBg>
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
