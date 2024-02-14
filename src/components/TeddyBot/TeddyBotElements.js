import styled, { css } from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const HeroContainer = styled.div`
    background: #B2DAE4;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 100vw;
    position: relative;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), linear-gradient (180 deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    }

    @media screen and (max-width: 768px) {
        height: 100%;
    }
`

export const HeroBg = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 1;
    background-color: #B2DAE4;
    height: auto;
    width: 100vw;
    align-items: center;
    padding-top: 16vh;

    @media screen and (max-width: 768px) {
        padding-top: 4vh;
    }
`

export const RightWhiteBg = styled.div`
    display: flex;
    z-index: 1;
    background-color: #ffffff;
    width: 92vw;
    height: auto;
    margin-left: 8vw;
    margin-bottom: 12vh;
    padding-right: 0vw;
    padding-bottom: 4vh;
    border-top-left-radius: 4vw;
    border-bottom-left-radius: 4vw;

    @media screen and (max-width: 768px) {
        margin-top: 16vh;
        margin-left: 0vw;
        width: 90vw;
        height: 100%;
        border-top-left-radius: 4vw;
        border-top-right-radius: 4vw;
        border-bottom-left-radius: 4vw;
        border-bottom-right-radius: 4vw;
    }
`

export const LeftWhiteBg = styled.div`
    display: flex;
    z-index: 1;
    background-color: #fff;
    width: auto;
    max-width: 92vw;
    height: auto;
    margin-top: 8vh;
    margin-left: -8vw;
    margin-bottom: 16vh;
    border-top-right-radius: 4vw;
    border-bottom-right-radius: 4vw;

    @media screen and (max-width: 768px) {
        margin-top: 4vh;
        margin-bottom: 0vh;
        margin-left: 0vw;
        width: 90vw;
        height: 100%;
        border-top-left-radius: 4vw;
        border-top-right-radius: 4vw;
        border-bottom-left-radius: 4vw;
        border-bottom-right-radius: 4vw;
    }
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    align-items: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        width: 90vw;
        height: fit-content;
    }
`

export const Column1 = styled.div`
    width: 50vw;
    padding-left: 4vw;
    padding-right: 4vw;

    @media screen and (max-width: 768px) {
        width: 84vw;
        padding-top: 1vh;
        padding-right: 4vw
    }
`
export const Column2 = styled.div`
    width: 50vw
    padding-right: 12vw;
    @media screen and (max-width: 768px) {
        width: 84vw;
        margin-top: 4vh;
    }
`

export const SingleCol = styled.div`
    width: 80vw;
    margin-left: 8vw;
    margin-top: 4vh;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        width: 80vw;
        margin-top: 4vh;
        margin-left: 2vw;
    }
`
export const VideoCol = styled.div`
    width: 80vw;
    margin-left: 8vw;
    margin-top: 4vh;
    margin-bottom: 4vh;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        width: 80vw;
        margin-top: 5vh;
        margin-left: 1vw;
        margin-bottom: 4vh;
    }
`

export const Heading = styled.h1`
    font-size: 3.6em;
    font-weight: 200;
    color: #53C8E5;
`

export const Text = styled.p`
    font-size: 1.2em;
    line-height: 200%;
    font-weight: 200;
    color: #787878;
    margin-top: -2vh;
    margin-bottom: 4vh;

    @media screen and (max-width: 768px) {
        font-size: 1.2em;
        margin-top: 0vh;
        line-height: 200%;
    }
`

export const Img1 = styled.img`
    width: 50vw;
    padding-right: 8vw;
    @media screen and (max-width: 768px) {
        width: 84vw;
        height: 100%;
    }
`
export const Img2 = styled.img`
    width: 72vw;

    @media screen and (max-width: 768px) {
        width: 80vw;
        height: 100%;
    }
`

export const Img3 = styled.img`
    padding-top: 4vh;
    padding-left: 4vw;
    width: 18vw;

    @media screen and (max-width: 768px) {
        width: 40vw;
        height: 100%;
    }
`

export const BtnRow = styled.div`
    align-items: center;
    justify-content: center;
    width: 100vw;
    margin-bottom: 8vh;
    background-color: #B2DAE4;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        width: 84vw;
        margin-top: 8vh;
    }
`

export const Btn = styled.div`
    align-items: center;
    justify-content: center;
    position: absolute;
    padding-left: 40vw;
    width: 100vw;
    background-color: #B2DAE4;

    @media screen and (max-width: 768px) {
        padding-left: 25vw;
    }
`

export const BtnLink = styled(LinkR)`
    border-radius: 4vw;
    border: 0.05em solid #53C8E5;
    width: 25vw;
    align-itmes: center;
    justify-content: center;
    text-align: center;
    background: white;
    whitespace: nowrap;
    padding-left: 4vw;
    padding-right: 4vw;
    padding-top: 1vh;
    padding-bottom: 1vh;
    color: #53C8E5;
    font-size: 1.2em;
    font-weight: 200;
    text-decoration: none;

    @media screen and (max-width: 768px) {
        padding-top: 0.5vh;
        padding-bottom: 0.5vh;
    }
`

export const YoutubeEmbed = ({ }) => (
    <div className='video-responsive'>
        <iframe
        src="https://www.youtube.com/embed/jOqSIPo2E-w"
        allow="autoplay; encrypted-media; fullscreen"
        allowFullScreen
        title="video"
        width="100%"
        height="400vh"
      />{" "}
    </div>
)