import React, {useState} from 'react'
import MyWorkSection from '../components/My Work'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'

const MyWork = (id="mywork") => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
      setIsOpen(!isOpen)
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <MyWorkSection/>
    </>
    
  )
}

export default MyWork