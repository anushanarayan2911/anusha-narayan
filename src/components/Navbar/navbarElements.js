import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'

export const Nav = styled.nav`
    background: #ffffff;
    border-width: 2px;
    height: 10vh;
    width: 100vw;
    margin-top: -80 px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    
    @media screen and (max-width: 960 px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0;
    max-width: 1100px;
    color: #000000
`

export const NavLogo = styled(LinkR)`
    color: white;
    max-width: 3%;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 5%;
    
`

export const MobileIcon = styled.div`
    display: none;
    
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 20px;
        right: 5px;
        transform: translate (-100%, -60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #787878;
    }
`

export const NavMenu = styled.ul `
    background: #ffffff;
    width: 80%;
    display: flex;
    justify-content: space-between;
    list-style: none;
    text-align: center;
    margin-right: 5%;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 10vh;
    color: #ffffff;
`

export const NavLinks = styled(LinkR)`
    color: #787878;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    
    &.active {
        border-bottom: 1.5px solid #4b4b4b;
    }
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 0 0;
    padding-right: 0;  
`