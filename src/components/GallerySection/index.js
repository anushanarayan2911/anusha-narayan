import {React, useState} from 'react'
import Link from 'react-scroll/modules/components/Link'
import { HeroContainer, Image, ImageContainer, ImageLink, Overlay, ProjectCaption, ProjectTitle, Row, TextWrapper
} from './galleryElements'

const GallerySection = () => {
  const [isOverlay, setIsOverlay] = useState(false);
  const [isImage, setIsImage] = useState('')
  return (
    <HeroContainer id="gallery">
      <Row>
        <Image src={require("../../Visuals/My Work/Landing Page/Classify.png")}/>
        <Image src={require("../../Visuals/My Work/Landing Page/Pulmo.png")}/>
      </Row>
      <Row>
        <Image src={require("../../Visuals/My Work/Landing Page/U Me.png")}/>
        <Image src={require("../../Visuals/My Work/Landing Page/Adobe Build.png")}/>
      </Row>
    </HeroContainer>
  )
}

export default GallerySection
