import React, {useState} from 'react'
import CV from '../components/CV'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'

const CVPage = (id="CVPage") => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
      setIsOpen(!isOpen)
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <CV/>
    </>
  )
}

export default CVPage