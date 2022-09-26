import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom'

export const InfoContainer = styled.div`
    background-color: #ffffff;
    width: 100%;
    height: 100%;
    overflow: hidden
    
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
    overflow: hidden;

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
    width: 100%;
    overflow: hidden;
    align-items: center;
    margin-left: 10%;
    margin-right: 10%;
`
export const PortfolioRow = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    flex-direction: row;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const Column = styled.div`
    max-width: max-content;
    padding: 10px 10px 10px 10px;
`

export const LinkWrap = styled.nav`
    display: flex;
    align-items: center
`

export const ImageLink = styled(LinkR)`
    background: #ffffff;
`

export const Image = styled.img`
    width: 100%;

    &:hover{
        width: 104%;
        opacity: 60%;
        transition: all 0.3s ease-in-out;
    }
`