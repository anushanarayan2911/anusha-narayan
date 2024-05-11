import {React, useState} from 'react'
import Link from 'react-scroll/modules/components/Link'
import { Column, HeroContainer, Image, Row } from './myWorkElements'

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
        <Image src={require("../../Visuals/My Work/Landing Page/Classify.png")}/>
        <Image src={require("../../Visuals/My Work/Landing Page/Pulmo.png")}/>
      </Row>
      <Row>
        <Image src={require("../../Visuals/My Work/Landing Page/U Me.png")}/>
        <Image src={require("../../Visuals/My Work/Landing Page/Adobe Build.png")}/>
      </Row>
    </HeroContainer>
  )
}

export default MyWorkSection
