import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const HeroContainer = styled.div`
    background: white;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    position: absolute;
    align-items: center;
    padding-top: 12vh;
`

export const Row = styled.div`
    width: 75vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 10vw;
    padding-right: 10vw;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const Column = styled.div`
    width: 20vw;
    display: flex;
    flex-direction: column;
    gap: 2vh;

    @media screen and (max-width: 768px) {
        width: 80vw;
        align-items: center;
    }
`

export const BlogList = styled.div`
    width: 20vw;
    display: flex;
    flex-direction: column;
    gap: 4.8vh;

    @media screen and (max-width: 768px) {
        width: 80vw;
        align-items: center;
        gap: 2vh;
    }
`

export const HeaderText = styled.p`
    color: #66ABC6;
    font-size: 1rem;
    font-weight: 100;
    text-align: left;
    line-height: 150%;
    text-decoration: underline:
    text-decoration-thickness: 1px #66ABC6;
    text-underline-offset: 50%;
    border-bottom-width: 2;
`

export const Text = styled.p`
    color: #787878;
    font-size: 1rem;
    font-weight: 100;
    text-align: justify;
    line-height: 150%;
`

export const BlogTitle = styled(LinkR)`
    color: #787878;
    font-family: Runda;
    font-size: 1rem;
    font-style: light;
    font-weight: 100;
    line-height: 150%;
    text-decoration: none;

    &:hover{
        text-decoration: underline;
        text-decoration-thickness: 1px;
        text-underline-offset: 50%;
        border-bottom-width: 2,
    }
`