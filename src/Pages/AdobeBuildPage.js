import React, {useState} from 'react'
import AdobeBuild from '../components/Adobe Build'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'

const AdobeBuildPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
      setIsOpen(!isOpen)
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <AdobeBuild/>
    </>
  )
}

export default AdobeBuildPage
