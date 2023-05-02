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
    display: flex;
    z-index: 1;
    background-color: #ffffff;
    height: 80%;
    width: auto;
    margin-right: 5%;
    margin-left: 5%;
    margin-top: 5%;

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
    padding: 0 0 0 0;
    grid-area: col1;    


    @media screen and (max-width: 768px) {
        padding: 10% 0 0 0;
        align-items: center;
        justify-content: center;
    }
`

export const RightCol = styled.div`
    margin-bottom: 0px;
    padding: 0 5% 0 10%;
    grid-area: col2;

    @media screen and (max-width: 768px) {
        padding: 10% 0 0 0;
        align-items: center;
        justify-content: center;
    }
`

export const Subtitle = styled.p`
    max-width: max-content;
    font-size: 4em;
    line-height: 1.5em;
    font-weight: 200;
    color: #787878;
    text-align: center;   
`

export const Image = styled.img`
    width: 100%;
`