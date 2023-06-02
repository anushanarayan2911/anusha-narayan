import React, {useState} from 'react'
import AboutComponent from '../components/About'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'

const About = (id="about") => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
      setIsOpen(!isOpen)
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <AboutComponent/>
    </>
    
  )
}

export default About