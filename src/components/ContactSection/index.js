import React from 'react'
import { InfoContainer, 
    InfoWrapper,
    Form,
    TextHeading,
    Label,
    SingleInputField,
    MultiInputField,
    Btn,
    BtnLink
} from './ContactElements'

const ContactSection = () => {
  return (
    <InfoContainer id="contact">
        <InfoWrapper>
            <Form>
              <Label>
                <TextHeading>NAME</TextHeading>
                <SingleInputField name="name"></SingleInputField>
              </Label>
              <br/>
              <br/>
              <Label>
                <TextHeading>EMAIL</TextHeading>
                <SingleInputField name="email"></SingleInputField>
              </Label>
              <br/>
              <br/>
              <Label>
                <TextHeading>SUBJECT TITLE</TextHeading>
                <SingleInputField name="subject title"></SingleInputField>
              </Label>
              <br/>
              <br/>
              <Label>
                <TextHeading>MESSAGE</TextHeading>
                <MultiInputField name="message"></MultiInputField>
              </Label>
              <br/>
              <br/>
              <br/>
              <Btn>
                <BtnLink type="submit" />
              </Btn>
            </Form>
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
