import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Arama from '../components/Arama'
import Sidebar from '../components/SideBar'

const AramaPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
      setIsOpen(!isOpen)
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Arama/>
    </>
    
  )
}

export default AramaPage
