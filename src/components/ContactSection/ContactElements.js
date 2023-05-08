import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const InfoContainer = styled.div`
    background: #ffffff;
    width: 100%;
    height: 100%
    overflow: hidden;

    @media screen and (max-width: 768px) {
        padding: 0px
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 100%;
    width: auto;
    margin-right: 10%;
    margin-left: 10%;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        margin-right: 5%;
        margin-left: 5%;
    }

    @media screen and (max-width: 400px) {
        margin-right: 0%;
        margin-left: 0%;
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

export const InputField = styled.textarea`
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
`
export const BtnLink = styled.input`
    type: submit;
    background-color: red;
`