import React, {useState} from 'react'
import HealthTrackerApp from '../components/HealthTrackerApp'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'
import { useEffect } from 'react'

const HealthTrackerAppPage = () => {
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
      <HealthTrackerApp/>
    </>
    
  )
}

export default HealthTrackerAppPage
