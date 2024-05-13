import React from 'react'
import { Column, HeroContainer, ProjectDescription, ProjectName, SkillsSection, TitleContainer, TitleRow, SkillsRow, Skill, DescriptionBox, Description, Button, ContentRow, ContentImage, Text, LargeText, ImageContainer, ContainerRow, ContainerImage, DownloadButton, ContainerImageRow
} from './AdobeBuildElements'
import Paper from "../../Visuals/My Work/Adobe Build/Paper.pdf"

const AdobeBuildComponent = () => {

  return (
    <HeroContainer id="adobebuild">
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
                <DownloadButton to={Paper} download="Adobe Build - Paper" target="_blank" rel="noreferrer">download paper</DownloadButton>
                <Button href="https://www.youtube.com/watch?v=Hsf9Sks_270" target="_blank">watch video</Button>
              </DescriptionBox>
            </Column>
          </TitleRow>
        </TitleContainer>
        <ContentRow>
          <LargeText>
            40% of autistic children are non-verbal. Not being able to communicate their wants and needs is a daily struggle for both the children and their parents. Current workarounds involve the parent writing down instructions every time they want the child to accomplish a task, carrying picture cards with them or the child using an iPad to write down what they want. All of these are cumbersome, time-consuming and on the child’s part, detrimental to their long-term eye health to be spending so much time on a screen.
          </LargeText>
        </ContentRow>
        <ContentRow>
          <ContentImage src={require("../../Visuals/My Work/U Me/Empathy Map.png")}/>
        </ContentRow>
        <ContentRow>
          <Column>
            <ContentImage src={require("../../Visuals/My Work/U Me/U Me Device.png")}/>
          </Column>
          <Column>
            <Text>The U Me is a hand held device for non-verbal autistic children. A visual representation of instructions set by the parents appear on the pixel screen, whilst the child can use the buttons on the right to communicate their needs to their parents.</Text>
          </Column>
        </ContentRow>
        <ContentRow>
          <ContentImage src={require("../../Visuals/My Work/U Me/App Development.png")}/>
        </ContentRow>
        <ImageContainer>
          <ContainerRow>
            <ContainerImageRow src={require("../../Visuals/My Work/U Me/Container-1.png")}/>
          </ContainerRow>
        </ImageContainer>
    </HeroContainer>
  )
}

export default AdobeBuildComponent
