import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
import {Link as LinkR} from 'react-router-dom' 

export const HeroContainer = styled.div`
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
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
`

export const HeroBg = styled.div`
    display: flex;
    z-index: 1;
    background-color: #66ABC6;
    height: 100vh;
    width: 100vw;

    @media screen and (max-width: 768px) {
        margin-right: 5%;
        margin-left: 5%;
    }

    @media screen and (max-width: 400px) {
        margin-right: 0%;
        margin-left: 0%;
    }
`

export const WhiteBg = styled.div`
    display: flex;
    z-index: 2;
    background-color: #ffffff;
    width: 92vw;
    height: 80vh;
    margin-left: 8vw;
    margin-top: 5vh;
    border-top-left-radius: 4vw;
    border-bottom-left-radius: 4vw;
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
    margin-left: 4vw;
    margin-top: -4vh;
    padding: 0 0 0 0;
    grid-area: col1; 
    align-items: left; 

    @media screen and (max-width: 768px) {
        padding: 10% 0 0 0;
        align-items: center;
    }
`
export const LeftCol2 = styled.div`
    margin-left: 4vw;
    margin-top: 0;
    padding: 0 0 0 0;
    grid-area: col1; 
    align-items: left; 

    @media screen and (max-width: 768px) {
        padding: 10% 0 0 0;
        align-items: center;
    }
`

export const RightCol = styled.div`
    grid-area: col2;
    margin-left: 0;

    @media screen and (max-width: 768px) {
        padding: 10% 0 0 0;
        align-items: center;
        justify-content: center;
    }
`

export const Title = styled.p`
    font-size: 4em;
    font-weight: 100;
    color: #66ABC6;
    text-align: left; 
    margin-left: 0vw;
    margin-top: 10vh;
     
`

export const Text = styled.p`
    max-width: max-content;
    font-size: 1.5em;
    line-height: 150%;
    font-weight: 400;
    color: #787878;
    text-align: left;  
    width: 50vw;
`

export const Image = styled.img`
    width: 30vw;
    margin-top: 3vh;
`

export const Btn = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
`

export const BtnLink = styled(LinkR)`
    border-radius: 4em;
    border: 0.05em solid #66ABC6;
    width: 15vw;
    align-itmes: center;
    justify-content: center;
    text-align: center;
    background: white;
    whitespace: nowrap;
    padding: 5% 10% 5% 10%;
    color: #66ABC6;
    font-size: 1em;
    font-weight: 200;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #66ABC6;
        color: white;
    }
`