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
} from './myWorkElements'

const MyWorkSection = () => {

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
        
      </HeroBg>
    </InfoContainer>
  )
}

export default MyWorkSection
