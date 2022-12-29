import React from 'react'
import Link from 'react-scroll/modules/components/Link'
import { InfoContainer, 
  InfoWrapper, 
  InfoRow, 
  TopLine,
  ImageLink,
  Image,
  PDFDiv
} from './PDFPortfolioElements'

const PDFPortfolioComponent = () => {
  return (
    <InfoContainer id="portfolio">
      <InfoWrapper>
        <br/>
        <br/>
        <PDFDiv>
          <Image src={require('../../Visuals/About/PDF Portfolio/Portfolio-01.png')}/>
          <Image src={require('../../Visuals/About/PDF Portfolio/Portfolio-02.png')}/>
          <Image src={require('../../Visuals/About/PDF Portfolio/Portfolio-03.png')}/>
          <Image src={require('../../Visuals/About/PDF Portfolio/Portfolio-04.png')}/>
          <Image src={require('../../Visuals/About/PDF Portfolio/Portfolio-05.png')}/>
          <Image src={require('../../Visuals/About/PDF Portfolio/Portfolio-06.png')}/>
          <Image src={require('../../Visuals/About/PDF Portfolio/Portfolio-07.png')}/>
          <Image src={require('../../Visuals/About/PDF Portfolio/Portfolio-08.png')}/>
          <Image src={require('../../Visuals/About/PDF Portfolio/Portfolio-09.png')}/>
          <Image src={require('../../Visuals/About/PDF Portfolio/Portfolio-10.png')}/>
          <Image src={require('../../Visuals/About/PDF Portfolio/Portfolio-11.png')}/>
          <Image src={require('../../Visuals/About/PDF Portfolio/Portfolio-12.png')}/>
          <Image src={require('../../Visuals/About/PDF Portfolio/Portfolio-13.png')}/>
          <Image src={require('../../Visuals/About/PDF Portfolio/Portfolio-14.png')}/>
          <Image src={require('../../Visuals/About/PDF Portfolio/Portfolio-15.png')}/>
          <Image src={require('../../Visuals/About/PDF Portfolio/Portfolio-16.png')}/>
          <Image src={require('../../Visuals/About/PDF Portfolio/Portfolio-17.png')}/>
          <Image src={require('../../Visuals/About/PDF Portfolio/Portfolio-18.png')}/>
          <Image src={require('../../Visuals/About/PDF Portfolio/Portfolio-19.png')}/>
          <Image src={require('../../Visuals/About/PDF Portfolio/Portfolio-20.png')}/>
        </PDFDiv>
      </InfoWrapper>
    </InfoContainer>
  )
}

export default PDFPortfolioComponent
