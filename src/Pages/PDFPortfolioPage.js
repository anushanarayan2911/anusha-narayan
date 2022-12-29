import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'
import PDFPortfolioComponent from '../components/PDFPortfolio'

const PDFPortfolio = (id="PDFPortfolioPage") => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
      setIsOpen(!isOpen)
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <PDFPortfolioComponent/>
    </>
  )
}

export default PDFPortfolio