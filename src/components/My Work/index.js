import {React, useState} from 'react'
import Link from 'react-scroll/modules/components/Link'
import { HeroContainer, Image, ImageContainer, ImageLink, Row } from './myWorkElements'

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
          </ImageLink>
        </ImageContainer>
        <ImageContainer>
          <ImageLink to={"/Pulmo"}>
            <Image src={require("../../Visuals/My Work/Landing Page/Pulmo.png")}/>
          </ImageLink>
        </ImageContainer>
      </Row>
      <Row>
        <ImageContainer>
          <ImageLink to={"/UMe"}>
            <Image src={require("../../Visuals/My Work/Landing Page/U Me.png")}/>
          </ImageLink>
        </ImageContainer>
        <ImageContainer>
          <ImageLink to={"/AdobeBuild"}>
            <Image src={require("../../Visuals/My Work/Landing Page/Adobe Build.png")}/>
          </ImageLink>
        </ImageContainer>
      </Row>
    </HeroContainer>
  )
}

export default MyWorkSection
