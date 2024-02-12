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
              <SidebarLink to={'/Portfolio'} onClick={toggle}>
                my work
              </SidebarLink>
              <SidebarLink to={'/Gallery'} onClick={toggle}>
                gallery
              </SidebarLink>
              <SidebarLink to={'/Contact'} onClick={toggle}>
                contact
              </SidebarLink>
          </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
