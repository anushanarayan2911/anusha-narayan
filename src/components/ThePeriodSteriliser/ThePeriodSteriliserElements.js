import styled, { css } from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const InfoContainer = styled.div`
    background: #F5D5E1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
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
    background-color: #F5D5E1;
    height: 100%;
    width: 100vw;
    align-items: center;
`

export const WhiteBg = styled.div`
    display: flex;
    z-index: 2;
    background-color: #ffffff;
    width: 92vw;
    height: 72vh;
    margin-left: 8vw;
    margin-top: 4vh;
    margin-bottom: 4vh;
    border-top-left-radius: 4vw;
    border-bottom-left-radius: 4vw;

    @media screen and (max-width: 768px) {
        margin-top: 4vh;
        margin-left: 4vw;
        width: 90vw;
        height: 100%;
        border-top-left-radius: 4vw;
        border-top-right-radius: 4vw;
        border-bottom-left-radius: 0vw;
    }
`