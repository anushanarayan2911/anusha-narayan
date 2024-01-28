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
    position: sticky;
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
    height: 80px;
    z-index: 1;
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
`

export const NavLogo = styled(LinkR)`
    color: white;
    max-width: 5%;
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    
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

export const NavItem = styled.li`
    height: 10vh;
    color: #ffffff;
`

export const NavLinks = styled(LinkR)`
    color: #66ABC6;
    font-family: Runda;
    font-size: 2vw;
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
    width: 100%;
    margin: 0 0 0 0;
    padding-right: 0;  
`