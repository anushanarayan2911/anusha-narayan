import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import ThePeriodSteriliser from '../components/ThePeriodSteriliser'
import Sidebar from '../components/SideBar'


const ThePeriodSteriliserPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
      setIsOpen(!isOpen)
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <ThePeriodSteriliser/>
    </>
  )
}

export default ThePeriodSteriliserPage
