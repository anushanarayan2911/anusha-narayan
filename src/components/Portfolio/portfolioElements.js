import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom'

export const InfoContainer = styled.div`
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: relative;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), linear-gradient (180 deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    }

    @media screen and (max-width: 768px) {
        height: 100%;
    }
`
export const HeroBg = styled.div`
    display: flex;
    z-index: 1;
    background-color: #66ABC6;
    height: 100%;
    width: 100vw;
    align-items: center;
`

export const WhiteBg = styled.div`
    display: flex;
    z-index: 2;
    background-color: #ffffff;
    width: 84vw;
    height: 92vh;
    margin-left: 8vw;
    margin-rigth: 8vw;
    margin-top: 8vh;
    border-top-left-radius: 4vw;
    border-top-right-radius: 4vw;

    @media screen and (max-width: 768px) {
        margin-top: 4vh;
        margin-left: 4vw;
        width: 90vw;
        height: 92vh;
    }
`

export const WorkContainer = styled.div`
    display: flex;
    flex-direction: column
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 84vw;


    @media screen and (max-width: 768px) {
        flex-direction: column;
        width: 90vw;
        height: fit-content;
    }
`

export const Column1 = styled.div`
    width: 30vw;
    padding-left: 2vw;
    padding-right: 2vw;

    @media screen and (max-width: 768px) {
        width: 84vw;
        padding-top: 1vh;
        padding-right: 4vw
    }
`

export const Column2 = styled.div`
    width: 30vw;
    padding-left: 2vw;
    padding-right: 2vw;

    @media screen and (max-width: 768px) {
        width: 84vw;
        padding-top: 1vh;
        padding-right: 4vw
    }
`

export const Column3 = styled.div`
    width: 30vw;
    padding-left: 2vw;
    padding-right: 2vw;

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
        opacity: 80%;
    }
`
export const HeaderCaption = styled.p`
    color: #787878;
    font-size: 2em;
    font-weight: 300;
    width: 100%;
    height: 50%;
    top: 25%;
    position: absolute;
    text-align: center;
    justify-content: center;
    align-items: center;
`

