import React from 'react'
import Link from 'react-scroll/modules/components/Link'
import { InfoContainer, 
  InfoWrapper, 
  InfoRow, 
  TopLine, 
  PortfolioGrid, 
  PortfolioRow,
  Column,
  LinkWrap,
  ImageLink,
  Image
} from './portfolioElements'

const PortfolioSection = () => {
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
                <ImageLink to={"/ThePeriodSteriliserPage"}>
                  <Image src={require('../../Visuals/Portfolio/Landing Page/The Period Product Steriliser Title Card.png')}/>
                </ImageLink>
              </LinkWrap>
            </Column>
            <Column>
              <LinkWrap>
                <ImageLink to={"/RestandPage"}>
                  <Image src={require('../../Visuals/Portfolio/Landing Page/ReStand Title Card.png')}/>
                </ImageLink>
              </LinkWrap>
            </Column>
          </PortfolioRow>
          <PortfolioRow>
            <Column>
              <ImageLink to={"/TeddyBotPage"}>
                <Image src={require('../../Visuals/Portfolio/Landing Page/TeddyBot Title Card.png')}/>
              </ImageLink>
            </Column>
            <Column>
              <ImageLink to={"/TravelToothpastePage"}>
                <Image src={require('../../Visuals/Portfolio/Landing Page/Travel Toothpaste Title Card.png')}/>
              </ImageLink>
            </Column>
          </PortfolioRow>
          <PortfolioRow>
            <Column>
              <ImageLink to={"/TandemBikePage"}>
                <Image src={require('../../Visuals/Portfolio/Landing Page/Tandem Bike Title Card.png')}/>
              </ImageLink>
            </Column>
            <Column>
              <ImageLink to={"/AramaPage"}>
                <Image src={require('../../Visuals/Portfolio/Landing Page/Arama Title Card.png')}/>
              </ImageLink>
            </Column>
          </PortfolioRow>
          <PortfolioRow>
            <Column>
              <ImageLink to={"/UMePage"}>
                <Image src={require('../../Visuals/Portfolio/Landing Page/U Me Title Card.png')}/>
              </ImageLink>
            </Column>
            <Column>
              <ImageLink to={"/HealthTrackerAppPage"}>
                <Image src={require('../../Visuals/Portfolio/Landing Page/Health Tracker App Title Card.png')}/>
              </ImageLink>
            </Column>
          </PortfolioRow>
          <PortfolioRow>
            <Column>
              <ImageLink to={"/PulmoPage"}>
                <Image src={require('../../Visuals/Portfolio/Landing Page/Pulmo Title Card.png')}/>
              </ImageLink>
            </Column>
            <Column>
              <ImageLink to={"/AdobeBuildPage"}>
                <Image src={require('../../Visuals/Portfolio/Landing Page/Adobe Build Title Card.png')}/>
              </ImageLink>
            </Column>
          </PortfolioRow>
        </PortfolioGrid>
      </InfoWrapper>
    </InfoContainer>
  )
}

export default PortfolioSection
