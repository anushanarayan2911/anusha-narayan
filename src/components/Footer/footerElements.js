import styled from "styled-components";

export const Row = styled.div`
    background: #D2E6EE;
    display: flex;
    flex-direction: row;
    gap: 4vw;
    width: 100vw;
    padding-top: 2vh;
    padding-bottom: 2vh;
    padding-left: 10vw;
    position: fixed;
    bottom: 0;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`

export const Link = styled.a`
    color: #66ABC6;
    font-size: 1rem;
    font-weight: 400;
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