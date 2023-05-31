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
    Btn,
    YoutubeEmbed
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
                <LeftCol>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Text>Part of the project was to create a prototype of the design. Due to prototyping limitations, the outer casing was made using plywood. Manufacture involved laser cutting and electronics.</Text>
                </LeftCol>
                <RightCol>
                    <Image src={require("../../Visuals/Portfolio/TeddyBot/Manufacture.png")}/>
                </RightCol>
            </Row>
            <br/>
            <Divider/>
            <br/>
            <br/>
            <Row>
                <Image src={require("../../Visuals/Portfolio/TeddyBot/Robot Circuit.png")}/>
            </Row>
            <br/>
            <Text>The electronic circuit for the robot consisted of Arduino boards, an LCD screen, 9 LEDs, 2 servo motors, a buzzer and a keypad. All of these components were used to make the robot of the game work.</Text>
            <br/>
            <Divider/>
            <br/>
            <Row>
                <YoutubeEmbed/>
            </Row>
            <br/>
            <Row>
                <Btn>
                    <BtnLink to={TeddyBot} download="TeddyBot" target="_blank" rel="noreferrer">Download Portfolio</BtnLink>
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
