import React, {useState} from 'react'
import HealthTrackerAppComponent from '../components/HealthTrackerApp'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'
import { useEffect } from 'react'

const HealthTrackerApp = () => {
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
      <HealthTrackerAppComponent/>
    </>
    
  )
}

export default HealthTrackerApp
