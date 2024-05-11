import React from 'react'
import { Column, HeroContainer, ProjectDescription, ProjectName, SkillsSection, TitleContainer, TitleRow, SkillsRow, Skill, DescriptionBox, Description, Button } from './ClassifyElements'

const ClassifyComponent = () => {

    return (
      <HeroContainer id="classify">
        <TitleContainer>
          <TitleRow>
            <Column>
              <ProjectName>CLASSIFY</ProjectName>
              <ProjectDescription>student progress tracking platform</ProjectDescription>
              <SkillsSection>
                <SkillsRow>
                  <Skill>project management</Skill>
                  <Skill>B2B</Skill>
                  <Skill>UX/UI</Skill>
                </SkillsRow>
                <SkillsRow>
                  <Skill>wireframing</Skill>
                  <Skill>usability study</Skill>
                </SkillsRow>
              </SkillsSection>
            </Column>
            <Column>
              <DescriptionBox>
                <Description>my start-up, based out of Imperial College London</Description>
                <Button>check it out</Button>
              </DescriptionBox>
            </Column>
          </TitleRow>
        </TitleContainer>
      </HeroContainer>
    )
  }
  
  export default ClassifyComponent