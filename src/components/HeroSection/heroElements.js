import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const HeroContainer = styled.div`
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
    width: 100vw;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), linear-gradient (180 deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
        z-index: 2
    }
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0; 
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const Row = styled.div`
    position: absolute;
    width: 80%;
    top: 0%;
    left: 10%;
    right: 10%;
    background-colour: #FF0000;
`

export const LeftCol = styled.div`
    position: absolute;
    top: 30%;
    right: 0;
    bottom: 0; 
    left: 0%;
    width: 50%;
    backgroundolour: #FF0000;
`

export const RightCol = styled.div`
    position: fixed;
    top: 12%;
    right: 0;
    bottom: 0; 
    left: 50%;
    width: 40%;
    background-colour: #FF0000;
`

export const Subtitle = styled.p`
    max-width: max-content;
    font-size: 4em;
    line-height: 1.5em;
    font-weight: 300;
    color: #787878;
    text-align: center;   
`

export const Image = styled.img`
    width: 100%;
`