import React, { useEffect, useState } from 'react'
import { HeroContainer, HeroBg, WhiteBg, Row, LeftCol, LeftCol2, RightCol, Title, Text, Image, BtnLink, Btn} from './heroElements'
import CV from "../../Visuals/Home/CV.pdf"
import Portfolio from "../../Visuals/Home/Portfolio.pdf"


const HeroSection = () => {

  const [counter, setCounter] = useState(0);

  return (
    <HeroContainer id="home">
      <HeroBg>
        
      </HeroBg>
    </HeroContainer>
  )
}

export default HeroSection
