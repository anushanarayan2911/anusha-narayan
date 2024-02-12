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
          <p>hi</p>
        </WhiteBg>
      </HeroBg>
    </InfoContainer>
  )
}

export default PortfolioSection
