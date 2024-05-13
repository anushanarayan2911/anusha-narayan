import React from 'react'
import { Column, HeroContainer, ProjectDescription, ProjectName, SkillsSection, TitleContainer, TitleRow, SkillsRow, Skill, DescriptionBox, Description, Button, ContentRow, ContentImage, Text, LargeText, ImageContainer, ContainerRow, ContainerImage,  
} from './PulmoElements'

const PulmoComponent = () => {

  return (
    <HeroContainer id="pulmo">
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
        <ContentRow>
          <Column>
            <ContentImage src={require("../../Visuals/My Work/Classify/Data Entry.png")}/>
          </Column>
          <Column>
            <Text>Teachers simply hit record on their Classify app, available on phone, tablet and browser. They can record themselves as they give feedback to children in the classroom, or as they mark assessments. The Classify algorithm will then identify the correct school goal, and calculate an evidence-based attainment level for every child.</Text>
          </Column>
        </ContentRow>
        <ContentRow>
          <ContentImage src={require("../../Visuals/My Work/Classify/Home Screen.png")}/>
        </ContentRow>
        <ContentRow>
          <Column>
            <Text>School heads and subject leaders can view macro-level analyses of progress based on age, gender, or any other group of student.</Text>
          </Column>
          <Column>
            <ContentImage src={require("../../Visuals/My Work/Classify/Macro Analysis.png")}/>
          </Column>
        </ContentRow>
        <ContentRow>
          <Column>
            <ContentImage src={require("../../Visuals/My Work/Classify/Student Profile.png")}/>
          </Column>
          <Column>
            <Text>See all reflections and analysis of individual students and see how they’re progressing.</Text>
          </Column>
        </ContentRow>
        <ContentRow>
          <LargeText>
            Documenting student progress is a vital task for teachers. But current systems are manual and tedious. We wanted to create a simpler solution. With Classify, teachers can simply record themselves giving feedback in the classroom, or as they mark work. Our algorithm will analyse what the teacher is saying, and determine what level every child is working at, for every academic and personal development objective. Teachers can then see a profile of each child, whilst also viewing macro-analyses of progression
          </LargeText>
        </ContentRow>
        <ImageContainer>
          <ContainerRow>
            <ContainerImage src={require("../../Visuals/My Work/Classify/Container-1.png")}/>
            <ContainerImage src={require("../../Visuals/My Work/Classify/Container-2.png")}/>
          </ContainerRow>
          <ContainerRow>
            <ContainerImage src={require("../../Visuals/My Work/Classify/Container-3.png")}/>
            <ContainerImage src={require("../../Visuals/My Work/Classify/Container-4.png")}/>
          </ContainerRow>
        </ImageContainer>
    </HeroContainer>
  )
}

export default PulmoComponent
