import {React, useState} from 'react'
import Link from 'react-scroll/modules/components/Link'
import { InfoContainer, 
  InfoWrapper, 
  InfoRow, 
  TopLine, 
  ImageOverlay,
  PortfolioGrid, 
  PortfolioRow,
  Column,
  LinkWrap,
  ImageLink,
  Image
} from './galleryElements'

const GallerySection = () => {
  const [isOverlay, setIsOverlay] = useState(false);
  const [isImage, setIsImage] = useState('')

  var imagesPath = [
    require('../../Visuals/Gallery/Images/1.png'),
    require('../../Visuals/Gallery/Images/2.png'),
    require('../../Visuals/Gallery/Images/3.png'),
    require('../../Visuals/Gallery/Images/4.png'),
    require('../../Visuals/Gallery/Images/5.png'),
    require('../../Visuals/Gallery/Images/6.png'),
    require('../../Visuals/Gallery/Images/7.png'),
    require('../../Visuals/Gallery/Images/8.png'),
  ]

  const setImage = (sourceLink) => {
    setIsImage(imagesPath[sourceLink]);
  }

  const showOverlay = () => {
    setIsOverlay(!isOverlay);
  }
  return (
    <InfoContainer id="portfolio">
      <InfoWrapper>
        <br/>
        <br/>
        <br/>
        <br/>
        <ImageOverlay src={isImage} visible={isOverlay}/>
        <PortfolioGrid>
          <PortfolioRow>
            <Column>
              <LinkWrap>
                <Image src={require('../../Visuals/Gallery/Images/1.png')}/>
              </LinkWrap>
            </Column>
            <Column>
              <LinkWrap>
                <Image src={require('../../Visuals/Gallery/Images/2.png')}/>
              </LinkWrap>
            </Column>
          </PortfolioRow>
          <PortfolioRow>
            <LinkWrap>
              <Image src={require('../../Visuals/Gallery/Images/3.png')}/>
            </LinkWrap>
          </PortfolioRow>
          <PortfolioRow>
            <Column>
              <LinkWrap>
                <Image src={require('../../Visuals/Gallery/Images/4.png')}/>
              </LinkWrap>
            </Column>
            <Column>
              <LinkWrap>
                <Image src={require('../../Visuals/Gallery/Images/5.png')}/>
              </LinkWrap>
            </Column>
          </PortfolioRow>
          <PortfolioRow>
            <Column>
              <LinkWrap>
                <Image src={require('../../Visuals/Gallery/Images/6.png')}/>
              </LinkWrap>
            </Column>
            <Column>
              <LinkWrap>
                <Image src={require('../../Visuals/Gallery/Images/7.png')}/>
              </LinkWrap>
            </Column>
          </PortfolioRow>
          <PortfolioRow>
            <LinkWrap>
              <Image src={require('../../Visuals/Gallery/Images/8.png')}/>
            </LinkWrap>
          </PortfolioRow>
        </PortfolioGrid>
      </InfoWrapper>
    </InfoContainer>
  )
}

export default GallerySection
