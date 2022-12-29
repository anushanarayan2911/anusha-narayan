import React from 'react'
import { InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    TopLine, 
    Subtitle,
    Image,
    Column,
    SubHeading,
    PortfolioGrid,
    PortfolioRow,
    SectionHeading1,
    SectionHeading2,
    Row,
    PDFDiv,
    YoutubeEmbed
} from './AramaElements'

const AramaComponent = () => {

  return (
    <InfoContainer>
        <InfoWrapper>
            <br/>
            <br/>
            <InfoRow>
                <TopLine>Arama</TopLine>
            </InfoRow>
            <InfoRow>
                <SubHeading>sketching | cad | personas | journey mapping | lo-fi prototyping</SubHeading>
            </InfoRow>
            <br/>
            <br/>
            <br/>
            <br/>
            <PortfolioGrid>
                <PortfolioRow>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/Arama/Arama.png')}/>
                    </Column>
                    <Column>
                        <Subtitle>Duration: 5 weeks</Subtitle>
                        <br/>
                        <br/>
                        <Subtitle>Date: February - March 2021</Subtitle>
                        <br/>
                        <br/>
                        <Subtitle>Nature: an individual ideation document, detailing the design process carried out to come up with a device to aid communication for severely autistic, non-verbal children, as part of an Industrial Design Engineering module</Subtitle>
                    </Column>
                </PortfolioRow>
                <br/>
                <br/>
                <PortfolioRow>
                    <Column>
                      <SectionHeading1>the problem</SectionHeading1>
                      <Subtitle>Children with severe autism have trouble communicating, even with those closest to them, such as their parents. They struggle to understand spoken instructions, and often cannot ask for help when they need it, even for simple tasks.</Subtitle>
                      <br/>
                    </Column>
                    <Column>
                      <SectionHeading2>the outcomes</SectionHeading2>
                      <Subtitle>Arama is a device that is based in voice to text recognition. It will display a visual prompt for instructions and tasks that the adult gives to the child, as they often find it easier to understand written instruction or tasks than spoken ones.</Subtitle>
                        <br/>
                    </Column>
                </PortfolioRow>
                <br/>
                <Row>
                    <PDFDiv>
                        <Image src={require('../../Visuals/Portfolio/Arama/Anusha Concept Booklet-01.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Arama/Anusha Concept Booklet-02.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Arama/Anusha Concept Booklet-03.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Arama/Anusha Concept Booklet-04.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Arama/Anusha Concept Booklet-05.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Arama/Anusha Concept Booklet-06.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Arama/Anusha Concept Booklet-07.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Arama/Anusha Concept Booklet-08.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Arama/Anusha Concept Booklet-09.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Arama/Anusha Concept Booklet-10.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Arama/Anusha Concept Booklet-11.png')}/>
                    </PDFDiv>
                </Row>
                <br/>  
                <br/>  
                <br/>      
            </PortfolioGrid>
            
        </InfoWrapper>
    </InfoContainer>
  )
}

export default AramaComponent
