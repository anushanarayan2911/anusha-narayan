import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const HeroContainer = styled.div`
    background: white;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    position: absolute;
    align-items: center;
    padding-top: 24vh;
    padding-bottom: 8vh;
`

export const Col = styled.div`
    width: 72vw;
    margin-top: 4vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8vh;
`

export const LinkWrap = styled.a`
    width: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2vw;
    margin-below: 8vh;
    text-decoration: none;
    color: #787878;
    font-size: 1.5rem;
    font-weight: 100;
    text-align: justify;
    line-height: 150%;

    &:hover{
        text-decoration: underline;
        text-decoration-thickness: 1px;
        text-underline-offset: 50%;
        border-bottom-width: 2,
    }
    
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const Text = styled.p`
    color: #787878;
    font-size: 1.75rem;
    font-weight: 100;
    text-align: justify;
    line-height: 150%;
`
export const Image = styled.img`
    width: 10%;

    @media screen and (max-width: 768px) {
        width: 100%;
        margin-left: 0vw;
    }
`