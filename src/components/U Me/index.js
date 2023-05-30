import React from 'react'
import UMe from '../../Visuals/Portfolio/U Me/UMe.pdf'
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
    Image,
    BtnLink,
    Btn,
    YoutubeEmbed
} from './UMeElements'

const UMeComponent = () => {

  return (
    <InfoContainer>
        <InfoWrapper>
            <Container>
                <Overlay>
                    <Title>u me</Title>
                    <Caption>a two-way communication device which allows severely autistic, non-verbal children to communicate with their parents and carers</Caption>
                </Overlay>
                <TitleImage src={require("../../Visuals/Portfolio/U Me/U Me.png")}/>
            </Container> 
            <Text>40% of children who are diagnosed with autistic spectrum disorder are non-verbal. Not being able to communicate their wants and needs is a daily struggle for children with severe autism. This causes frustration, as they struggle to communicate to even the people closest to them, such as parents or carers.</Text>
            <br/>
            <Divider/>
            <br/>
            <Row>
                <Image src={require("../../Visuals/Portfolio/U Me/Empathy Mapping.png")}/>
            </Row>
            <br/>
            <Text>In order to  accurately identify pain points, an empathy map was constructed, looking at a typical interaction between a parent and a child. Points of high stress to both the parent and child were identified, and used as a basis for ideation and concept development.</Text>
            <br/>
            <Divider/>
            <br/>
            <br/>
            <Row>
                <Image src={require("../../Visuals/Portfolio/U Me/Concept Development.png")}/>
            </Row>
            <br/>
            <Text>The idea of a two-way communication device was developed. Children will be able to press buttons on  the device to alert their carers of their needs. Different aspects of the concept were developed. This included development of shape and form through sketching and 3D printing. User research was done to find out what children would want to communicate. </Text>
            <Divider/>
            <br/>
            <Row>
                <Image src={require("../../Visuals/Portfolio/U Me/Rendering.png")}/>
            </Row>
            <Text>Keyshot was used to render CAD models of the U Me</Text>
            <Divider/>
            <br/>
            <Row>
                <Image src={require("../../Visuals/Portfolio/U Me/App Design.png")}/>
            </Row>
            <br/>
            <Text>The app will be for the carer’s use. They can use it to send instructions to the child’s device, where an alert will appear on the screen, letting them know what to do. Additionally, if the child presses a button on their device to let their carer know that they need help, a notification will appear on the adult’s app. </Text>
            <br/>
            <Divider/>
            <br/>
            <Text>This project required designing a product within a brand’s existing portfolio. Yoto was not engaged in any consultancy or collaborative capacity with this project, and the outcome is in no way endorsed by them. Any publicity is limited to personal and academic use. </Text>
            <Row>
                <Image src={require("../../Visuals/Portfolio/U Me/Yoto Market Analysis.png")}/>
            </Row>
            <Text>Yoto’s closest competitors were analysed using a variety of techniques to find where Yoto can fit within the market and how the product might differentiate them from competitors.</Text>
            <br/>
            <Divider/>
            <br/>
            <Row>
                <YoutubeEmbed/>
            </Row>
            <br/>
            <Row>
                <Btn>
                    <BtnLink to={UMe} download="U Me" target="_blank" rel="noreferrer">Download Portfolio</BtnLink>
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

export default UMeComponent
