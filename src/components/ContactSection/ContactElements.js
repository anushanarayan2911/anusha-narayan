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

export const TextHeading = styled.p`
    color: #787878;
    font-size: 1.5em;
    font-weight: 200;
    letter-spacing: 1.4px;
    text-align: left;
`

export const Form = styled.form`
    margin-left: 8%;
    autocomplete: off;
`

export const Label = styled.label`
    background-color: #ffffff;
`

export const SingleInputField = styled.input`
    width: 90%;
    border: none;
    border-bottom: 1px solid #787878; 
    outline: none;
    color: #787878;
    font-family: runda;
    font-size: 1.5em;
    font-weight: 100;
`

export const MultiInputField = styled.textarea`
    width: 90%;
    border: none;
    border-bottom: 1px solid #787878; 
    outline: none;
    color: #787878;
    font-family: runda;
    font-size: 1.5em;
    font-weight: 100;
`

export const Btn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin-left: 25%;
`
export const BtnLink = styled.input`
    type: submit;
    border-radius: 50px;
    width: 15vw;
    align-itmes: center;
    justify-content: center;
    text-align: center;
    background: #EFEFEF;
    whitespace: nowrap;
    padding: 5% 10% 5% 10%;
    box-shadow: -1px -1px 5px rgba(0, 0, 0, 0.25);
    color: #787878;
    font-size: 16px;
    font-weight: 200;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #ffffff;
        color: #787878
    }
`