import React from 'react'
import { InfoContainer, 
    InfoWrapper, 
    ImageRow,
    Image,
    PortfolioGrid,
    Title,
    Container,
    Overlay,
    Caption
} from './ThePeriodSteriliserElements'

const ThePeriodProductSteriliserComponent = () => {

  return (
    <InfoContainer>
        <InfoWrapper>
            <PortfolioGrid>
                <Container>
                    <Overlay>
                        <Title>period product steriliser</Title>
                        <Caption>a steriliser which will allow women and girls to clean period products so that they can be reused</Caption>
                    </Overlay>
                    <Image src={require("../../Visuals/Portfolio/The Period Steriliser/The Period Product Steriliser.png")}/>
                </Container>     
            </PortfolioGrid>
        </InfoWrapper>
    </InfoContainer>
  )
}

export default ThePeriodProductSteriliserComponent
