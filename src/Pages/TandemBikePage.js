import React, {useState} from 'react'
import TandemBike from '../components/TandemBike'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'

const TandemBikePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
      setIsOpen(!isOpen)
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <TandemBike/>
    </>
  )
}

export default TandemBikePage
