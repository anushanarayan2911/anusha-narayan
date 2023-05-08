import React from 'react'
import { InfoContainer, 
    InfoWrapper,
    Form,
    TextHeading,
    Label,
    InputField
} from './ContactElements'

const ContactSection = () => {
  return (
    <InfoContainer id="contact">
        <InfoWrapper>
            <Form>
              <Label>
                <TextHeading>NAME</TextHeading>
                <InputField name="name"></InputField>
              </Label>
              <br/>
              <br/>
              <Label>
                <TextHeading>EMAIL</TextHeading>
                <InputField name="email"></InputField>
              </Label>
              <br/>
              <br/>
              <Label>
                <TextHeading>SUBJECT TITLE</TextHeading>
                <InputField name="subject title"></InputField>
              </Label>
              <br/>
              <br/>
              <Label>
                <TextHeading>MESSAGE</TextHeading>
                <InputField name="message"></InputField>
              </Label>
            </Form>
        </InfoWrapper>
    </InfoContainer>
  )
}

export default ContactSection
