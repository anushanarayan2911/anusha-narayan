import React from 'react'
import Link from 'react-scroll/modules/components/Link'
import { InfoContainer, 
  InfoWrapper, 
  InfoRow, 
  TopLine, 
  LinkWrap,
  ImageLink,
  Image
} from './CVElements'

const CV = () => {
  return (
    <InfoContainer id="portfolio">
      <InfoWrapper>
        <Image src={require("../../Visuals/About/CV.png")}/>
      </InfoWrapper>
    </InfoContainer>
  )
}

export default CV
