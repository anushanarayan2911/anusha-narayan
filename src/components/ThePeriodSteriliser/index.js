import React from 'react'
import ThePeriodProductSteriliser from '../../Visuals/Portfolio/The Period Steriliser/ThePeriodProductSteriliser.pdf'

import { InfoContainer, 
    HeroBg, 
    LeftWhiteBg,
    RightWhiteBg,
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
        <LeftWhiteBg>
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
              <Img src={require("../../Visuals/Portfolio/The Period Steriliser/The Period Product Steriliser.png")}/>
            </Column2>
          </Row>
        </LeftWhiteBg>
        <p>Hi</p>
      </HeroBg>
    </HeroContainer>
  )
}

export default ThePeriodProductSteriliserComponent
