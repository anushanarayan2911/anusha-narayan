import styled, { css } from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const InfoContainer = styled.div`
    background: #ffffff;
    width: 100%;
    height: 100%
    overflow: hidden;
    align-items: center;

    @media screen and (max-width: 768px) {
        padding: 0px
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 100%;
    width: auto;
    margin-right: 10%;
    margin-left: 10%;
    overflow: hidden;
    align-items: center;

    @media screen and (max-width: 768px) {
        margin-right: 5%;
        margin-left: 5%;
    }

    @media screen and (max-width: 400px) {
        margin-right: 0%;
        margin-left: 0%;
    }
`
export const NavLogo = styled(LinkR)`
    color: white;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`

export const InfoRow = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;
    max-height: max-content;
`
export const PortfolioGrid = styled.div`
    width: 70%;
    overflow: hidden;
    margin: 0 15% 0 15%;
    align-items: center;
`

export const Column = styled.div`
    max-width: 50%;
    padding: 0px 0 0px 0px;
`

export const ImageRow = styled.div`
    width: 100%;
`

export const Image = styled.img`
    width: 50%;
    padding: 0% 0% 0% 25%;
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
    opacity: 80%;
`

export const Title = styled.p`
    font-size: 4em;
    font-family: runda;
    font-weight: 100;
    color: #787878;
    padding: 15% 0 0 0;
`

export const Caption = styled.p`
    font-size: 2em;
    font-family: runda;
    font-weight: 100;
    color: #787878;
    align-text: center;
`

export const Row = styled.div`
    display: grid;
    max-height: 50%;
`