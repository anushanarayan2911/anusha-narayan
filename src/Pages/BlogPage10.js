import {React, useState} from "react";
import BlogPage10 from "../components/Blog Pages/Blog Page 10";
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'
import { useEffect } from 'react'

const DesigningforComplexDataViz = () => {
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
        <BlogPage10/>
    </>
  )
}

export default DesigningforComplexDataViz