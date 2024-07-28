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
              <SidebarLink to={'/MyWork'} onClick={toggle}>
                my work
              </SidebarLink>
              <SidebarLink to={'/Gallery'} onClick={toggle}>
                gallery
              </SidebarLink>
              <SidebarLink to={'/Blog'} onClick={toggle}>
                blog
              </SidebarLink>
              <SidebarLink to={'/Coaching'} onClick={toggle}>
                coaching
              </SidebarLink>
          </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
