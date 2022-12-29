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
} from './TravelToothpasteElements'

const TravelToothpasteComponent = () => {

  return (
    <InfoContainer>
        <InfoWrapper>
            <br/>
            <br/>
            <InfoRow>
                <TopLine>Travel Toothpaste</TopLine>
            </InfoRow>
            <InfoRow>
                <SubHeading>product teardown | sustainable design | system analysis | material analysis</SubHeading>
            </InfoRow>
            <br/>
            <br/>
            <br/>
            <br/>
            <PortfolioGrid>
                <PortfolioRow>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/Travel Toothpaste/Travel Toothpaste.png')}/>
                    </Column>
                    <Column>
                        <Subtitle>Duration: 5 weeks</Subtitle>
                        <br/>
                        <br/>
                        <Subtitle>Date: October - November 2021</Subtitle>
                        <br/>
                        <br/>
                        <Subtitle>Nature: a research document, detailing the environmental impact of travel toothpastes for a Sustainable Design Engineering module </Subtitle>
                    </Column>
                </PortfolioRow>
                <br/>
                <br/>
                <PortfolioRow>
                    <Column>
                      <SectionHeading1>the problem</SectionHeading1>
                      <Subtitle>Travel toothpaste is often sold as part of travel toiletries, and have a detrimental effect on the environment. Many toothpaste suppliers are attempting to combat the negative environmental impact that their products have.</Subtitle>
                      <br/>
                    </Column>
                    <Column>
                      <SectionHeading2>the solution</SectionHeading2>
                      <Subtitle>A design specification was developed which could help to develop a new toothpaste dispenser, as well as a system for recycling it. This included a system specification, a social specification and a market specification.</Subtitle>
                        <br/>
                    </Column>
                </PortfolioRow>
                <br/>
                <Row>
                    <PDFDiv>
                        <Image src={require('../../Visuals/Portfolio/Travel Toothpaste/SDE_Anusha Narayan-01.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Travel Toothpaste/SDE_Anusha Narayan-02.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Travel Toothpaste/SDE_Anusha Narayan-03.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Travel Toothpaste/SDE_Anusha Narayan-04.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Travel Toothpaste/SDE_Anusha Narayan-05.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Travel Toothpaste/SDE_Anusha Narayan-06.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Travel Toothpaste/SDE_Anusha Narayan-07.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Travel Toothpaste/SDE_Anusha Narayan-08.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Travel Toothpaste/SDE_Anusha Narayan-09.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Travel Toothpaste/SDE_Anusha Narayan-10.png')}/>
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

export default TravelToothpasteComponent
