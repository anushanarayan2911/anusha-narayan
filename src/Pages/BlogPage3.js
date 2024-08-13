import {React, useState, useEffect} from "react";
import BlogPage3 from "../components/Blog Pages/Blog Page 3"
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'

const RoleofUXinSTEM = () => {
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
        <BlogPage3/>
    </>
  )
}

export default RoleofUXinSTEM