import {React, useState} from 'react'
import Link from 'react-scroll/modules/components/Link'
import { InfoContainer, 
  HeroBg,
  WhiteBg,
  WorkContainer,
  Row1,
  Row2,
  Row3,
  Column1,
  Column2,
  Column3,
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
          <WorkContainer>
            <Row1>
              <Column1>
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
              </Column1>
              <Column2>
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
              </Column2>
              <Column3>
                <LinkWrap>
                  <ImageLink to={"/Pulmo1"}>
                    <Container>
                      <Image src={require("../../Visuals/Portfolio/Landing Page/Pulmo - 1 Title Card.png")}/>
                      <Overlay>
                        <HeaderCaption>pulmo - part I</HeaderCaption>
                      </Overlay>
                    </Container>
                  </ImageLink>
                </LinkWrap>
              </Column3>
            </Row1>
            <Row2>
              <Column1>
                <LinkWrap>
                  <ImageLink to={"/Pulmo2"}>
                    <Container>
                      <Image src={require("../../Visuals/Portfolio/Landing Page/Pulmo - 2 Title Card.png")}/>
                      <Overlay>
                        <HeaderCaption>pulmo - part II</HeaderCaption>
                      </Overlay>
                    </Container>
                  </ImageLink>
                </LinkWrap>
              </Column1>
              <Column2>
                <LinkWrap>
                  <ImageLink to={"/TeddyBot"}>
                    <Container>
                      <Image src={require("../../Visuals/Portfolio/Landing Page/TeddyBot Title Card.png")}/>
                      <Overlay>
                        <HeaderCaption>teddybot</HeaderCaption>
                      </Overlay>
                    </Container>
                  </ImageLink>
                </LinkWrap>
              </Column2>
              <Column3>
                <LinkWrap>
                  <ImageLink to={"/Arama"}>
                    <Container>
                      <Image src={require("../../Visuals/Portfolio/Landing Page/Arama Title Card.png")}/>
                      <Overlay>
                        <HeaderCaption>arama</HeaderCaption>
                      </Overlay>
                    </Container>
                  </ImageLink>
                </LinkWrap>
              </Column3>
            </Row2>
            <Row3>
              <Column1>
              <LinkWrap>
                  <ImageLink to={"/ReStand"}>
                    <Container>
                      <Image src={require("../../Visuals/Portfolio/Landing Page/ReStand Title Card.png")}/>
                      <Overlay>
                        <HeaderCaption>restand</HeaderCaption>
                      </Overlay>
                    </Container>
                  </ImageLink>
                </LinkWrap>
              </Column1>
              <Column2>
              <LinkWrap>
                  <ImageLink to={"/TravelToothpaste"}>
                    <Container>
                      <Image src={require("../../Visuals/Portfolio/Landing Page/Travel Toothpaste Title Card.png")}/>
                      <Overlay>
                        <HeaderCaption>travel toothpaste</HeaderCaption>
                      </Overlay>
                    </Container>
                  </ImageLink>
                </LinkWrap>
              </Column2>
              <Column3>
              <LinkWrap>
                  <ImageLink to={"/AdobeBuild"}>
                    <Container>
                      <Image src={require("../../Visuals/Portfolio/Landing Page/Adobe Build Title Card.png")}/>
                      <Overlay>
                        <HeaderCaption>adobe build</HeaderCaption>
                      </Overlay>
                    </Container>
                  </ImageLink>
                </LinkWrap>
              </Column3>
            </Row3>
          </WorkContainer>
          
        </WhiteBg>
      </HeroBg>
    </InfoContainer>
  )
}

export default PortfolioSection
