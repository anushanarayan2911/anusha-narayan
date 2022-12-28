import React, {useState} from 'react'
import GallerySection from '../components/GallerySection'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'

const Gallery = (id="gallery") => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
      setIsOpen(!isOpen)
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <GallerySection/>
    </>
    
  )
}

export default Gallery