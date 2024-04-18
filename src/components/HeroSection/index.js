import React, { useEffect, useState } from 'react'
import { HeroContainer, HeroBg, WhiteBg, Row, Column1, Column2, Heading, Text, BtnRow, BtnCol1, BtnCol2, Btn, BtnLink, Img, HeadingBox, TextBox, } from './heroElements'
import CV from "../../Visuals/Home/CV.pdf"
import Portfolio from "../../Visuals/Home/Portfolio.pdf"


const HeroSection = () => {

  const [counter, setCounter] = useState(0);

  return (
    <HeroContainer id="home">
      <HeroBg>
        <WhiteBg>
          <Row>
            <Column1>
              <Heading>Hi I'm Anusha</Heading>
              <Text>
              I am a human-centred design engineer, with a passion for designing data-driven interventions to improve the health and wellbeing of vulnerable populations. I have extensive experience of tackling complex user issues, requiring systemic level solutions.
              </Text>
              <BtnRow>
                <Btn>
                  <BtnLink to={CV} download="CV" target="_blank" rel="noreferrer">CV</BtnLink>
                </Btn>
                <Btn>
                  <BtnLink to={Portfolio} download="Portfolio" target="_blank" rel="noreferrer">Portfolio</BtnLink>
                </Btn>
              </BtnRow>
            </Column1>
            <Column2>
              <Img src={require("../../Visuals/Home/Anusha.png")}/>
            </Column2>
          </Row>
        </WhiteBg>
      </HeroBg>
    </HeroContainer>
  )
}

export default HeroSection
