import React from 'react'
import { InfoContainer, 
    InfoWrapper,
    InfoRow,
    TopLine,
    ContactGrid, 
    ContactRow,
    Column1,
    Column2,
    Image,
    Subtitle
} from './ContactElements'

const ContactSection = () => {
  return (
    <InfoContainer id="contact">
        <InfoWrapper>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <ContactGrid>
              <ContactRow>
                <Column1><Image src={require('../../Visuals/Contact/Images/1.png')}/></Column1>
                <Column2><Image src={require('../../Visuals/Contact/Images/2.png')}/></Column2>
              </ContactRow>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <ContactRow>
                <Subtitle>Please feel free to get in touch, by sending a message or an email! I will respond within 24 hours.</Subtitle>
              </ContactRow>
            </ContactGrid>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </InfoWrapper>
    </InfoContainer>
  )
}

export default ContactSection
