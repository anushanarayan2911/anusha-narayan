import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom'

export const InfoContainer = styled.div`
    background: #66ABC6;
    display: flex;
    align-items: center;
    width: 100vw;
    position: absolute;
    top: 7.422vh;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), linear-gradient (180 deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    }
`
export const HeroBg = styled.div`
    display: flex;
    flex-direction: row;
    z-index: 1;
    width: 100vw;
    height: 100%;

    @media screen and (max-width: 768px) {
        align-items: center;
    }
`

export const WhiteBg = styled.div`
    display: flex;
    flex-direction: column;
    width: 84vw;
    height: fit-content;
    margin-left: 6vw;
    margin-top: 8vh;
    background-color: #ffffff;
    border-top-left-radius: 3rem;
    border-top-right-radius: 3rem;
    padding: 2rem;
    gap: 2vh;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        width: 80vw;
        height: 100%;
        margin-left: 3vw;
    }
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: fit-content;
    align-items: center;    
    justify-content: space-between;
    gap: 1vw;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        height: fit-content;
    }
`

export const Column = styled.div`
    width: 30vw;
    margin-left: 2rem;

    @media screen and (max-width: 768px) {
        width: 84vw;
        padding-top: 1vh;
        padding-right: 4vw
    }
`

export const LinkWrap = styled.nav`
    display: flex;
    align-items: center
    overflow-x: no-scroll;
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

export const Container = styled.div`
    position: relative;
    width: fit-content;
    height: fit-content;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
`
export const Overlay = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
    width: 100%;
    opacity: 0%;
    transition: .5s ease;
    background-color: white;
    &: hover{
        opacity: 80%;
    }
`
export const HeaderCaption = styled.p`
    color: #787878;
    font-size: 2em;
    font-weight: 300;
    padding: 1rem;
    position: absolute;
    text-align: center;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px){
        font-size: 4em;
        top: 32%;
    }
`

