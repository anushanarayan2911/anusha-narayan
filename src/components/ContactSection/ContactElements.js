import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const InfoContainer = styled.div`
    background: #ffffff;
    width: 100%;
    height: 100%
    overflow: hidden;

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
    margin-top: 0px;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: left;
    overflow: hidden;
`

export const TopLine = styled.p`
    color: #4b4b4b;
    font-size: 30px;
    font-weight: 200;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 30px;
`

export const Subtitle = styled.p`
    color: #4b4b4b;
    font-size: 20px;
    font-weight: 200;
    letter-spacing: 1.4px;
    margin-bottom: 30px;
    text-align: center;
`

export const ContactGrid = styled.div`
    width: 100%;
    overflow: hidden;
    align-items: center;
`

export const ContactRow = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: row;
    align-items: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const Column1 = styled.div`
    max-width: 50%;
    align-items: center;
    justify-content: center;
    padding-left: 10%;   
`

export const Column2 = styled.div`
    max-width: 50%;
    align-items: center;
    justify-content: center;
`
export const ImageLink = styled(LinkR)`
    background: #ffffff;
`

export const Image = styled.img`
    width: 30%;
    padding: 0 0 0 0;
`