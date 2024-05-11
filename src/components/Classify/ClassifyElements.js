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
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
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
`

export const SkillsSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5vh;
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
    margin-left: 6.25vw;
    padding-top: 10%;
    padding-left: 2vw;
    padding-right: 2vw;
    width: 28vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Description = styled.p`
    color: #3E678D;
    max-width: 20vw;
    text-align: center;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 200;
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
`