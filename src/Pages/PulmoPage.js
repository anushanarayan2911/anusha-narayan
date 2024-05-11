import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'
import { useEffect } from 'react'
import PulmoComponent from '../components/Pulmo'

const Pulmo = () => {
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
      <PulmoComponent/>
    </>
  )
}

export default Pulmo
