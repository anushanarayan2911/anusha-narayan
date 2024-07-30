import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
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
    padding-bottom: 16vh;
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

export const Column = styled.div`
    width: 50%;
    display: block;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

export const ButtonRow = styled.div`
    width: fit-content;
    display: flex;
    flex-direction: row;
    gap: 1vw;
    align-items: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 2vh;
    }
`
export const Button = styled(LinkR)`
    color: #66ABC6;
    background-color: white;
    font-size: 1rem;
    font-weight: 100;
    text-decoration: none;
    padding: 0.5rem 1.5rem;
    border: 0.05rem solid #66ABC6;
    border-radius: 4rem;
    display: block;
`;

export const Header = styled.p`
    color: #66ABC6;
    font-size: 7.5rem;
    font-weight: 100;
    text-align: center;
    line-height: 100%;
    height: auto;
    margin-top: 0;
    margin-bottom: 6.25vh;
`

export const Text = styled.p`
    color: #787878;
    font-size: 1.5rem;
    font-weight: 100;
    text-align: justify;
    line-height: 150%;
`

export const Image = styled.img`
    width: 70%;
    margin-left: 8vw;

    @media screen and (max-width: 768px) {
        width: 100%;
        margin-left: 0vw;
    }
`