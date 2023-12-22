import React, { useEffect, useState } from 'react'
import { HeroContainer, HeroBg, Row, LeftCol, RightCol, Subtitle, Image} from './heroElements'



const HeroSection = () => {

  const [counter, setCounter] = useState(0);

  return (
    <HeroContainer id="home">
      <HeroBg>
        <Row>
          <LeftCol>
            <Image src={require("../../Visuals/Home/Official Picture.png")}></Image>
          </LeftCol>
          <RightCol>
            <Subtitle>I'm Anusha, a human-centred design engineer</Subtitle>
          </RightCol>
        </Row>
      </HeroBg>
    </HeroContainer>
  )
}

export default HeroSection
