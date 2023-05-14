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

export const TitleImage = styled.img`
    width: 30%;
    padding: 0% 0% 0% 35%;
`

export const Container = styled.div`
    position: relative;
    justify-content: center;
    width: 100%;
`

export const Overlay = styled.div`
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 100%;
    opacity: 80%;
`

export const Title = styled.p`
    font-size: 450%;
    font-family: runda;
    font-weight: 100;
    color: #787878;
    padding: 10% 11% 0;
`

export const Caption = styled.p`
    position: absolute;
    top: 75%;
    left: 12.5%;
    font-size: 200%;
    font-family: runda;
    font-weight: 100;
    width: 75%;
    padding: 0% 0% 10%;
    color: #787878;
    text-align: center;
    justify-content: center;
    align-items: center;
`

export const Text = styled.p`
    font-size: 90%;
    font-weight: 100;
    color: #787878;
    text-align: center;
    justify-content: center;
    align-items: center;
    line-height: 150%;
`

export const Divider = styled.span`
    width: 100%;
    opacity: 50%;
    background-color: #787878;
    height: 1px;
`

export const Row = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr)
    align-items: center;   border-color: black;
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    
    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
        align-items: center;
    }
`

export const LeftCol = styled.div`
    margin-bottom: 0px;
    padding: 0 0% 0 0%;
    grid-area: col1;  

    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 0 0% 0 5%;
        align-items: center;
        justify-content: center;
    }
`

export const RightCol = styled.div`
    margin-bottom: 0px;
    padding: 0 0 0 0;
    grid-area: col2;
    align-itmes: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        padding: 5% 0 0 0;
        align-items: center;
        justify-content: center;
    }
`

export const Image = styled.img`
    width: 100%;
`