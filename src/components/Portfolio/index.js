import {React, useState} from 'react'
import Link from 'react-scroll/modules/components/Link'
import { InfoContainer, 
  InfoWrapper, 
  PortfolioGrid, 
  PortfolioRow,
  Column,
  LinkWrap,
  ImageLink,
  Container,
  HeaderCaption,
  Image,
  Overlay,
  SecondCaption
} from './portfolioElements'

const PortfolioSection = () => {

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <InfoContainer id="portfolio">
      <InfoWrapper>
        <br/>
        <br/>
        <br/>
        <br/>
        <PortfolioGrid>
          <PortfolioRow>
            <Column>
              <LinkWrap>
                <ImageLink to={"/ThePeriodProductSteriliser"}>
                  <Container>
                    <Image src={require('../../Visuals/Portfolio/Landing Page/The Period Product Steriliser Title Card.png')} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
                    <Overlay>
                      <HeaderCaption>period product steriliser</HeaderCaption>
                      <SecondCaption>USER-CENTRED DESIGN | SKETCHING | CAD | LO-FI PROTOTYPING</SecondCaption>
                    </Overlay> 
                  </Container>
                </ImageLink>
              </LinkWrap>
            </Column>
            <Column>
              <LinkWrap>
                <ImageLink to={"/Arama"}>
                  <Image src={require('../../Visuals/Portfolio/Landing Page/Arama Title Card.png')}/>
                </ImageLink>
              </LinkWrap>
            </Column>
          </PortfolioRow>
          
        </PortfolioGrid>
      </InfoWrapper>
    </InfoContainer>
  )
}

export default PortfolioSection
