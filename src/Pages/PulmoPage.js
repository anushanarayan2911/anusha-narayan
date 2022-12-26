import React, {useState} from 'react'
import Pulmo from '../components/Pulmo'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'

const PulmoPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
      setIsOpen(!isOpen)
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Pulmo/>
    </>
  )
}

export default PulmoPage
