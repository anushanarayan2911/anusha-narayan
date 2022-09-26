import React from 'react'
import { SidebarContainer, 
  Icon, 
  CloseIcon, 
  SidebarWrapper, 
  SidebarMenu, 
  SidebarLink
} from './sidebarElements'


const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
          <CloseIcon/>
      </Icon>
      <SidebarWrapper>
          <SidebarMenu>
              <SidebarLink to={'/AboutPage'} onClick={toggle}>
                ABOUT
              </SidebarLink>
              <SidebarLink to={'/PortfolioPage'} onClick={toggle}>
                PORTFOLIO
              </SidebarLink>
              <SidebarLink to={'/GalleryPage'} onClick={toggle}>
                GALLERY
              </SidebarLink>
              <SidebarLink to={'/ContactPage'} onClick={toggle}>
                CONTACT
              </SidebarLink>
          </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
