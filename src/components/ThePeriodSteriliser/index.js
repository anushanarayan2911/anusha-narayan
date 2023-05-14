import React from 'react'
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
    Image
} from './ThePeriodSteriliserElements'

const ThePeriodProductSteriliserComponent = () => {

  return (
    <InfoContainer>
        <InfoWrapper>
            <Container>
                <Overlay>
                    <Title>period product steriliser</Title>
                    <Caption>a steriliser which will allow women and girls to clean period products so that they can be reused</Caption>
                </Overlay>
                <TitleImage src={require("../../Visuals/Portfolio/The Period Steriliser/The Period Product Steriliser.png")}/>
            </Container> 
            <br/>
            <br/>
            <Text>500 women and girls around the world live in period poverty - without adequate access to menstrual hygiene. They are forced to resort to unhealthy alternatives that can have severe consequences on their physical and mental health.</Text>
            <br/>
            <Divider/>
            <br/>
            <Row>
                <Image src={require("../../Visuals/Portfolio/The Period Steriliser/Ideation Top.png")}/>
            </Row>
            <br/>
            <Row>
                <Image src={require("../../Visuals/Portfolio/The Period Steriliser/Ideation Bottom.png")}/>
            </Row>
            <br/>
            <Text>The development process included sketching and lo-fi prototyping. 15 ideas were first generated, before being evaluated on an ideation matrix. This was narrowed down to 3 concepts, and a survey was conducted to see which one people would most prefer. The idea of a period product steriliser was most preferred. Lo-fi prototyping was then done to develop each part of the steriliser.</Text>
            <br/>
            <Divider/>
            <br/>
            <br/>
        </InfoWrapper>
    </InfoContainer>
  )
}

export default ThePeriodProductSteriliserComponent
