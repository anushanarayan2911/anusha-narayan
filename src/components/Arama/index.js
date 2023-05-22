import React from 'react'
import Arama from '../../Visuals/Portfolio/Arama/Arama.pdf'
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
    Btn
} from './AramaElements'

const AramaComponent = () => {

  return (
    <InfoContainer>
        <InfoWrapper>
            <Container>
                <Overlay>
                    <Title>arama</Title>
                    <Caption>a voice recognition device that provides visual prompts to autistic children to help them understand questions and instructions from carers</Caption>
                </Overlay>
                <TitleImage src={require("../../Visuals/Portfolio/Arama/Arama.png")}/>
            </Container> 
            <br/>
            <br/>
            <Text>Children with severe autism have trouble communicating, even with those closest to them, such as their parents. They struggle to understand spoken instructions, and often cannot ask for help when they need it, even for simple tasks.</Text>
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
            <Row>
                <LeftCol>
                    <br/>
                    <br/>   
                    <br/>   
                    <br/>
                    <br/>
                    <br/>
                    <Text>Women and girls need a long-lasting supply of hygienic period products. That is what the period product steriliser does. The user opens the top latch and places the product in. It is first soaked in cold water to remove the stain. The product is then washed in hot water to remove bacteria. Finally, steam is injected to kill microorganisms. The products can then be removed and reused. Women and girls will have a lasting supply of period products, meaning that they will no longer have to resort to extreme measures which cause detriment to their health.</Text>
                </LeftCol>
                <RightCol>
                    <Image src={require("../../Visuals/Portfolio/The Period Steriliser/Internal.png")}/>
                </RightCol>
            </Row>
            <br/>
            <Divider/>
            <br/>
            <br/>
            <Row>
                <Btn>
                    <BtnLink to={Arama} download="Arama" target="_blank" rel="noreferrer">Download Portfolio</BtnLink>
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

export default AramaComponent
