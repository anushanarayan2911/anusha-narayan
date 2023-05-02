import React from 'react'

import {
    HeroContainer,
    HeroBg, 
    Row,
    LeftCol,
    RightCol,
    Image,
    Subtitle
} from './AboutElements'

const AboutComponent = ({}) => {
  return (
    <HeroContainer id="about">
      <HeroBg>
        <Row>
          <LeftCol>
            <Image src={require("../../Visuals/About/Talk.png")}/>
          </LeftCol>
        </Row>
      </HeroBg>
    </HeroContainer>
  )
}

export default AboutComponent
