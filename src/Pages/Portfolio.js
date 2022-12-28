import React, {useState} from 'react'
import PortfolioSection from '../components/Portfolio'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'

const Portfolio = (id="portfolio") => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
      setIsOpen(!isOpen)
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <PortfolioSection/>
    </>
    
  )
}

export default Portfolio