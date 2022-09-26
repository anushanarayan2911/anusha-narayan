import React, {useState} from 'react'
import ReStand from '../components/ReStand'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'

const ReStandPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
      setIsOpen(!isOpen)
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <ReStand/>
    </>
  )
}

export default ReStandPage
