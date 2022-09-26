import React, {useState} from 'react'
import Portfolio from '../components/Portfolio'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'

const PortfolioPage = (id="portfolio") => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
      setIsOpen(!isOpen)
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Portfolio/>
    </>
    
  )
}

export default PortfolioPage