import React from 'react'
import AdobeBuild from '../../Visuals/Portfolio/Adobe Build/AdobeBuild.pdf'
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
} from './AdobeBuildElements'

const AdobeBuildComponent = () => {

  return (
    <InfoContainer>
        <InfoWrapper>
            <Container>
                <Overlay>
                    <Title>adobe build</Title>
                    <Caption>a business proposal for a new website builder that Adobe could add to their portfolio of products</Caption>
                </Overlay>
                <TitleImage src={require("../../Visuals/Portfolio/Adobe Build/Adobe Build.png")}/>
            </Container> 
            <br/>
            <br/>
            <br/>
            <Text>This project required designing a product within a brand’s existing portfolio. Adobe was not engaged in any consultancy or collaborative capacity with this project, and the outcome is in no way endorsed by them. Any publicity is limited to personal and academic use.</Text>
            <br/>
            <Text>The aim of the project was to develop a business proposal for the company, Adobe. The new product had to fit with Adobe's target market, trends on which they operate but also help the company to expand</Text>
            <br/>
            <Divider/>
            <br/>
            <Row>
                <Image src={require("../../Visuals/Portfolio/Adobe Build/User Research.png")}/>
            </Row>
            <br/>
            <Text>To find a segment of the market that is underserved, user and market research was conducted. This allowed us to choose start-ups who are wishing to establish their online presence as a user group. A user persona was created, and used to identify pain points that our proposal could address.</Text>
            <br/>
            <Divider/>
            <br/>
            <Row>
                <Image src={require("../../Visuals/Portfolio/Adobe Build/Concept.png")}/>
            </Row>
            <br/>
            <Text>Our proposal was Adobe Build, a browser-based website design software. An inbuilt AI Tips Editor would provide recommendations, to help the user to create a website with excellent interface design.</Text>
            <br/>
            <Divider/>
            <br/>
            <Row>
                <Btn>
                    <BtnLink to={AdobeBuild} download="Adobe Build" target="_blank" rel="noreferrer">Download Portfolio</BtnLink>
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

export default AdobeBuildComponent
