import {React, useState} from "react";
import BlogPage6 from "../components/Blog Pages/Blog Page 6";
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'
import { useEffect } from 'react'

const SustainableDigitalDesignPractices = () => {
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
        <BlogPage6/>
    </>
  )
}

export default SustainableDigitalDesignPractices