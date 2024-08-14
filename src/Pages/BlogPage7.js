import {React, useState} from "react";
import BlogPage7 from "../components/Blog Pages/Blog Page 7";
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'
import { useEffect } from 'react'

const SuccessfulUXinSTEM = () => {
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
        <BlogPage7/>
    </>
  )
}

export default SuccessfulUXinSTEM