import styled, { css } from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

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

export const TitleContainer = styled.div`
    background-color: #F0F7FE;
    width: 80vw;
    border-radius: 1.5rem;
    padding-top: 24vh;
    padding-left: 6vw;
    padding-right: 6vw;
    padding-bottom: 8vh;
`

export const TitleRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 80vw;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;

    @media screen and (max-width: 768px) {
        width: 100%;
        align-items: center;
    }
`

export const ProjectName = styled.p`
    color: #3E678D;
    font-size: 1rem;
    font-weight: 700;
`

export const ProjectDescription = styled.p`
    color: #3E678D;
    font-size: 4rem;
    font-weight: 200;
    margin-top: 2vh;
    margin-bottom: 2vh;

    @media screen and (max-width: 768px) {
        text-align: center;
        margin-bottom: 4vh;
    }
`

export const SkillsSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5vh;

    @media screen and (max-width: 768px) {
        flex-direction: row;
    }
`

export const SkillsRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5vw;
`

export const Skill = styled.div`
    background-color: #C3E1FC;
    color: #3E678D;
    padding-left: 0.75rem;
    padding-top: 0.5rem;
    padding-right: 0.75rem;
    padding-bottom: 0.5rem;
    border-radius: 2rem;
    font-size: 1rem;
`

export const DescriptionBox = styled.div`
    background-color: white;
    border: 0.05rem solid #3E678D;
    border-radius: 2rem;
    margin-left: 12vw;
    padding-top: 10%;
    padding-left: 2vw;
    padding-right: 2vw;
    width: 16vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 768px) {
        margin-top: 8vh;
        margin-left: 0vh;
        width: 100%;
        padding-bottom: 10%;
    }
`

export const Description = styled.p`
    color: #3E678D;
    max-width: 20vw;
    text-align: center;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 200;

    @media screen and (max-width: 768px) {
        max-width: 100%;
    }
`

export const Button = styled.a`
    background-color: white;
    color: #3E678D;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border: 0.05rem solid #3E678D;
    border-radius: 2rem;
    font-size: 1.5rem;
    text-decoration: none;
`

export const ContentRow = styled.div`
    width: 80vw;
    display: flex;
    flex-direction: row;
    margin-top: 12vh;
    align-items: center;
`

export const Text = styled.p`
    color: black;
    font-size: 1rem;
    font-weight: 100;
    text-align: justify;
    line-height: 150%;
    margin-left: 4vw;
`

export const ContentImage = styled.img`
    width: 80%;
    margin-left: 8vw;

    @media screen and (max-width: 768px) {
        width: 100%;
        margin-left: 0vw;
    }
`

export const LargeText = styled.p`
    color: black;
    font-size: 2rem;
    font-weight: 100;
    text-align: justify;
    line-height: 150%;
`

export const ImageContainer = styled.div`
    background-color: #F0F7FE;
    width: fit-content;
    border-radius: 1.5rem;
    padding-top: 4vh;
    padding-bottom: 4vh;
    padding-left: 28vw;
    padding-right: 28vw;
    margin-top: 12vh;
    align-items: center;
`

export const ContainerRow = styled.div`
    width: 72vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2vw;
    margin-bottom: 2vw;
`

export const ContainerImage = styled.img`
    width: 50%;
`