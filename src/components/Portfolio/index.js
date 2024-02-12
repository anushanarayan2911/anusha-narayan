import {React, useState} from 'react'
import Link from 'react-scroll/modules/components/Link'
import { InfoContainer, 
  HeroBg,
  InfoWrapper, 
  WhiteBg,
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
      <HeroBg>
        <WhiteBg>
          <InfoWrapper>
              <PortfolioRow>
                <Column>
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
                </Column>
                <Column>
                  <LinkWrap>
                    <ImageLink to={"/UMe"}>
                      <Container>
                        <Image src={require("../../Visuals/Portfolio/Landing Page/U Me Title Card.png")}/>
                        <Overlay>
                          <HeaderCaption>u me</HeaderCaption>
                        </Overlay>
                      </Container>
                    </ImageLink>
                  </LinkWrap>
                </Column>
                <Column>
                  <LinkWrap>
                    <ImageLink to={"/Pulmo1"}>
                      <Container>
                        <Image src={require("../../Visuals/Portfolio/Landing Page/Pulmo - 1 Title Card.png")}/>
                        <Overlay>
                          <HeaderCaption>pulmo - part 1</HeaderCaption>
                        </Overlay>
                      </Container>
                    </ImageLink>
                  </LinkWrap>
                </Column>
              </PortfolioRow>
              <PortfolioRow>
                <Column>
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
                </Column>
                <Column>
                  <LinkWrap>
                    <ImageLink to={"/UMe"}>
                      <Container>
                        <Image src={require("../../Visuals/Portfolio/Landing Page/U Me Title Card.png")}/>
                        <Overlay>
                          <HeaderCaption>u me</HeaderCaption>
                        </Overlay>
                      </Container>
                    </ImageLink>
                  </LinkWrap>
                </Column>
                <Column>
                  <LinkWrap>
                    <ImageLink to={"/Pulmo1"}>
                      <Container>
                        <Image src={require("../../Visuals/Portfolio/Landing Page/Pulmo - 1 Title Card.png")}/>
                        <Overlay>
                          <HeaderCaption>pulmo - part 1</HeaderCaption>
                        </Overlay>
                      </Container>
                    </ImageLink>
                  </LinkWrap>
                </Column>
              </PortfolioRow>
          </InfoWrapper>
        </WhiteBg>
      </HeroBg>
    </InfoContainer>
  )
}

export default PortfolioSection
