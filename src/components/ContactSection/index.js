import {React, useState} from 'react'
import {send} from 'emailjs-com'
import { HeroContainer, 
    Image, 
    Row, 
    Text
} from './ContactElements'

const ContactSection = () => {
  
  return (
    <HeroContainer id="contact">
      <Row>
        <Image src={require("../../Visuals/Contact/Email.png")}/>
        <Text>anusha.narayan2002@outlook.com</Text>
      </Row>
      <Row>
        <Image src={require("../../Visuals/Contact/LinkedIn.png")}/>
        <Text>https://www.linkedin.com/in/a-k-narayan/</Text>
      </Row>
    </HeroContainer>
  )
}

export default ContactSection
