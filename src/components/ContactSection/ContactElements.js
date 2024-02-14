import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const HeroContainer = styled.div`
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

    @media screen and (max-width: 768px) {
        height: 100%
    }
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

export const TextHeading = styled.p`
    color: #66ABC6;
    font-size: 1em;
    font-weight: 200;
    text-align: left;
`

export const Form = styled.form`
    margin-left: 4vw;
    margin-top: 4vh;
    autocomplete: off;
`

export const Label = styled.label`
    background-color: #ffffff;
`

export const SingleInputField = styled.input`
    width: 84vw;
    margin-bottom: 4vh;
    border: none;
    border-bottom: 0.1vh solid #66ABC6; 
    outline: none;
    color: #787878;
    font-family: runda;
    font-size: 1em;
    font-weight: 100;
`

export const MultiInputField = styled.textarea`
    width: 84vw;
    margin-bottom: 4vh;
    border: none;
    border-bottom: 0.1vh solid #66ABC6; 
    outline: none;
    color: #787878;
    font-family: runda;
    font-size: 1em;
    font-weight: 100;
`

export const BtnRow = styled.div`
    align-items: center;
    justify-content: center;
    width: 100vw;
    margin-bottom: 8vh;
    background-color: red;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        width: 84vw;
        margin-top: 8vh;
    }
`

export const Btn = styled.div`
    align-items: center;
    justify-content: center;
    position: absolute;
    padding-left: 35vw;
    width: 100vw;

    @media screen and (max-width: 768px) {
        width: 84vw;
        padding-left: 30vw;
    }
`

export const BtnLink = styled(LinkR)`
    border-radius: 4vw;
    border: 0.05em solid #53C8E5;
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
    color: #53C8E5;
    font-size: 1.2em;
    font-weight: 200;
    text-decoration: none;

    @media screen and (max-width: 768px) {
        padding-top: 0.5vh;
        padding-bottom: 0.5vh;
    }
`