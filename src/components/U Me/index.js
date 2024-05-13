import React from 'react'
import { 
  Column, HeroContainer, ProjectDescription, ProjectName, SkillsSection, TitleContainer, TitleRow, SkillsRow, Skill, DescriptionBox, Description, Button, ContentRow, ContentImage, Text, LargeText, ImageContainer, ContainerRow, ContainerImage, DownloadButton, ContainerImageRow
} from './UMeElements'
import Portfolio from "../../Visuals/My Work/U Me/Portfolio.pdf"


const UMeComponent = () => {

  return (
    <HeroContainer id="ume">
      <TitleContainer>
          <TitleRow>
            <Column>
              <ProjectName>U ME</ProjectName>
              <ProjectDescription>communication device for autism</ProjectDescription>
              <SkillsSection>
                <SkillsRow>
                  <Skill>industrial design</Skill>
                  <Skill>graphic design</Skill>
                </SkillsRow>
                <SkillsRow>
                  <Skill>UX/UI</Skill>
                  <Skill>designing for children</Skill>
                </SkillsRow>
              </SkillsSection>
            </Column>
            <Column>
              <DescriptionBox>
                <Description>a group project to develop a device for underserved users</Description>
                <DownloadButton to={Portfolio} download="U Me - Portfolio" target="_blank" rel="noreferrer">download portfolio</DownloadButton>
                <Button href="https://www.youtube.com/watch?v=Hsf9Sks_270" target="_blank">watch video</Button>
              </DescriptionBox>
            </Column>
          </TitleRow>
        </TitleContainer>
        <ContentRow>
          <Column>
            <Text>The Pulmo app is designed to give the user a holistic overview of their lung health, giving them actionable insights so that that they can take control.</Text>
          </Column>
          <Column>
            <ContentImage src={require("../../Visuals/My Work/Pulmo/Pulmo App.png")}/>
          </Column>
        </ContentRow>
        <ContentRow>
          <LargeText>
            As urban pollution worsens, the future of lung health is at risk. Pulmo, and it’s accompanying app, help users to take control of their lung health. The Pulmo sits just beneath the chest, monitoring a variety of datapoints. Machine learning algorithms analyse the data and provide the user with actionable insights.
          </LargeText>
        </ContentRow>
        <ContentRow>
          <ContentImage src={require("../../Visuals/My Work/Pulmo/Pulmo Device.png")}/>
        </ContentRow>
        <ContentRow>
          <Column>
            <Text>Technological development of the patch can be categorised into 4 groups: MEMS, materials, wearable technology and machine learning. 4 types of MEMS sensors were used to collect data: acoustic, resistive, EKG and PPG. These would all monitor different aspects of lung health.</Text>
          </Column>
          <Column>
            <ContentImage src={require("../../Visuals/My Work/Pulmo/Technological Development.png")}/>
          </Column>
        </ContentRow>
        <ContentRow>
          <Column>
            <ContentImage src={require("../../Visuals/My Work/Pulmo/IoT.png")}/>
          </Column>
          <Column>
            <Text>As home IOT systems become more common, Pulmo will integrate fully with other smart devices in the home. By connecting with other devices linked to air quality, the air that the user breathes in will be optimised, improving the user's lung health, and subsequently, quality of life.</Text>
          </Column>
        </ContentRow>
        <ImageContainer>
          <ContainerRow>
            <ContainerImage src={require("../../Visuals/My Work/Pulmo/Container-1.png")}/>
            <ContainerImage src={require("../../Visuals/My Work/Pulmo/Container-2.png")}/>
            <ContainerImage src={require("../../Visuals/My Work/Pulmo/Container-3.png")}/>
            <ContainerImage src={require("../../Visuals/My Work/Pulmo/Container-4.png")}/>
            <ContainerImage src={require("../../Visuals/My Work/Pulmo/Container-5.png")}/>
          </ContainerRow>
          <ContainerRow>
            <ContainerImageRow src={require("../../Visuals/My Work/Pulmo/Container-6.png")}/>
          </ContainerRow>
        </ImageContainer>
    </HeroContainer>
  )
}

export default UMeComponent
