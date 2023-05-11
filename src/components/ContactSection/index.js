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
    from_email: '',
    subject_title: '',
    message: ''
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_q528wwz',
      'template_yae9i09',
      toSend,
      're7N8OvO4Z1mF4W-4'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    })
    .catch((err) => {
      console.log('FAILED...', err);
    });
  };

  const handleChange = (e) => {
    setToSend({...toSend, [e.target.name]: e.target.value});
  };

  

  return (
    <InfoContainer id="contact">
        <InfoWrapper>
            <Form onSubmit={onSubmit}>
              <Label>
                <TextHeading>NAME</TextHeading>
                <SingleInputField name="from_name" value={toSend.from_name} onChange={handleChange}></SingleInputField>
              </Label>
              <br/>
              <br/>
              <Label>
                <TextHeading>EMAIL</TextHeading>
                <SingleInputField name="from_email" value={toSend.from_email} onChange={handleChange}></SingleInputField>
              </Label>
              <br/>
              <br/>
              <Label>
                <TextHeading>SUBJECT TITLE</TextHeading>
                <SingleInputField name="subject_title" value={toSend.subject_title} onChange={handleChange}></SingleInputField>
              </Label>
              <br/>
              <br/>
              <Label>
                <TextHeading>MESSAGE</TextHeading>
                <MultiInputField name="message" value={toSend.message} onChange={handleChange}></MultiInputField>
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
