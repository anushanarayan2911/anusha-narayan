import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom'

export const HeroContainer = styled.div`
    background: white;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    position: absolute;
    align-items: center;
    padding-top: 12vh;
    padding-bottom: 8vh;
`
export const Row = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 10vw;
    padding-right: 10vw;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`
