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
} from './galleryElements'

const GallerySection = () => {
  const [isOverlay, setIsOverlay] = useState(false);
  const [isImage, setIsImage] = useState('')
  return (
    <InfoContainer id="gallery">
      <HeroBg>
        <WhiteBg>
          <WorkContainer>
            <Row1>
              <Column1>
                <Image src={require("../../Visuals/Gallery/1.png")}/>
              </Column1>
              <Column2>
                <Image src={require("../../Visuals/Gallery/2.png")}/>
              </Column2>
              <Column3>
                <Image src={require("../../Visuals/Gallery/3.png")}/>
              </Column3>
            </Row1>
            <Row2>
            <Column1>
                <Image src={require("../../Visuals/Gallery/4.png")}/>
              </Column1>
              <Column2>
                <Image src={require("../../Visuals/Gallery/5.png")}/>
              </Column2>
              <Column3>
                <Image src={require("../../Visuals/Gallery/6.png")}/>
              </Column3>
            </Row2>
            <Row3>
            <Column1>
                <Image src={require("../../Visuals/Gallery/7.png")}/>
              </Column1>
              <Column2>
                <Image src={require("../../Visuals/Gallery/8.png")}/>
              </Column2>
              <Column3>
                <Image src={require("../../Visuals/Gallery/9.png")}/>
              </Column3>
            </Row3>
          </WorkContainer>
          
        </WhiteBg>
      </HeroBg>
    </InfoContainer>
  )
}

export default GallerySection
