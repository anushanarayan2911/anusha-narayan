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
import AboutPage from '../../Pages/AboutPage'

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
          <NavLogo to="/" onClick={toggleHome}>
            <Img src={require("../../Visuals/Home/Images/Logo.png")}/>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars/>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to={"/AboutPage"} 
                smooth={true} 
                duration={500}
                spy={true}
                exact
                offset={-100}
              >ABOUT</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to={"/PortfolioPage"}
              smooth={true} 
              duration={500}
              spy={true}
              exact='true'
              offset={-80}>PORTFOLIO</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to={"/GalleryPage"}
              smooth={true} 
              duration={500}
              spy={true}
              exact='true'
              offset={-80}>GALLERY</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to={"/ContactPage"}
              smooth={true} 
              duration={500}
              spy={true}
              exact='true'
              offset={-80}>CONTACT</NavLinks>
            </NavItem>
          </NavMenu>
      </Nav>
    </>
  )
}

export default Navbar
