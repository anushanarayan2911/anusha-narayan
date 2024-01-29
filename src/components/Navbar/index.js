import React, {useEffect, useState} from 'react'
import { animateScroll as scroll } from 'react-scroll/modules'
import {Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks, 
  Img 
} from './navbarElements'
import {FaBars} from 'react-icons/fa'
import About from '../../Pages/About'

const Navbar = ({toggle, id}) => {
  const [scrollNav, setScrollNav] = useState(false);
  
  const changeNav = () => {
    if(window.scrollY > 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav id={id}>
        <NavbarContainer>
          <NavLogo to={"/"}>
            <Img src={require("../../Visuals/Home/Logo.png")}></Img>
          </NavLogo>    
          <NavLinks to={"/Portfolio"}>my work</NavLinks>
          <NavLinks to={"/Gallery"}>gallery</NavLinks>
          <NavLinks to={"/Contact"}>contact</NavLinks>
        </NavbarContainer>
        
      </Nav>
    </>
  )
}

export default Navbar
