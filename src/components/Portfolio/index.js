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
                <Container>
                    <Image src={require('../../Visuals/Portfolio/Landing Page/Arama Title Card.png')} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
                    <Overlay>
                      <HeaderCaption>arama</HeaderCaption>
                      <SecondCaption>USER RESEARCH | SKETCHING | LO-FI PROTOTYPING | CAD</SecondCaption>
                    </Overlay> 
                  </Container>
                </ImageLink>
              </LinkWrap>
            </Column>
            <Column>
              <LinkWrap>
                <ImageLink to={"/UMe"}>
                <Container>
                    <Image src={require('../../Visuals/Portfolio/Landing Page/U Me Title Card.png')} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
                    <Overlay>
                      <HeaderCaption>U Me</HeaderCaption>
                      <SecondCaption>EMPATHY MAPPING | PRODUCT DEVELOPMENT | RENDERING | APP DESIGN | BRANDING</SecondCaption>
                    </Overlay> 
                  </Container>
                </ImageLink>
              </LinkWrap>
            </Column>
          </PortfolioRow>
          <PortfolioRow>
            <Column>
              <LinkWrap>
                <ImageLink to={"/TeddyBot"}>
                  <Container>
                    <Image src={require('../../Visuals/Portfolio/Landing Page/TeddyBot Title Card.png')} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
                    <Overlay>
                      <HeaderCaption>teddybot</HeaderCaption>
                      <SecondCaption>ELECTRONICS | ARDUINO | C++ | ROBOTICS</SecondCaption>
                    </Overlay> 
                  </Container>
                </ImageLink>
              </LinkWrap>
            </Column>
            <Column>
              <LinkWrap>
                <ImageLink to={"/Pulmo"}>
                <Container>
                    <Image src={require('../../Visuals/Portfolio/Landing Page/Pulmo - 1 Title Card.png')} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
                    <Overlay>
                      <HeaderCaption>pulmo - part I</HeaderCaption>
                      <SecondCaption>FUTURE CONTEXTUAL STUDIES | LITERATURE REVIEW | PSS DESIGN</SecondCaption>
                    </Overlay> 
                  </Container>
                </ImageLink>
              </LinkWrap>
            </Column>
            <Column>
              <LinkWrap>
                <ImageLink to={"/Pulmo"}>
                <Container>
                    <Image src={require('../../Visuals/Portfolio/Landing Page/Pulmo - 2 Title Card.png')} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
                    <Overlay>
                      <HeaderCaption>pulmo - part II</HeaderCaption>
                      <SecondCaption>FUTURE TECHNOLOGY STUDIES | APP DESIGN | IOT SYSTEM DESIGN</SecondCaption>
                    </Overlay> 
                  </Container>
                </ImageLink>
              </LinkWrap>
            </Column>
          </PortfolioRow>
          <PortfolioRow>
            <Column>
              <LinkWrap>
                <ImageLink to={"/ReStand"}>
                  <Container>
                    <Image src={require('../../Visuals/Portfolio/Landing Page/ReStand Title Card.png')} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
                    <Overlay>
                      <HeaderCaption>restand</HeaderCaption>
                      <SecondCaption>SUSTAINABLE DESIGN | SYSTEM DESIGN | VIDEO EDITING</SecondCaption>
                    </Overlay> 
                  </Container>
                </ImageLink>
              </LinkWrap>
            </Column>
            <Column>
              <LinkWrap>
                <ImageLink to={"/TravelToothpaste"}>
                <Container>
                    <Image src={require('../../Visuals/Portfolio/Landing Page/Travel Toothpaste Title Card.png')} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
                    <Overlay>
                      <HeaderCaption>travel toothpaste</HeaderCaption>
                      <SecondCaption>PRODUCT TEARDOWN | SYSTEM ANALYSIS | MATERIAL ANALYSIS | SPECIFICATION GENERATION</SecondCaption>
                    </Overlay> 
                  </Container>
                </ImageLink>
              </LinkWrap>
            </Column>
            <Column>
              <LinkWrap>
                <ImageLink to={"/AdobeBuild"}>
                <Container>
                    <Image src={require('../../Visuals/Portfolio/Landing Page/Adobe Build Title Card.png')} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
                    <Overlay>
                      <HeaderCaption>Adobe Build</HeaderCaption>
                      <SecondCaption>USER RESEARCH | MARKET STRATEGY | BRAND DESIGN | BUSINESS PROPOSAL BUILDING</SecondCaption>
                    </Overlay> 
                  </Container>
                </ImageLink>
              </LinkWrap>
            </Column>
          </PortfolioRow>
        </PortfolioGrid>
        <br/>
        <br/>
        <br/>
      </InfoWrapper>
    </InfoContainer>
  )
}

export default PortfolioSection
