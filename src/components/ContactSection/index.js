import {React, useState} from 'react'
import {send} from 'emailjs-com'
import { HeroContainer, 
    Image, 
    LinkWrap, 
    Row, 
    Text
} from './ContactElements'

const ContactSection = () => {
  
  return (
    <HeroContainer id="contact">
      <Row>
        <LinkWrap>
          <Image src={require("../../Visuals/Contact/Email.png")}/>
          <Text>anusha.narayan2002@outlook.com</Text>
        </LinkWrap>
      </Row>
      <Row>
        <LinkWrap href={"https://www.linkedin.com/in/a-k-narayan/"} target="_blank">
          <Image src={require("../../Visuals/Contact/LinkedIn.png")}/>
          <Text>https://www.linkedin.com/in/a-k-narayan/</Text>
        </LinkWrap> 
      </Row>
    </HeroContainer>
  )
}

export default ContactSection
