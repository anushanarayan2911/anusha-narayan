import {React, useState} from 'react'
import Link from 'react-scroll/modules/components/Link'
import { HeroContainer, Image, ImageContainer, ImageLink, Overlay, ProjectCaption, ProjectTitle, Row, TextWrapper
} from './galleryElements'
import Footer from '../Footer';

const GallerySection = () => {
  const [isOverlay, setIsOverlay] = useState(false);
  const [isImage, setIsImage] = useState('')
  return (
    <HeroContainer id="gallery">
      <Row>
        <Image src={require("../../Visuals/Gallery/1.png")}/>
        <Image src={require("../../Visuals/Gallery/2.png")}/>
        <Image src={require("../../Visuals/Gallery/3.png")}/>
      </Row>
      <Row>
        <Image src={require("../../Visuals/Gallery/4.png")}/>
        <Image src={require("../../Visuals/Gallery/5.png")}/>
        <Image src={require("../../Visuals/Gallery/6.png")}/>
      </Row>
      <Row>
        <Image src={require("../../Visuals/Gallery/7.png")}/>
        <Image src={require("../../Visuals/Gallery/8.png")}/>
        <Image src={require("../../Visuals/Gallery/9.png")}/>
      </Row>
      <Footer></Footer>
    </HeroContainer>
  )
}

export default GallerySection
