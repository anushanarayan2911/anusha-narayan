import React, {useState} from 'react'
import TravelToothpasteComponent from '../components/TravelToothpaste'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'
import { useEffect } from 'react'

const TravelToothpaste = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
      setIsOpen(!isOpen)
  };

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <TravelToothpasteComponent/>
    </>
  )
}

export default TravelToothpaste
