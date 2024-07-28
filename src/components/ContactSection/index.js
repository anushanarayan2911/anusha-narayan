import {React, useState} from 'react'
import {send} from 'emailjs-com'
import { HeroContainer, 
    Image, 
    LinkWrap, 
    Col, 
    Text
} from './ContactElements'
import { Link } from 'react-scroll'

const ContactSection = () => {
  
  return (
    <HeroContainer id="contact">
      <Col>
        <LinkWrap href="mailto:anushanarayan2002@outlook.com">Email me</LinkWrap>
        <LinkWrap href="https://www.linkedin.com/in/a-k-narayan/">Find me on LinkedIn</LinkWrap>
      </Col>
      
    </HeroContainer>
  )
}

export default ContactSection
