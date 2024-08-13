import {React, useState, useEffect} from "react";
import BlogPage4 from "../components/Blog Pages/Blog Page 4";
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'

const InnovationintheDigitalSpace = () => {
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
        <BlogPage4/>
    </>
  )
}

export default InnovationintheDigitalSpace