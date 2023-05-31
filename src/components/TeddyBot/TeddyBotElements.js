import styled, { css } from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const InfoContainer = styled.div`
    background: #ffffff;
    width: 100%;
    height: 100%
    overflow: hidden;
    align-items: center;

    @media screen and (max-width: 768px) {
        padding: 0px
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 100%;
    width: auto;
    margin-right: 10%;
    margin-left: 10%;
    overflow: hidden;
    align-items: center;

    @media screen and (max-width: 768px) {
        margin-right: 5%;
        margin-left: 5%;
    }

    @media screen and (max-width: 400px) {
        margin-right: 0%;
        margin-left: 0%;
    }
`

export const TitleImage = styled.img`
    width: 75%;
    padding: 5% 0% 0%;
    opacity: 25%;
`

export const Container = styled.div`
    position: relative;
    justify-content: center;
    width: 100%;
`

export const Overlay = styled.div`
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const Title = styled.p`
    font-size: 450%;
    font-family: runda;
    font-weight: 100;
    color: #787878;
    padding: 10% 38% 0;
`

export const Caption = styled.p`
    position: absolute;
    top: 75%;
    left: 12.5%;
    font-size: 200%;
    font-family: runda;
    font-weight: 100;
    width: 75%;
    padding: 0% 0% 10%;
    color: #787878;
    text-align: center;
    justify-content: center;
    align-items: center;
`

export const Text = styled.p`
    font-size: 90%;
    font-weight: 100;
    color: #787878;
    text-align: center;
    justify-content: center;
    align-items: center;
    line-height: 150%;
`

export const Divider = styled.span`
    width: 100%;
    opacity: 50%;
    background-color: #787878;
    height: 1px;
`

export const Row = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr)
    align-items: center;  
    justify-content: center;
    border-color: black;
    vertical-align: center;
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    
    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
        align-items: center;
    }
`

export const ButtonRow = styled.div`
    width: 100%;
    align-items: center;  
    justify-content: center;
    padding: 0% 38% 0%;
`

export const LeftCol = styled.div`
    margin-bottom: 0px;
    padding: 0 0% 0;
    grid-area: col1;  
    width: 90%;

    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 0 0% 0 5%;
        align-items: center;
        justify-content: center;
    }
`

export const RightCol = styled.div`
    margin-bottom: 0px;
    padding: 0 0% 0;
    grid-area: col2;
    align-itmes: center;
    justify-content: center;
    width: 100%;

    @media screen and (max-width: 768px) {
        padding: 5% 0 0 0;
        align-items: center;
        justify-content: center;
    }
`

export const Image = styled.img`
    width: 100%;
`

export const Btn = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin-left: 33%;
`

export const BtnLink = styled(LinkR)`
    border-radius: 50px;
    width: 15vw;
    align-itmes: center;
    justify-content: center;
    text-align: center;
    background: #EFEFEF;
    whitespace: nowrap;
    padding: 5% 5% 5% 5%;
    box-shadow: -1px -1px 5px rgba(0, 0, 0, 0.25);
    color: #787878;
    font-size: 16px;
    font-weight: 200;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #ffffff;
        color: #787878
    }
`

export const YoutubeEmbed = ({ }) => (
    <div className='video-responsive'>
        <iframe
        src="https://www.youtube.com/embed/jOqSIPo2E-w"
        allow="autoplay; encrypted-media; fullscreen"
        allowFullScreen
        title="video"
        width="auto"
        height="100%"
      />{" "}
    </div>
)