import React, { useEffect, useState } from 'react'
import { HeroContainer, HeroBg, VideoBg, Image} from './heroElements'
import Video from '../../Visuals/Home/Video.mp4'
import ImageSlideshow from '../Slideshow/ImageSlideshow'
import { SliderData } from '../Slideshow/SliderData'


const HeroSection = () => {
  var imagesPath = [
    require('../../Visuals/Home/Images/1.png'),
    require('../../Visuals/Home/Images/2.png'),
    require('../../Visuals/Home/Images/3.png'),
    require('../../Visuals/Home/Images/4.png'),
    require('../../Visuals/Home/Images/5.png'),
    require('../../Visuals/Home/Images/6.png'),
    require('../../Visuals/Home/Images/7.png')
  ]

  const [counter, setCounter] = useState(0);

  setInterval(function() {
    counter === 4 ? setCounter(0) : setCounter(counter + 1);
  }, 10000)
  
   
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
      </HeroBg>
    </HeroContainer>
  )
}

export default HeroSection
