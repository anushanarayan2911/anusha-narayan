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
    width: 60%;
    margin-right: 20%;
    margin-left: 20%;
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

export const LinkWrap = styled.nav`
    display: flex;
    align-items: center
`

export const ImageLink = styled(LinkR)`
    background: #ffffff;
`

export const Image = styled.img`
    width: 100%;
`