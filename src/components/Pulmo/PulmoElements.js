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
export const NavLogo = styled(LinkR)`
    color: white;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`

export const InfoRow = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;
    max-height: max-content;
`

export const TopLine = styled.p`
    color: #787878;
    font-size: 30px;
    font-weight: 200;
    letter-spacing: 5px;
    text-transform: uppercase;
    margin-bottom: 10px;
    align-items: center;
`

export const SubHeading = styled.p`
    color: #6b9fb0;
    font-size: 15px;
    font-weight: 500;
`

export const Subtitle = styled.p`
    max-width: max-content;
    font-size: 1em;
    line-height: 24px;
    color: #787878;
    text-align: justify;
`

export const PortfolioGrid = styled.div`
    width: 70%;
    overflow: hidden;
    margin: 0 15% 0 15%;
    align-items: center;
`

export const PortfolioRow = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const Column = styled.div`
    max-width: 50%;
    padding: 0px 5% 0px 0px;
`

export const Image = styled.img`
    width: 100%;
`

export const SectionHeading1 = styled.p`
    color: #6b9fb0;
    font-size: 25px;
    font-weight: 500;
`

export const SectionHeading2 = styled.p`
    color: #6b9fb0;
    font-size: 25px;
    font-weight: 500;
`

export const Row = styled.div`
    display: grid;
    max-height: 50%;
`

export const YoutubeEmbed = ({ }) => (
    <div className='video-responsive'>
        <iframe
        src="https://www.youtube.com/watch?v=jOqSIPo2E-w"
        allow="autoplay; encrypted-media; fullscreen"
        allowFullScreen
        title="video"
        width="auto"
        height="100%"
      />{" "}
    </div>
)

export const PDFDiv = styled.div`
    background-color: #787878;
    overflow-y: scroll;
    height: 60vh;
    border-color: #787878;
    border-radius: 2px;
`