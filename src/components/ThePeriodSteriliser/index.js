import React from 'react'
import ThePeriodProductSteriliser from '../../Visuals/Portfolio/The Period Steriliser/ThePeriodProductSteriliser.pdf'

import { InfoContainer, 
    HeroBg, 
    WhiteBg,
    Row,
    Column1,
    Column2,
    Heading,
    Text,
    Img,
    HeroContainer
} from './ThePeriodSteriliserElements'

const ThePeriodProductSteriliserComponent = () => {

    const downloadPDFFile = () => {
        alert("Download logic goes here")
    }

  return (
    <HeroContainer id="portfolio">
        <HeroBg>
        <WhiteBg>
          <Row>
            <Column1>
              <Heading>period product steriliser</Heading>
              <Text>There are 500 million girls and women
                around the world living in period poverty. 
                They are frequently forced to resort to 
                unhealthy alternatives in order to pay for 
                period products.
              </Text>
              <Text>
                I designed a steriliser which can clean 
                period products, allowing them to be reused.
                This creates a long-lasting, hygienic supply
                of period products.
              </Text>
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

export default ThePeriodProductSteriliserComponent
