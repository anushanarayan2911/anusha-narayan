import React, {useState} from 'react'
import PDFPortfolio from '../components/PDFPortfolio'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'

const PDFPortfolioPage = (id="PDFPortfolioPage") => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
      setIsOpen(!isOpen)
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <PDFPortfolio/>
    </>
  )
}

export default PDFPortfolioPage