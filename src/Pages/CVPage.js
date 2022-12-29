import React, {useState} from 'react'
import CVComponent from '../components/CV'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'

const CV = (id="CVPage") => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
      setIsOpen(!isOpen)
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <CVComponent/>
    </>
  )
}

export default CV