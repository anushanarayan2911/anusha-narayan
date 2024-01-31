import React, { useEffect, useState } from 'react'
<<<<<<< HEAD
import { HeroContainer, HeroBg, WhiteBg, Row, LeftCol, LeftCol2, RightCol, Title, Text, Image, BtnLink, Btn} from './heroElements'
import CV from "../../Visuals/Home/CV.pdf"
import Portfolio from "../../Visuals/Home/Portfolio.pdf"
=======
import { HeroContainer, HeroBg, WhiteBg, Row, LeftCol, RightCol, Title, Text, Image, BtnLink, Btn} from './heroElements'

>>>>>>> 4aa459fdca9ad2f222239bcd4d36e41497f9cbd2


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
<<<<<<< HEAD
                I am a human-centred design engineer with a passion for 
                designing data-driven interventions to improve the 
                health and wellbeing of vulnerable populations. I have 
                extensive experience of tackling complex user issues 
                requiring systemic level solutions.
              </Text>
              <Row>
                <LeftCol2>
                  <Btn>
                    <BtnLink to={CV} download="CV" target="_blank" rel="noreferrer">CV</BtnLink>
                  </Btn>
                </LeftCol2>
                <RightCol>
                  <Btn>
                    <BtnLink to={Portfolio} download="Portfolio" target="_blank" rel="noreferrer">PDF Portfolio</BtnLink>
                  </Btn>
                </RightCol>
              </Row>
=======
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
              
>>>>>>> 4aa459fdca9ad2f222239bcd4d36e41497f9cbd2
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
