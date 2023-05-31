import React, {useState} from 'react'
import Pulmo2Component from '../components/Pulmo-2'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'
import { useEffect } from 'react'

const Pulmo1 = () => {
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
      <Pulmo2Component/>
    </>
  )
}

export default Pulmo1
