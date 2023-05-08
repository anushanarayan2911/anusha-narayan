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
                <Image src={require('../../Visuals/Gallery/1.png')}/>
              </LinkWrap>
            </Column>
            <Column>
              <LinkWrap>
                <Image src={require('../../Visuals/Gallery/2.png')}/>
              </LinkWrap>
            </Column>
          </PortfolioRow>
          <PortfolioRow>
            <Column>
              <LinkWrap>
                <Image src={require('../../Visuals/Gallery/5.png')}/>
              </LinkWrap>
            </Column>
            <Column>
              <LinkWrap>
                <Image src={require('../../Visuals/Gallery/4.png')}/>
              </LinkWrap>
            </Column>
          </PortfolioRow>
          <PortfolioRow>
            <Column>
              <LinkWrap>
                <Image src={require('../../Visuals/Gallery/8.png')}/>
              </LinkWrap>
            </Column>
            <Column>
              <LinkWrap>
                <Image src={require('../../Visuals/Gallery/7.png')}/>
              </LinkWrap>
            </Column>
          </PortfolioRow>
          <PortfolioRow>
            <Column>
              <LinkWrap>
                <Image src={require('../../Visuals/Gallery/6.png')}/>
              </LinkWrap>
            </Column>
            <Column>
              <LinkWrap>
                <Image src={require('../../Visuals/Gallery/3.png')}/>
              </LinkWrap>
            </Column>
          </PortfolioRow>
        </PortfolioGrid>
      </InfoWrapper>
    </InfoContainer>
  )
}

export default GallerySection
