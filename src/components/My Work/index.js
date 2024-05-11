import {React, useState} from 'react'
import Link from 'react-scroll/modules/components/Link'
import { HeroContainer, Image, ImageContainer, ImageLink, Overlay, ProjectCaption, ProjectTitle, Row, TextWrapper } from './myWorkElements'

const MyWorkSection = () => {

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <HeroContainer id="mywork">
      <Row>
        <ImageContainer>
          <ImageLink>
            <Image src={require("../../Visuals/My Work/Landing Page/Classify.png")}/>
            <Overlay>
              <ProjectTitle>classify</ProjectTitle>
              <ProjectCaption>student progress tracking, but better</ProjectCaption>
            </Overlay>
          </ImageLink>
        </ImageContainer>
        <ImageContainer>
          <ImageLink to={"/Pulmo"}>
            <Image src={require("../../Visuals/My Work/Landing Page/Pulmo.png")}/>
            <Overlay>
              <ProjectTitle>pulmo</ProjectTitle>
              <ProjectCaption>the future of respiratory health</ProjectCaption>
            </Overlay>
          </ImageLink>
        </ImageContainer>
      </Row>
      <Row>
        <ImageContainer>
          <ImageLink to={"/UMe"}>
            <Image src={require("../../Visuals/My Work/Landing Page/U Me.png")}/>
            <Overlay>
              <ProjectTitle>u me</ProjectTitle>
              <ProjectCaption>bringing easy communication to every home</ProjectCaption>
            </Overlay>
          </ImageLink>
        </ImageContainer>
        <ImageContainer>
          <ImageLink to={"/AdobeBuild"}>
            <Image src={require("../../Visuals/My Work/Landing Page/Adobe Build.png")}/>
            <Overlay>
              <ProjectTitle>adobe build</ProjectTitle>
              <ProjectCaption>the ultimate website building tool</ProjectCaption>
            </Overlay>
          </ImageLink>
        </ImageContainer>
      </Row>
    </HeroContainer>
  )
}

export default MyWorkSection
