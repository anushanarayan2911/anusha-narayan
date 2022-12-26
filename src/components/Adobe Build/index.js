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
} from './AdobeBuildElements'

const AdobeBuild = () => {

  return (
    <InfoContainer>
        <InfoWrapper>
            <br/>
            <br/>
            <InfoRow>
                <TopLine>Adobe Build</TopLine>
            </InfoRow>
            <InfoRow>
                <SubHeading>user research | brand design | business</SubHeading>
                <br/>
                <SubHeading>Adobe was not engaged in any consultancy or collaborative capacity with this project, and the outcome is in no way endorsed by them. Any publicity is limited to personal and academic use</SubHeading>
            </InfoRow>
            <br/>
            <br/>
            <br/>
            <br/>
            <PortfolioGrid>
                <PortfolioRow>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/Adobe Build/Adobe Build.png')}/>
                    </Column>
                    <Column>
                        <Subtitle>Duration: 9 weeks</Subtitle>
                        <br/>
                        <br/>
                        <Subtitle>Date: October - December 2022</Subtitle>
                        <br/>
                        <br/>
                        <Subtitle>Nature: a group project to write a business proposal of a new product, Adobe Build, that could be pitched to Adobe, with a view to Adobe acquiring our product and further developing it </Subtitle>
                    </Column>
                </PortfolioRow>
                <br/>
                <br/>
                <PortfolioRow>
                    <Column>
                      <SectionHeading1>the brief</SectionHeading1>
                      <Subtitle>The aim of the project was to develop a business proposal for the company, Adobe. The new product had to fit with Adobe's target market, trends on which they operate but also help the company to expand.</Subtitle>
                      <br/>
                    </Column>
                    <Column>
                      <SectionHeading2>the solution</SectionHeading2>
                      <Subtitle>Our proposal was Adobe Build, a browser-based website design software. An inbuilt AI Tips Editor would provide recommendations, to help the user to create a website with excellent interface design.</Subtitle>
                    </Column>
                </PortfolioRow>
                <br/>
                <Row>
                    <PDFDiv>
                        <Image src={require('../../Visuals/Portfolio/Adobe Build/A4 - 145.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Adobe Build/A4 - 146.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Adobe Build/A4 - 147.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Adobe Build/A4 - 148.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Adobe Build/A4 - 149.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Adobe Build/A4 - 150.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Adobe Build/A4 - 151.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Adobe Build/A4 - 152.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Adobe Build/A4 - 153.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Adobe Build/A4 - 154.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Adobe Build/A4 - 155.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Adobe Build/A4 - 156.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Adobe Build/A4 - 157.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Adobe Build/A4 - 158.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Adobe Build/A4 - 159.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Adobe Build/A4 - 160.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Adobe Build/A4 - 161.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Adobe Build/A4 - 162.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Adobe Build/A4 - 163.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Adobe Build/A4 - 164.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Adobe Build/A4 - 165.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Adobe Build/A4 - 166.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Adobe Build/A4 - 167.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Adobe Build/A4 - 168.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Adobe Build/A4 - 169.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Adobe Build/A4 - 170.png')}/>
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

export default AdobeBuild
