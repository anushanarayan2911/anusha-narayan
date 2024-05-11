import React from 'react'
import { HeroContainer, Header, Row, Column, Text, Image, ButtonRow, Button} from './heroElements'
import CV from "../../Visuals/Home/CV.pdf"
import Portfolio from "../../Visuals/Home/Portfolio.pdf"


const HeroSection = () => {

  return (
    <HeroContainer id="home">
      <Header>Hi I'm Anusha</Header>
      <Row>
        <Column>
          <Text>I’m a user-centric engineer, with a passion for designing data-driven, digital solutions to some of society’s most pressing challenges. My work revolves around placing the user at the core of the design process, ensuring that the solutions I create are not only innovative and efficient but also meaningful and accessible. With a track record of crafting effective answers to complex problems, I strive to make a positive impact through thoughtful design and engineering.</Text>
        </Column>
        <Column>
          <Image src={require("../../Visuals/Home/Anusha.png")}/>
        </Column>
      </Row>
      <ButtonRow>
        <Button to={CV} download="CV" target="_blank" rel="noreferrer">CV</Button>
        <Button to={Portfolio} download="Portfolio" target="_blank" rel="noreferrer">Portfolio</Button>
      </ButtonRow>
      {" "}
    </HeroContainer>
  )
}

export default HeroSection
