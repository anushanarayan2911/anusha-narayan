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
              <SidebarLink to={'/About'} onClick={toggle}>
                ABOUT
              </SidebarLink>
              <SidebarLink to={'/Portfolio'} onClick={toggle}>
                PORTFOLIO
              </SidebarLink>
              <SidebarLink to={'/Gallery'} onClick={toggle}>
                GALLERY
              </SidebarLink>
              <SidebarLink to={'/Contact'} onClick={toggle}>
                CONTACT
              </SidebarLink>
          </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
