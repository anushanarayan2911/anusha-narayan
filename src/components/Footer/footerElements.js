import styled from "styled-components";

export const Row = styled.div`
    background: #66ABC6;
    display: flex;
    flex-direction: row;
    gap: 4vw;
    width: 100vw;
    padding-top: 4vh;
    padding-bottom: 4vh;
    padding-left: 10vw;
    margin-top: 12vh;
`

export const Link = styled.a`
    color: white;
    font-size: 1rem;
    font-weight: 100;
    text-align: justify;
    line-height: 150%;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
        text-decoration-thickness: 1px;
        text-underline-offset: 50%;
        border-bottom-width: 2,
    }
`