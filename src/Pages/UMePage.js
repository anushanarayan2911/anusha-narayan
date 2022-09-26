import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import UMe from '../components/U Me'
import Sidebar from '../components/SideBar'

const UMePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
      setIsOpen(!isOpen)
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <UMe/>
    </>
  )
}

export default UMePage
