import React, {useState} from 'react'
import TeddyBot from '../components/TeddyBot'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'

const TeddyBotPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
      setIsOpen(!isOpen)
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <TeddyBot/>
    </>
  )
}

export default TeddyBotPage
