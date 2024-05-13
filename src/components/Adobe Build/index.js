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
              <ProjectName>ADOBE BUILD</ProjectName>
              <ProjectDescription>the ultimate website builder</ProjectDescription>
              <SkillsSection>
                <SkillsRow>
                  <Skill>user & market research</Skill>
                  <Skill>personas</Skill>
                </SkillsRow>
                <SkillsRow>
                  <Skill>marketing campaigns</Skill>
                </SkillsRow>
                <SkillsRow>
                  <Skill>working within a brand portfolio</Skill>
                </SkillsRow>
              </SkillsSection>
            </Column>
            <Column>
              <DescriptionBox>
                <Description>develop a business proposal for Adobe, to help them expand</Description>
                <DownloadButton to={Paper} download="Adobe Build - Paper" target="_blank" rel="noreferrer">download paper</DownloadButton>
              </DescriptionBox>
            </Column>
          </TitleRow>
        </TitleContainer>
        <ContentRow>
          <LargeText>
          *This project required designing a product within a brand's existing portfolio. Adobe was not engaged in any consultancy or collaborative capacity with this project, and the outcome is in no way endorsed by them. Any publicity is limited to personal and academic use.
          </LargeText>
        </ContentRow>
        <ContentRow>
          <ContentImage src={require("../../Visuals/My Work/Adobe Build/Market Analysis.png")}/>
          <Text>Adobe splits their products into three families: Digital Experience, Digital Media and Publishing & Advertising. Market analysis was conducted for the top two revenue-producing families, identifying key trends and the companies implementing them.</Text>
        </ContentRow>
        <ContentRow>
          <ContentImage src={require("../../Visuals/My Work/Adobe Build/Persona.png")}/>
          <Text>Customer profiles were created to guide development of the product.</Text>
        </ContentRow>
        <ImageContainer>
          <ContainerRow>
            <ContainerImageRow src={require("../../Visuals/My Work/Adobe Build/Idea.png")}/>
          </ContainerRow>
        </ImageContainer>
    </HeroContainer>
  )
}

export default AdobeBuildComponent
