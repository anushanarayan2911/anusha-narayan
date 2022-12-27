import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import UMe from '../components/U Me'
import Sidebar from '../components/SideBar'
import { useEffect } from 'react'

const UMePage = () => {
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
      <UMe/>
    </>
  )
}

export default UMePage
