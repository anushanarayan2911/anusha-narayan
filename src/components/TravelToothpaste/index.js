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
              <Heading>travel toothpaste</Heading>
              <Text>Travel toothpaste is often sold as part of travel toiletries, 
                and have a detrimental effect on the environment. Many toothpaste 
                suppliers are attempting to combat the negative environmental impact 
                that their products have.
              </Text>
              <Text>
              I identified risks and opportunities that could serve as innovation points.
              </Text>
            </Column1>
            <Column2>
              <Img1 src={require("../../Visuals/Portfolio/Travel Toothpaste/Travel Toothpaste.png")}/>
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
