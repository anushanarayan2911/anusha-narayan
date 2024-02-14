import {React, useState} from 'react'
import {send} from 'emailjs-com'
import { HeroContainer, 
    HeroBg,
    WhiteBg,
    Form,
    TextHeading,
    Label,
    SingleInputField,
    MultiInputField,
    Btn,
    BtnLink,
    BtnRow,
    Row
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
    setToSend({
      from_name: '',
      from_email: '',
      subject_title: '',
      message: '',
    })
  };

  const handleChange = (e) => {
    setToSend({...toSend, [e.target.name]: e.target.value});
  };

  

  return (
    <HeroContainer id="contact">
        <HeroBg>
            <WhiteBg>
              <Form onSubmit={onSubmit}>
                <Label>
                  <TextHeading>Name</TextHeading>
                  <SingleInputField name="from_name" value={toSend.from_name} onChange={handleChange}></SingleInputField>
                </Label>
                <Label>
                  <TextHeading>Email</TextHeading>
                  <SingleInputField name="from_email" value={toSend.from_email} onChange={handleChange}></SingleInputField>
                </Label>
                <Label>
                  <TextHeading>Title</TextHeading>
                  <SingleInputField name="subject_title" value={toSend.subject_title} onChange={handleChange}></SingleInputField>
                </Label>
                <Label>
                  <TextHeading>Message</TextHeading>
                  <MultiInputField name="message" value={toSend.message} onChange={handleChange}></MultiInputField>
                </Label>
                <Row>
                  <BtnRow>
                    <Btn>
                      <BtnLink type="submit">Submit</BtnLink>
                    </Btn>
                  </BtnRow>
                </Row>
                
              </Form>
            </WhiteBg>
            </HeroBg>
    </HeroContainer>
  )
}

export default ContactSection
