import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
import {Link as LinkR} from 'react-router-dom' 

export const HeroContainer = styled.div`
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: auto;
    position: absolute;

    :before {
        content: '';
        position: fixed;
        overflow-x: hidden;
        box-sizing: inherit;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), linear-gradient (180 deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    }
`

export const HeroBg = styled.div`
    display: flex;
    z-index: 1;
    background-color: #ffffff;
    height: auto;
    width: auto;
    margin-right: 0%;
    margin-left: 0%;
    margin-top: 0%;

    @media screen and (max-width: 768px) {
        margin-right: 5%;
        margin-left: 5%;
    }

    @media screen and (max-width: 400px) {
        margin-right: 0%;
        margin-left: 0%;
    }
`

export const Row = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr)
    align-items: center;   border-color: black;
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    
    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
        align-items: center;
    }
`

export const LeftCol = styled.div`
    margin-bottom: 0px;
    padding: 0 0% 0 0%;
    grid-area: col1;  
    width: 30vw;

    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 0 0% 0 5%;
        align-items: center;
        justify-content: center;
    }
`

export const RightCol = styled.div`
    margin-bottom: 0px;
    padding: 10% 10% 0 0%;
    grid-area: col2;
    align-itmes: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        padding: 10% 0 0 0;
        align-items: center;
        justify-content: center;
    }
`

export const Paragraph = styled.p`
    max-width: max-content;
    margin-top: 0%;
    font-size: 100%;
    line-height: 150%;
    font-weight: 200;
    color: #787878;
    text-align: justify;   
`
export const BottomParapgraph = styled.p`
    max-width: max-content;
    margin-bottom: 5%;
    font-size: 100%;
    line-height: 150%;
    font-weight: 200;
    color: #787878;
    text-align: justify;   

    @media screen and (max-width: 768px) {
        margin-bottom: 10%;
        padding: 0% 0 0 0;
        align-items: center;
        justify-content: center;
    }
`

export const Image = styled.img`
    width: 100%;
`

export const Row2 = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);   
    align-items: center;   
    border-color: black;
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'column2 column1'` : `'column1 column2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'column1' 'column2'` : `'column1 column1' 'column2 column2'`)};
}
`

export const LeftCol2 = styled.div`
    margin-bottom: 0px;
    padding: 0 0% 0 40%;
    grid-area: column1;  
    width: auto;

    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 0 0% 0 5%;
        align-items: center;
        justify-content: center;
    }
`

export const RightCol2 = styled.div`
    margin-bottom: -10%;
    padding: 0% 0% 0 15%;
    grid-area: column2;


    @media screen and (max-width: 768px) {
        padding: 10% 0 0 0;
        align-items: center;
        justify-content: center;
    }
`

export const Btn = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
`

export const BtnLink = styled(LinkR)`
    border-radius: 50px;
    width: 15vw;
    align-itmes: center;
    justify-content: center;
    text-align: center;
    background: #EFEFEF;
    whitespace: nowrap;
    padding: 5% 10% 5% 10%;
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
        src="https://www.youtube.com/embed/-4SfyQuGzrU"
        allow="autoplay; encrypted-media; fullscreen"
        allowFullScreen
        title="video"
        width="auto"
        height="100%"
      />{" "}
    </div>
)