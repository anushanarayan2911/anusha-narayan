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
                <ImageLink to={"/ThePeriodProductSteriliser"}>
                  <Image src={require('../../Visuals/Portfolio/Landing Page/The Period Product Steriliser Title Card.png')}/>
                </ImageLink>
              </LinkWrap>
            </Column>
            <Column>
              <LinkWrap>
                <ImageLink to={"/ReStand"}>
                  <Image src={require('../../Visuals/Portfolio/Landing Page/ReStand Title Card.png')}/>
                </ImageLink>
              </LinkWrap>
            </Column>
          </PortfolioRow>
          <PortfolioRow>
            <Column>
              <ImageLink to={"/TeddyBot"}>
                <Image src={require('../../Visuals/Portfolio/Landing Page/TeddyBot Title Card.png')}/>
              </ImageLink>
            </Column>
            <Column>
              <ImageLink to={"/TravelToothpaste"}>
                <Image src={require('../../Visuals/Portfolio/Landing Page/Travel Toothpaste Title Card.png')}/>
              </ImageLink>
            </Column>
          </PortfolioRow>
          <PortfolioRow>
            <Column>
              <ImageLink to={"/TandemBike"}>
                <Image src={require('../../Visuals/Portfolio/Landing Page/Tandem Bike Title Card.png')}/>
              </ImageLink>
            </Column>
            <Column>
              <ImageLink to={"/Arama"}>
                <Image src={require('../../Visuals/Portfolio/Landing Page/Arama Title Card.png')}/>
              </ImageLink>
            </Column>
          </PortfolioRow>
          <PortfolioRow>
            <Column>
              <ImageLink to={"/UMe"}>
                <Image src={require('../../Visuals/Portfolio/Landing Page/U Me Title Card.png')}/>
              </ImageLink>
            </Column>
            <Column>
              <ImageLink to={"/HealthTrackerApp"}>
                <Image src={require('../../Visuals/Portfolio/Landing Page/Health Tracker App Title Card.png')}/>
              </ImageLink>
            </Column>
          </PortfolioRow>
          <PortfolioRow>
            <Column>
              <ImageLink to={"/Pulmo"}>
                <Image src={require('../../Visuals/Portfolio/Landing Page/Pulmo Title Card.png')}/>
              </ImageLink>
            </Column>
            <Column>
              <ImageLink to={"/AdobeBuild"}>
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
