import React from 'react'
import Pulmo1 from '../../Visuals/Portfolio/Pulmo-1/Pulmo1.pdf'
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
} from './Pulmo-2-Elements'

const Pulmo2Component = () => {

  return (
    <InfoContainer>
        <InfoWrapper>
            <Container>
                <Overlay>
                    <Title>pulmo</Title>
                    <Caption>a product service system designed to detect respiratory disease early, preventing it from becoming too advanced</Caption>
                </Overlay>
                <TitleImage src={require("../../Visuals/Portfolio/Pulmo-1/Pulmo - 1.png")}/>
            </Container> 
            <br/>
            <Text>Respiratory diseases are on the rise, due to an increase in smokers and air pollution. It is likely that by 2042, they will be putting a significant strain on the NHS. The aim of the project was to research into future technologies in order to develop a way of diagnosing conditions early, thus meaning that fewer people will need advanced care, reducing the pressure on the NHS.</Text>
            <br/>
            <Divider/>
            <br/>
            <Row>
                <Image src={require("../../Visuals/Portfolio/Pulmo-1/Future Contextual Studies.png")}/>
            </Row>
            <br/>
            <Text>To help define a future scenario, a STEEPV Wheel was created. Under the theme “The Future of Healthcare”, the overarching drivers, trends and enablers that will drive the project were identified. Key themes included the rise of telemedicine, development of personalised point-of-care healthcare solutions, the shift towards preventative models and the reduction of workload on healthcare workers through the integration of data-driven systems and partial privatisation of the NHS.</Text>
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
                    <BtnLink to={Pulmo1} download="TeddyBot" target="_blank" rel="noreferrer">Download Portfolio</BtnLink>
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

export default Pulmo2Component
