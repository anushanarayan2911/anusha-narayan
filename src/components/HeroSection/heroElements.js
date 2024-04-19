import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
import {Link as LinkR} from 'react-router-dom' 

export const HeroContainer = styled.div`
    background: #66ABC6;
    display: flex;
    align-items: center;
    width: 100vw;
    position: absolute;
    top: 7.422vh;
    margin-bottom: 7.422vh;

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
    flex-direction: row;
    width: 94vw;
    height: fit-content;  
    margin-left: 6vw;
    margin-top: 8vh;
    background-color: white; 
    border-bottom-left-radius: 3rem;
    border-top-left-radius: 3rem;
    padding-left: 3.33vw;
    padding-right: 3.33vw;
    padding-top: 4.688vh;
    padding-bottom: 4.688vh;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        width: 80vw;
        height: fit-content;
        border-bottom-right-radius: 0rem;
        border-bottom-left-radius: 0rem;
        border-top-right-radius: 3rem;
    }
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: fit-content;
    align-items: center;    

    @media screen and (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        height: fit-content;
    }
`

export const Column1 = styled.div`
    width: 100%;
    height: fit-content;
`
export const Column2 = styled.div`
    width: 100%;
    padding-left: 6.66vw;

    @media screen and (max-width: 768px) {
        margin-top: 4vh;
        display: flex;
        align-items: center;
        padding-left: 0vw;
    }
`

export const Heading = styled.p`
    font-size: 5rem;
    font-weight: 200;
    line-height: 100%;
    color: #66ABC6;
    margin: 0vh;
`

export const Text = styled.p`
    font-size: 1.5rem;
    font-weight: 200;
    line-height: 150%;
    color: #787878;

    @media screen and (max-width: 768px) {
        font-size: 1.2em;
        margin-top: 0vh;
        line-height: 200%;
    }
`

export const BtnRow = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const Btn = styled.div`
    align-items: center;
    justify-content: center;
    margin-right: 2vw;

    @media screen and (max-width: 768px) {
        margin-bottom: 4vh;
    }
`

export const BtnLink = styled(LinkR)`
    border-radius: 4vw;
    border: 0.05rem solid #66ABC6;
    width: 25vw;
    height: fit-content;
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
    height: 80vh;

    @media screen and (max-width: 768px) {
        width: 100%;
        height: auto;
    }
`
