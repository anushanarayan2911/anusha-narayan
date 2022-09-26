import React, {useState} from 'react'
import TravelToothpaste from '../components/TravelToothpaste'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'

const TravelToothpastePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
      setIsOpen(!isOpen)
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <TravelToothpaste/>
    </>
  )
}

export default TravelToothpastePage
