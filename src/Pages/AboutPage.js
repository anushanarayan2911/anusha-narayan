import React, {useState} from 'react'
import About from '../components/About'
import { homeObjOne } from '../components/About/data'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'

const AboutPage = (id="about") => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
      setIsOpen(!isOpen)
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <About/>
    </>
    
  )
}

export default AboutPage