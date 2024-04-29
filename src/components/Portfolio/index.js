import {React, useState} from 'react'
import Link from 'react-scroll/modules/components/Link'
import { InfoContainer, 
  HeroBg,
  WhiteBg,
  Row,
  Column,
  ImageLink,
  Image,
  LinkWrap,
  Container,
  Overlay,
  HeaderCaption
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
      <HeroBg>
        <WhiteBg>
          <Row>
            <LinkWrap>
              <ImageLink to={"/ThePeriodProductSteriliser"}>
                <Container>
                  <Image src={require("../../Visuals/Portfolio/Landing Page/The Period Product Steriliser Title Card.png")}/>
                    <Overlay>
                      <HeaderCaption>period product steriliser</HeaderCaption>
                    </Overlay>
                </Container>
              </ImageLink>
            </LinkWrap>
            <LinkWrap>
              <ImageLink to={"/ThePeriodProductSteriliser"}>
                <Container>
                  <Image src={require("../../Visuals/Portfolio/Landing Page/U Me Title Card.png")}/>
                  <Overlay>
                    <HeaderCaption>u me</HeaderCaption>
                  </Overlay>
                </Container>
              </ImageLink>
            </LinkWrap>
            <LinkWrap>
              <ImageLink to={"/ThePeriodProductSteriliser"}>
                <Container>
                  <Image src={require("../../Visuals/Portfolio/Landing Page/Pulmo - 1 Title Card.png")}/>
                  <Overlay>
                    <HeaderCaption>pulmo - part I</HeaderCaption>
                  </Overlay>
                </Container>
              </ImageLink>
            </LinkWrap>
          </Row>
          <Row>
            <p>Hello</p>
          </Row>
          <Row>
            <p>Bye</p>
          </Row>
        </WhiteBg>
      </HeroBg>
    </InfoContainer>
  )
}

export default PortfolioSection
