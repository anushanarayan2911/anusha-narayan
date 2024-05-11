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
    justify-content: center;
    align-items: center;
    vertical-align: middle;
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
`
export const Overlay = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
        opacity: 90%;
    }
`

export const ProjectTitle = styled.p`
    color: #787878;
    font-size: 4rem;
    font-weight: 200;
    margin-bottom: 0;
`

export const ProjectCaption = styled.p`
    color: #787878;
    font-size: 1rem;
    font-weight: 100;
`