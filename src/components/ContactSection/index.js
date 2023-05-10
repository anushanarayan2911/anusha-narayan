import {React, useState} from 'react'
import {send} from 'emailjs-com'
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

  const [name, setName] = useState("");

  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    send(
      'service_y3t9ymb',
      'TEMPLATE ID',
      toSend,
      'User ID'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    })
    .catch((err) => {
      console.log('FAILED...', err);  
    });
  }

  

  return (
    <InfoContainer id="contact">
        <InfoWrapper>
            <Form onSubmit={handleSubmit}>
              <Label>
                <TextHeading>NAME</TextHeading>
                <SingleInputField name="name" value={toSend.from_name}></SingleInputField>
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
                <MultiInputField name="message" value={toSend.message}></MultiInputField>
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
