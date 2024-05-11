import styled from 'styled-components';
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
    padding-bottom: 8vh;
`

export const Row = styled.div`
    width: 72vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 10vw;
    padding-right: 10vw;
    gap: 2vw;
    margin-bottom: 2vh;
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const ImageContainer = styled.div`
    position: relative;
`

export const ImageLink = styled(LinkR)`
    width: 50%;
`

export const Image = styled.img`
    width: 100%;

    @media screen and (max-width: 768px) {
        width: 100%;
        margin-left: 0vw;
    }

    &: hover{
        opacity: 30%;
        transition: 0.5s ease;
    }
`