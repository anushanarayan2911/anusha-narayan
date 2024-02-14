import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
import {Link as LinkR} from 'react-router-dom' 

export const HeroContainer = styled.div`
    background: #66ABC6;
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
    width: 92vw;
    height: 80vh;
    margin-left: 8vw;
    margin-top: 8vh;
    border-top-left-radius: 4vw;
    border-bottom-left-radius: 4vw;

    @media screen and (max-width: 768px) {
        margin-top: 16vh;
        margin-left: 4vw;
        width: 90vw;
        height: 100%;
        border-top-left-radius: 4vw;
        border-top-right-radius: 4vw;
        border-bottom-left-radius: 0vw;
    }
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;


    @media screen and (max-width: 768px) {
        flex-direction: column;
        width: 90vw;
        height: fit-content;
    }
`

export const Column1 = styled.div`
    width: 50vw;
    padding-left: 4vw;
    padding-right: 2vw;
    padding-top: 2vh;

    @media screen and (max-width: 768px) {
        width: 84vw;
        padding-top: 1vh;
        padding-right: 4vw
    }
`
export const Column2 = styled.div`
    width: 50%;
    padding-top: 10vh

    @media screen and (max-width: 768px) {
        width: 84vw;
        margin-top: 4vh;
    }
`

export const Heading = styled.h1`
    font-size: 3.6em;
    font-weight: 200;
    color: #66ABC6;
`

export const Text = styled.p`
    font-size: 1.2em;
    line-height: 200%;
    font-weight: 200;
    color: #787878;

    @media screen and (max-width: 768px) {
        font-size: 1.2em;
        margin-top: 0vh;
        line-height: 200%;
    }
`

export const BtnRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 50vw;
    margin-top: 6vh;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        width: 84vw;
    }
`

export const BtnCol1 = styled.div`
    width: 16vw;
    height: 6vh;

    @media screen and (max-width: 768 px) {
        height: 1vh;
    }
`
export const BtnCol2 = styled.div`
    width: 16vw;
    height: 6vh;

    @media screen and (max-width: 768 px) {
        height: 1vh;
    }
`


export const Btn = styled.div`
    align-items: center;
    justify-content: center;
    position: absolute;
`

export const BtnLink = styled(LinkR)`
    border-radius: 4vw;
    border: 0.05em solid #66ABC6;
    width: 25vw;
    align-itmes: center;
    justify-content: center;
    text-align: center;
    background: white;
    whitespace: nowrap;
    padding-left: 4vw;
    padding-right: 4vw;
    padding-top: 1vh;
    padding-bottom: 1vh;
    color: #66ABC6;
    font-size: 1.2em;
    font-weight: 200;
    text-decoration: none;

    @media screen and (max-width: 768px) {
        padding-top: 0.5vh;
        padding-bottom: 0.5vh;
    }
`

export const Img = styled.img`
    height: 96%;
    padding-top: 4%;

    @media screen and (max-width: 768px) {
        width: 84vw;
    }
`
