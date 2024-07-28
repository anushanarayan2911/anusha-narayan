import styled from "styled-components";

export const HeroContainer = styled.div`
    background: white;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    position: absolute;
    align-items: center;
    padding-top: 12vh;
`

export const Column = styled.div`
    width: 75vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 10vw;
    padding-right: 10vw;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const Text = styled.p`
    color: #787878;
    font-size: 1.5rem;
    font-weight: 100;
    text-align: justify;
    line-height: 150%;
`