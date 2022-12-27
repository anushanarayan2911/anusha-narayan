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
} from './TandemBikeElements'

const TandemBike = () => {

  return (
    <InfoContainer>
        <InfoWrapper>
            <br/>
            <br/>
            <InfoRow>
                <TopLine>Tandem Bike</TopLine>
            </InfoRow>
            <InfoRow>
                <SubHeading>fea | report writing</SubHeading>
            </InfoRow>
            <br/>
            <br/>
            <br/>
            <br/>
            <PortfolioGrid>
                <PortfolioRow>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/Tandem Bike/Tandem Bike.png')}/>
                    </Column>
                    <Column>
                        <Subtitle>Duration: 5 weeks</Subtitle>
                        <br/>
                        <br/>
                        <Subtitle>Date: April - May 2022</Subtitle>
                        <br/>
                        <br/>
                        <Subtitle>Nature: a technical report, detailing the modelling, testing and refining process that was undertaken using the finite element method to design a tandem bike </Subtitle>
                    </Column>
                </PortfolioRow>
                <br/>
                <br/>
                <PortfolioRow>
                    <Column>
                      <SectionHeading1>the brief</SectionHeading1>
                      <Subtitle>The brief was to design a lightweight, tandem bike frame to be used by two adults. Three essential requirements had to be met: lightweight, natural frequency over 30 Hz and a life span of 10 years (1 million cycles).</Subtitle>
                      <br/>
                      <br/>
                    </Column>
                    <Column>
                      <SectionHeading2>the outcomes</SectionHeading2>
                      <Subtitle>I carried out static, fatigue and frequency studies in order to make sure that the model of a tandem bike that I designed would last the full duration and would be comfortable to use.</Subtitle>
                        <br/>
                        <br/>
                    </Column>
                </PortfolioRow>
                <br/>
                <Row>
                    <PDFDiv>
                        <Image src={require('../../Visuals/Portfolio/Tandem Bike/Anusha Narayan FEA Report-1.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Tandem Bike/Anusha Narayan FEA Report-2.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Tandem Bike/Anusha Narayan FEA Report-3.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Tandem Bike/Anusha Narayan FEA Report-4.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Tandem Bike/Anusha Narayan FEA Report-5.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Tandem Bike/Anusha Narayan FEA Report-6.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Tandem Bike/Anusha Narayan FEA Report-7.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Tandem Bike/Anusha Narayan FEA Report-8.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Tandem Bike/Anusha Narayan FEA Report-9.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Tandem Bike/Anusha Narayan FEA Report-10.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Tandem Bike/Anusha Narayan FEA Report-11.png')}/>

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

export default TandemBike
