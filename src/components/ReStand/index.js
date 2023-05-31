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
                    <Title>restand</Title>
                    <Caption>a product service system to recycle camping chairs following festivals, to prevent them going to waste</Caption>
                </Overlay>
                <TitleImage src={require("../../Visuals/Portfolio/ReStand/ReStand.png")}/>
            </Container> 
            <br/>
            <Text>In 2015, there were 2200 camping chairs left at the Glastonbury festival. There are few product service systems in place to remove the waste left behind and the materials used add to energy wasteage and carbon footprint.</Text>
            <br/>
            <Divider/>
            <br/>
            <Row>
                <Image src={require("../../Visuals/Portfolio/ReStand/System Design.png")}/>
            </Row>
            <br/>
            <Text>When designing the product service system, multiple possible use cases were taken into account, in order to ensure that the system would work to minimise waste caused by camping chairs.</Text>
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
