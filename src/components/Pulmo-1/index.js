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
} from './Pulmo-1-Elements'

const Pulmo1Component = () => {

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
                <Image src={require("../../Visuals/Portfolio/Pulmo-1/Concepts.png")}/>
            </Row>
            <br/>
            <Text>An ideation session was conducted, using the technologies that had been researched as a basis. The aim of the session was to generate possible ideas for a product service system that could detect lung disease early. Any concept could be broken into 2 parts: data collection and data analysis. Since the latter would be done using machine learning models combined with the user’s medical data, product ideation focussed on the first part. Ideation was done as a group, with C-Sketching and SCAMPER techniques being used. The top three ideas, a choker sensor, sleepmask sensor and chest ECG were chosen to move forward through a Pugh chart analysis.</Text>
            <br/>
            <Divider/>
            <br/>
            <Row>
                <Image src={require("../../Visuals/Portfolio/Pulmo-1/Final Concept.png")}/>
            </Row>
            <br/>
            <Text>The final concept was chosen to be Pulmo, a wearable device that collects data from a wide variety of biomarkers to detect lung disease. The product service system surrounding Pulmo was also designed.</Text>
            <br/>
            <Row>
                <Image src={require("../../Visuals/Portfolio/Pulmo-1/Final PSS.png")}/>
            </Row>
            <br/>
            <Divider/>
            <br/>
            <Row>
                <Btn>
                    <BtnLink to={Pulmo1} download="Pulmo" target="_blank" rel="noreferrer">Download Portfolio</BtnLink>
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

export default Pulmo1Component
