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
    PDFDiv
} from './ThePeriodSteriliserElements'

const ThePeriodProductSteriliserComponent = () => {

  return (
    <InfoContainer>
        <InfoWrapper>
            <br/>
            <br/>
            <InfoRow>
                <TopLine>The Period Product Steriliser</TopLine>
            </InfoRow>
            <InfoRow>
                <SubHeading>user-centred design | sketching | CAD | lo-fi prototyping</SubHeading>
            </InfoRow>
            <br/>
            <br/>
            <br/>
            <br/>
            <PortfolioGrid>
                <PortfolioRow>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/Period Product Steriliser.png')}/>
                    </Column>
                    <Column>
                        <Subtitle>Duration: 10 weeks</Subtitle>
                        <br/>
                        <br/>
                        <Subtitle>Date: July - September 2021</Subtitle>
                        <br/>
                        <br/>
                        <Subtitle>Nature: an individual personal project carried out in Summer 2021, looking to design a solution to the problem of period poverty in developing countries</Subtitle>
                    </Column>
                </PortfolioRow>
                <PortfolioRow>
                    <Column>
                        <SectionHeading1>the problem</SectionHeading1>
                        <Subtitle>There are 500 million girls and women around the world who live in period poverty - they do not have sufficient access to menstrual hygiene and education. They are therefore forced to resort to unhealthy alternatives that can have severe consequences on their physical and mental health.</Subtitle>
                    </Column>
                    <Column>
                        <SectionHeading2>the solution</SectionHeading2>
                        <Subtitle>I designed a steriliser into which girls and women could put their period products. They would then be thoroughly cleaned and disinfected, creating a long-lasting supply of period products that can be reused without causing infection.</Subtitle>
                    </Column>
                </PortfolioRow>
                <br/>
                <Row>
                    <PDFDiv>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-01.png')}/>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-02.png')}/>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-03.png')}/>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-04.png')}/>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-05.png')}/>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-06.png')}/>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-07.png')}/>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-08.png')}/>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-09.png')}/>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-10.png')}/>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-11.png')}/>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-12.png')}/>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-13.png')}/>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-14.png')}/>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-15.png')}/>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-16.png')}/>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-17.png')}/>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-18.png')}/>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-19.png')}/>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-20.png')}/>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-21.png')}/>
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

export default ThePeriodProductSteriliserComponent
