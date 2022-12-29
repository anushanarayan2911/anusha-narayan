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
} from './HealthTrackerAppElements'

const HealthTrackerAppComponent = () => {

  return (
    <InfoContainer>
        <InfoWrapper>
            <br/>
            <br/>
            <InfoRow>
                <TopLine>Health Tracker App</TopLine>
            </InfoRow>
            <InfoRow>
                <SubHeading>computing | C# | XAML </SubHeading>
            </InfoRow>
            <br/>
            <br/>
            <br/>
            <br/>
            <PortfolioGrid>
                <PortfolioRow>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/Health Tracker App/Health Tracker App.png')}/>
                    </Column>
                    <Column>
                        <Subtitle>Duration: 8 weeks</Subtitle>
                        <br/>
                        <br/>
                        <Subtitle>Date: August - September 2021</Subtitle>
                        <br/>
                        <br/>
                        <Subtitle>Nature: an individual project to design a desktop application, in order to practise coding in C#.</Subtitle>
                    </Column>
                </PortfolioRow>
                <br/>
                <br/>
                <PortfolioRow>
                    <Column>
                      <SectionHeading1>the problem</SectionHeading1>
                      <Subtitle>During the Covid-19 pandemic, several young adults saw a decrease in their physical health due to the fact that they were not allowed outside.</Subtitle>
                      
                    </Column>
                    <Column>
                      <SectionHeading2>the solution</SectionHeading2>
                      <Subtitle>I designed a desktop application on which users could track their exercising and eating habits, as well as features for timetabling exercising and setting goals to motivation.</Subtitle>
                        
                    </Column>
                </PortfolioRow>
                <br/>
                <InfoRow><YoutubeEmbed/></InfoRow>
                <br/>
                <br/>  
                <br/>  
                <br/>      
            </PortfolioGrid>
            
        </InfoWrapper>
    </InfoContainer>
  )
}

export default HealthTrackerAppComponent
