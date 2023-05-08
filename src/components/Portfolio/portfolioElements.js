import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom'

export const InfoContainer = styled.div`
    background-color: #ffffff;
    width: 100%;
    height: 100%;
    overflow-x: hidden
    
    @media screen and (max-width: 768px) {
        padding: 0px
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    background-color: #ffffff;
    height: 100%;
    width: auto;
    margin-right: 10%;
    margin-left: 10%;
    overflow-x: no-scroll;
    @media screen and (max-width: 768px) {
        margin-right: 5%;
        margin-left: 5%;
    }
    @media screen and (max-width: 400px) {
        margin-right: 0%;
        margin-left: 0%;
    }
`

export const InfoRow = styled.div`
    display: grid;
    margin-top: 0px;
    grid-auto-columns: minmax(auto, 1fr)
    align-items: left;
    overflow: hidden;
`

export const TopLine = styled.p`
    color: #4b4b4b;
    font-size: 30px;
    font-weight: 200;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 30px;
`

export const PortfolioGrid = styled.div`
    width: 80%;
    overflow-x: none;
    align-items: center;
    margin-left: 10%;
    margin-right: 10%;
    overflow-x: no-scroll;
`
export const PortfolioRow = styled.div`
    display: flex;
    width: 100%;
    overflow-x: no-scroll;
    justify-content: space-between;
    flex-direction: row;
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const Column = styled.div`
    max-width: max-content;
    padding: 10px 10px 10px 10px; 
    overflow-x: no-scroll;
`

export const LinkWrap = styled.nav`
    display: flex;
    align-items: center
    overflow-x: no-scroll;
`
export const Container = styled.div`
    position: relative;
    justify-content: center;
    align-items: center;
    vertical-align: middle;

`

export const Overlay = styled.div`
    position: absolute;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    top: 0%;
    bottom: 0;
    left: 0%;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: #ffffff;

    &: hover{
        opacity: 70%;
    }
`
export const HeaderCaption = styled.p`
    color: #787878;
    font-size: 2em;
    font-weight: 200;
    width: 100%;
    bottom: 37%;
    position: absolute;
    text-align: center;
    justify-content: center;
    align-items: center;
`

export const SecondCaption = styled.p`
    color: #787878;
    font-size: 0.9em;
    font-weight: 200;
    position: absolute;
    text-align: center;
    top: 55%;
    left: 5%;
    right: 5%;
`
export const ImageLink = styled(LinkR)`
    background: #ffffff;
    overflow: no-scroll;
`

export const Image = styled.img`
    width: 100%;
    height: auto;
    display: block;
    overflow-x: no-scroll;
`