import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const HeroContainer = styled.div`
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    position: absolute;
    z-index: 1;

    :before {
        content: '';
        position: fixed;
        overflow-x: hidden;
        box-sizing: inherit;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), linear-gradient (180 deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
        z-index: 2
    }
`

export const HeroBg = styled.div`
    display: flex;
    z-index: 1;
    background-color: #ffffff;
    height: 100%;
    width: auto;
    margin-right: 0%;
    margin-left: 0%;
    margin-top: 0%;

    @media screen and (max-width: 768px) {
        margin-right: 5%;
        margin-left: 5%;
    }

    @media screen and (max-width: 400px) {
        margin-right: 0%;
        margin-left: 0%;
    }
`

export const Row = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr)
    align-items: left;   border-color: black;
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const LeftCol = styled.div`
    margin-bottom: 0px;
    padding: 0 0% 0 0%;
    grid-area: col1;  
    width: 50vw;

    @media screen and (max-width: 768px) {
        padding: 10% 0 0 0;
        align-items: center;
        justify-content: center;
    }
`

export const RightCol = styled.div`
    margin-bottom: 0px;
    padding: 0 0% 0 0%;
    grid-area: col2;
    width: 50vw;

    @media screen and (max-width: 768px) {
        padding: 10% 0 0 0;
        align-items: center;
        justify-content: center;
    }
`

export const Paragraph = styled.p`
    max-width: max-content;
    margin-top: 10%;
    font-size: 100%;
    line-height: 150%;
    font-weight: 200;
    color: #787878;
    text-align: justify;   
`

export const Image = styled.img`
    width: 100%;
`