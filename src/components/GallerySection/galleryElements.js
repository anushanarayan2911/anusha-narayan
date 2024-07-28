import styled, {css} from 'styled-components';
import {Link as LinkR} from 'react-router-dom'


export const HeroContainer = styled.div`
    background: white;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    position: absolute;
    align-items: center;
    padding-top: 16vh;
`

export const Row = styled.div`
    width: 80vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 12vw;
    padding-right: 10vw;
    gap: 2vw;
    margin-bottom: 2vh;
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const Image = styled.img`
    width: 30%;

    @media screen and (max-width: 768px) {
        width: 100%;
        margin-left: 0vw;
    }
`

