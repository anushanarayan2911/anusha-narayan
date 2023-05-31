import React from 'react'
import TeddyBot from '../../Visuals/Portfolio/TeddyBot/TeddyBot.pdf'
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
} from './TeddyBotElements'

const TeddyBotComponent = () => {

  return (
    <InfoContainer>
        <InfoWrapper>
            <Container>
                <Overlay>
                    <Title>teddybot</Title>
                    <Caption>an robotic maths games making learning maths a fun and interactive experience for young children</Caption>
                </Overlay>
                <TitleImage src={require("../../Visuals/Portfolio/TeddyBot/TeddyBot.png")}/>
            </Container> 
            <br/>
            <br/>
            <br/>
            <Text>Mathematics is often considered to be the most boring subject for young children. The lack of interactivity means that they are frequently disengaged and do not enjoy the essential subject.</Text>
            <br/>
            <Divider/>
            <br/>
            <Row>
                <Image src={require("../../Visuals/Portfolio/Arama/User Research.png")}/>
            </Row>
            <br/>
            <Text>It was not possible to speak directly to autistic children, so we instead spoke to a variety of adults who could provide different perspectives on the lives of the children. This was done through user interviews and observation.</Text>
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
                    <br/>
                    <Text>Instead of choosing one opportunity, ideation consisted of iterating on one idea, incorporating multiple opportunities to come up with a complete design that could address many of the problems currently affecting the lives of autistic children.</Text>
                </LeftCol>
                <RightCol>
                    <Image src={require("../../Visuals/Portfolio/Arama/Concept Development.png")}/>
                </RightCol>
            </Row>
            <br/>
            <Divider/>
            <br/>
            <Row>
                <Image src={require("../../Visuals/Portfolio/Arama/Prototyping.png")}/>
            </Row>
            <br/>
            <Divider/>
            <br/>
            <Row>
                <LeftCol>
                    <Image src={require("../../Visuals/Portfolio/Arama/CAD.png")}/>
                </LeftCol>
                <RightCol>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Text>SolidWorks and KeyShot were used to generate the CAD models. The mechanical mating feature of SolidWorks was used for simulation of mechanical parts of the device.</Text>
                </RightCol>
            </Row>
            <br/>
            <Divider/>
            <br/>
            <br/>
            <Row>
                <Btn>
                    <BtnLink to={TeddyBot} download="Arama" target="_blank" rel="noreferrer">Download Portfolio</BtnLink>
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

export default TeddyBotComponent
