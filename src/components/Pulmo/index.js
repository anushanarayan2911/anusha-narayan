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
} from './PulmoElements'

const Pulmo = () => {

  return (
    <InfoContainer>
        <InfoWrapper>
            <br/>
            <br/>
            <InfoRow>
                <TopLine>Pulmo</TopLine>
            </InfoRow>
            <InfoRow>
                <SubHeading>future contextual studies | literature review | PSS design</SubHeading>
            </InfoRow>
            <br/>
            <br/>
            <br/>
            <br/>
            <PortfolioGrid>
                <PortfolioRow>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/Pulmo/Pulmo.png')}/>
                    </Column>
                    <Column>
                        <Subtitle>Duration: 9 weeks</Subtitle>
                        <br/>
                        <br/>
                        <Subtitle>Date: October - December 2022</Subtitle>
                        <br/>
                        <br/>
                        <Subtitle>Nature: a group research paper, looking to develop a solution to the respiratory diseases that will be prevalent in 2042 </Subtitle>
                    </Column>
                </PortfolioRow>
                <br/>
                <br/>
                <PortfolioRow>
                    <Column>
                      <SectionHeading1>the problem</SectionHeading1>
                      <Subtitle>Respiratory diseases are on the rise, due to an increase in smokers and air pollution. It is likely that by 2042, they will be putting a significant strain on the NHS. The aim of the project was to research into future technologies in order to develop a way of diagnosing conditions early, thus meaning that fewer people will need advanced care, reducing the pressure on the NHS. </Subtitle>
                    </Column>
                    <Column>
                      <SectionHeading2>the solution</SectionHeading2>
                      <Subtitle>The final design is Pulmo, a wearable patch. The patch uses wheeze detection, chest expansion, oximetry, diaphragm imaging and heart monitoring to generate an accurate picture of the user's lung health, and diagnose any problems early. </Subtitle>
                        <br/>
                        <br/>
                        <br/>
                    </Column>
                </PortfolioRow>
                <br/>
                <Row>
                    <PDFDiv>
                        <Image src={require('../../Visuals/Portfolio/Pulmo/A4 - 38.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Pulmo/A4 - 39.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Pulmo/A4 - 40.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Pulmo/A4 - 41.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Pulmo/A4 - 42.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Pulmo/A4 - 43.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Pulmo/A4 - 44.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Pulmo/A4 - 45.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Pulmo/A4 - 46.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Pulmo/A4 - 47.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Pulmo/A4 - 48.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Pulmo/A4 - 49.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Pulmo/A4 - 50.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Pulmo/A4 - 51.png')}/>
                        <Image src={require('../../Visuals/Portfolio/Pulmo/A4 - 52.png')}/>
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

export default Pulmo
