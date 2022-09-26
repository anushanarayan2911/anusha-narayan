import React, {useState} from 'react'
import HealthTrackerApp from '../components/HealthTrackerApp'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'

const HealthTrackerAppPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
      setIsOpen(!isOpen)
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HealthTrackerApp/>
    </>
    
  )
}

export default HealthTrackerAppPage
