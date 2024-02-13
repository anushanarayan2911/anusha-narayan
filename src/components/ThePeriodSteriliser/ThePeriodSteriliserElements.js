import styled, { css } from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const HeroContainer = styled.div`
    background: #F5D5E1;
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
    flex-direction: column;
    z-index: 1;
    background-color: #F5D5E1;
    height: auto;
    width: 100vw;
    align-items: center;
`

export const RightWhiteBg = styled.div`
    display: flex;
    z-index: 1;
    background-color: #ffffff;
    width: 92vw;
    height: auto;
    margin-left: 8vw;
    margin-top: 100vh;
    border-top-left-radius: 4vw;
    border-bottom-left-radius: 4vw;

    @media screen and (max-width: 768px) {
        margin-top: 16vh;
        margin-left: 4vw;
        width: 90vw;
        height: 100%;
        border-top-left-radius: 4vw;
        border-top-right-radius: 4vw;
        border-bottom-left-radius: 4vw;
        border-bottom-right-radius: 4vw;
    }
`

export const LeftWhiteBg = styled.div`
    display: flex;
    z-index: 1;
    background-color: #fff;
    width: auto;
    max-width: 92vw;
    height: auto;
    margin-top: 16vh;
    margin-left: -8vw;
    border-top-right-radius: 4vw;
    border-bottom-right-radius: 4vw;

    @media screen and (max-width: 768px) {
        margin-top: 4vh;
        margin-left: 4vw;
        width: 90vw;
        height: 100%;
        border-top-left-radius: 4vw;
        border-top-right-radius: 4vw;
        border-bottom-left-radius: 4vw;
        border-bottom-right-radius: 4vw;
    }
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    align-items: center;

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

    @media screen and (max-width: 768px) {
        width: 84vw;
        padding-top: 1vh;
        padding-right: 4vw
    }
`
export const Column2 = styled.div`
    width: 50vw

    @media screen and (max-width: 768px) {
        width: 84vw;
        margin-top: 4vh;
    }
`

export const SingleCol = styled.div`
    width: 80vw;
    margin-left: 4vw;
    margin-top: 4vh;

    @media screen and (max-width: 768px) {
        width: 84vw;
        margin-top: 4vh;
    }
`

export const Heading = styled.h1`
    font-size: 3.6em;
    font-weight: 200;
    color: #E491AF;
`

export const Text = styled.p`
    font-size: 1.2em;
    line-height: 200%;
    font-weight: 200;
    color: #787878;
    margin-top: -2vh;
    margin-bottom: 4vh;

    @media screen and (max-width: 768px) {
        font-size: 1.2em;
        margin-top: 0vh;
        line-height: 200%;
    }
`

export const Img1 = styled.img`
    height: 80vh;

    @media screen and (max-width: 768px) {
        width: 40vw;
        height: 100%;
    }
`
export const Img2 = styled.img`
    width: 80vw;

    @media screen and (max-width: 768px) {
        width: 80vw;
        height: 100%;
    }
`
