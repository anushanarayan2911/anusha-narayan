import React from 'react'
import ReStand from '../../Visuals/Portfolio/ReStand/ReStand.pdf'
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
} from './ReStandElements'

const ReStandComponent = () => {

  return (
    <InfoContainer>
        <InfoWrapper>
            <Container>
                <Overlay>
                    <Title>pulmo</Title>
                    <Caption>a wearable device that monitors a variety of data points of the lungs in order to detect and generate a preliminary diagnosis of lung disease</Caption>
                </Overlay>
                <TitleImage src={require("../../Visuals/Portfolio/Pulmo-2/Pulmo - 2.png")}/>
            </Container> 
            <br/>
            <Text>This is part 2 of a 2 part project</Text>
            <br/>
            <Text>By 2050, 75% of the world’s population will live in cities, leading to heavy overcrowding in urban centres.
Indoor air quality in the UK is poor, and the increase in vehicular transport will damage outdoor air quality
further. The combination of these three factors spell a bleak future for lung health, especially for those in
urban centres. It will therefore become increasingly important for respiratory problems to be detected early,
so that patients have a greater chance of improvement. Effective containment of lung disease is dependent
on an early diagnosis, which is often difficult in healthcare systems worldwide.</Text>
            <br/>
            <Divider/>
            <br/>
            <Row>
                <Image src={require("../../Visuals/Portfolio/Pulmo-2/Technological Development.png")}/>
            </Row>
            <br/>
            <Text>Technological development of the patch can be categorised into 4 groups: MEMS, materials, wearable technology and machine learning. 4 types of MEMS sensors were used to collect data: acoustic, resistive, EKG and PPG. These would all monitor different aspects of lung health.</Text>
            <br/>
            <Divider/>
            <br/>
            <br/>
            <Row>
                <Image src={require("../../Visuals/Portfolio/Pulmo-2/App Design.png")}/>
            </Row>
            <br/>
            <Text>The app will be paired with each user’s Pulmo. It will keep the user informed on their lung status, capitalising on the trend of self-monitoring health. It will also help to ensure proper usage of the device, and reminds the user to keep it well-maintained. In the event that inconsistencies are detected, the app will generate a preliminary diagnosis that the user can then share with their doctor, who can then validate it.</Text>
            <br/>
            <Divider/>
            <br/>
            <Row>
                <Image src={require("../../Visuals/Portfolio/Pulmo-2/Pulmo and IoT.png")}/>
            </Row>
            <br/>
            <Text>As home IOT systems become more common, Pulmo will integrate fully with other smart devices in the home. By connecting with other devices linked to air quality, the air that the user breathes in will be optimised, improving the user’s lung health, and subsequently, quality of life.</Text>
            <br/>
            <Divider/>
            <br/>
            <Row>
                <YoutubeEmbed/>
            </Row>
            <br/>
            <Row>
                <Btn>
                    <BtnLink to={ReStand} download="ReStand" target="_blank" rel="noreferrer">Download Portfolio</BtnLink>
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

export default ReStandComponent
