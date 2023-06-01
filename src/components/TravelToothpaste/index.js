import React from 'react'
import TravelToothpaste from '../../Visuals/Portfolio/Travel Toothpaste/TravelToothpaste.pdf'
import { InfoContainer, 
    InfoWrapper, 
    TitleImage,
    Title,
    Container,
    Overlay,
    Caption,
    Text,
    Divider,
    Row,
    LeftCol,
    RightCol,
    Image,
    BtnLink,
    Btn,
    YoutubeEmbed
} from './TravelToothpasteElements'

const TravelToothpasteComponent = () => {

  return (
    <InfoContainer>
        <InfoWrapper>
            <Container>
                <Overlay>
                    <Title>travel toothpaste</Title>
                    <Caption>a research document detailing the environmental impact of travel toothpastes</Caption>
                </Overlay>
                <TitleImage src={require("../../Visuals/Portfolio/Travel Toothpaste/Travel Toothpaste.png")}/>
            </Container> 
            <br/>
            <br/>
            <br/>
            <Text>Travel toothpaste is often sold as part of travel toiletries, and have a detrimental effect on the environment. Many toothpaste suppliers are attempting to combat the negative environmental impact that their products have.</Text>
            <br/>
            <Divider/>
            <br/>
            <Row>
                <LeftCol>
                    <Image src={require("../../Visuals/Portfolio/Travel Toothpaste/Product Teardown.png")}/>
                </LeftCol>
                <RightCol>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Text>A product teardown was done, looking at the design, material, manufacture and packaging of travel toothpastes, in order to ascertain the environmental impact of them.</Text>
                </RightCol>
            </Row>
            <br/>
            <Divider/>
            <br/>
            <Row>
                <LeftCol>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Text>The materials used in travel toothpastes were analysed, to determine the embodied energy and carbon dioxide footprint that travel toothpastes have on the environment. Furthermore, an existing product service system designed to recycle products which cannot be done through governmental means.</Text>
                </LeftCol>
                <RightCol>
                    <Image src={require("../../Visuals/Portfolio/Travel Toothpaste/Material and System Analysis.png")}/>
                </RightCol>
            </Row>
            <br/>
            <Divider/>
            <br/>
            <Row>
                <Image src={require("../../Visuals/Portfolio/Travel Toothpaste/Specification.png")}/>
            </Row>
            <br/>
            <Text>Based on the flaws identified in the system analysis, the risks and opportunities for sustainable improvement were decided upon. These then became the basis for specification generation, which included systemic points, social points and market related specification.</Text>
            <br/>
            <Divider/>
            <br/>
            <Row>
                <Btn>
                    <BtnLink to={TravelToothpaste} download="TravelToothpaste" target="_blank" rel="noreferrer">Download Portfolio</BtnLink>
                </Btn>
            </Row>
            <br/>
            <br/>
            <br/>
            <br/>   
        </InfoWrapper>
    </InfoContainer>
  )
}

export default TravelToothpasteComponent
