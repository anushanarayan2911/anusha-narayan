import React, { useEffect, useState } from 'react'
import { HeroContainer, HeroBg, WhiteBg, Row, LeftCol, RightCol, Title, Text, Image, BtnLink, Btn} from './heroElements'



const HeroSection = () => {

  const [counter, setCounter] = useState(0);

  return (
    <HeroContainer id="home">
      <HeroBg>
        <WhiteBg>
          <Row>
            <LeftCol>
              <Title>Hi I'm Anusha</Title>
              <Text>
                I am a human-centred design engineer
              </Text>
              <Text>
                with a passion for designing data-driven
              </Text>
              <Text>
                interventions to improve the health and
              </Text>
              <Text>
                wellbeing of vulnerable populations. I
              </Text>
              <Text>
                have extensive experience of tackling
              </Text>
              <Text>
                complex user issues, requiring systemic
              </Text>
              <Text>
                level solutions.
              </Text>
              <Btn>
                <BtnLink to={"/CV"} download="CV" target="_blank" rel="noreferrer">CV</BtnLink>
              </Btn>
              
            </LeftCol>
            <RightCol>
              <Image src={require("../../Visuals/Home/Anusha.png")}></Image>
            </RightCol>
          </Row>
        </WhiteBg>
      </HeroBg>
    </HeroContainer>
  )
}

export default HeroSection
