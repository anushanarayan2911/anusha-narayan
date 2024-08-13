import {React, useState} from "react";
import BlogPage1 from "../components/Blog Pages/Blog Page 1";
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'
import { useEffect } from 'react'

const BringingHCDtoDigitalRealm = () => {
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
        <BlogPage1/>
    </>
  )
}

export default BringingHCDtoDigitalRealm