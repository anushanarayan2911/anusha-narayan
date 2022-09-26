import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom'

export const InfoContainer = styled.div`
    background: #ffffff;

    width: 100%;
    height: 100%;
    overflow: hidden
    
    @media screen and (max-width: 768px) {
        padding: 0px
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    background-color: #ffffff;
    height: 80%;
    width: auto;
    margin-right: 20%;
    margin-left: 20%;
    margin-top: 5%;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        margin-right: 5%;
        margin-left: 5%;
    }

    @media screen and (max-width: 400px) {
        margin-right: 0%;
        margin-left: 0%;
    }
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr)
    align-items: left;   border-color: black;
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 0px;
    padding: 0 5% 0 0;
    grid-area: col1;    
    

    @media screen and (max-width: 768px) {
        padding: 10% 0 0 0;
        align-items: center;
        justify-content: center;
    }
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 0 0 0;
    grid-area: col2;

    @media screen and (max-width: 768px) {
        padding: 10% 0 0 0;
        align-items: center;
        justify-content: center;
    }
    
`

export const Subtitle = styled.p`
    max-width: max-content;
    font-size: 0.8em;
    line-height: 22px;
    color: #787878;
    text-align: justify;
    
`

export const YoutubeEmbed = ({ }) => (
    <div className='video-responsive'>
        <iframe
        src="https://www.youtube.com/embed/ag9uYc9hJRk"
        allow="autoplay; encrypted-media; fullscreen"
        allowFullScreen
        title="video"
        width="auto"
        height="100%"
      />{" "}
    </div>
)

export const CVBtn = styled.nav`
    display: flex;
    align-items: center;
    position: absolute;
    margin-left: 30%;
`

export const BtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #e4e4e4;
    whitespace: nowrap;
    padding: 10px 22px;
    color: #787878;
    font-size: 16px;
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

export const PortfolioBtn = styled.nav`
    display: flex;
    align-items: center;
    position: absolute;
    margin-left: 10%;
`
