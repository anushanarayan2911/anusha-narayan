import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'

export const Nav = styled.nav`
    background: #ffffff;
    height: 10vh;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    position: fixed;
    margin-right: 5%;
    z-index: 10;
    
    @media screen and (max-width: 960 px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2vh;
    z-index: 1;
    width: 90vw;
    margin-left: 5vw;
    margin-right: 5vw;
`

export const NavLogo = styled(LinkR)`
    max-width: 5vw;
    justify-self: flex-start;
    cursor: pointer;
    align-items: center; 
`

export const MobileIcon = styled.div`
    display: none;
    
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 3vh;
        right: 5vw;
        transform: translate (-100%, -60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #66ABC6;
    }

    @media screen and (max-width: 400px) {
        display: block;
        position: absolute;
        top: 3vh;
        right: 5vw;
        width: 10vw;
        transform: translate (-100%, -60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #66ABC6;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    width: 72vw;
    align-items: center;
    list-style: none;
    text-align: center;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        display: none;
    }  
`

export const NavItem = styled.li`
    margin-top: 
    color: #ffffff;
    align-items: center;
`

export const NavLinks = styled(LinkR)`
    color: #66ABC6;
    font-family: Runda;
    font-size: 1.5em;
    font-style: light;
    font-weight: 200;
    line-height: normal;
    text-transform: lowercase;
    text-decoration: none;

    &:hover{
        text-decoration: underline;
        text-decoration-thickness: 1px;
        text-underline-offset: 50%;
        border-bottom-width: 2,
    }
`

export const Img = styled.img`
    width: 5vw;
    margin: 0 0 0 0;
    padding-right: 0;  
`