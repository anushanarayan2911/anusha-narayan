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
          <MobileIcon onClick={toggle}>
            <FaBars style={{width:"3vw"}}/>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to={"/MyWork"}>my work</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to={"/Gallery"}>gallery</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to={"/Blog"}>blog</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to={"/Coaching"}>coaching</NavLinks>
            </NavItem>
          </NavMenu>
          
        </NavbarContainer>
        
      </Nav>
    </>
  )
}

export default Navbar
