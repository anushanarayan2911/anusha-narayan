import {React, useState} from "react";
import BlogPage5 from "../components/Blog Pages/Blog Page 5";
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'
import { useEffect } from 'react'

const EthicalConsiderationsofTechEntrepreneurship = () => {
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
        <BlogPage5/>
    </>
  )
}

export default EthicalConsiderationsofTechEntrepreneurship