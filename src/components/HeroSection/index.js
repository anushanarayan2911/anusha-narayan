import React, { useEffect, useState } from 'react'
import { HeroContainer, HeroBg, WhiteBg, Row, LeftCol, RightCol, Subtitle, Image} from './heroElements'



const HeroSection = () => {

  const [counter, setCounter] = useState(0);

  return (
    <HeroContainer id="home">
      <HeroBg>
        <WhiteBg></WhiteBg>
      </HeroBg>
    </HeroContainer>
  )
}

export default HeroSection
