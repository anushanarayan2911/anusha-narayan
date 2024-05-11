import {React, useState} from 'react'
import Link from 'react-scroll/modules/components/Link'
import { HeroContainer, Row } from './myWorkElements'

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
        <p>Hi</p>
      </Row>
    </HeroContainer>
  )
}

export default MyWorkSection
