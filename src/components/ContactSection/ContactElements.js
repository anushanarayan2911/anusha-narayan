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

export const Row = styled.div`
    width: 72vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2vw;
    margin-top: 4vh;
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