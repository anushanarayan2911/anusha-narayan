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
    LeftCol,
    RightCol,
    Image,
    BtnLink,
    Btn
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
