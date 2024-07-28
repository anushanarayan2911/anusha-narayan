import {React, useState} from 'react'
import {send} from 'emailjs-com'
import { HeroContainer, 
    Image, 
    LinkWrap, 
    Row, 
    Text
} from './ContactElements'

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }
  return (
    <HeroContainer id="contact">
      <form onSubmit={handleSubmit}>
        <label> Name 
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </label>
        <label> Email 
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <label>Subject
          <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)}/>
        </label>
        <label>Message
          <input type="text" value={message} onChange={(e) => setMessage(e.target.value)}/>
        </label>
        <input type="submit"/>
      </form>
    </HeroContainer>
  )
}

export default ContactSection
